
import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const cronSecret = Deno.env.get('CRON_SECRET')!

webpush.setVapidDetails(
  Deno.env.get('VAPID_SUBJECT')!,
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!
)

Deno.serve(async request => {
  if (request.method !== 'POST') {
    return Response.json(
      { error: 'Method not allowed' },
      { status: 405 }
    )
  }

  if (
    !cronSecret ||
    request.headers.get('x-cron-secret') !== cronSecret
  ) {
    return Response.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const { data: notifications, error: claimError } =
    await supabase.rpc('claim_due_notifications', {
      batch_limit: 100,
    })

  if (claimError) {
    return Response.json(
      { error: claimError.message },
      { status: 500 }
    )
  }

  let processed = 0
  let delivered = 0
  let failed = 0

  for (const notification of notifications || []) {
    processed++

    const { data: subscriptions, error: subscriptionError } =
      await supabase
        .from('notification_subscriptions')
        .select('*')
        .eq('user_id', notification.user_id)

    if (subscriptionError || !subscriptions?.length) {
      await supabase
        .from('scheduled_notifications')
        .update({
          status: 'failed',
          last_error: subscriptionError?.message ||
            'Nenhum dispositivo registrado.',
          updated_at: new Date().toISOString(),
        })
        .eq('id', notification.id)

      failed++
      continue
    }

    let successfulDeliveries = 0
    const errors = []

    for (const subscription of subscriptions) {
      try {
        await webpush.sendNotification(
          {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: subscription.p256dh,
              auth: subscription.auth,
            },
          },
          JSON.stringify({
            title: notification.title,
            body: notification.body,
            url: '/',
          }),
          {
            TTL: 3600,
          }
        )

        successfulDeliveries++
      } catch (error) {
        const statusCode = error?.statusCode

        if (statusCode === 404 || statusCode === 410) {
          await supabase
            .from('notification_subscriptions')
            .delete()
            .eq('id', subscription.id)
        }

        errors.push(error?.message || 'Falha no envio.')
      }
    }

    const wasSent = successfulDeliveries > 0

    await supabase
      .from('scheduled_notifications')
      .update({
        status: wasSent ? 'sent' : 'failed',
        sent_at: wasSent ? new Date().toISOString() : null,
        last_error: errors.length
          ? errors.join('; ').slice(0, 1000)
          : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', notification.id)

    if (wasSent) delivered++
    else failed++
  }

  return Response.json({
    success: true,
    processed,
    delivered,
    failed,
  })
})

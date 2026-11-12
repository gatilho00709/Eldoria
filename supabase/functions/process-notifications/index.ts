
import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

// ==========================================
// CONFIGURAÇÃO
// ==========================================

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const cronSecret = Deno.env.get('CRON_SECRET')

webpush.setVapidDetails(
  Deno.env.get('VAPID_SUBJECT')!,
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!
)

// ==========================================
// PROCESSAMENTO DAS NOTIFICAÇÕES
// ==========================================

Deno.serve(async (request: Request) => {
  if (request.method !== 'POST') {
    return Response.json(
      { error: 'Method not allowed' },
      { status: 405 }
    )
  }

  // Autenticação do Cron
  if (
    !cronSecret ||
    request.headers.get('x-cron-secret') !== cronSecret
  ) {
    return Response.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Buscar notificações pendentes
  const { data: notifications, error: claimError } =
    await supabase.rpc('claim_due_notifications', {
      batch_limit: 100,
    })

  if (claimError) {
    console.error('Erro ao buscar notificações:', claimError.message)

    return Response.json(
      { error: claimError.message },
      { status: 500 }
    )
  }

  let processed = 0
  let delivered = 0
  let failed = 0

  // Processar cada notificação
  for (const notification of notifications || []) {
    processed++

    // Buscar dispositivos registrados
    const { data: subscriptions, error: subscriptionError } =
      await supabase
        .from('notification_subscriptions')
        .select('*')
        .eq('user_id', notification.user_id)

    // Caso não existam dispositivos
    if (subscriptionError || !subscriptions?.length) {
      const failureMessage =
        subscriptionError?.message ||
        'Nenhum dispositivo registrado.'

      const { error: updateError } = await supabase
        .from('scheduled_notifications')
        .update({
          status: 'failed',
          last_error: failureMessage,
          updated_at: new Date().toISOString(),
        })
        .eq('id', notification.id)

      if (updateError) {
        console.error(
          'Erro ao registrar falha:',
          updateError.message
        )
      }

      failed++
      continue
    }

    // Enviar para todos os dispositivos
    let successfulDeliveries = 0
    const errors: string[] = []

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

      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : 'Falha desconhecida no envio.'

        const statusCode =
          typeof error === 'object' &&
          error !== null &&
          'statusCode' in error
            ? Number(error.statusCode)
            : undefined

        // Remover inscrições expiradas ou inválidas
        if (statusCode === 404 || statusCode === 410) {
          const { error: deleteError } = await supabase
            .from('notification_subscriptions')
            .delete()
            .eq('id', subscription.id)

          if (deleteError) {
            console.error(
              'Erro ao remover inscrição inválida:',
              deleteError.message
            )
          }
        }

        errors.push(message)
      }
    }

    // Determinar resultado do envio
    const wasSent = successfulDeliveries > 0

    // Atualizar o registro no banco
    const { error: updateError } = await supabase
      .from('scheduled_notifications')
      .update({
        status: wasSent ? 'sent' : 'failed',
        sent_at: wasSent
          ? new Date().toISOString()
          : null,
        last_error: errors.length
          ? errors.join('; ').slice(0, 1000)
          : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', notification.id)

    // Verificar se a atualização realmente funcionou
    if (updateError) {
      console.error(
        'Erro ao atualizar notificação:',
        updateError.message
      )

      failed++
      continue
    }

    if (wasSent) {
      delivered++
    } else {
      failed++
    }
  }

  // Resultado da execução
  return Response.json({
    success: true,
    processed,
    delivered,
    failed,
  })
})


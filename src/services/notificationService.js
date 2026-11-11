
import { supabase } from './supabase'

// ==========================================
// UTILITÁRIOS
// ==========================================

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)

  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)

  return Uint8Array.from(
    [...rawData].map(char => char.charCodeAt(0))
  )
}

async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser()

  if (error) throw error
  if (!data.user) throw new Error('Usuário não autenticado.')

  return data.user
}

// ==========================================
// REGISTRO DO DISPOSITIVO
// ==========================================

export async function registerPushNotifications() {
  if (
    !('Notification' in window) ||
    !('serviceWorker' in navigator) ||
    !('PushManager' in window)
  ) {
    throw new Error(
      'Este navegador não oferece suporte completo a notificações Push.'
    )
  }

  const publicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY

  if (!publicKey) {
    throw new Error('Chave pública VAPID não configurada.')
  }

  const permission = await Notification.requestPermission()

  if (permission !== 'granted') {
    return permission
  }

  const user = await getCurrentUser()

  const registration = await navigator.serviceWorker.register(
    '/service-worker.js'
  )

  await navigator.serviceWorker.ready

  let subscription = await registration.pushManager.getSubscription()

  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    })
  }

  const subscriptionData = subscription.toJSON()

  const { error } = await supabase
    .from('notification_subscriptions')
    .upsert(
      {
        user_id: user.id,
        endpoint: subscription.endpoint,
        p256dh: subscriptionData.keys.p256dh,
        auth: subscriptionData.keys.auth,
        user_agent: navigator.userAgent,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,endpoint',
      }
    )

  if (error) throw error

  return permission
}

// ==========================================
// SINCRONIZAÇÃO DOS LEMBRETES DO CALENDÁRIO
// ==========================================


export async function syncCalendarReminders(events) {
  const user = await getCurrentUser()
  const now = Date.now()

  // Busca os lembretes de calendário que já existem
  const { data: existing, error: loadError } = await supabase
    .from('scheduled_notifications')
    .select('id, source_id, status')
    .eq('user_id', user.id)
    .eq('source_type', 'calendar')

  if (loadError) throw loadError

  const existingBySource = new Map(
    (existing || []).map(item => [item.source_id, item])
  )

  // Monta os lembretes dos eventos que ainda vão acontecer
  const desired = events
    .filter(event =>
      Number(event.reminderMinutes) > 0 &&
      event.startsAt &&
      new Date(event.startsAt).getTime() > now
    )
    .map(event => {
      const reminderAt =
        new Date(event.startsAt).getTime() -
        Number(event.reminderMinutes) * 60000

      return {
        user_id: user.id,
        source_type: 'calendar',
        source_id: String(event.id),
        title: `Lembrete: ${event.title}`,
        body: event.description || 'Seu evento está prestes a começar.',
        scheduled_at: new Date(Math.max(reminderAt, now)).toISOString(),
        updated_at: new Date().toISOString(),
      }
    })

  const desiredIds = new Set(
    desired.map(item => item.source_id)
  )

  // Remove somente lembretes pendentes que deixaram de ser necessários
  const obsoleteIds = (existing || [])
    .filter(item =>
      item.status === 'pending' &&
      !desiredIds.has(item.source_id)
    )
    .map(item => item.id)

  if (obsoleteIds.length) {
    const { error } = await supabase
      .from('scheduled_notifications')
      .delete()
      .eq('user_id', user.id)
      .in('id', obsoleteIds)

    if (error) throw error
  }

  // Atualiza os pendentes e cria os novos sem duplicar os enviados
  const newReminders = []

  for (const reminder of desired) {
    const previous = existingBySource.get(reminder.source_id)

    if (!previous) {
      newReminders.push(reminder)
      continue
    }

    // Nunca transforma um lembrete enviado ou em processamento em pendente
    if (previous.status !== 'pending') continue

    const { error } = await supabase
      .from('scheduled_notifications')
      .update({
        title: reminder.title,
        body: reminder.body,
        scheduled_at: reminder.scheduled_at,
        updated_at: reminder.updated_at,
      })
      .eq('user_id', user.id)
      .eq('source_type', 'calendar')
      .eq('source_id', reminder.source_id)
      .eq('status', 'pending')

    if (error) throw error
  }

  // Insere apenas os lembretes que ainda não existiam
  if (newReminders.length) {
    const { error } = await supabase
      .from('scheduled_notifications')
      .insert(newReminders)

    if (error) throw error
  }
}


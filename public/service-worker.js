
self.addEventListener('push', event => {
  let payload = {}

  try {
    payload = event.data ? event.data.json() : {}
  } catch {
    payload = {
      title: 'Eldoria',
      body: 'Você tem uma nova notificação.',
    }
  }

  const title = payload.title || 'Eldoria'

  const options = {
    body: payload.body || 'Você tem um novo aviso.',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    data: {
      url: payload.url || '/',
    },
    tag: payload.tag || undefined,
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  event.waitUntil((async () => {
    const target = new URL(
      event.notification.data?.url || '/',
      self.location.origin
    )

    if (target.origin !== self.location.origin) {
      target.pathname = '/'
      target.search = ''
      target.hash = ''
    }

    const windows = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    })

    for (const client of windows) {
      if ('focus' in client) {
        await client.focus()

        if ('navigate' in client) {
          await client.navigate(target.href)
        }

        return
      }
    }

    await self.clients.openWindow(target.href)
  })())
})

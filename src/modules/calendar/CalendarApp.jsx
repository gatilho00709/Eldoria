import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft, ArrowRight, CalendarDays, Clock3, Plus, Search,
  Pencil, Trash2, X, Check, Bell, ChevronDown, CalendarCheck,
  LayoutGrid, List, Calendar as CalendarIcon, LoaderCircle,
} from 'lucide-react'
import {
  loadCalendarData,
  syncCalendarWorkspace,
} from '../../services/eldoriaData'
import './CalendarApp.css'
import {
  registerPushNotifications,
  syncCalendarReminders,
} from '../../services/notificationService'

const DAY_MS = 24 * 60 * 60 * 1000
const CATEGORIES = [
  { name: 'Pessoal', color: '#62a5a0' },
  { name: 'Estudo', color: '#7296c9' },
  { name: 'Trabalho', color: '#c49a45' },
  { name: 'Eldoria', color: '#a17bc4' },
  { name: 'Outros', color: '#bd806f' },
]
const REMINDERS = [
  { value: 0, label: 'Sem lembrete' },
  { value: 5, label: '5 minutos antes' },
  { value: 15, label: '15 minutos antes' },
  { value: 30, label: '30 minutos antes' },
  { value: 60, label: '1 hora antes' },
  { value: 1440, label: '1 dia antes' },
]

function pad(value) {
  return String(value).padStart(2, '0')
}
function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}
function parseDateKey(key) {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day, 12)
}
function startOfWeek(date) {
  const result = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12)
  result.setDate(result.getDate() - result.getDay())
  return result
}
function addDays(date, amount) {
  const result = new Date(date)
  result.setDate(result.getDate() + amount)
  return result
}
function toLocalInput(value) {
  const date = value ? new Date(value) : new Date()
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}
function formatTime(value) {
  return new Date(value).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}
function formatDate(value, options = { day: '2-digit', month: 'long', year: 'numeric' }) {
  return new Date(value).toLocaleDateString('pt-BR', options)
}
function sameDay(a, b) {
  return dateKey(a) === dateKey(b)
}
function monthTitle(date) {
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
}
function makeEmptyEvent(date = new Date()) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0)
  const end = new Date(start.getTime() + 60 * 60 * 1000)
  return {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    startsAt: toLocalInput(start),
    endsAt: toLocalInput(end),
    allDay: false,
    category: 'Pessoal',
    reminderMinutes: 15,
  }
}

export default function CalendarApp() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)
  const [saveState, setSaveState] = useState('Carregando calendário...')
  const [error, setError] = useState('')
  const [currentDate, setCurrentDate] = useState(() => new Date())
  const [view, setView] = useState('month')
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Todas')
  const [selectedDate, setSelectedDate] = useState(() => dateKey(new Date()))
  const [editingEvent, setEditingEvent] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [toast, setToast] = useState('')
  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification === 'undefined' ? 'unsupported' : Notification.permission
  )
  const [pushRegistered, setPushRegistered] = useState(false)

  useEffect(() => {
    let active = true
    loadCalendarData()
      .then(data => {
        if (!active) return
        setEvents(data)
        setSaveState('Tudo sincronizado')
        setError('')
        setReady(true)
      })
      .catch(err => {
        if (!active) return
        setError(err.message || 'Não foi possível carregar o calendário.')
        setSaveState('Falha ao carregar')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [])

  useEffect(() => {
  if (loading || !ready) return

  setSaveState('Salvando...')

  const timeout = window.setTimeout(() => {
    Promise.all([
      syncCalendarWorkspace(events),
      syncCalendarReminders(events),
    ])
      .then(() => {
        setSaveState('Tudo sincronizado')
        setError('')
      })
      .catch(err => {
        setSaveState('Erro ao sincronizar')
        setError(err.message || 'Não foi possível sincronizar o calendário.')
      })
  }, 450)

  return () => window.clearTimeout(timeout)
}, [events, loading, ready])


  const filteredEvents = useMemo(() => {
    const term = search.trim().toLocaleLowerCase('pt-BR')
    return events.filter(event => {
      const matchesText = !term ||
        event.title.toLocaleLowerCase('pt-BR').includes(term) ||
        (event.description || '').toLocaleLowerCase('pt-BR').includes(term)
      const matchesCategory = categoryFilter === 'Todas' || event.category === categoryFilter
      return matchesText && matchesCategory
    }).sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))
  }, [events, search, categoryFilter])

  const eventsByDay = useMemo(() => {
    const map = new Map()
    filteredEvents.forEach(event => {
      const key = dateKey(new Date(event.startsAt))
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(event)
    })
    return map
  }, [filteredEvents])

  const selectedEvents = eventsByDay.get(selectedDate) || []
  const upcomingReminders = useMemo(() => {
    const now = Date.now()
    return filteredEvents
      .filter(event => event.reminderMinutes > 0)
      .map(event => ({
        ...event,
        reminderAt: new Date(event.startsAt).getTime() - event.reminderMinutes * 60000,
      }))
      .filter(event => event.reminderAt >= now && event.reminderAt <= now + 24 * 60 * 60 * 1000)
      .sort((a, b) => a.reminderAt - b.reminderAt)
      .slice(0, 4)
  }, [filteredEvents])

  const openNewEvent = useCallback((date = parseDateKey(selectedDate)) => {
    setEditingEvent(makeEmptyEvent(date))
    setShowForm(true)
  }, [selectedDate])

  function saveEvent(event) {
    const title = event.title.trim()
    const start = new Date(event.startsAt)
    const end = new Date(event.endsAt)
    if (!title) {
      setToast('Dê um título ao evento.')
      return
    }
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
      setToast('A data final precisa ser posterior à data inicial.')
      return
    }
    const now = new Date().toISOString()

    const normalized = {
      ...event,
      title,
      description: event.description.trim(),
      startsAt: start.toISOString(),
      endsAt: end.toISOString(),
      reminderMinutes: Number(event.reminderMinutes) || 0,
      createdAt: event.createdAt || now,
      updatedAt: now,
    }
    setEvents(current => {
      const exists = current.some(item => item.id === normalized.id)
      return exists
        ? current.map(item => item.id === normalized.id ? normalized : item)
        : [...current, normalized]
    })
    setSelectedDate(dateKey(start))
    setShowForm(false)
    setEditingEvent(null)
    setToast('Evento salvo!')
  }

  function deleteEvent(id) {
    const event = events.find(item => item.id === id)
    if (!event) return
    if (!window.confirm(`Excluir o evento "${event.title}"?`)) return
    setEvents(current => current.filter(item => item.id !== id))
    setToast('Evento excluído.')
  }

  function movePeriod(direction) {
    const next = new Date(currentDate)
    if (view === 'month') next.setMonth(next.getMonth() + direction)
    else if (view === 'week') next.setDate(next.getDate() + direction * 7)
    else next.setDate(next.getDate() + direction)
    setCurrentDate(next)
    setSelectedDate(dateKey(next))
  }

  function goToday() {
    const today = new Date()
    setCurrentDate(today)
    setSelectedDate(dateKey(today))
  }

  async function enableNotifications() {
  try {
    const permission = await registerPushNotifications()

    setNotificationPermission(permission)
    setPushRegistered(permission === 'granted')

    setToast(
      permission === 'granted'
        ? 'Notificações ativadas neste dispositivo!'
        : 'Permissão de notificações não concedida.'
    )
  } catch (err) {
    setToast(
      err.message || 'Não foi possível ativar as notificações.'
    )
  }
}

  const calendarDays = useMemo(() => {
    if (view === 'day') return [parseDateKey(dateKey(currentDate))]
    if (view === 'week') return Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(currentDate), i))
    const first = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 12)
    const start = startOfWeek(first)
    return Array.from({ length: 42 }, (_, i) => addDays(start, i))
  }, [currentDate, view])

  if (loading) {
    return (
      <div className="calendar-loading">
        <LoaderCircle className="calendar-spin" size={28} />
        <span>Consultando os registros de Eldoria...</span>
      </div>
    )
  }

  return (
    <div className="page-content calendar-app">
      <div className="calendar-heading">
        <div>
          <span className="calendar-eyebrow">SALÃO DOS REGISTROS</span>
          <h1>Calendário Inteligente</h1>
          <p>Organize compromissos, planos e acontecimentos importantes.</p>
        </div>
        <button className="calendar-primary" onClick={() => openNewEvent()}>
          <Plus size={18} /> Novo evento
        </button>
      </div>

      <div className={`calendar-sync ${error ? 'has-error' : ''}`}>
        <span className="calendar-sync-dot" />
        {saveState}
        {error && <span className="calendar-error-text"> — {error}</span>}
      </div>

      <div className="calendar-toolbar">
        <div className="calendar-period">
          <button className="calendar-icon-button" onClick={() => movePeriod(-1)} aria-label="Período anterior">
            <ArrowLeft size={18} />
          </button>
          <button className="calendar-today" onClick={goToday}>Hoje</button>
          <button className="calendar-icon-button" onClick={() => movePeriod(1)} aria-label="Próximo período">
            <ArrowRight size={18} />
          </button>
          <h2>{view === 'day' ? formatDate(currentDate) : monthTitle(currentDate)}</h2>
        </div>
        <div className="calendar-view-switch">
          {[
            { id: 'month', label: 'Mês', icon: LayoutGrid },
            { id: 'week', label: 'Semana', icon: List },
            { id: 'day', label: 'Dia', icon: CalendarIcon },
          ].map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={view === item.id ? 'active' : ''}
                onClick={() => setView(item.id)}
              >
                <Icon size={15} /> {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="calendar-controls">
        <label className="calendar-search">
          <Search size={17} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar eventos..." />
        </label>
        <label className="calendar-filter">
          <span>Categoria</span>
          <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
            <option>Todas</option>
            {CATEGORIES.map(category => <option key={category.name}>{category.name}</option>)}
          </select>
          <ChevronDown size={15} />
        </label>
      </div>

      <div className="calendar-layout">
        <section className={`calendar-main calendar-${view} ${view === 'day' ? 'calendar-day-view' : ''}`}>
          {view !== 'day' && (
            <div className="calendar-weekdays">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => <span key={day}>{day}</span>)}
            </div>
          )}
          <div className="calendar-grid">
            {calendarDays.map(day => {
              const key = dateKey(day)
              const dayEvents = eventsByDay.get(key) || []
              const isCurrentMonth = day.getMonth() === currentDate.getMonth()
              const isSelected = key === selectedDate
              const isToday = key === dateKey(new Date())
              return (
                <button
                  key={key}
                  className={[
                    'calendar-day',
                    view === 'month' && !isCurrentMonth ? 'outside-month' : '',
                    isSelected ? 'selected' : '',
                    isToday ? 'is-today' : '',
                  ].join(' ')}
                  onClick={() => {
                    setSelectedDate(key)
                    if (view === 'day') setCurrentDate(day)
                  }}
                  onDoubleClick={() => openNewEvent(day)}
                >
                  <span className="calendar-day-number">{day.getDate()}</span>
                  <span className="calendar-day-events">
                    {dayEvents.slice(0, view === 'month' ? 3 : 8).map(event => {
                      const category = CATEGORIES.find(item => item.name === event.category) || CATEGORIES[4]
                      return (
                        <span
                          className="calendar-event-chip"
                          key={event.id}
                          style={{ '--event-color': category.color }}
                          title={event.title}
                        >
                          {!event.allDay && <small>{formatTime(event.startsAt)}</small>}
                          {event.title}
                        </span>
                      )
                    })}
                    {dayEvents.length > (view === 'month' ? 3 : 8) && (
                      <small className="calendar-more">+{dayEvents.length - (view === 'month' ? 3 : 8)} eventos</small>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <aside className="calendar-side">
          <div className="calendar-side-title">
            <div>
              <span className="calendar-eyebrow">AGENDA DO DIA</span>
              <h3>{formatDate(parseDateKey(selectedDate), { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
            </div>
            <button className="calendar-icon-button" onClick={() => openNewEvent(parseDateKey(selectedDate))} aria-label="Adicionar evento">
              <Plus size={18} />
            </button>
          </div>

          <div className="calendar-event-list">
            {selectedEvents.length === 0 ? (
              <div className="calendar-empty">
                <CalendarCheck size={28} />
                <strong>Nenhum evento por aqui</strong>
                <span>Este dia está livre. Que tal planejar algo?</span>
                <button onClick={() => openNewEvent(parseDateKey(selectedDate))}>Criar evento</button>
              </div>
            ) : selectedEvents.map(event => {
              const category = CATEGORIES.find(item => item.name === event.category) || CATEGORIES[4]
              return (
                <article className="calendar-event-card" key={event.id} style={{ '--event-color': category.color }}>
                  <div className="calendar-event-card-top">
                    <span className="calendar-category">{event.category}</span>
                    <div>
                      <button onClick={() => { setEditingEvent({ ...event, startsAt: toLocalInput(event.startsAt), endsAt: toLocalInput(event.endsAt) }); setShowForm(true) }} aria-label="Editar evento">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => deleteEvent(event.id)} aria-label="Excluir evento">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <h4>{event.title}</h4>
                  <span className="calendar-event-time">
                    <Clock3 size={14} />
                    {event.allDay ? 'Dia inteiro' : `${formatTime(event.startsAt)} – ${formatTime(event.endsAt)}`}
                  </span>
                  {event.description && <p>{event.description}</p>}
                  {event.reminderMinutes > 0 && (
                    <span className="calendar-reminder-label"><Bell size={13} /> Lembrete configurado</span>
                  )}
                </article>
              )
            })}
          </div>

          <div className="calendar-reminders">
            <div className="calendar-reminders-heading">
              <Bell size={17} />
              <strong>Próximos lembretes</strong>
            </div>
            {upcomingReminders.length === 0 ? (
              <span className="calendar-muted">Nenhum lembrete nas próximas 24 horas.</span>
            ) : upcomingReminders.map(event => (
              <div className="calendar-reminder-row" key={event.id}>
                <span>{event.title}</span>
                <small>{formatDate(event.reminderAt, { day: '2-digit', month: '2-digit' })} às {formatTime(event.reminderAt)}</small>
              </div>
            ))}
            <button
  className="calendar-notification-button"
  onClick={enableNotifications}
  disabled={
    pushRegistered ||
    notificationPermission === 'denied' ||
    notificationPermission === 'unsupported'
  }
>
  <Bell size={14} />

  {pushRegistered
    ? 'Notificações ativadas neste dispositivo'
    : notificationPermission === 'denied'
      ? 'Permissão bloqueada no navegador'
      : 'Ativar notificações neste dispositivo'}
</button>
            <small className="calendar-notification-note">
  Os lembretes são processados pelo servidor e podem chegar
  mesmo quando o Eldoria não está aberto, desde que o dispositivo
  esteja conectado e ofereça suporte a notificações Push.
</small>
          </div>
        </aside>
      </div>

      {showForm && editingEvent && (
        <EventModal
          event={editingEvent}
          onClose={() => { setShowForm(false); setEditingEvent(null) }}
          onSave={saveEvent}
        />
      )}

      {toast && (
        <div className="calendar-toast">
          <Check size={16} /> {toast}
          <button onClick={() => setToast('')} aria-label="Fechar"><X size={15} /></button>
        </div>
      )}
    </div>
  )
}

function EventModal({ event, onClose, onSave }) {
  const [form, setForm] = useState(event)
  const update = (key, value) => setForm(current => ({ ...current, [key]: value }))

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="calendar-modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <form className="calendar-modal" onSubmit={e => { e.preventDefault(); onSave(form) }}>
        <div className="calendar-modal-heading">
          <div>
            <span className="calendar-eyebrow">REGISTRO DO CASTELO</span>
            <h2>{event.title ? 'Editar evento' : 'Novo evento'}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        </div>

        <label className="calendar-field">
          <span>Título do evento *</span>
          <input autoFocus value={form.title} onChange={e => update('title', e.target.value)} placeholder="Ex.: Reunião, prova, aventura..." maxLength={100} required />
        </label>

        <label className="calendar-field">
          <span>Descrição</span>
          <textarea value={form.description} onChange={e => update('description', e.target.value)} placeholder="Detalhes adicionais..." rows={3} maxLength={1000} />
        </label>

        <label className="calendar-checkbox">
          <input type="checkbox" checked={form.allDay} onChange={e => update('allDay', e.target.checked)} />
          <span>Evento de dia inteiro</span>
        </label>

        <div className="calendar-fields-row">
          <label className="calendar-field">
            <span>Início</span>
            <input type="datetime-local" value={form.startsAt} onChange={e => update('startsAt', e.target.value)} required />
          </label>
          <label className="calendar-field">
            <span>Fim</span>
            <input type="datetime-local" value={form.endsAt} onChange={e => update('endsAt', e.target.value)} required />
          </label>
        </div>

        <div className="calendar-fields-row">
          <label className="calendar-field">
            <span>Categoria</span>
            <select value={form.category} onChange={e => update('category', e.target.value)}>
              {CATEGORIES.map(category => <option key={category.name}>{category.name}</option>)}
            </select>
          </label>
          <label className="calendar-field">
            <span>Lembrete</span>
            <select value={form.reminderMinutes} onChange={e => update('reminderMinutes', Number(e.target.value))}>
              {REMINDERS.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
        </div>

        <div className="calendar-modal-actions">
          <button type="button" className="calendar-secondary" onClick={onClose}>Cancelar</button>
          <button type="submit" className="calendar-primary"><Check size={17} /> Salvar evento</button>
        </div>
      </form>
    </div>
  )
}

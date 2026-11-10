
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Plus, Check, Flame, Target, TrendingUp,
  CalendarDays, Trash2, Pencil, X, ChevronLeft,
  ChevronRight, Trophy, CircleCheck, Clock,
  Activity, Search, RotateCcw
} from 'lucide-react'

import {
  loadHabitsData,
  syncHabitsWorkspace
} from '../../services/eldoriaData'

import './HabitsApp.css'

const WEEKDAYS = [
  { short: 'D', name: 'Domingo' },
  { short: 'S', name: 'Segunda' },
  { short: 'T', name: 'Terça' },
  { short: 'Q', name: 'Quarta' },
  { short: 'S', name: 'Quinta' },
  { short: 'S', name: 'Sexta' },
  { short: 'S', name: 'Sábado' },
]

const COLORS = [
  '#c49a45', '#62a5a0', '#a17bc4',
  '#d47b68', '#70a36b', '#668ac7'
]

const CATEGORIES = [
  'Pessoal', 'Estudo', 'Saúde',
  'Exercícios', 'Organização', 'Outros'
]

const pad = number => String(number).padStart(2, '0')

function localDate(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function parseDate(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function addDays(date, amount) {
  const result = new Date(date)
  result.setDate(result.getDate() + amount)
  return result
}

function createId() {
  return crypto.randomUUID()
}

function getStreak(habit, completions) {
  const completed = new Set(
    completions
      .filter(item => item.habitId === habit.id)
      .map(item => item.date)
  )

  const today = parseDate(localDate())
  let cursor = new Date(today)

  if (
    habit.frequencyDays.includes(cursor.getDay()) &&
    !completed.has(localDate(cursor))
  ) {
    cursor = addDays(cursor, -1)
  }

  let streak = 0

  for (let i = 0; i < 3650; i++) {
    if (completed.has(localDate(cursor))) {
      streak++
    } else if (habit.frequencyDays.includes(cursor.getDay())) {
      break
    }

    cursor = addDays(cursor, -1)
  }

  return streak
}

function getMonthLabel(date) {
  return date.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric'
  })
}

function getWeekDates() {
  const today = parseDate(localDate())
  const start = addDays(today, -today.getDay())

  return Array.from({ length: 7 }, (_, index) =>
    addDays(start, index)
  )
}

function getWeeklyProgress(habit, completions) {
  const dates = getWeekDates()

  const scheduled = dates.filter(date =>
    habit.frequencyDays.includes(date.getDay())
  )

  const done = scheduled.filter(date =>
    completions.some(item =>
      item.habitId === habit.id &&
      item.date === localDate(date)
    )
  )

  return {
    done: done.length,
    total: scheduled.length,
    percentage: scheduled.length
      ? Math.round(done.length / scheduled.length * 100)
      : 0
  }
}

function HabitModal({ habit, onSave, onClose }) {
  const [name, setName] = useState(habit?.name || '')
  const [description, setDescription] = useState(habit?.description || '')
  const [category, setCategory] = useState(habit?.category || 'Pessoal')
  const [color, setColor] = useState(habit?.color || COLORS[0])
  const [days, setDays] = useState(
    habit?.frequencyDays || [0, 1, 2, 3, 4, 5, 6]
  )
  const [weeklyGoal, setWeeklyGoal] = useState(
    habit?.weeklyGoal || 7
  )

  function toggleDay(day) {
    setDays(current =>
      current.includes(day)
        ? current.filter(item => item !== day)
        : [...current, day].sort()
    )
  }

  function submit(event) {
    event.preventDefault()

    if (!name.trim() || days.length === 0) return

    onSave({
      ...habit,
      id: habit?.id || createId(),
      name: name.trim(),
      description: description.trim(),
      category,
      color,
      frequencyDays: days,
      weeklyGoal: Math.min(7, Math.max(1, Number(weeklyGoal))),
      createdAt: habit?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  }

  return (
    <div className="habit-modal-overlay" onMouseDown={event => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <form className="habit-modal" onSubmit={submit}>
        <div className="habit-modal-header">
          <div>
            <span className="habit-eyebrow">PERSONALIZAÇÃO</span>
            <h2>{habit ? 'Editar hábito' : 'Novo hábito'}</h2>
          </div>
          <button type="button" className="habit-icon-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <label>Nome do hábito</label>
        <input
          autoFocus
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Ex.: Estudar japonês"
          maxLength={70}
          required
        />

        <label>Descrição</label>
        <textarea
          value={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="Adicione detalhes sobre seu hábito..."
          rows={3}
        />

        <label>Categoria</label>
        <select value={category} onChange={event => setCategory(event.target.value)}>
          {CATEGORIES.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <label>Cor de identificação</label>
        <div className="habit-color-options">
          {COLORS.map(item => (
            <button
              key={item}
              type="button"
              className={color === item ? 'selected' : ''}
              style={{ background: item }}
              onClick={() => setColor(item)}
              aria-label={`Selecionar cor ${item}`}
            />
          ))}
        </div>

        <label>Frequência semanal</label>
        <div className="habit-week-selector">
          {WEEKDAYS.map((day, index) => (
            <button
              type="button"
              key={index}
              className={days.includes(index) ? 'selected' : ''}
              onClick={() => toggleDay(index)}
              title={day.name}
            >
              {day.short}
            </button>
          ))}
        </div>

        <label>Meta semanal</label>
        <div className="habit-goal-input">
          <input
            type="number"
            min="1"
            max="7"
            value={weeklyGoal}
            onChange={event => setWeeklyGoal(event.target.value)}
          />
          <span>vezes por semana</span>
        </div>

        <div className="habit-modal-actions">
          <button type="button" className="habit-secondary-button" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="habit-primary-button">
            <Check size={17} />
            Salvar hábito
          </button>
        </div>
      </form>
    </div>
  )
}

function HabitCalendar({ completions, selectedHabit, month, setMonth }) {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()

  const firstDay = new Date(year, monthIndex, 1).getDay()
  const totalDays = new Date(year, monthIndex + 1, 0).getDate()

  const completedDates = new Set(
    completions
      .filter(item =>
        !selectedHabit || item.habitId === selectedHabit
      )
      .map(item => item.date)
  )

  const today = localDate()

  return (
    <section className="habit-panel">
      <div className="habit-section-heading">
        <div>
          <span className="habit-eyebrow">HISTÓRICO</span>
          <h3>Calendário de progresso</h3>
        </div>

        <div className="habit-month-controls">
          <button onClick={() => setMonth(new Date(year, monthIndex - 1, 1))}>
            <ChevronLeft size={18} />
          </button>
          <span>{getMonthLabel(month)}</span>
          <button onClick={() => setMonth(new Date(year, monthIndex + 1, 1))}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="habit-calendar-grid">
        {WEEKDAYS.map((day, index) => (
          <div className="habit-calendar-weekday" key={index}>
            {day.short}
          </div>
        ))}

        {Array.from({ length: firstDay }, (_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {Array.from({ length: totalDays }, (_, index) => {
          const date = `${year}-${pad(monthIndex + 1)}-${pad(index + 1)}`
          const done = completedDates.has(date)

          return (
            <div
              key={date}
              className={[
                'habit-calendar-day',
                done ? 'completed' : '',
                date === today ? 'today' : '',
              ].join(' ')}
              title={done ? 'Hábito concluído' : date}
            >
              {done ? <Check size={15} /> : index + 1}
            </div>
          )
        })}
      </div>

      <div className="habit-calendar-legend">
        <span><i className="legend-done" /> Dia com conclusão</span>
        <span><i className="legend-today" /> Hoje</span>
      </div>
    </section>
  )
}

export default function HabitsApp() {
  const [habits, setHabits] = useState([])
  const [completions, setCompletions] = useState([])
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [modalHabit, setModalHabit] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedHabit, setSelectedHabit] = useState('all')
  const [search, setSearch] = useState('')
  const [month, setMonth] = useState(new Date())

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const data = await loadHabitsData()

        if (!active) return

        setHabits(data.habits)
        setCompletions(data.completions)
        setReady(true)
      } catch (err) {
        console.error('Erro ao carregar hábitos:', err)
        if (active) setError(err.message || 'Não foi possível carregar os hábitos.')
      } finally {
        if (active) setLoading(false)
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    const timeout = setTimeout(() => {
      syncHabitsWorkspace(habits, completions)
        .catch(err => {
          console.error('Erro ao sincronizar hábitos:', err)
          setError('Não foi possível salvar as alterações. Verifique sua conexão.')
        })
    }, 350)

    return () => clearTimeout(timeout)
  }, [habits, completions, ready])

  const today = localDate()

  const visibleHabits = useMemo(() => {
    return habits.filter(habit => {
      const matchesSearch =
        habit.name.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        selectedHabit === 'all' || habit.id === selectedHabit

      return matchesSearch && matchesCategory
    })
  }, [habits, search, selectedHabit])

  const completedToday = completions.filter(item =>
    item.date === today
  )

  const totalScheduledToday = habits.filter(habit =>
    habit.frequencyDays.includes(new Date().getDay())
  )

  const doneToday = totalScheduledToday.filter(habit =>
    completedToday.some(item => item.habitId === habit.id)
  ).length

  const overallProgress = totalScheduledToday.length
    ? Math.round(doneToday / totalScheduledToday.length * 100)
    : 0

  const totalStreak = habits.reduce(
    (total, habit) => total + getStreak(habit, completions),
    0
  )

  const bestStreak = Math.max(
    0,
    ...habits.map(habit => getStreak(habit, completions))
  )

  const saveHabit = habit => {
    setHabits(current => {
      const exists = current.some(item => item.id === habit.id)

      return exists
        ? current.map(item => item.id === habit.id ? habit : item)
        : [habit, ...current]
    })

    setShowModal(false)
    setModalHabit(null)
  }

  const deleteHabit = id => {
    if (!window.confirm('Tem certeza que deseja excluir este hábito e todo o seu histórico?')) {
      return
    }

    setHabits(current => current.filter(item => item.id !== id))
    setCompletions(current => current.filter(item => item.habitId !== id))

    if (selectedHabit === id) setSelectedHabit('all')
  }

  const toggleCompletion = useCallback((habitId, date = today) => {
    setCompletions(current => {
      const existing = current.find(item =>
        item.habitId === habitId && item.date === date
      )

      if (existing) {
        return current.filter(item => item.id !== existing.id)
      }

      return [
        ...current,
        {
          id: createId(),
          habitId,
          date,
          createdAt: new Date().toISOString(),
        }
      ]
    })
  }, [today])

  const openCreate = () => {
    setModalHabit(null)
    setShowModal(true)
  }

  const openEdit = habit => {
    setModalHabit(habit)
    setShowModal(true)
  }

  if (loading) {
    return (
      <div className="habits-loading">
        <Activity size={30} />
        <p>Consultando os registros de Eldoria...</p>
      </div>
    )
  }

  if (!ready) {
    return (
      <div className="habits-error">
        <h2>Não foi possível abrir os hábitos</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <div className="page-content habits-app">
      <div className="habits-header">
        <div>
          <span className="habit-eyebrow">DISCIPLINA E EVOLUÇÃO</span>
          <h1>Rastreador de Hábitos</h1>
          <p>Pequenas conquistas constroem grandes jornadas.</p>
        </div>

        <button className="habit-primary-button" onClick={openCreate}>
          <Plus size={19} />
          Novo hábito
        </button>
      </div>

      {error && (
        <div className="habit-error-banner">
          {error}
        </div>
      )}

      <div className="habit-stats-grid">
        <div className="habit-stat-card">
          <div className="habit-stat-icon gold"><Target /></div>
          <span>Conclusão de hoje</span>
          <strong>{overallProgress}%</strong>
          <small>{doneToday} de {totalScheduledToday.length} hábitos</small>
        </div>

        <div className="habit-stat-card">
          <div className="habit-stat-icon orange"><Flame /></div>
          <span>Sequências acumuladas</span>
          <strong>{totalStreak}</strong>
          <small>Dias de consistência somados</small>
        </div>

        <div className="habit-stat-card">
          <div className="habit-stat-icon purple"><Trophy /></div>
          <span>Melhor sequência atual</span>
          <strong>{bestStreak}</strong>
          <small>Dias consecutivos</small>
        </div>

        <div className="habit-stat-card">
          <div className="habit-stat-icon green"><CircleCheck /></div>
          <span>Hábitos cadastrados</span>
          <strong>{habits.length}</strong>
          <small>Na sua jornada</small>
        </div>
      </div>

      <section className="habit-panel">
        <div className="habit-section-heading">
          <div>
            <span className="habit-eyebrow">SUA ROTINA</span>
            <h3>Hábitos de hoje</h3>
          </div>

          <span className="habit-date-label">
            {new Date().toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            })}
          </span>
        </div>

        <div className="habit-progress-track">
          <div style={{ width: `${overallProgress}%` }} />
        </div>

        <div className="habit-toolbar">
          <div className="habit-search">
            <Search size={17} />
            <input
              placeholder="Pesquisar hábito..."
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </div>

          <select
            value={selectedHabit}
            onChange={event => setSelectedHabit(event.target.value)}
          >
            <option value="all">Todos os hábitos</option>
            {habits.map(habit => (
              <option key={habit.id} value={habit.id}>
                {habit.name}
              </option>
            ))}
          </select>
        </div>

        <div className="habit-list">
          {visibleHabits.length === 0 ? (
            <div className="habit-empty">
              <Target size={34} />
              <h3>Nenhum hábito encontrado</h3>
              <p>Crie seu primeiro hábito e comece sua evolução!</p>
              <button className="habit-primary-button" onClick={openCreate}>
                <Plus size={17} /> Criar hábito
              </button>
            </div>
          ) : visibleHabits.map(habit => {
            const done = completedToday.some(item =>
              item.habitId === habit.id
            )

            const scheduled = habit.frequencyDays.includes(new Date().getDay())
            const streak = getStreak(habit, completions)
            const weekly = getWeeklyProgress(habit, completions)

            return (
              <article className="habit-item" key={habit.id}>
                <button
                  className={`habit-check ${done ? 'done' : ''}`}
                  style={{ '--habit-color': habit.color }}
                  onClick={() => scheduled && toggleCompletion(habit.id)}
                  disabled={!scheduled}
                  title={scheduled ? 'Marcar conclusão' : 'Não programado para hoje'}
                >
                  {done && <Check size={19} />}
                </button>

                <div className="habit-item-content">
                  <div className="habit-item-title">
                    <span className="habit-color-dot" style={{ background: habit.color }} />
                    <h4 className={done ? 'completed-text' : ''}>{habit.name}</h4>
                    <span className="habit-category">{habit.category}</span>
                  </div>

                  {habit.description && (
                    <p>{habit.description}</p>
                  )}

                  <div className="habit-item-meta">
                    <span><Flame size={14} /> {streak} dias</span>
                    <span><TrendingUp size={14} /> {weekly.done}/{weekly.total} nesta semana</span>
                    {!scheduled && <span><Clock size={14} /> Fora da programação</span>}
                  </div>

                  <div className="habit-mini-progress">
                    <div style={{
                      width: `${weekly.percentage}%`,
                      background: habit.color
                    }} />
                  </div>
                </div>

                <div className="habit-item-actions">
                  <button
                    title="Editar hábito"
                    onClick={() => openEdit(habit)}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    title="Excluir hábito"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <HabitCalendar
        completions={completions}
        selectedHabit={selectedHabit === 'all' ? null : selectedHabit}
        month={month}
        setMonth={setMonth}
      />

      <section className="habit-panel habit-week-panel">
        <div className="habit-section-heading">
          <div>
            <span className="habit-eyebrow">VISÃO GERAL</span>
            <h3>Resumo da semana</h3>
          </div>
          <CalendarDays size={21} />
        </div>

        <div className="habit-week-grid">
          {getWeekDates().map((date, index) => {
            const dateString = localDate(date)
            const count = completions.filter(item =>
              item.date === dateString
            ).length

            return (
              <div className="habit-week-day" key={dateString}>
                <span>{WEEKDAYS[index].name.slice(0, 3)}</span>
                <strong className={dateString === today ? 'current' : ''}>
                  {date.getDate()}
                </strong>
                <small>{count} {count === 1 ? 'conclusão' : 'conclusões'}</small>
              </div>
            )
          })}
        </div>
      </section>

      {showModal && (
        <HabitModal
          habit={modalHabit}
          onSave={saveHabit}
          onClose={() => {
            setShowModal(false)
            setModalHabit(null)
          }}
        />
      )}
    </div>
  )
}

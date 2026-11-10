
import { useEffect, useMemo, useState } from 'react'
import {
  Plus, Search, Trash2, Check, X, CalendarDays,
  Flag, Star, Folder, FolderPlus, ListChecks,
  Clock, LayoutGrid, List, ChevronDown,
  Pencil, Circle, CheckCircle2, AlertCircle,
  ClipboardList, ChartNoAxesCombined, Filter,
  RotateCcw, MoreVertical, Tag, CalendarClock
} from 'lucide-react'
import './TasksApp.css'
import {
  loadTasksData,
  syncTasksWorkspace,
} from '../../services/eldoriaData'

const STORAGE_KEY = 'eldoria-tasks-v1'

const defaultProjects = [
  { id: 'general', name: 'Geral', color: '#c49a45' },
  { id: 'personal', name: 'Pessoal', color: '#62a5a0' },
  { id: 'work', name: 'Projetos', color: '#a17bc4' },
]

const priorities = {
  low: { label: 'Baixa', color: '#79a77c' },
  medium: { label: 'Média', color: '#d5a64d' },
  high: { label: 'Alta', color: '#cf7770' },
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && Array.isArray(saved.tasks)) {
      return {
        tasks: saved.tasks,
        projects: Array.isArray(saved.projects)
          ? saved.projects
          : defaultProjects,
      }
    }
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error)
  }

  return { tasks: [], projects: defaultProjects }
}

function makeId() {
  return crypto.randomUUID()
}

function todayString() {
  const date = new Date()
  const offset = date.getTimezoneOffset()
  return new Date(date.getTime() - offset * 60000)
    .toISOString()
    .slice(0, 10)
}

function formatDate(value) {
  if (!value) return 'Sem prazo'
  const [year, month, day] = value.split('-')
  return `${day}/${month}/${year}`
}

function isOverdue(task) {
  return !task.completed && task.dueDate && task.dueDate < todayString()
}

function createEmptyTask() {
  return {
    id: makeId(),
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    projectId: 'general',
    favorite: false,
    completed: false,
    subtasks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

export default function TasksApp() {
  const [tasks, setTasks] = useState([])
const [projects, setProjects] = useState([])

const [cloudReady, setCloudReady] = useState(false)
const [cloudStatus, setCloudStatus] = useState('Conectando ao Supabase...')
  const [activeView, setActiveView] = useState('all')
  const [selectedProject, setSelectedProject] = useState('all')
  const [search, setSearch] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [layout, setLayout] = useState('list')
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [newProjectName, setNewProjectName] = useState('')
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [expandedTasks, setExpandedTasks] = useState([])
  const [toast, setToast] = useState('')

  useEffect(() => {
  let active = true

  async function load() {
    try {
      setCloudStatus('Carregando tarefas...')

      const data = await loadTasksData()

      if (!active) return

      setProjects(data.projects)
      setTasks(data.tasks)
      setCloudReady(true)
      setCloudStatus('Conectado ao Supabase')
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error)

      if (active) {
        setCloudStatus('Erro ao conectar: ' + error.message)
        setToast('Erro ao carregar tarefas do Supabase.')
      }
    }
  }

  load()

  return () => {
    active = false
  }
}, [])

useEffect(() => {
  if (!cloudReady) return

  const timer = setTimeout(async () => {
    try {
      setCloudStatus('Salvando na nuvem...')

      await syncTasksWorkspace(tasks, projects)

      setCloudStatus('Salvo na nuvem')
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error)
      setCloudStatus('Erro ao salvar: ' + error.message)
      setToast('Erro ao salvar: ' + error.message)
    }
  }, 500)

  return () => clearTimeout(timer)
}, [tasks, projects, cloudReady])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2500)
    return () => clearTimeout(timer)
  }, [toast])

  const completedTasks = tasks.filter(task => task.completed)
  const pendingTasks = tasks.filter(task => !task.completed)
  const overdueTasks = pendingTasks.filter(isOverdue)
  const favoriteTasks = tasks.filter(task => task.favorite)

  const progress = tasks.length
    ? Math.round((completedTasks.length / tasks.length) * 100)
    : 0

  const visibleTasks = useMemo(() => {
    let result = [...tasks]

    if (activeView === 'pending') {
      result = result.filter(task => !task.completed)
    }

    if (activeView === 'completed') {
      result = result.filter(task => task.completed)
    }

    if (activeView === 'favorites') {
      result = result.filter(task => task.favorite)
    }

    if (activeView === 'overdue') {
      result = result.filter(isOverdue)
    }

    if (selectedProject !== 'all') {
      result = result.filter(task => task.projectId === selectedProject)
    }

    if (priorityFilter !== 'all') {
      result = result.filter(task => task.priority === priorityFilter)
    }

    if (statusFilter === 'pending') {
      result = result.filter(task => !task.completed)
    }

    if (statusFilter === 'completed') {
      result = result.filter(task => task.completed)
    }

    if (search.trim()) {
      const term = search.toLocaleLowerCase()
      result = result.filter(task =>
        `${task.title} ${task.description}`
          .toLocaleLowerCase()
          .includes(term)
      )
    }

    if (sortBy === 'date') {
      result.sort((a, b) => {
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return a.dueDate.localeCompare(b.dueDate)
      })
    }

    if (sortBy === 'priority') {
      const order = { high: 0, medium: 1, low: 2 }
      result.sort((a, b) => order[a.priority] - order[b.priority])
    }

    if (sortBy === 'created') {
      result.sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      )
    }

    if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    result.sort((a, b) => {
      if (a.favorite && !b.favorite) return -1
      if (!a.favorite && b.favorite) return 1
      return 0
    })

    return result
  }, [
    tasks, activeView, selectedProject,
    priorityFilter, statusFilter, search, sortBy
  ])

  function openNewTask() {
  const generalProject = projects.find(
    project => project.name === 'Geral'
  )

  if (!generalProject) {
    setToast('O projeto Geral ainda não foi carregado.')
    return
  }

  setEditingTask({
    ...createEmptyTask(),
    projectId: generalProject.id,
  })

  setShowForm(true)
}

  function openEditTask(task) {
    setEditingTask({
      ...task,
      subtasks: [...(task.subtasks || [])],
    })
    setShowForm(true)
  }

  function saveTask(event) {
    event.preventDefault()

    const title = editingTask.title.trim()
    if (!title) return

    const taskToSave = {
      ...editingTask,
      title,
      description: editingTask.description.trim(),
      updatedAt: new Date().toISOString(),
    }

    setTasks(current => {
      const exists = current.some(task => task.id === taskToSave.id)

      if (exists) {
        return current.map(task =>
          task.id === taskToSave.id ? taskToSave : task
        )
      }

      return [taskToSave, ...current]
    })

    setShowForm(false)
    setEditingTask(null)
    setToast('Tarefa salva com sucesso!')
  }

  function deleteTask(id) {
    if (!window.confirm('Deseja realmente excluir esta tarefa?')) return

    setTasks(current => current.filter(task => task.id !== id))
    setToast('Tarefa excluída.')
  }

  function toggleCompleted(id) {
    setTasks(current => current.map(task =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            updatedAt: new Date().toISOString(),
          }
        : task
    ))
  }

  function toggleFavorite(id) {
    setTasks(current => current.map(task =>
      task.id === id ? { ...task, favorite: !task.favorite } : task
    ))
  }

  function toggleExpanded(id) {
    setExpandedTasks(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    )
  }

  function toggleSubtask(taskId, subtaskId) {
    setTasks(current => current.map(task => {
      if (task.id !== taskId) return task

      return {
        ...task,
        subtasks: task.subtasks.map(subtask =>
          subtask.id === subtaskId
            ? { ...subtask, completed: !subtask.completed }
            : subtask
        ),
        updatedAt: new Date().toISOString(),
      }
    }))
  }

  function addProject(event) {
    event.preventDefault()
    const name = newProjectName.trim()
    if (!name) return

    const project = {
      id: makeId(),
      name,
      color: '#c49a45',
    }

    setProjects(current => [...current, project])
    setNewProjectName('')
    setShowProjectForm(false)
    setToast('Projeto criado!')
  }

  
function deleteProject(projectId) {
  const generalProject = projects.find(
    project => project.name === 'Geral'
  )

  if (!generalProject || projectId === generalProject.id) {
    setToast('O projeto Geral não pode ser excluído.')
    return
  }

  const project = projects.find(item => item.id === projectId)
  if (!project) return

  if (!window.confirm(
    `Excluir o projeto "${project.name}"? As tarefas serão movidas para Geral.`
  )) return

  setTasks(current =>
    current.map(task =>
      task.projectId === projectId
        ? {
            ...task,
            projectId: generalProject.id,
            updatedAt: new Date().toISOString(),
          }
        : task
    )
  )

  setProjects(current =>
    current.filter(project => project.id !== projectId)
  )

  if (selectedProject === projectId) {
    setSelectedProject('all')
  }

  setToast('Projeto excluído.')
}


  function clearFilters() {
    setSearch('')
    setPriorityFilter('all')
    setStatusFilter('all')
    setSelectedProject('all')
    setActiveView('all')
  }

  function getProjectName(id) {
    return projects.find(project => project.id === id)?.name || 'Geral'
  }

  function getSubtaskProgress(task) {
    const subtasks = task.subtasks || []
    if (!subtasks.length) return 0
    return Math.round(
      (subtasks.filter(item => item.completed).length / subtasks.length) * 100
    )
  }

  return (
    <div className="tasks-app">
      <aside className="tasks-sidebar">
        <div className="tasks-brand">
          <div className="tasks-brand-icon">
            <ClipboardList size={25} />
          </div>
          <div>
            <strong>Registro Real</strong>
            <span>Gerenciador de tarefas</span>
          </div>
        </div>

        <button className="tasks-create-button" onClick={openNewTask}>
          <Plus size={19} />
          Nova tarefa
        </button>

        <div className="tasks-nav-section">
          <span className="tasks-section-label">VISÃO GERAL</span>

          <button
            className={`tasks-nav-item ${activeView === 'all' ? 'active' : ''}`}
            onClick={() => {
              setActiveView('all')
              setSelectedProject('all')
            }}
          >
            <LayoutGrid size={18} />
            Todas as tarefas
            <span>{tasks.length}</span>
          </button>

          <button
            className={`tasks-nav-item ${activeView === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveView('pending')}
          >
            <Circle size={18} />
            Pendentes
            <span>{pendingTasks.length}</span>
          </button>

          <button
            className={`tasks-nav-item ${activeView === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveView('completed')}
          >
            <CheckCircle2 size={18} />
            Concluídas
            <span>{completedTasks.length}</span>
          </button>

          <button
            className={`tasks-nav-item ${activeView === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveView('favorites')}
          >
            <Star size={18} />
            Favoritas
            <span>{favoriteTasks.length}</span>
          </button>

          <button
            className={`tasks-nav-item ${activeView === 'overdue' ? 'active' : ''}`}
            onClick={() => setActiveView('overdue')}
          >
            <AlertCircle size={18} />
            Atrasadas
            <span>{overdueTasks.length}</span>
          </button>
        </div>

        <div className="tasks-nav-section">
          <div className="tasks-section-heading">
            <span className="tasks-section-label">PROJETOS</span>
            <button
              className="tasks-icon-button"
              title="Criar projeto"
              onClick={() => setShowProjectForm(!showProjectForm)}
            >
              <FolderPlus size={17} />
            </button>
          </div>

          {showProjectForm && (
            <form className="tasks-project-form" onSubmit={addProject}>
              <input
                autoFocus
                value={newProjectName}
                onChange={event => setNewProjectName(event.target.value)}
                placeholder="Nome do projeto"
              />
              <button type="submit"><Check size={16} /></button>
            </form>
          )}

          {projects.map(project => (
            <div className="tasks-project-row" key={project.id}>
              <button
                className={`tasks-nav-item ${selectedProject === project.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedProject(project.id)
                  setActiveView('all')
                }}
              >
                <span
                  className="tasks-project-dot"
                  style={{ background: project.color }}
                />
                {project.name}
                <span>
                  {tasks.filter(task => task.projectId === project.id).length}
                </span>
              </button>

              {project.name !== 'Geral' && (
                <button
                  className="tasks-project-delete"
                  title="Excluir projeto"
                  onClick={() => deleteProject(project.id)}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="tasks-sidebar-bottom">
          <div className="tasks-mini-progress">
            <div className="tasks-mini-progress-heading">
              <span>Progresso geral</span>
              <strong>{progress}%</strong>
            </div>
            <div className="tasks-progress-track">
              <div style={{ width: `${progress}%` }} />
            </div>
            <small>{completedTasks.length} de {tasks.length} concluídas</small>
          </div>
          <span className="tasks-sidebar-signature">ELDORIA · REGISTROS REAIS</span>
        </div>
      </aside>

      <main className="tasks-main">
        <header className="tasks-header">
          <div>
            <span className="tasks-eyebrow">ADMINISTRAÇÃO DO REINO</span>
            <h1>Gerenciador de Tarefas</h1>
            <p>Organize seus compromissos e acompanhe seu progresso.</p>
            <small className="tasks-cloud-status">
  {cloudStatus}
</small>
          </div>

          <button className="tasks-header-add" onClick={openNewTask}>
            <Plus size={18} />
            Criar tarefa
          </button>
        </header>

        <section className="tasks-stats">
          <div className="tasks-stat-card">
            <div className="tasks-stat-icon gold"><ClipboardList size={21} /></div>
            <div>
              <span>Total de tarefas</span>
              <strong>{tasks.length}</strong>
            </div>
          </div>

          <div className="tasks-stat-card">
            <div className="tasks-stat-icon blue"><Clock size={21} /></div>
            <div>
              <span>Pendentes</span>
              <strong>{pendingTasks.length}</strong>
            </div>
          </div>

          <div className="tasks-stat-card">
            <div className="tasks-stat-icon green"><CheckCircle2 size={21} /></div>
            <div>
              <span>Concluídas</span>
              <strong>{completedTasks.length}</strong>
            </div>
          </div>

          <div className="tasks-stat-card">
            <div className="tasks-stat-icon red"><AlertCircle size={21} /></div>
            <div>
              <span>Atrasadas</span>
              <strong>{overdueTasks.length}</strong>
            </div>
          </div>
        </section>

        <section className="tasks-content">
          <div className="tasks-content-heading">
            <div>
              <h2>
                {activeView === 'all' && selectedProject === 'all' && 'Todas as tarefas'}
                {activeView === 'all' && selectedProject !== 'all' && getProjectName(selectedProject)}
                {activeView === 'pending' && 'Tarefas pendentes'}
                {activeView === 'completed' && 'Tarefas concluídas'}
                {activeView === 'favorites' && 'Tarefas favoritas'}
                {activeView === 'overdue' && 'Tarefas atrasadas'}
              </h2>
              <span>{visibleTasks.length} registro(s) encontrado(s)</span>
            </div>

            <div className="tasks-layout-buttons">
              <button
                className={layout === 'list' ? 'selected' : ''}
                onClick={() => setLayout('list')}
                title="Visualização em lista"
              >
                <List size={18} />
              </button>
              <button
                className={layout === 'grid' ? 'selected' : ''}
                onClick={() => setLayout('grid')}
                title="Visualização em grade"
              >
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>

          <div className="tasks-toolbar">
            <div className="tasks-search">
              <Search size={18} />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Pesquisar tarefas..."
              />
              {search && (
                <button onClick={() => setSearch('')}><X size={15} /></button>
              )}
            </div>

            <div className="tasks-filter">
              <Filter size={16} />
              <select
                value={priorityFilter}
                onChange={event => setPriorityFilter(event.target.value)}
              >
                <option value="all">Todas as prioridades</option>
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </select>
            </div>

            <div className="tasks-filter">
              <select
                value={statusFilter}
                onChange={event => setStatusFilter(event.target.value)}
              >
                <option value="all">Todos os status</option>
                <option value="pending">Pendentes</option>
                <option value="completed">Concluídas</option>
              </select>
            </div>

            <div className="tasks-filter">
              <select
                value={sortBy}
                onChange={event => setSortBy(event.target.value)}
              >
                <option value="date">Ordenar: prazo</option>
                <option value="priority">Ordenar: prioridade</option>
                <option value="created">Mais recentes</option>
                <option value="alphabetical">Alfabética</option>
              </select>
            </div>

            <button className="tasks-clear-filters" onClick={clearFilters}>
              <RotateCcw size={15} />
              Limpar
            </button>
          </div>

          {visibleTasks.length === 0 ? (
            <div className="tasks-empty">
              <div><ClipboardList size={36} /></div>
              <h3>Nenhuma tarefa encontrada</h3>
              <p>
                {tasks.length === 0
                  ? 'Seu registro está vazio. Crie sua primeira tarefa!'
                  : 'Tente alterar os filtros ou a pesquisa.'}
              </p>
              {tasks.length === 0 ? (
                <button onClick={openNewTask}><Plus size={17} /> Criar primeira tarefa</button>
              ) : (
                <button onClick={clearFilters}><RotateCcw size={16} /> Limpar filtros</button>
              )}
            </div>
          ) : (
            <div className={`tasks-list ${layout === 'grid' ? 'grid-layout' : ''}`}>
              {visibleTasks.map(task => {
                const project = projects.find(item => item.id === task.projectId)
                const priority = priorities[task.priority] || priorities.medium
                const subtaskProgress = getSubtaskProgress(task)
                const overdue = isOverdue(task)
                const expanded = expandedTasks.includes(task.id)

                return (
                  <article
                    className={`tasks-task-card ${task.completed ? 'is-completed' : ''}`}
                    key={task.id}
                  >
                    <button
                      className={`tasks-check ${task.completed ? 'checked' : ''}`}
                      onClick={() => toggleCompleted(task.id)}
                      title={task.completed ? 'Reabrir tarefa' : 'Concluir tarefa'}
                    >
                      {task.completed && <Check size={16} />}
                    </button>

                    <div className="tasks-task-body">
                      <div className="tasks-task-title-row">
                        <button
                          className="tasks-task-title"
                          onClick={() => openEditTask(task)}
                        >
                          {task.title}
                        </button>
                        <button
                          className={`tasks-favorite ${task.favorite ? 'active' : ''}`}
                          onClick={() => toggleFavorite(task.id)}
                          title="Alternar favorito"
                        >
                          <Star size={17} fill={task.favorite ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      {task.description && (
                        <p className="tasks-task-description">{task.description}</p>
                      )}

                      <div className="tasks-task-meta">
                        <span
                          className="tasks-priority"
                          style={{
                            color: priority.color,
                            background: `${priority.color}18`,
                          }}
                        >
                          <Flag size={13} />
                          {priority.label}
                        </span>

                        <span className="tasks-project-tag">
                          <Folder size={13} />
                          {project?.name || 'Geral'}
                        </span>

                        <span className={`tasks-date ${overdue ? 'overdue' : ''}`}>
                          <CalendarDays size={13} />
                          {overdue ? 'Atrasada · ' : ''}
                          {formatDate(task.dueDate)}
                        </span>
                      </div>

                      {task.subtasks?.length > 0 && (
                        <div className="tasks-subtask-area">
                          <button
                            className="tasks-subtask-toggle"
                            onClick={() => toggleExpanded(task.id)}
                          >
                            <ListChecks size={15} />
                            {task.subtasks.filter(item => item.completed).length}/{task.subtasks.length} subtarefas
                            <ChevronDown
                              size={15}
                              className={expanded ? 'rotated' : ''}
                            />
                          </button>
                          <div className="tasks-subtask-progress">
                            <div style={{ width: `${subtaskProgress}%` }} />
                          </div>

                          {expanded && (
                            <div className="tasks-subtask-list">
                              {task.subtasks.map(subtask => (
                                <label key={subtask.id} className="tasks-subtask-item">
                                  <input
                                    type="checkbox"
                                    checked={subtask.completed}
                                    onChange={() => toggleSubtask(task.id, subtask.id)}
                                  />
                                  <span className={subtask.completed ? 'done' : ''}>
                                    {subtask.title}
                                  </span>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="tasks-task-actions">
                      <button title="Editar tarefa" onClick={() => openEditTask(task)}>
                        <Pencil size={16} />
                      </button>
                      <button
                        title="Excluir tarefa"
                        className="delete"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>

        <section className="tasks-bottom-progress">
          <div>
            <div className="tasks-bottom-progress-title">
              <ChartNoAxesCombined size={19} />
              <strong>Progresso das atividades</strong>
              <span>{progress}% concluído</span>
            </div>
            <div className="tasks-progress-track large">
              <div style={{ width: `${progress}%` }} />
            </div>
            <small>
              {completedTasks.length} tarefas concluídas de um total de {tasks.length}.
            </small>
          </div>
        </section>
      </main>

      {showForm && editingTask && (
        <div className="tasks-modal-overlay" onMouseDown={event => {
          if (event.target === event.currentTarget) {
            setShowForm(false)
            setEditingTask(null)
          }
        }}>
          <form className="tasks-modal" onSubmit={saveTask}>
            <div className="tasks-modal-header">
              <div>
                <span className="tasks-eyebrow">REGISTRO DO REINO</span>
                <h2>
                  {tasks.some(task => task.id === editingTask.id)
                    ? 'Editar tarefa'
                    : 'Nova tarefa'}
                </h2>
              </div>
              <button
                type="button"
                className="tasks-modal-close"
                onClick={() => {
                  setShowForm(false)
                  setEditingTask(null)
                }}
              >
                <X size={21} />
              </button>
            </div>

            <label className="tasks-form-field">
              <span>Nome da tarefa *</span>
              <input
                autoFocus
                required
                maxLength={120}
                value={editingTask.title}
                onChange={event => setEditingTask({
                  ...editingTask,
                  title: event.target.value,
                })}
                placeholder="Ex.: Preparar novo vídeo..."
              />
            </label>

            <label className="tasks-form-field">
              <span>Descrição</span>
              <textarea
                rows={3}
                maxLength={1000}
                value={editingTask.description}
                onChange={event => setEditingTask({
                  ...editingTask,
                  description: event.target.value,
                })}
                placeholder="Adicione detalhes sobre esta tarefa..."
              />
            </label>

            <div className="tasks-form-row">
              <label className="tasks-form-field">
                <span>Prioridade</span>
                <select
                  value={editingTask.priority}
                  onChange={event => setEditingTask({
                    ...editingTask,
                    priority: event.target.value,
                  })}
                >
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
              </label>

              <label className="tasks-form-field">
                <span>Data de vencimento</span>
                <input
                  type="date"
                  value={editingTask.dueDate}
                  onChange={event => setEditingTask({
                    ...editingTask,
                    dueDate: event.target.value,
                  })}
                />
              </label>
            </div>

            <label className="tasks-form-field">
              <span>Projeto</span>
              <select
                value={editingTask.projectId}
                onChange={event => setEditingTask({
                  ...editingTask,
                  projectId: event.target.value,
                })}
              >
                {projects.map(project => (
                  <option value={project.id} key={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="tasks-form-field">
              <span>Subtarefas</span>
              <div className="tasks-subtask-editor">
                {(editingTask.subtasks || []).map(subtask => (
                  <div className="tasks-subtask-edit-row" key={subtask.id}>
                    <input
                      type="checkbox"
                      checked={subtask.completed}
                      onChange={() => setEditingTask(current => ({
                        ...current,
                        subtasks: current.subtasks.map(item =>
                          item.id === subtask.id
                            ? { ...item, completed: !item.completed }
                            : item
                        ),
                      }))}
                    />
                    <span className={subtask.completed ? 'done' : ''}>
                      {subtask.title}
                    </span>
                    <button
                      type="button"
                      onClick={() => setEditingTask(current => ({
                        ...current,
                        subtasks: current.subtasks.filter(item => item.id !== subtask.id),
                      }))}
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}

                <div className="tasks-add-subtask">
                  <input
                    id="new-subtask-input"
                    placeholder="Nome da subtarefa..."
                    maxLength={120}
                    onKeyDown={event => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        const input = event.currentTarget
                        const title = input.value.trim()
                        if (!title) return

                        setEditingTask(current => ({
                          ...current,
                          subtasks: [
                            ...current.subtasks,
                            { id: makeId(), title, completed: false },
                          ],
                        }))
                        input.value = ''
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('new-subtask-input')
                      const title = input.value.trim()
                      if (!title) return

                      setEditingTask(current => ({
                        ...current,
                        subtasks: [
                          ...current.subtasks,
                          { id: makeId(), title, completed: false },
                        ],
                      }))
                      input.value = ''
                    }}
                  >
                    <Plus size={17} />
                  </button>
                </div>
                <small>Pressione Enter ou clique em + para adicionar.</small>
              </div>
            </div>

            <label className="tasks-form-favorite">
              <input
                type="checkbox"
                checked={editingTask.favorite}
                onChange={event => setEditingTask({
                  ...editingTask,
                  favorite: event.target.checked,
                })}
              />
              <Star size={17} />
              Marcar como favorita
            </label>

            <div className="tasks-modal-footer">
              <button
                type="button"
                className="tasks-cancel-button"
                onClick={() => {
                  setShowForm(false)
                  setEditingTask(null)
                }}
              >
                Cancelar
              </button>
              <button type="submit" className="tasks-save-button">
                <Check size={17} />
                Salvar tarefa
              </button>
            </div>
          </form>
        </div>
      )}

      {toast && (
        <div className="tasks-toast">
          <Check size={17} />
          {toast}
        </div>
      )}
    </div>
  )
}

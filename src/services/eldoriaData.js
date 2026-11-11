
import { supabase } from './supabase'

const DEFAULT_FOLDERS = [
  { name: 'Geral' },
  { name: 'Ideias' },
  { name: 'Projetos' },
]

const DEFAULT_PROJECTS = [
  { name: 'Geral', color: '#c49a45' },
  { name: 'Pessoal', color: '#62a5a0' },
  { name: 'Projetos', color: '#a17bc4' },
]

let notesQueue = Promise.resolve()
let tasksQueue = Promise.resolve()

async function getUserId() {
  const { data, error } = await supabase.auth.getUser()

  if (error) throw error
  if (!data.user) throw new Error('Usuário não autenticado.')

  return data.user.id
}


async function ensureDefaults(table, defaults) {
  const userId = await getUserId()

  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('user_id', userId)

  if (error) throw error

  // Só cria os padrões na primeira inicialização.
  // Nunca recria itens que o usuário decidiu excluir.
  if (data.length === 0) {
    const { error: insertError } = await supabase
      .from(table)
      .insert(
        defaults.map(item => ({
          ...item,
          user_id: userId,
        }))
      )

    // Se outra inicialização criou os padrões ao mesmo tempo,
    // não interrompe o carregamento.
    if (insertError && insertError.code !== '23505') {
      throw insertError
    }
  }

  const { data: result, error: reloadError } = await supabase
    .from(table)
    .select('*')
    .eq('user_id', userId)

  if (reloadError) throw reloadError

  return result
}


async function removeMissingRows(table, userId, currentIds) {
  const { data, error } = await supabase
    .from(table)
    .select('id')
    .eq('user_id', userId)

  if (error) throw error

  const idsToDelete = data
    .map(row => row.id)
    .filter(id => !currentIds.includes(id))

  if (!idsToDelete.length) return

  const { error: deleteError } = await supabase
    .from(table)
    .delete()
    .eq('user_id', userId)
    .in('id', idsToDelete)

  if (deleteError) throw deleteError
}

// ==========================================
// BLOCO DE NOTAS
// ==========================================

export async function loadNotesData() {
  const userId = await getUserId()

  const folders = await ensureDefaults(
    'note_folders',
    DEFAULT_FOLDERS
  )

  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (error) throw error

  return {
    folders: folders.map(folder => ({
      id: folder.id,
      name: folder.name,
    })),

    notes: notes.map(note => ({
      id: note.id,
      title: note.title,
      content: note.content,
      folderId: note.folder_id,
      favorite: note.favorite,
      createdAt: note.created_at,
      updatedAt: note.updated_at,
    })),
  }
}

async function saveNotesSnapshot(notes, folders) {
  const userId = await getUserId()

  if (!folders.some(folder => folder.name === 'Geral')) {
    throw new Error('A pasta Geral não pode ser removida.')
  }

  if (folders.length) {
    const { error } = await supabase
      .from('note_folders')
      .upsert(
        folders.map(folder => ({
          id: folder.id,
          user_id: userId,
          name: folder.name,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  if (notes.length) {
    const { error } = await supabase
      .from('notes')
      .upsert(
        notes.map(note => ({
          id: note.id,
          user_id: userId,
          title: note.title || '',
          content: note.content || '',
          folder_id: note.folderId || null,
          favorite: Boolean(note.favorite),
          created_at: note.createdAt,
          updated_at: note.updatedAt,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  // Primeiro removemos anotações excluídas.
  await removeMissingRows(
    'notes',
    userId,
    notes.map(note => note.id)
  )

  // Só depois removemos pastas excluídas.
  await removeMissingRows(
    'note_folders',
    userId,
    folders.map(folder => folder.id)
  )
}

export function syncNotesWorkspace(notes, folders) {
  const run = () => saveNotesSnapshot(notes, folders)

  notesQueue = notesQueue.then(run, run)

  return notesQueue
}

// ==========================================
// GERENCIADOR DE TAREFAS
// ==========================================

export async function loadTasksData() {
  const userId = await getUserId()

  const projects = await ensureDefaults(
    'task_projects',
    DEFAULT_PROJECTS
  )

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error

  return {
    projects: projects.map(project => ({
      id: project.id,
      name: project.name,
      color: project.color,
    })),

    tasks: tasks.map(task => ({
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.due_date || '',
      projectId: task.project_id,
      favorite: task.favorite,
      completed: task.completed,
      subtasks: task.subtasks || [],
      createdAt: task.created_at,
      updatedAt: task.updated_at,
    })),
  }
}

async function saveTasksSnapshot(tasks, projects) {
  const userId = await getUserId()

  if (!projects.some(project => project.name === 'Geral')) {
    throw new Error('O projeto Geral não pode ser removido.')
  }

  if (projects.length) {
    const { error } = await supabase
      .from('task_projects')
      .upsert(
        projects.map(project => ({
          id: project.id,
          user_id: userId,
          name: project.name,
          color: project.color,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  if (tasks.length) {
    const { error } = await supabase
      .from('tasks')
      .upsert(
        tasks.map(task => ({
          id: task.id,
          user_id: userId,
          title: task.title || '',
          description: task.description || '',
          priority: task.priority || 'medium',
          due_date: task.dueDate || null,
          project_id: task.projectId || null,
          favorite: Boolean(task.favorite),
          completed: Boolean(task.completed),
          subtasks: task.subtasks || [],
          created_at: task.createdAt,
          updated_at: task.updatedAt,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  // Remove tarefas excluídas antes dos projetos.
  await removeMissingRows(
    'tasks',
    userId,
    tasks.map(task => task.id)
  )

  await removeMissingRows(
    'task_projects',
    userId,
    projects.map(project => project.id)
  )
}

export function syncTasksWorkspace(tasks, projects) {
  const run = () => saveTasksSnapshot(tasks, projects)

  tasksQueue = tasksQueue.then(run, run)

  return tasksQueue
}
// ==========================================
// CALENDÁRIO INTELIGENTE
// ==========================================

let calendarQueue = Promise.resolve()

export async function loadCalendarData() {
  const userId = await getUserId()

  const { data, error } = await supabase
    .from('calendar_events')
    .select('*')
    .eq('user_id', userId)
    .order('starts_at', { ascending: true })

  if (error) throw error

  return data.map(event => ({
    id: event.id,
    title: event.title,
    description: event.description || '',
    startsAt: event.starts_at,
    endsAt: event.ends_at,
    allDay: Boolean(event.all_day),
    category: event.category || 'Pessoal',
    reminderMinutes: Number(event.reminder_minutes) || 0,
    createdAt: event.created_at,
    updatedAt: event.updated_at,
  }))
}

async function saveCalendarSnapshot(events) {
  const userId = await getUserId()

  if (events.length) {
    const { error } = await supabase
      .from('calendar_events')
      .upsert(
        events.map(event => ({
          id: event.id,
          user_id: userId,
          title: event.title,
          description: event.description || '',
          starts_at: event.startsAt,
          ends_at: event.endsAt,
          all_day: Boolean(event.allDay),
          category: event.category || 'Pessoal',
          reminder_minutes: Number(event.reminderMinutes) || 0,
          created_at: event.createdAt || new Date().toISOString(),
          updated_at: event.updatedAt || new Date().toISOString(),
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  await removeMissingRows(
    'calendar_events',
    userId,
    events.map(event => event.id)
  )
}

export function syncCalendarWorkspace(events) {
  const run = () => saveCalendarSnapshot(events)
  calendarQueue = calendarQueue.then(run, run)
  return calendarQueue
}


// ==========================================
// RASTREADOR DE HÁBITOS
// ==========================================

let habitsQueue = Promise.resolve()

export async function loadHabitsData() {
  const userId = await getUserId()

  const { data: habits, error: habitsError } = await supabase
    .from('habits')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (habitsError) throw habitsError

  const { data: completions, error: completionsError } = await supabase
    .from('habit_completions')
    .select('*')
    .eq('user_id', userId)
    .order('completion_date', { ascending: false })

  if (completionsError) throw completionsError

  return {
    habits: habits.map(habit => ({
      id: habit.id,
      name: habit.name,
      description: habit.description || '',
      color: habit.color,
      category: habit.category,
      frequencyDays: habit.frequency_days || [0, 1, 2, 3, 4, 5, 6],
      weeklyGoal: habit.weekly_goal,
      createdAt: habit.created_at,
      updatedAt: habit.updated_at,
    })),

    completions: completions.map(completion => ({
      id: completion.id,
      habitId: completion.habit_id,
      date: completion.completion_date,
      createdAt: completion.created_at,
    })),
  }
}

async function saveHabitsSnapshot(habits, completions) {
  const userId = await getUserId()

  if (habits.length) {
    const { error } = await supabase
      .from('habits')
      .upsert(
        habits.map(habit => ({
          id: habit.id,
          user_id: userId,
          name: habit.name,
          description: habit.description || '',
          color: habit.color,
          category: habit.category,
          frequency_days: habit.frequencyDays,
          weekly_goal: habit.weeklyGoal,
          created_at: habit.createdAt,
          updated_at: habit.updatedAt,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  if (completions.length) {
    const { error } = await supabase
      .from('habit_completions')
      .upsert(
        completions.map(completion => ({
          id: completion.id,
          user_id: userId,
          habit_id: completion.habitId,
          completion_date: completion.date,
          created_at: completion.createdAt,
        })),
        { onConflict: 'id' }
      )

    if (error) throw error
  }

  // Primeiro remove os registros de conclusão.
  await removeMissingRows(
    'habit_completions',
    userId,
    completions.map(completion => completion.id)
  )

  // Depois remove os hábitos excluídos.
  await removeMissingRows(
    'habits',
    userId,
    habits.map(habit => habit.id)
  )
}

export function syncHabitsWorkspace(habits, completions) {
  const run = () => saveHabitsSnapshot(habits, completions)

  habitsQueue = habitsQueue.then(run, run)

  return habitsQueue
}


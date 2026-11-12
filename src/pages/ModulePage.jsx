
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Crown } from 'lucide-react'
import { apps } from '../data/apps'

import NotesApp from '../modules/notes/NotesApp'
import TasksApp from '../modules/tasks/TasksApp'
import CalendarApp from '../modules/calendar/CalendarApp'
import HabitsApp from '../modules/habits/HabitsApp'
import ConnectApp from '../modules/connect/ConnectApp'
import CodeLibraryApp from '../modules/code-library/CodeLibraryApp'
import WeatherApp from '../modules/weather/WeatherApp'
import AcademyApp from '../modules/academy/AcademyApp'

export default function ModulePage() {
  const { appId } = useParams()
  const app = apps.find((item) => item.id === appId)

  if (!app) {
    return (
      <div className="page-content">
        <h2>Dependência não encontrada</h2>
        <Link to="/" className="back-link">
          Voltar ao castelo
        </Link>
      </div>
    )
  }

  if (appId === 'code-library') return <CodeLibraryApp />
  if (appId === 'notes') return <NotesApp />
  if (appId === 'tasks') return <TasksApp />
  if (appId === 'calendar') return <CalendarApp />
  if (appId === 'habits') return <HabitsApp />
  if (appId === 'connect') return <ConnectApp />
  if (appId === 'weather') return <WeatherApp />
  if (appId === 'academy') return <AcademyApp />

  const Icon = app.icon

  return (
    <div className="page-content module-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={17} />
        Retornar ao salão principal
      </Link>

      <div className="module-placeholder">
        <div className="modal-icon">
          <Icon size={35} />
        </div>

        <span className="eyebrow">{app.category}</span>
        <h2>{app.name}</h2>
        <p>{app.description}</p>

        <div className="modal-status">
          <span className="status-dot" />
          {app.status}
        </div>

        <div className="module-message">
          <Crown size={20} />
          <p>
            Esta dependência está preparada para receber
            o aplicativo {app.name}.
          </p>
        </div>
      </div>
    </div>
  )
}




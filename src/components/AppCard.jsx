
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function AppCard({ app }) {
  const Icon = app.icon

  return (
    <Link to={`/app/${app.id}`} className="app-card">
      <div className="card-top">
        <div className="app-icon">
          <Icon size={23} />
        </div>

        <span className="app-status">{app.status}</span>
      </div>

      <div className="card-information">
        <span className="card-category">{app.category}</span>
        <h3>{app.name}</h3>
        <p>{app.description}</p>
      </div>

      <div className="card-footer">
        <span>Entrar nesta dependência</span>
        <ArrowUpRight size={17} />
      </div>
    </Link>
  )
}


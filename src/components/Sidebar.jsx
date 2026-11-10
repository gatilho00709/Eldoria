
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Grid2X2,
  Image,
  NotebookPen,
  Crown,
  Settings,
  X,
  BookOpen,
  FlaskConical,
  Hammer,
} from 'lucide-react'

const categories = [
  { name: 'Produtividade', icon: NotebookPen },
  { name: 'Criação', icon: Image },
  { name: 'Eldoria', icon: Crown },
]

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-icon"><Crown size={27} /></div>

        <div>
          <h1>ELDORIA</h1>
          <span>O CASTELO DIGITAL</span>
        </div>

        <button className="mobile-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="sidebar-section">
        <span className="section-label">SALÃO PRINCIPAL</span>

        <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
          <LayoutDashboard size={19} />
          <span>Salão principal</span>
        </NavLink>

        <NavLink to="/" end className="nav-item" onClick={onClose}>
          <Grid2X2 size={19} />
          <span>Todos os aplicativos</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <span className="section-label">DEPENDÊNCIAS</span>

        <NavLink to="/?category=Produtividade" className="nav-item" onClick={onClose}>
          <BookOpen size={18} />
          <span>Biblioteca</span>
        </NavLink>

        <NavLink to="/?category=Criação" className="nav-item" onClick={onClose}>
          <Hammer size={18} />
          <span>Oficina</span>
        </NavLink>

        <NavLink to="/?category=Eldoria" className="nav-item" onClick={onClose}>
          <Crown size={18} />
          <span>Salão Real</span>
        </NavLink>

        <div className="nav-item">
          <FlaskConical size={18} />
          <span>Laboratórios</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-decoration">
          <Crown size={20} />
          <p>Um reino. Infinitas possibilidades.</p>
        </div>

        <button className="nav-item">
          <Settings size={19} />
          <span>Configurações</span>
        </button>

        <div className="creator">
          <div className="creator-avatar">G</div>
          <div>
            <strong>Gatilho</strong>
            <span>Fundador do Eldoria</span>
          </div>
        </div>
      </div>
    </aside>
  )
}


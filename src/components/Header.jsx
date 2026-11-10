
import { Menu, Bell, ChevronRight, Castle } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="mobile-menu" onClick={onMenuClick}>
        <Menu size={22} />
      </button>

      <div className="breadcrumb">
        <Castle size={17} />
        <span>Eldoria</span>
        <ChevronRight size={15} />
        <strong>O Castelo Digital</strong>
      </div>

      <div className="topbar-actions">
        <button className="icon-button" title="Notificações">
          <Bell size={19} />
        </button>
      </div>
    </header>
  )
}



import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOut, UserCircle } from 'lucide-react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useAuth } from '../contexts/AuthContext'
import './AppLayout.css'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setSigningOut(true)

    const { error } = await signOut()

    setSigningOut(false)

    if (error) {
      alert('Não foi possível sair da conta: ' + error.message)
      return
    }

    navigate('/login', { replace: true })
  }

  return (
    <div className="app-layout">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="account-bar">
          <div className="account-info">
            <UserCircle size={19} />
            <span>{user?.email}</span>
          </div>

          <button
            className="account-logout"
            onClick={handleLogout}
            disabled={signingOut}
          >
            <LogOut size={16} />
            {signingOut ? 'Saindo...' : 'Sair'}
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  )
}


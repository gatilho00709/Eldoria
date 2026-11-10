
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './core/AppLayout'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/app/:appId" element={<ModulePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App




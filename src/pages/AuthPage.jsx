
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserPlus,
  LogIn,
  Eye,
  EyeOff,
} from 'lucide-react'

import { useAuth } from '../contexts/AuthContext'
import './AuthPage.css'

export default function AuthPage() {
  const { user, loading, signIn, signUp, resetPassword } = useAuth()

  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (loading) {
    return <div className="auth-loading">Carregando Eldoria...</div>
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  function changeMode(nextMode) {
    setMode(nextMode)
    setMessage('')
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setError('')

    if (!email.trim()) {
      setError('Informe seu e-mail.')
      return
    }

    if (mode !== 'recovery' && password.length < 8) {
      setError('A senha precisa ter pelo menos 8 caracteres.')
      return
    }

    setBusy(true)

    try {
      let result

      if (mode === 'login') {
        result = await signIn(email.trim(), password)
      } else if (mode === 'signup') {
        result = await signUp(email.trim(), password)
      } else {
        result = await resetPassword(email.trim())
      }

      if (result.error) {
        throw result.error
      }

      if (mode === 'signup') {
        if (result.data?.session) {
          setMessage('Conta criada! Entrando no Eldoria...')
        } else {
          setMessage(
            'Conta criada! Confira seu e-mail para confirmar o cadastro.'
          )
        }
      } else if (mode === 'recovery') {
        setMessage('Se o e-mail estiver cadastrado, você receberá as instruções de recuperação.')
      }
    } catch (err) {
      setError(
        err.message || 'Não foi possível realizar a operação.'
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-emblem">
          <ShieldCheck size={36} />
        </div>

        <h1>ELDORIA</h1>

        <p className="auth-subtitle">
          Um reino. Uma conta. Infinitas possibilidades.
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === 'login' ? 'active' : ''}
            onClick={() => changeMode('login')}
          >
            <LogIn size={16} />
            Entrar
          </button>

          <button
            type="button"
            className={mode === 'signup' ? 'active' : ''}
            onClick={() => changeMode('signup')}
          >
            <UserPlus size={16} />
            Criar conta
          </button>
        </div>

        <h2>
          {mode === 'login'
            ? 'Bem-vindo de volta'
            : mode === 'signup'
              ? 'Criar uma conta'
              : 'Recuperar senha'}
        </h2>

        <p className="auth-description">
          {mode === 'login'
            ? 'Entre para continuar sua jornada.'
            : mode === 'signup'
              ? 'Prepare seu acesso ao reino de Eldoria.'
              : 'Informe seu e-mail para receber as instruções.'}
        </p>

        <form onSubmit={handleSubmit}>
          <label>E-mail</label>

          <div className="auth-input">
            <Mail size={18} />
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          {mode !== 'recovery' && (
            <>
              <label>Senha</label>

              <div className="auth-input">
                <LockKeyhole size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo de 8 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete={
                    mode === 'login' ? 'current-password' : 'new-password'
                  }
                />

                <button
                  type="button"
                  className="auth-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </>
          )}

          {mode === 'login' && (
            <button
              type="button"
              className="auth-forgot"
              onClick={() => changeMode('recovery')}
            >
              Esqueci minha senha
            </button>
          )}

          {error && <div className="auth-error">{error}</div>}
          {message && <div className="auth-message">{message}</div>}

          <button
            className="auth-submit"
            type="submit"
            disabled={busy}
          >
            {busy
              ? 'Aguarde...'
              : mode === 'login'
                ? 'Entrar no Eldoria'
                : mode === 'signup'
                  ? 'Criar minha conta'
                  : 'Enviar instruções'}
          </button>
        </form>

        {mode === 'recovery' && (
          <button
            className="auth-back"
            onClick={() => changeMode('login')}
          >
            Voltar para o login
          </button>
        )}

        <div className="auth-footer">
          <ShieldCheck size={15} />
          Sua conta é protegida pelo Supabase.
        </div>
      </div>
    </div>
  )
}

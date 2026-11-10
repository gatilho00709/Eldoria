
import { useEffect, useRef, useState } from 'react'
import {
  Search, Plus, Send, Image, Phone, Video,
  Users, MessageCircle, X, ArrowLeft, Loader2,
} from 'lucide-react'

import {
  LiveKitRoom,
  VideoConference,
} from '@livekit/components-react'

import '@livekit/components-styles'
import './ConnectApp.css'

import {
  getConnectUser,
  createConnectProfile,
  searchConnectUsers,
  listConnectConversations,
  createPrivateConversation,
  createGroup,
  getConnectMessages,
  sendConnectMessage,
  uploadConnectImage,
  getConnectImage,
  subscribeConnectMessages,
  getCallToken,
} from './connectService'

export default function ConnectApp() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [conversations, setConversations] = useState([])
  const [active, setActive] = useState(null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [showGroup, setShowGroup] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupUsers, setGroupUsers] = useState([])
  const [call, setCall] = useState(null)

  const fileRef = useRef(null)
  const messageEnd = useRef(null)

  async function refreshConversations() {
    const data = await listConnectConversations()
    setConversations(data)
  }

  useEffect(() => {
    async function init() {
      try {
        const result = await getConnectUser()
        setUser(result.user)
        setProfile(result.profile)
        if (result.profile) await refreshConversations()
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  
useEffect(() => {
  if (!active) {
    setMessages([])
    return
  }

  let alive = true

  const channel = subscribeConnectMessages(active.id, (payload) => {
    if (!alive) return

    if (payload.eventType === 'INSERT') {
      setMessages((current) => {
        if (current.some((m) => m.id === payload.new.id)) {
          return current
        }

        return [...current, payload.new].sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        )
      })
    }

    if (payload.eventType === 'UPDATE') {
      setMessages((current) =>
        current.map((m) =>
          m.id === payload.new.id ? payload.new : m
        )
      )
    }

    if (payload.eventType === 'DELETE') {
      setMessages((current) =>
        current.filter((m) => m.id !== payload.old.id)
      )
    }
  })

  async function load() {
    try {
      const data = await getConnectMessages(active.id)

      if (alive) {
        setMessages((current) => {
          const combined = new Map()

          data.forEach((message) => combined.set(message.id, message))
          current.forEach((message) => combined.set(message.id, message))

          return [...combined.values()].sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
          )
        })
      }
    } catch (e) {
      if (alive) setError(e.message)
    }
  }

  load()

  return () => {
    alive = false
    channel.unsubscribe()
  }
}, [active?.id])


  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (!search.trim()) {
      setResults([])
      return
    }

    const timer = setTimeout(async () => {
      try {
        setResults(await searchConnectUsers(search))
      } catch (e) {
        setError(e.message)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  async function registerProfile(e) {
    e.preventDefault()
    setBusy(true)
    setError('')

    try {
      const data = await createConnectProfile(username, displayName)
      setProfile(data)
      await refreshConversations()
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  async function openPrivate(target) {
    if (target.user_id === user.id) return

    setBusy(true)
    setError('')

    try {
      const id = await createPrivateConversation(target.user_id)
      await refreshConversations()
      setSearch('')
      const all = await listConnectConversations()
      setConversations(all)
      setActive(all.find((c) => c.id === id) || null)
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  async function makeGroup(e) {
    e.preventDefault()
    if (!groupName.trim() || !groupUsers.length) return

    setBusy(true)
    try {
      const id = await createGroup(groupName, groupUsers)
      await refreshConversations()
      const all = await listConnectConversations()
      setConversations(all)
      setActive(all.find((c) => c.id === id) || null)
      setShowGroup(false)
      setGroupName('')
      setGroupUsers([])
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  
async function send(e) {
  e.preventDefault()
  if (!text.trim() || !active || busy) return

  const content = text.trim()
  setText('')

  try {
    const message = await sendConnectMessage(active.id, content)

    setMessages((current) => {
      if (current.some((m) => m.id === message.id)) return current

      return [...current, message].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      )
    })
  } catch (e) {
    setText(content)
    setError(e.message)
  }
}


  async function uploadImage(e) {
    const file = e.target.files?.[0]
    if (!file || !active) return

    setBusy(true)
    try {
      await uploadConnectImage(active.id, file)
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
      e.target.value = ''
    }
  }

  async function startCall(video) {
    if (!active) return

    setBusy(true)
    setError('')
    try {
      const data = await getCallToken(active.id)
      setCall({ ...data, video })
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  function conversationTitle(conversation) {
    if (conversation.type === 'group') return conversation.name

    const other = conversation.members?.find(
      (m) => m.user_id !== user?.id
    )?.profile

    return other?.display_name || `@${other?.username || 'usuário'}`
  }

  if (loading) {
    return <div className="connect-loading"><Loader2 className="spin"/> Carregando Connect...</div>
  }

  if (error && !user) {
    return <div className="connect-loading">{error}</div>
  }

  if (!profile) {
    return (
      <div className="connect-setup">
        <div className="connect-setup-card">
          <MessageCircle size={38}/>
          <h1>Bem-vindo ao Connect</h1>
          <p>Escolha seu identificador exclusivo.</p>
          <form onSubmit={registerProfile}>
            <label>Nome de exibição</label>
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} required maxLength={40}/>
            <label>Identificador</label>
            <div className="connect-username-input">
              <span>@</span>
              <input value={username} onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))} minLength={3} maxLength={20} required/>
            </div>
            <small>3 a 20 caracteres: letras minúsculas, números e _.</small>
            {error && <p className="connect-error">{error}</p>}
            <button disabled={busy}>{busy ? 'Criando...' : 'Criar perfil'}</button>
          </form>
        </div>
      </div>
    )
  }

  if (call) {
    return (
      <div className="connect-call-page">
        <div className="connect-call-header">
          <span>Chamada do Eldoria Connect</span>
          <button onClick={() => setCall(null)}><X/> Sair</button>
        </div>
        <LiveKitRoom
  serverUrl={call.url}
  token={call.token}
  connect={true}
  video={call.video}
  audio={true}
  onConnected={() => {
    console.log('ELDORIA CONNECT: Conectado ao LiveKit!')
  }}
  onDisconnected={(reason) => {
    console.error('ELDORIA CONNECT: LiveKit desconectou:', reason)
    setError('A conexão com o servidor de chamadas foi encerrada.')
  }}
  style={{ height: 'calc(100% - 60px)' }}
>
  <VideoConference/>
</LiveKitRoom>
      </div>
    )
  }

  return (
    <div className="connect-app">
      <aside className="connect-sidebar">
        <div className="connect-brand">
          <MessageCircle size={25}/>
          <div><strong>ELDORIA</strong><small>CONNECT</small></div>
        </div>

        <div className="connect-profile">
          <div className="connect-avatar">
            {(profile.display_name || profile.username)[0]?.toUpperCase()}
          </div>
          <div>
            <strong>{profile.display_name}</strong>
            <small>@{profile.username}</small>
          </div>
        </div>

        <div className="connect-search">
          <Search size={17}/>
          <input
            placeholder="Buscar @usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search && (
          <div className="connect-search-results">
            {results.map((result) => (
              <button key={result.user_id} onClick={() => openPrivate(result)}>
                <span className="connect-avatar small">
                  {(result.display_name || result.username)[0]?.toUpperCase()}
                </span>
                <span><strong>{result.display_name}</strong><small>@{result.username}</small></span>
              </button>
            ))}
            {!results.length && <small>Nenhum usuário encontrado.</small>}
          </div>
        )}

        <div className="connect-list-heading">
          <span>CONVERSAS</span>
          <button title="Criar grupo" onClick={() => setShowGroup(true)}><Plus size={17}/></button>
        </div>

        <div className="connect-conversation-list">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              className={active?.id === conversation.id ? 'active' : ''}
              onClick={() => setActive(conversation)}
            >
              <span className="connect-avatar">
                {conversation.type === 'group'
                  ? <Users size={19}/>
                  : conversationTitle(conversation)[0]?.toUpperCase()}
              </span>
              <span className="connect-conversation-name">
                <strong>{conversationTitle(conversation)}</strong>
                <small>{conversation.type === 'group' ? 'Grupo' : 'Conversa privada'}</small>
              </span>
            </button>
          ))}
          {!conversations.length && <p className="connect-empty">Nenhuma conversa ainda.</p>}
        </div>
      </aside>

      <main className="connect-main">
        {active ? (
          <>
            <header className="connect-chat-header">
              <button className="connect-mobile-back" onClick={() => setActive(null)}><ArrowLeft/></button>
              <div>
                <strong>{conversationTitle(active)}</strong>
                <small>{active.type === 'group' ? `${active.members?.length || 0} participantes` : 'Conversa privada'}</small>
              </div>
              <div className="connect-chat-actions">
                <button title="Chamada de voz" disabled={busy} onClick={() => startCall(false)}><Phone/></button>
                <button title="Chamada de vídeo" disabled={busy} onClick={() => startCall(true)}><Video/></button>
              </div>
            </header>

            <section className="connect-messages">
              {messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  mine={message.sender_id === user.id}
                />
              ))}
              <div ref={messageEnd}/>
            </section>

            <form className="connect-composer" onSubmit={send}>
              <button type="button" title="Enviar imagem" onClick={() => fileRef.current?.click()}><Image/></button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={uploadImage}
              />
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escreva uma mensagem..."
              />
              <button type="submit" disabled={!text.trim()}><Send/></button>
            </form>
          </>
        ) : (
          <div className="connect-welcome">
            <MessageCircle size={60}/>
            <h2>Bem-vindo ao Eldoria Connect</h2>
            <p>Selecione uma conversa ou procure alguém pelo identificador @usuario.</p>
          </div>
        )}
      </main>

      {error && (
        <div className="connect-toast">
          {error}
          <button onClick={() => setError('')}><X size={16}/></button>
        </div>
      )}

      {showGroup && (
        <div className="connect-modal-backdrop">
          <form className="connect-modal" onSubmit={makeGroup}>
            <button type="button" className="connect-modal-close" onClick={() => setShowGroup(false)}><X/></button>
            <h2>Criar grupo</h2>
            <label>Nome do grupo</label>
            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} required maxLength={60}/>
            <label>Adicionar participantes</label>
            <input placeholder="Pesquisar @usuário" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="connect-group-results">
              {results.map((result) => (
                <label key={result.user_id}>
                  <input
                    type="checkbox"
                    checked={groupUsers.includes(result.user_id)}
                    onChange={(e) => setGroupUsers((old) =>
                      e.target.checked
                        ? [...old, result.user_id]
                        : old.filter((id) => id !== result.user_id)
                    )}
                  />
                  @{result.username}
                </label>
              ))}
            </div>
            <button disabled={busy || !groupName.trim()}>Criar grupo</button>
          </form>
        </div>
      )}
    </div>
  )
}

function Message({ message, mine }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    let alive = true

    if (message.message_type === 'image' && message.attachment_path) {
      getConnectImage(message.attachment_path)
        .then((url) => { if (alive) setImageUrl(url) })
        .catch(() => {})
    }

    return () => { alive = false }
  }, [message.id, message.attachment_path])

  return (
    <div className={`connect-message ${mine ? 'mine' : ''}`}>
      <div className="connect-message-bubble">
        {message.message_type === 'image' ? (
          imageUrl
            ? <a href={imageUrl} target="_blank" rel="noreferrer"><img src={imageUrl} alt={message.content}/></a>
            : <span>Carregando imagem...</span>
        ) : message.content}
        <small>{new Date(message.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</small>
      </div>
    </div>
  )
}

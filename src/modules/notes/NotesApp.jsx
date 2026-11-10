
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Plus, Search, Trash2, FileText, Moon, Sun,
  Clock, NotebookPen, Bold, Italic, Underline,
  List, ListOrdered, Heading2, Palette, Highlighter,
  Folder, FolderPlus, Pin, Download, MoreVertical,
  X, Check, Type, AlignLeft
} from 'lucide-react'
import './NotesApp.css'
import {
  loadNotesData,
  syncNotesWorkspace,
} from '../../services/eldoriaData'

const STORAGE_KEY = 'eldoria-notes'
const FOLDERS_KEY = 'eldoria-notes-folders'

const defaultFolders = [
  { id: 'general', name: 'Geral' },
  { id: 'ideas', name: 'Ideias' },
  { id: 'projects', name: 'Projetos' },
]

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function normalizeContent(content = '') {
  if (/<(p|div|br|strong|b|em|i|u|h[1-6]|ul|ol|li|span)\b/i.test(content)) {
    return content
  }

  return content
    .split('\n')
    .map(line => `<div>${escapeHtml(line) || '<br>'}</div>`)
    .join('')
}


function getLines(html = '') {
  const element = document.createElement('div')
  element.innerHTML = normalizeContent(html)

  function extractLines(node) {
    const lines = ['']

    function addBreak() {
      if (lines[lines.length - 1] !== '') {
        lines.push('')
      }
    }

    function visit(current) {
      if (current.nodeType === Node.TEXT_NODE) {
        const parts = current.textContent.split(/\r?\n/)

        parts.forEach((part, index) => {
          if (index > 0) lines.push('')
          lines[lines.length - 1] += part
        })

        return
      }

      if (current.nodeType !== Node.ELEMENT_NODE) return

      const tag = current.tagName.toLowerCase()

      if (tag === 'br') {
        lines.push('')
        return
      }

      const isBlock = [
        'div', 'p', 'h1', 'h2', 'h3',
        'h4', 'h5', 'h6', 'li'
      ].includes(tag)

      if (isBlock && lines[lines.length - 1] !== '') {
        lines.push('')
      }

      Array.from(current.childNodes).forEach(visit)

      if (isBlock && lines[lines.length - 1] !== '') {
        lines.push('')
      }
    }

    Array.from(node.childNodes).forEach(visit)

    return lines
  }

  const lines = extractLines(element)

  while (lines.length > 1 && lines[lines.length - 1] === '') {
    lines.pop()
  }

  return lines.length ? lines : ['']
}


function createNote(folderId = 'general') {
  const now = new Date().toISOString()

  return {
    id: crypto.randomUUID(),
    title: 'Nova anotação',
    content: '<div><br></div>',
    folderId,
    favorite: false,
    createdAt: now,
    updatedAt: now,
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function NotesApp() {
  const [notes, setNotes] = useState([])
const [folders, setFolders] = useState([])

const [cloudReady, setCloudReady] = useState(false)
const [cloudStatus, setCloudStatus] = useState('Conectando ao Supabase...')

  const [selectedId, setSelectedId] = useState(null)
  const [selectedFolder, setSelectedFolder] = useState('all')
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const [fontSize, setFontSize] = useState(16)
  const [fontFamily, setFontFamily] = useState('Georgia')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const editorRef = useRef(null)
  const selectedNote = notes.find(note => note.id === selectedId)

  useEffect(() => {
  let active = true

  async function load() {
    try {
      setCloudStatus('Carregando anotações...')

      const data = await loadNotesData()

      if (!active) return

      setFolders(data.folders)
      setNotes(data.notes)
      setCloudReady(true)
      setCloudStatus('Conectado ao Supabase')
    } catch (error) {
      console.error('Erro ao carregar anotações:', error)

      if (active) {
        setCloudStatus('Erro ao conectar: ' + error.message)
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

      await syncNotesWorkspace(notes, folders)

      setCloudStatus('Salvo na nuvem')
    } catch (error) {
      console.error('Erro ao salvar anotações:', error)
      setCloudStatus('Erro ao salvar: ' + error.message)
    }
  }, 500)

  return () => clearTimeout(timer)
}, [notes, folders, cloudReady])

  useEffect(() => {
    if (editorRef.current && selectedNote) {
      editorRef.current.innerHTML = normalizeContent(
        selectedNote.content
      )
    }
  }, [selectedId])

  const matchingResults = useMemo(() => {
    const term = search.trim().toLocaleLowerCase('pt-BR')

    if (!term) return []

    const results = []

    notes.forEach(note => {
      const lines = getLines(note.content)

      lines.forEach((line, index) => {
        if (line.toLocaleLowerCase('pt-BR').includes(term)) {
          results.push({
            noteId: note.id,
            title: note.title || 'Sem título',
            line,
            lineNumber: index + 1,
          })
        }
      })

      if (note.title.toLocaleLowerCase('pt-BR').includes(term)) {
        results.push({
          noteId: note.id,
          title: note.title || 'Sem título',
          line: `Título: ${note.title}`,
          lineNumber: null,
        })
      }
    })

    return results
  }, [notes, search])

  const filteredNotes = useMemo(() => {
    return [...notes]
      .filter(note =>
        selectedFolder === 'all'
          ? true
          : note.folderId === selectedFolder
      )
      .sort((a, b) => {
        if (a.favorite !== b.favorite) {
          return Number(b.favorite) - Number(a.favorite)
        }

        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })
  }, [notes, selectedFolder])

  function addNote() {
    const generalFolder = folders.find(
  folder => folder.name === 'Geral'
)

const folderId = selectedFolder === 'all'
  ? generalFolder?.id
  : selectedFolder

if (!folderId) {
  setCloudStatus('Não foi possível encontrar a pasta Geral.')
  return
}

const note = createNote(folderId)

    setNotes(previous => [note, ...previous])
    setSelectedId(note.id)
    setSearch('')
    setShowSearchResults(false)
  }

  function updateNote(field, value) {
    setNotes(previous =>
      previous.map(note =>
        note.id === selectedId
          ? {
              ...note,
              [field]: value,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    )
  }

  function handleEditorInput() {
    if (!editorRef.current) return

    updateNote('content', editorRef.current.innerHTML)
  }

  
function deleteFolder(folderId) {
  const generalFolder = folders.find(
    folder => folder.name === 'Geral'
  )

  if (!generalFolder || folderId === generalFolder.id) return

  const folder = folders.find(item => item.id === folderId)
  if (!folder) return

  if (!window.confirm(
    `Excluir a pasta "${folder.name}"? As anotações serão movidas para Geral.`
  )) return

  setNotes(previous =>
    previous.map(note =>
      note.folderId === folderId
        ? {
            ...note,
            folderId: generalFolder.id,
            updatedAt: new Date().toISOString(),
          }
        : note
    )
  )

  setFolders(previous =>
    previous.filter(folder => folder.id !== folderId)
  )

  setSelectedFolder('all')
}


  function toggleFavorite(id) {
    setNotes(previous =>
      previous.map(note =>
        note.id === id
          ? { ...note, favorite: !note.favorite }
          : note
      )
    )
  }

  function addFolder() {
    const name = window.prompt('Nome da nova pasta:')

    if (!name?.trim()) return

    const folder = {
      id: crypto.randomUUID(),
      name: name.trim(),
    }

    setFolders(previous => [...previous, folder])
    setSelectedFolder(folder.id)
  }


  function format(command, value = null) {
    editorRef.current?.focus()
    document.execCommand(command, false, value)
    handleEditorInput()
  }

  function changeFolder(folderId) {
    if (!selectedNote) return
    updateNote('folderId', folderId)
  }

  function openSearchResult(result) {
    setSelectedId(result.noteId)
    setShowSearchResults(false)
  }

  function exportNote(type) {
    if (!selectedNote) return

    const content = type === 'txt'
      ? getLines(selectedNote.content).join('\n')
      : `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(selectedNote.title)}</title>
</head>
<body>
<h1>${escapeHtml(selectedNote.title)}</h1>
${normalizeContent(selectedNote.content)}
</body>
</html>`

    const blob = new Blob(
      [content],
      { type: type === 'txt' ? 'text/plain;charset=utf-8' : 'text/html;charset=utf-8' }
    )

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = `${selectedNote.title || 'anotacao'}.${type}`
    link.click()

    URL.revokeObjectURL(url)
  }

  const selectedFolderName = folders.find(
    folder => folder.id === selectedNote?.folderId
  )?.name || 'Geral'

  return (
    <div className={`notes-app ${darkMode ? 'notes-dark' : 'notes-light'}`}>
      <header className="notes-header">
        <div className="notes-heading">
          <div className="notes-heading-icon">
            <NotebookPen size={25} />
          </div>

          <div>
            <span className="notes-eyebrow">Biblioteca pessoal</span>
            <h1>Bloco de Notas</h1>
            <p>O registro das ideias do seu reino.</p>
          </div>
        </div>

        <div className="notes-header-actions">
          <button
            className="notes-theme-button"
            onClick={() => setDarkMode(value => !value)}
            title="Alternar tema"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="notes-new-button" onClick={addNote}>
            <Plus size={19} />
            Nova anotação
          </button>
        </div>
      </header>

      <div className="notes-workspace">
        <aside className="notes-sidebar">
          <div className="notes-search">
            <Search size={17} />
            <input
              placeholder="Pesquisar palavras..."
              value={search}
              onChange={event => {
                setSearch(event.target.value)
                setShowSearchResults(true)
              }}
            />
            {search && (
              <button onClick={() => setSearch('')}>
                <X size={15} />
              </button>
            )}
          </div>

          {search.trim() ? (
            <section className="notes-search-results">
              <div className="notes-list-heading">
                <span>RESULTADOS DA PESQUISA</span>
                <span>{matchingResults.length}</span>
              </div>

              {matchingResults.length === 0 ? (
                <p className="notes-muted-message">
                  Nenhuma ocorrência encontrada.
                </p>
              ) : (
                matchingResults.map((result, index) => (
                  <button
                    className="notes-result"
                    key={`${result.noteId}-${result.lineNumber}-${index}`}
                    onClick={() => openSearchResult(result)}
                  >
                    <strong>{result.title}</strong>
                    <span>
                      {result.lineNumber
                        ? `Linha ${result.lineNumber}`
                        : 'Título'}
                    </span>
                    <p>{result.line}</p>
                  </button>
                ))
              )}
            </section>
          ) : (
            <>
              <div className="notes-list-heading">
                <span>PASTAS DO REINO</span>
                <button onClick={addFolder} title="Criar pasta">
                  <FolderPlus size={16} />
                </button>
              </div>

              <div className="notes-folders">
                <button
                  className={selectedFolder === 'all' ? 'active' : ''}
                  onClick={() => setSelectedFolder('all')}
                >
                  <Folder size={16} />
                  Todas
                  <span>{notes.length}</span>
                </button>

                {folders.map(folder => (
                  <div className="notes-folder-row" key={folder.id}>
                    <button
                      className={selectedFolder === folder.id ? 'active' : ''}
                      onClick={() => setSelectedFolder(folder.id)}
                    >
                      <Folder size={16} />
                      {folder.name}
                      <span>
                        {notes.filter(note => note.folderId === folder.id).length}
                      </span>
                    </button>

                    {folder.name !== 'Geral' && (
                      <button
                        className="notes-folder-delete"
                        onClick={() => deleteFolder(folder.id)}
                        title="Excluir pasta"
                      >
                        <X size={13} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="notes-list-heading">
                <span>ANOTAÇÕES</span>
                <span>{filteredNotes.length}</span>
              </div>

              <div className="notes-list">
                {filteredNotes.map(note => (
                  <div
                    key={note.id}
                    className={`notes-list-item ${
                      selectedId === note.id ? 'selected' : ''
                    }`}
                  >
                    <button
                      className="notes-note-open"
                      onClick={() => setSelectedId(note.id)}
                    >
                      <FileText size={18} />

                      <div className="notes-list-info">
                        <strong>
                          {note.favorite && <Pin size={12} />}
                          {note.title || 'Sem título'}
                        </strong>
                        <span>
                          {getLines(note.content).join(' ').slice(0, 55) ||
                            'Anotação vazia'}
                        </span>
                        <small>{formatDate(note.updatedAt)}</small>
                      </div>
                    </button>
                  </div>
                ))}

                {filteredNotes.length === 0 && (
                  <div className="notes-empty-list">
                    <FileText size={27} />
                    <p>Nenhuma anotação nesta pasta.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </aside>

        <main className="notes-editor">
          {selectedNote ? (
            <>
              <div className="notes-editor-toolbar">
                <div className="notes-save-status">
                  <Clock size={15} />
                  {cloudStatus}
                </div>

                <div className="notes-editor-actions">
                  <select
                    value={selectedNote.folderId || 'general'}
                    onChange={event => changeFolder(event.target.value)}
                    aria-label="Mover para pasta"
                  >
                    {folders.map(folder => (
                      <option key={folder.id} value={folder.id}>
                        {folder.name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="notes-icon-button"
                    onClick={() => toggleFavorite(selectedNote.id)}
                    title="Favoritar"
                  >
                    <Pin
                      size={17}
                      fill={selectedNote.favorite ? 'currentColor' : 'none'}
                    />
                  </button>

                  <div className="notes-export-menu">
                    <button className="notes-icon-button" title="Exportar TXT" onClick={() => exportNote('txt')}>
                      <Download size={17} />
                    </button>
                    <button className="notes-icon-button" title="Exportar HTML" onClick={() => exportNote('html')}>
                      <FileText size={17} />
                    </button>
                  </div>

                  <button
                    className="notes-delete-button"
                    onClick={() => deleteNote(selectedNote.id)}
                    title="Excluir anotação"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>

              <input
                className="notes-title-input"
                value={selectedNote.title}
                onChange={event => updateNote('title', event.target.value)}
                placeholder="Título da anotação"
              />

              <div className="notes-date">
                <Folder size={13} />
                {selectedFolderName}
                <span>•</span>
                Editado em {formatDate(selectedNote.updatedAt)}
              </div>

              <div className="notes-format-toolbar">
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('bold')} title="Negrito">
                  <Bold size={17} />
                </button>
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('italic')} title="Itálico">
                  <Italic size={17} />
                </button>
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('underline')} title="Sublinhado">
                  <Underline size={17} />
                </button>
                <span />
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('formatBlock', 'H2')} title="Título">
                  <Heading2 size={18} />
                </button>
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('insertUnorderedList')} title="Lista">
                  <List size={17} />
                </button>
                <button onMouseDown={event => event.preventDefault()} onClick={() => format('insertOrderedList')} title="Lista numerada">
                  <ListOrdered size={17} />
                </button>
                <span />
                <label title="Cor do texto">
                  <Palette size={17} />
                  <input
                    type="color"
                    onChange={event => format('foreColor', event.target.value)}
                  />
                </label>
                <label title="Destacar texto">
                  <Highlighter size={17} />
                  <input
                    type="color"
                    defaultValue="#f2d36b"
                    onChange={event => format('hiliteColor', event.target.value)}
                  />
                </label>
              </div>

              <div className="notes-font-toolbar">
                <Type size={16} />

                <select
                  value={fontFamily}
                  onChange={event => setFontFamily(event.target.value)}
                  aria-label="Fonte"
                >
                  <option value="Georgia">Georgia</option>
                  <option value="Arial">Arial</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                </select>

                <select
                  value={fontSize}
                  onChange={event => setFontSize(Number(event.target.value))}
                  aria-label="Tamanho da fonte"
                >
                  <option value={12}>12 px</option>
                  <option value={14}>14 px</option>
                  <option value={16}>16 px</option>
                  <option value={18}>18 px</option>
                  <option value={20}>20 px</option>
                  <option value={24}>24 px</option>
                  <option value={28}>28 px</option>
                  <option value={32}>32 px</option>
                </select>
              </div>

              <div
                ref={editorRef}
                className="notes-content-input"
                contentEditable
                suppressContentEditableWarning
                spellCheck
                onInput={handleEditorInput}
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily,
                }}
                data-placeholder="Comece a escrever sua anotação..."
              />
              <div className="notes-editor-bottom">
                <span>
                  {getLines(selectedNote.content).join(' ').trim().split(/\s+/).filter(Boolean).length} palavras
                </span>
                <span>{getLines(selectedNote.content).length} linhas</span>
              </div>
            </>
          ) : (
            <div className="notes-welcome">
              <div className="notes-welcome-icon">
                <NotebookPen size={42} />
              </div>

              <h2>Seu espaço de ideias</h2>
              <p>
                Escolha uma anotação ou crie uma nova para começar
                a escrever.
              </p>

              <button className="notes-new-button" onClick={addNote}>
                <Plus size={19} />
                Criar anotação
              </button>
            </div>
          )}
        </main>
      </div>

      <footer className="notes-footer">
        <span>ELDORIA • BLOCO DE NOTAS</span>
        <span>{notes.length} anotação(ões) armazenada(s)</span>
      </footer>
    </div>
  )
}


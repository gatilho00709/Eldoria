
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Code2, Folder, FolderPlus, FileCode, Plus,
  Search, Trash2, Star, Save, History,
  ChevronRight, Library, Lock,
  Loader2, X, Copy, Download, RefreshCw,
} from 'lucide-react'

import CodeEditor from './CodeEditor'
import './CodeLibrary.css'

import {
  listLibraries,
  createLibrary,
  deleteLibrary,
  listFolders,
  createFolder,
  listLibraryItems,
  createSnippet,
  createCodeFile,
  updateCodeItem,
  deleteCodeItem,
  toggleFavorite,
  listVersions,
  restoreVersion,
} from './codeLibraryService'

export default function CodeLibraryApp() {
  const [libraries, setLibraries] = useState([])
  const [activeLibrary, setActiveLibrary] = useState(null)

  const [folders, setFolders] = useState([])
  const [items, setItems] = useState([])
  const [activeFolder, setActiveFolder] = useState(null)
  const [activeItem, setActiveItem] = useState(null)

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const [showLibraryModal, setShowLibraryModal] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const [libraryName, setLibraryName] = useState('')
  const [libraryDescription, setLibraryDescription] = useState('')

  const [versions, setVersions] = useState([])

  const [draft, setDraft] = useState({
    title: '',
    content: '',
    language: 'javascript',
    description: '',
  })

  const loadLibraries = useCallback(async () => {
    try {
      setLoading(true)
      setError('')

      const data = await listLibraries()
      setLibraries(data)

      if (activeLibrary) {
        const updated = data.find(item => item.id === activeLibrary.id)
        setActiveLibrary(updated || null)
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [activeLibrary])

  const loadLibraryContent = useCallback(async (library) => {
    if (!library) return

    try {
      setError('')

      const [folderData, itemData] = await Promise.all([
        listFolders(library.id),
        listLibraryItems(library.id),
      ])

      setFolders(folderData)
      setItems(itemData)
      setActiveFolder(null)
      setActiveItem(null)
    } catch (e) {
      setError(e.message)
    }
  }, [])

  useEffect(() => {
    loadLibraries()
  }, [])

  useEffect(() => {
    if (activeLibrary) {
      loadLibraryContent(activeLibrary)
    }
  }, [activeLibrary?.id])

  const visibleItems = useMemo(() => {
    return items.filter(item => {
      const matchesFolder = activeFolder
        ? item.folder_id === activeFolder
        : !item.folder_id

      const query = search.trim().toLowerCase()

      const matchesSearch = !query || [
        item.display_name,
        item.content,
        item.description,
        item.language,
        ...(item.tags || []),
      ].some(value => String(value || '').toLowerCase().includes(query))

      return matchesFolder && matchesSearch
    })
  }, [items, activeFolder, search])

  function selectItem(item) {
    setActiveItem(item)

    setDraft({
      title: item.item_type === 'snippet' ? item.title : item.name,
      content: item.content || '',
      language: item.language || 'javascript',
      description: item.description || '',
    })

    setStatus('')
  }

  function changeDraft(field, value) {
    setDraft(current => ({
      ...current,
      [field]: value,
    }))
  }

  // ===================================================
  // SALVAMENTO AUTOMATICO
  // ===================================================

  useEffect(() => {
    if (!activeItem) return

    const title = draft.title.trim()
    if (!title) return

    const originalTitle = activeItem.item_type === 'snippet'
      ? activeItem.title
      : activeItem.name

    const changed =
      draft.content !== (activeItem.content || '') ||
      title !== originalTitle ||
      draft.language !== activeItem.language ||
      draft.description !== (activeItem.description || '')

    if (!changed) return

    setStatus('Aguardando alterações...')

    const timeout = setTimeout(async () => {
      try {
        setSaving(true)
        setStatus('Salvando...')

        const changes = {
          content: draft.content,
          language: draft.language,
        }

        if (activeItem.item_type === 'snippet') {
          changes.title = title
          changes.description = draft.description
        } else {
          changes.name = title
          changes.extension = title.includes('.')
            ? title.split('.').pop()
            : ''
        }

        const updated = await updateCodeItem(
          activeItem.item_type,
          activeItem.id,
          changes
        )

        setItems(current =>
          current.map(item =>
            item.id === updated.id ? updated : item
          )
        )

        setActiveItem(updated)
        setStatus('Todas as alterações foram salvas.')
      } catch (e) {
        setError(`Erro ao salvar: ${e.message}`)
        setStatus('Erro ao salvar.')
      } finally {
        setSaving(false)
      }
    }, 900)

    return () => clearTimeout(timeout)
  }, [draft, activeItem?.id])

  // ===================================================
  // CRIAR BIBLIOTECA
  // ===================================================

  async function handleCreateLibrary(e) {
  e.preventDefault()

  try {
    const library = await createLibrary(
      libraryName,
      libraryDescription
    )

    setLibraries(current => [library, ...current])
    setActiveLibrary(library)

    setLibraryName('')
    setLibraryDescription('')
    setShowLibraryModal(false)
  } catch (e) {
    setError(e.message)
  }
}
async function handleDeleteLibrary() {
  if (!activeLibrary) return

  const confirmed = window.confirm(
    `Tem certeza que deseja excluir a biblioteca "${activeLibrary.name}"? Esta ação não poderá ser desfeita.`
  )

  if (!confirmed) return

  try {
    await deleteLibrary(activeLibrary.id)

    setLibraries(current =>
      current.filter(library => library.id !== activeLibrary.id)
    )

    setActiveLibrary(null)
    setFolders([])
    setItems([])
    setActiveFolder(null)
    setActiveItem(null)

    setStatus('Biblioteca excluída.')
  } catch (e) {
    setError(`Erro ao excluir biblioteca: ${e.message}`)
  }
}

  // ===================================================
  // CRIAR PASTA
  // ===================================================

  async function handleCreateFolder() {
    if (!activeLibrary) return

    const name = window.prompt('Nome da nova pasta:')
    if (!name?.trim()) return

    try {
      const folder = await createFolder(
        activeLibrary.id,
        name.trim(),
        activeFolder
      )

      setFolders(current => [...current, folder])
    } catch (e) {
      setError(e.message)
    }
  }

  // ===================================================
  // CRIAR CONTEUDO
  // ===================================================

  async function handleCreateItem(type) {
    if (!activeLibrary) return

    try {
      const item = type === 'snippet'
        ? await createSnippet(activeLibrary.id, activeFolder)
        : await createCodeFile(activeLibrary.id, activeFolder)

      setItems(current => [item, ...current])
      selectItem(item)
    } catch (e) {
      setError(e.message)
    }
  }

  // ===================================================
  // EXCLUIR CONTEUDO
  // ===================================================

  async function handleDeleteItem() {
    if (!activeItem) return

    if (!window.confirm('Deseja excluir este conteúdo?')) return

    try {
      await deleteCodeItem(activeItem.item_type, activeItem.id)

      setItems(current =>
        current.filter(item => item.id !== activeItem.id)
      )

      setActiveItem(null)
    } catch (e) {
      setError(e.message)
    }
  }

  // ===================================================
  // FAVORITOS
  // ===================================================

  async function handleFavorite() {
    if (!activeItem) return

    try {
      const updated = await toggleFavorite(
        activeItem.item_type,
        activeItem.id,
        !activeItem.is_favorite
      )

      const normalized = {
        ...updated,
        item_type: activeItem.item_type,
        display_name: activeItem.item_type === 'snippet'
          ? updated.title
          : updated.name,
      }

      setActiveItem(normalized)
      setItems(current =>
        current.map(item =>
          item.id === normalized.id ? normalized : item
        )
      )
    } catch (e) {
      setError(e.message)
    }
  }



  // ===================================================
  // HISTORICO
  // ===================================================

  async function handleHistory() {
    if (!activeItem) return

    try {
      const data = await listVersions(
        activeItem.item_type,
        activeItem.id
      )

      setVersions(data)
      setShowHistory(true)
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleRestore(version) {
    if (!window.confirm('Restaurar esta versão?')) return

    try {
      const updated = await restoreVersion(
        activeItem.item_type,
        activeItem.id,
        version
      )

      setActiveItem(updated)

      setDraft({
        title: activeItem.item_type === 'snippet'
          ? updated.title
          : updated.name,
        content: updated.content,
        language: updated.language,
        description: updated.description || '',
      })

      setItems(current =>
        current.map(item =>
          item.id === updated.id ? updated : item
        )
      )

      setShowHistory(false)
    } catch (e) {
      setError(e.message)
    }
  }

  // ===================================================
  // COPIAR E BAIXAR
  // ===================================================

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(draft.content)
      setStatus('Código copiado!')
    } catch {
      setError('Não foi possível copiar o código.')
    }
  }

  function downloadCode() {
    const blob = new Blob([draft.content], {
      type: 'text/plain;charset=utf-8',
    })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = draft.title || 'codigo.txt'
    link.click()

    URL.revokeObjectURL(url)
  }

  // ===================================================
  // INTERFACE
  // ===================================================

  if (loading) {
    return (
      <div className="cl-loading">
        <Loader2 className="cl-spin" size={32}/>
        <p>Carregando Eldoria Code Library...</p>
      </div>
    )
  }

  return (
    <div className="cl-app">

      {/* SIDEBAR */}

      <aside className="cl-sidebar">

        <div className="cl-brand">
          <Code2 size={25}/>
          <div>
            <strong>Code Library</strong>
            <small>ELDORIA</small>
          </div>
        </div>

        <button
          className="cl-new-library"
          onClick={() => setShowLibraryModal(true)}
        >
          <Plus size={17}/>
          Nova biblioteca
        </button>

        <div className="cl-sidebar-heading">
          MINHAS BIBLIOTECAS
        </div>

        <div className="cl-library-list">
          {libraries.map(library => (
            <button
              key={library.id}
              className={
                activeLibrary?.id === library.id
                  ? 'cl-library active'
                  : 'cl-library'
              }
              onClick={() => {
                setActiveLibrary(library)
                setSearch('')
              }}
            >
              <Lock size={17}/>

              <span>{library.name}</span>
            </button>
          ))}

          {libraries.length === 0 && (
            <p className="cl-empty">
              Nenhuma biblioteca criada.
            </p>
          )}
        </div>

        <div className="cl-sidebar-bottom">
          <span>ELDORIA SYSTEM</span>
          <small>Code Library</small>
        </div>

      </aside>

      {/* AREA PRINCIPAL */}

      <main className="cl-main">

        {!activeLibrary ? (
          <div className="cl-welcome">
            <Library size={55}/>
            <h2>Sua biblioteca de códigos</h2>
            <p>
              Organize snippets, arquivos e projetos
              em um único lugar.
            </p>

            <button
              onClick={() => setShowLibraryModal(true)}
            >
              <Plus size={17}/>
              Criar primeira biblioteca
            </button>
          </div>
        ) : (
          <>
            <header className="cl-header">
              <div>
                <span>ELDORIA / CODE LIBRARY</span>
                <h2>{activeLibrary.name}</h2>
              </div>

              <div className="cl-header-actions">

  <button
    title="Atualizar"
    onClick={() => loadLibraryContent(activeLibrary)}
  >
    <RefreshCw size={18}/>
  </button>

  <button
    className="cl-delete"
    title="Excluir biblioteca"
    onClick={handleDeleteLibrary}
  >
    <Trash2 size={18}/>
  </button>

</div>
            </header>

            <div className="cl-workspace">

              {/* EXPLORADOR */}

              <section className="cl-explorer">

                <div className="cl-explorer-title">
                  <strong>EXPLORADOR</strong>

                  <div>
                    <button
                      title="Nova pasta"
                      onClick={handleCreateFolder}
                    >
                      <FolderPlus size={17}/>
                    </button>
                    <button
                      title="Novo snippet"
                      onClick={() => handleCreateItem('snippet')}
                    >
                      <Plus size={17}/>
                    </button>
                  </div>
                </div>

                <div className="cl-search">
                  <Search size={16}/>
                  <input
                    placeholder="Pesquisar códigos..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>

                <button
                  className={!activeFolder ? 'cl-folder active' : 'cl-folder'}
                  onClick={() => setActiveFolder(null)}
                >
                  <Folder size={16}/>
                  Raiz da biblioteca
                </button>

                {folders
                  .filter(folder => folder.parent_id === activeFolder)
                  .map(folder => (
                    <button
                      key={folder.id}
                      className="cl-folder"
                      onClick={() => setActiveFolder(folder.id)}
                    >
                      <Folder size={16}/>
                      {folder.name}
                      <ChevronRight size={14}/>
                    </button>
                  ))}

                <div className="cl-file-list">
                  {visibleItems.map(item => (
                    <button
                      key={`${item.item_type}-${item.id}`}
                      className={
                        activeItem?.id === item.id
                          ? 'cl-file active'
                          : 'cl-file'
                      }
                      onClick={() => selectItem(item)}
                    >
                      {item.item_type === 'snippet'
                        ? <Code2 size={16}/>
                        : <FileCode size={16}/>
                      }

                      <span>{item.display_name}</span>

                      {item.is_favorite && (
                        <Star size={13} fill="currentColor"/>
                      )}
                    </button>
                  ))}

                  {visibleItems.length === 0 && (
                    <p className="cl-empty">
                      Nenhum conteúdo nesta pasta.
                    </p>
                  )}
                </div>

                <button
                  className="cl-create-file"
                  onClick={() => handleCreateItem('file')}
                >
                  <Plus size={16}/>
                  Novo arquivo
                </button>

              </section>

              {/* EDITOR */}

              <section className="cl-editor-area">

                {!activeItem ? (
                  <div className="cl-editor-welcome">
                    <Code2 size={45}/>
                    <h3>Selecione um código</h3>
                    <p>
                      Escolha um arquivo ou snippet
                      para começar a editar.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="cl-editor-toolbar">

                      <input
                        className="cl-title-input"
                        value={draft.title}
                        onChange={e =>
                          changeDraft('title', e.target.value)
                        }
                      />

                      <select
                        value={draft.language}
                        onChange={e =>
                          changeDraft('language', e.target.value)
                        }
                      >
                        {[
                          'javascript',
                          'typescript',
                          'html',
                          'css',
                          'json',
                          'python',
                          'sql',
                          'markdown',
                          'text',
                        ].map(language => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>

                      <button
                        title="Favoritar"
                        onClick={handleFavorite}
                      >
                        <Star
                          size={17}
                          fill={activeItem.is_favorite ? 'currentColor' : 'none'}
                        />
                      </button>

                      <button title="Copiar" onClick={copyCode}>
                        <Copy size={17}/>
                      </button>

                      <button title="Baixar" onClick={downloadCode}>
                        <Download size={17}/>
                      </button>

                      <button title="Histórico" onClick={handleHistory}>
                        <History size={17}/>
                      </button>

                      <button
                        className="cl-delete"
                        title="Excluir"
                        onClick={handleDeleteItem}
                      >
                        <Trash2 size={17}/>
                      </button>

                    </div>

                    {activeItem.item_type === 'snippet' && (
                      <input
                        className="cl-description"
                        placeholder="Descrição do snippet..."
                        value={draft.description}
                        onChange={e =>
                          changeDraft('description', e.target.value)
                        }
                      />
                    )}

                    <CodeEditor
                      value={draft.content}
                      language={draft.language}
                      onChange={value =>
                        changeDraft('content', value)
                      }
                    />

                    <div className="cl-status">
                      <span>
                        {saving
                          ? <><Loader2 size={13}/> Salvando...</>
                          : <><Save size={13}/> {status || 'Sincronizado'}</>
                        }
                      </span>

                      <span>
                        {draft.language.toUpperCase()}
                      </span>
                    </div>
                  </>
                )}

              </section>
            </div>
          </>
        )}
      </main>

      {/* MODAL: NOVA BIBLIOTECA */}

      {showLibraryModal && (
        <div className="cl-modal-backdrop">
          <form
            className="cl-modal"
            onSubmit={handleCreateLibrary}
          >
            <button
              type="button"
              className="cl-modal-close"
              onClick={() => setShowLibraryModal(false)}
            >
              <X/>
            </button>

            <h2>Nova biblioteca</h2>

            <label>Nome</label>
            <input
              required
              value={libraryName}
              onChange={e => setLibraryName(e.target.value)}
              placeholder="Ex: Desenvolvimento Web"
            />

            <label>Descrição</label>
            <textarea
              value={libraryDescription}
              onChange={e => setLibraryDescription(e.target.value)}
              placeholder="Descreva sua biblioteca..."
            />

            <button type="submit">
              Criar biblioteca
            </button>
          </form>
        </div>
      )}

      {/* MODAL: HISTORICO */}

      {showHistory && (
        <div className="cl-modal-backdrop">
          <div className="cl-modal cl-history">
            <button
              className="cl-modal-close"
              onClick={() => setShowHistory(false)}
            >
              <X/>
            </button>

            <h2>Histórico de versões</h2>

            {versions.length === 0 ? (
              <p>Nenhuma versão anterior encontrada.</p>
            ) : versions.map(version => (
              <div className="cl-version" key={version.id}>
                <div>
                  <strong>{version.title}</strong>
                  <small>
                    {new Date(version.created_at).toLocaleString('pt-BR')}
                  </small>
                </div>

                <button onClick={() => handleRestore(version)}>
                  Restaurar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ERROS */}

      {error && (
        <div className="cl-error">
          <span>{error}</span>
          <button onClick={() => setError('')}>
            <X size={16}/>
          </button>
        </div>
      )}

    </div>
  )
}
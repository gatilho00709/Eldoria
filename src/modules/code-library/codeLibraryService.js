
import { supabase } from '../../services/supabase'

// =====================================================
// BIBLIOTECAS
// =====================================================

export async function listLibraries() {
  const { data, error } = await supabase
    .from('code_libraries')
    .select('*')
    .order('updated_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function createLibrary(name, description) {
  const { data: { user }, error: authError } =
    await supabase.auth.getUser()

  if (authError) throw authError
  if (!user) throw new Error('Você precisa estar logado.')

  const { data, error } = await supabase
    .from('code_libraries')
    .insert({
      owner_id: user.id,
      name: name.trim(),
      description,
      visibility: 'private',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateLibrary(id, changes) {
  const { data, error } = await supabase
    .from('code_libraries')
    .update(changes)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteLibrary(id) {
  const { error } = await supabase
    .from('code_libraries')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// =====================================================
// PASTAS
// =====================================================

export async function listFolders(libraryId) {
  const { data, error } = await supabase
    .from('code_folders')
    .select('*')
    .eq('library_id', libraryId)
    .order('name')

  if (error) throw error
  return data || []
}

export async function createFolder(libraryId, name, parentId = null) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const { data, error } = await supabase
    .from('code_folders')
    .insert({
      library_id: libraryId,
      name,
      parent_id: parentId,
      created_by: user.id,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteFolder(id) {
  const { error } = await supabase
    .from('code_folders')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// =====================================================
// CONTEUDO DA BIBLIOTECA
// =====================================================

export async function listLibraryItems(libraryId) {
  const [snippetsResult, filesResult] = await Promise.all([
    supabase
      .from('code_snippets')
      .select('*')
      .eq('library_id', libraryId)
      .order('updated_at', { ascending: false }),

    supabase
      .from('code_files')
      .select('*')
      .eq('library_id', libraryId)
      .order('updated_at', { ascending: false }),
  ])

  if (snippetsResult.error) throw snippetsResult.error
  if (filesResult.error) throw filesResult.error

  const snippets = (snippetsResult.data || []).map(item => ({
    ...item,
    item_type: 'snippet',
    display_name: item.title,
  }))

  const files = (filesResult.data || []).map(item => ({
    ...item,
    item_type: 'file',
    display_name: item.name,
  }))

  return [...snippets, ...files].sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  )
}

// =====================================================
// SNIPPETS
// =====================================================

export async function createSnippet(libraryId, folderId = null) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const { data, error } = await supabase
    .from('code_snippets')
    .insert({
      library_id: libraryId,
      folder_id: folderId,
      created_by: user.id,
      title: 'Novo snippet',
      description: '',
      language: 'javascript',
      content: '',
    })
    .select()
    .single()

  if (error) throw error
  return { ...data, item_type: 'snippet', display_name: data.title }
}

// =====================================================
// ARQUIVOS
// =====================================================

export async function createCodeFile(libraryId, folderId = null) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const { data, error } = await supabase
    .from('code_files')
    .insert({
      library_id: libraryId,
      folder_id: folderId,
      created_by: user.id,
      name: 'novo-arquivo.js',
      extension: 'js',
      language: 'javascript',
      content: '',
    })
    .select()
    .single()

  if (error) throw error
  return { ...data, item_type: 'file', display_name: data.name }
}

// =====================================================
// ATUALIZAR E EXCLUIR
// =====================================================

export async function updateCodeItem(type, id, changes) {
  const table = type === 'snippet'
    ? 'code_snippets'
    : 'code_files'

  const { data, error } = await supabase
    .from(table)
    .update(changes)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  return {
    ...data,
    item_type: type,
    display_name: type === 'snippet' ? data.title : data.name,
  }
}

export async function deleteCodeItem(type, id) {
  const table = type === 'snippet'
    ? 'code_snippets'
    : 'code_files'

  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id)

  if (error) throw error
}

// =====================================================
// COMPARTILHAMENTO
// =====================================================

export async function shareLibrary(libraryId, username, role = 'viewer') {
  const cleanUsername = username.trim().replace(/^@/, '').toLowerCase()

  if (!cleanUsername) {
    throw new Error('Informe o identificador do usuário.')
  }

  if (!['editor', 'viewer'].includes(role)) {
    throw new Error('Permissão inválida.')
  }

  const { data: profile, error: profileError } = await supabase
    .from('connect_profiles')
    .select('user_id, username, display_name')
    .eq('username', cleanUsername)
    .maybeSingle()

  if (profileError) throw profileError
  if (!profile) throw new Error('Usuário não encontrado no Eldoria.')

  const { data, error } = await supabase
    .from('code_library_members')
    .upsert({
      library_id: libraryId,
      user_id: profile.user_id,
      role,
    }, {
      onConflict: 'library_id,user_id',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function listLibraryMembers(libraryId) {
  const { data, error } = await supabase
    .from('code_library_members')
    .select(`
      id,
      user_id,
      role,
      connect_profiles:user_id (
        username,
        display_name
      )
    `)
    .eq('library_id', libraryId)

  if (error) throw error
  return data || []
}

// =====================================================
// FAVORITOS
// =====================================================

export async function toggleFavorite(type, id, favorite) {
  const table = type === 'snippet'
    ? 'code_snippets'
    : 'code_files'

  const { data, error } = await supabase
    .from(table)
    .update({ is_favorite: favorite })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// =====================================================
// HISTORICO
// =====================================================

export async function listVersions(type, id) {
  const { data, error } = await supabase
    .from('code_versions')
    .select('*')
    .eq('item_type', type)
    .eq('item_id', id)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function restoreVersion(type, itemId, version) {
  const changes = {
    content: version.content,
  }

  if (type === 'snippet') {
    changes.title = version.title
  } else {
    changes.name = version.title
  }

  return updateCodeItem(type, itemId, changes)
}

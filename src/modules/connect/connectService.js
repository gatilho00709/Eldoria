
import { supabase } from '../../services/supabase'

export async function getConnectUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  if (!user) throw new Error('Você precisa estar logado.')

  const { data, error: profileError } = await supabase
    .from('connect_profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()

  if (profileError) throw profileError

  return { user, profile: data }
}

export async function createConnectProfile(username, displayName) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const cleanUsername = username
    .trim()
    .toLowerCase()
    .replace(/^@/, '')

  const { data, error } = await supabase
    .from('connect_profiles')
    .insert({
      user_id: user.id,
      username: cleanUsername,
      display_name: displayName.trim(),
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function searchConnectUsers(username) {
  const query = username.trim().replace(/^@/, '').toLowerCase()
  if (!query) return []

  const { data, error } = await supabase
    .from('connect_profiles')
    .select('user_id, username, display_name, avatar_url')
    .ilike('username', `${query}%`)
    .limit(20)

  if (error) throw error
  return data
}

export async function listConnectConversations() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const { data: memberships, error } = await supabase
    .from('connect_members')
    .select('conversation_id')
    .eq('user_id', user.id)

  if (error) throw error

  const ids = (memberships || []).map((item) => item.conversation_id)
  if (!ids.length) return []

  const { data: conversations, error: conversationError } = await supabase
    .from('connect_conversations')
    .select('*')
    .in('id', ids)
    .order('updated_at', { ascending: false })

  if (conversationError) throw conversationError

  const { data: members, error: membersError } = await supabase
    .from('connect_members')
    .select('conversation_id, user_id, role')
    .in('conversation_id', ids)

  if (membersError) throw membersError

  const userIds = [...new Set((members || []).map((m) => m.user_id))]

  const { data: profiles, error: profilesError } = await supabase
    .from('connect_profiles')
    .select('user_id, username, display_name, avatar_url')
    .in('user_id', userIds)

  if (profilesError) throw profilesError

  return (conversations || []).map((conversation) => ({
    ...conversation,
    members: (members || [])
      .filter((m) => m.conversation_id === conversation.id)
      .map((m) => ({
        ...m,
        profile: profiles?.find((p) => p.user_id === m.user_id),
      })),
  }))
}

export async function createPrivateConversation(userId) {
  const { data, error } = await supabase.rpc(
    'connect_create_private',
    { target_user: userId }
  )

  if (error) throw error
  return data
}

export async function createGroup(name, userIds) {
  const { data, error } = await supabase.rpc(
    'connect_create_group',
    {
      group_name: name,
      invited_users: userIds,
    }
  )

  if (error) throw error
  return data
}

export async function getConnectMessages(conversationId) {
  const { data, error } = await supabase
    .from('connect_messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true })
    .limit(100)

  if (error) throw error
  return data || []
}

export async function sendConnectMessage(conversationId, content) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  const { data, error } = await supabase
    .from('connect_messages')
    .insert({
      conversation_id: conversationId,
      sender_id: user.id,
      content,
      message_type: 'text',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function uploadConnectImage(conversationId, file) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Sessão não encontrada.')

  if (!file.type.startsWith('image/')) {
    throw new Error('Selecione uma imagem.')
  }

  if (file.size > 8 * 1024 * 1024) {
    throw new Error('A imagem deve ter no máximo 8 MB.')
  }

  const extension = file.name.split('.').pop()
  const path = `${conversationId}/${crypto.randomUUID()}.${extension}`

  const { error: uploadError } = await supabase.storage
    .from('connect-media')
    .upload(path, file)

  if (uploadError) throw uploadError

  const { data, error } = await supabase
    .from('connect_messages')
    .insert({
      conversation_id: conversationId,
      sender_id: user.id,
      content: file.name,
      message_type: 'image',
      attachment_path: path,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getConnectImage(path) {
  const { data, error } = await supabase.storage
    .from('connect-media')
    .createSignedUrl(path, 3600)

  if (error) throw error
  return data.signedUrl
}

export function subscribeConnectMessages(conversationId, callback) {
  return supabase
    .channel(`connect-${conversationId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'connect_messages',
        filter: `conversation_id=eq.${conversationId}`,
      },
      callback
    )
    .subscribe()
}

export async function getCallToken(conversationId) {
  const { data, error } = await supabase.functions.invoke(
    'connect-call-token',
    { body: { conversationId } }
  )

  if (error) throw error
  return data
}

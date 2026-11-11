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


import { supabase } from '../../services/supabase'
import { INITIAL_VOCABULARY } from './academyCurriculum'

export const EMPTY_ACADEMY_DATA = {
  plans: [],
  lessons: [],
  reports: [],
  vocabulary: INITIAL_VOCABULARY,
  settings: {
    dailyQuestions: 10,
    recoveryQuestions: 5,
    finalQuestions: 10,
    passingScore: 80,
  },
}

export async function loadAcademyData() {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError) throw authError
  if (!authData.user) throw new Error('Usuário não autenticado.')

  const { data, error } = await supabase
    .from('academy_profiles')
    .select('data')
    .eq('user_id', authData.user.id)
    .maybeSingle()

  if (error) throw error

  if (!data) return EMPTY_ACADEMY_DATA

  return {
    ...EMPTY_ACADEMY_DATA,
    ...data.data,
    settings: {
      ...EMPTY_ACADEMY_DATA.settings,
      ...(data.data?.settings || {}),
    },
  }
}

export async function saveAcademyData(academyData) {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError) throw authError
  if (!authData.user) throw new Error('Usuário não autenticado.')

  const { error } = await supabase
    .from('academy_profiles')
    .upsert({
      user_id: authData.user.id,
      data: academyData,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'user_id',
    })

  if (error) throw error
}

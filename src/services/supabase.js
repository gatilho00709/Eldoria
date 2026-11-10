
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'As credenciais do Supabase não foram encontradas. Confira o arquivo .env.local.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey)

import { supabase } from "../../services/supabase";

export const EMPTY_ACADEMY_DATA = {
  progress: {},
  reports: [],
  vocabulary: [],
  selectedWeek: { ja: 1, en: 1 },
  selectedLanguage: "ja"
};

export async function loadAcademyData() {
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (!auth?.user) throw new Error("Faça login para carregar seu progresso.");
  const { data, error } = await supabase.from("academy_data").select("data").eq("user_id", auth.user.id).maybeSingle();
  if (error) throw error;
  return { ...EMPTY_ACADEMY_DATA, ...(data?.data || {}) };
}
export async function saveAcademyData(value) {
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (!auth?.user) throw new Error("Usuário não autenticado.");
  const { error } = await supabase.from("academy_data").upsert({
    user_id: auth.user.id,
    data: value,
    updated_at: new Date().toISOString()
  }, { onConflict: "user_id" });
  if (error) throw error;
}

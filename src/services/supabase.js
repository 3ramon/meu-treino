import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // O endereço do seu "restaurante"
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Sua chave de acesso

export const supabase = createClient(supabaseUrl, supabaseKey);
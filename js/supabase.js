
import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

// Replace these two placeholders with your actual
// Supabase Project URL and Publishable Key.
const SUPABASE_URL = "https://ikfondnwrnoqgzxzllzl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_omREeyf_OM7ewZtuaszbpg_Ma3tpuaN";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

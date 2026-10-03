import "server-only";

import { redirect } from "next/navigation";
import { createSupabaseAuthClient, isAdminEmail } from "@/lib/supabase/server";

export async function requireAdmin() {
  const supabase = await createSupabaseAuthClient();
  if (!supabase) redirect("/admin/login?error=setup");

  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user || !isAdminEmail(user.email)) redirect("/admin/login?error=unauthorized");

  return { supabase, user };
}
"use server";

import { redirect } from "next/navigation";
import { createSupabaseAuthClient, isAdminAuthConfigured, isAdminEmail } from "@academy/lib/supabase/server";

export async function adminSignIn(formData: FormData) {
  const emailValue = formData.get("email");
  const passwordValue = formData.get("password");
  const email = typeof emailValue === "string" ? emailValue.trim().toLowerCase() : "";
  const password = typeof passwordValue === "string" ? passwordValue : "";

  if (!email || !password) redirect("/academy/admin/login?error=credentials");
  if (!isAdminAuthConfigured()) redirect("/academy/admin/login?error=setup");

  const supabase = await createSupabaseAuthClient();
  if (!supabase) redirect("/academy/admin/login?error=setup");

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) redirect("/academy/admin/login?error=credentials");

  if (!isAdminEmail(data.user.email)) {
    await supabase.auth.signOut();
    redirect("/academy/admin/login?error=credentials");
  }

  redirect("/academy/admin");
}

export async function adminSignOut() {
  const supabase = await createSupabaseAuthClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/academy/admin/login");
}
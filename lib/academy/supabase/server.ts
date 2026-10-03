import "server-only";

import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

function getSupabaseCredentials() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export function getSupabaseServerClient() {
  const credentials = getSupabaseCredentials();
  if (!credentials) return null;

  return createClient(credentials.url, credentials.key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function createSupabaseAuthClient() {
  const credentials = getSupabaseCredentials();
  if (!credentials) return null;

  const cookieStore = await cookies();
  return createServerClient(credentials.url, credentials.key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Components cannot write cookies; Proxy refreshes them on requests.
        }
      },
    },
  });
}

export function isAdminEmail(email: string | null | undefined) {
  if (!email) return false;
  const allowedEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  return allowedEmails.includes(email.trim().toLowerCase());
}

export function isAdminAuthConfigured() {
  return Boolean(getSupabaseCredentials()) && (process.env.ADMIN_EMAILS ?? "").split(",").some((email) => email.trim());
}
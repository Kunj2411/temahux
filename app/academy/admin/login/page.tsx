import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageTemplate } from "@academy/components/page-template";
import { createSupabaseAuthClient, isAdminAuthConfigured, isAdminEmail } from "@academy/lib/supabase/server";
import { adminSignIn } from "./actions";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
 alternates: { canonical: "/academy/admin/login" }};

const inputStyle = { padding: 12, borderRadius: 12, border: "1px solid #dfe7f5" };

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const configured = isAdminAuthConfigured();
  const supabase = await createSupabaseAuthClient();

  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user && isAdminEmail(user.email)) redirect("/academy/admin");
  }

  const errorMessage = error === "setup"
    ? "Admin sign-in needs Supabase settings and at least one allowed admin email."
    : error
      ? "Email or password is incorrect, or this account is not an administrator."
      : null;

  return (
    <PageTemplate eyebrow="TEMAHUX administration" title="Admin sign in." intro="Sign in with an administrator account to access the catalog console.">
      <div className="page-card" style={{ maxWidth: 560, margin: "0 auto" }}>
        {errorMessage ? <p className="catalog-notice" role="alert">{errorMessage}</p> : null}
        {configured ? (
          <form action={adminSignIn} style={{ display: "grid", gap: 14 }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span>Email</span>
              <input name="email" type="email" autoComplete="username" required placeholder="admin@example.com" style={inputStyle} />
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              <span>Password</span>
              <input name="password" type="password" autoComplete="current-password" required placeholder="Enter your Supabase password" style={inputStyle} />
            </label>
            <button type="submit" className="button button-primary">Sign in to admin</button>
          </form>
        ) : (
          <div>
            <h2 style={{ marginTop: 0 }}>Admin access is not configured.</h2>
            <p style={{ color: "#46536c", lineHeight: 1.7 }}>Set the Supabase URL and publishable key, then add your administrator email to the server-only <code>ADMIN_EMAILS</code> setting. Create that email and password in Supabase Authentication.</p>
          </div>
        )}
        <p style={{ margin: "20px 0 0", color: "#46536c" }}><Link href="/academy">Return to TEMAHUX Academy</Link></p>
      </div>
    </PageTemplate>
  );
}
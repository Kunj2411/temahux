import type { Metadata } from "next";
import Link from "next/link";
import type { ProgramItem, RoadmapItem } from "@/data/site-data";
import { PageTemplate } from "@/components/page-template";
import { AdminCatalogManager } from "@/components/admin-catalog-manager";
import { getAdminCatalog } from "@/lib/data/admin-catalog";
import { getPrograms, getRoadmaps } from "@/lib/data/catalog";
import { requireAdmin } from "@/lib/auth/admin";
import { adminSignOut } from "./login/actions";

export const metadata: Metadata = {
  title: "Admin console",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const statusMessages: Record<string, string> = {
  "program-created": "Program created.",
  "program-updated": "Program changes saved.",
  "program-deleted": "Program deleted.",
  "roadmap-created": "Roadmap created.",
  "roadmap-updated": "Roadmap changes saved.",
  "roadmap-deleted": "Roadmap deleted.",
};

const errorMessages: Record<string, string> = {
  "service-config": "Add SUPABASE_SERVICE_ROLE_KEY to the server environment to enable catalog changes.",
  invalid: "Check the form fields. Slugs must use lowercase letters, numbers, and hyphens; roadmap stages are required.",
  duplicate: "That slug is already in use. Choose a unique slug and try again.",
  write: "The catalog change could not be saved. Check the Supabase schema and try again.",
};

export default async function AdminDashboardPage({ searchParams }: { searchParams: Promise<{ status?: string; error?: string }> }) {
  const { user } = await requireAdmin();
  const { status, error } = await searchParams;
  const canWrite = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  let programs: ProgramItem[];
  let roadmaps: RoadmapItem[];
  let catalogError: string | undefined;

  if (canWrite) {
    const catalog = await getAdminCatalog();
    programs = catalog.programs;
    roadmaps = catalog.roadmaps;
    catalogError = catalog.error;
  } else {
    const [programCatalog, roadmapCatalog] = await Promise.all([getPrograms(), getRoadmaps()]);
    programs = programCatalog.items;
    roadmaps = roadmapCatalog.items;
    catalogError = programCatalog.error ?? roadmapCatalog.error;
  }

  return (
    <PageTemplate eyebrow="Admin console" title="Catalog overview." intro="A private overview of the published TEMAHUX learning catalog.">
      <div className="admin-console">
        <div className="admin-session-bar">
          <span>Signed in as <strong>{user.email}</strong></span>
          <form action={adminSignOut}><button type="submit" className="button button-secondary">Sign out</button></form>
        </div>
        {status && statusMessages[status] ? <p className="admin-status-message" role="status">{statusMessages[status]}</p> : null}
        {error && errorMessages[error] ? <p className="catalog-notice" role="alert">{errorMessages[error]}</p> : null}
        {catalogError ? <p className="catalog-notice" role="status">{catalogError}</p> : null}
        <div className="card-list">
          <section className="page-card"><span className="badge soft">Published catalog</span><h2>{programs.length}</h2><p>Programs available to visitors.</p><Link href="/programs">View programs ↗</Link></section>
          <section className="page-card"><span className="badge soft">Published catalog</span><h2>{roadmaps.length}</h2><p>Learning roadmaps available to visitors.</p><Link href="/roadmaps">View roadmaps ↗</Link></section>
          <section className="page-card"><span className="badge soft">Content management</span><h3>Manage catalog data</h3><p>Program and roadmap records are stored in the connected Supabase project.</p><Link href="https://supabase.com/dashboard" target="_blank" rel="noreferrer">Open Supabase Dashboard ↗</Link></section>
        </div>
        <AdminCatalogManager programs={programs} roadmaps={roadmaps} canWrite={canWrite} />
      </div>
    </PageTemplate>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ProgramBrowser } from "@academy/components/program-browser";
import { getPrograms } from "@academy/lib/data/catalog";

export const metadata: Metadata = {
  title: "Learning Programs — STEM, Coding, Robotics & AI",
  description: "Explore structured TEMAHUX learning programs across STEM, coding, robotics, and AI. Programs from ₹49.",
  alternates: { canonical: "/academy/programs" },
  openGraph: { title: "Learning Programs — STEM, Coding, Robotics & AI | TEMAHUX Academy", description: "Structured pathways for learning, building, and growing with technology." },
};

export default async function ProgramsPage() {
  const { items, error } = await getPrograms();

  return (
    <div className="container catalog-page">
      <header className="catalog-hero">
        <div className="catalog-hero-copy">
          <p className="eyebrow">Our programs</p>
          <h1>Structured pathways for learning, building and growing.</h1>
          <p className="lead">Programs bring classes, practice, and projects together into a bigger learning experience. Start learning at ₹49.</p>
          <div className="catalog-hero-actions">
            <Link href="#program-catalog" className="button button-primary">Explore programs <span aria-hidden="true">↓</span></Link>
            <Link href="/academy/roadmaps" className="text-link">Find your roadmap <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="catalog-hero-note">
          <span className="note-index">01 / 02</span>
          <p>Programs create momentum.<br /><strong>Roadmaps show what comes next.</strong></p>
          <Link href="/academy/roadmaps">Explore roadmaps <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <section id="program-catalog" className="catalog-section">
        <div className="catalog-section-heading">
          <div><span className="eyebrow">Find your starting point</span><h2>Explore programs</h2></div>
          <span className="catalog-price-note">Every listed program <strong>₹49</strong></span>
        </div>
        {error ? <p className="catalog-notice" role="status">{error}</p> : null}
        {items.length ? <ProgramBrowser programs={items} /> : (
          <div className="catalog-empty"><span className="eyebrow">Programs</span><h2>No programs found.</h2><p>New learning pathways will appear here when published.</p></div>
        )}
      </section>
    </div>
  );
}

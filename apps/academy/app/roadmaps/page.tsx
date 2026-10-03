import type { Metadata } from "next";
import Link from "next/link";
import { RoadmapCard } from "@/components/roadmap-card";
import { getRoadmaps } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "Roadmaps",
  description: "Choose a TEMAHUX learning roadmap and turn your technology goals into clear next steps.",
  alternates: { canonical: "/roadmaps" },
  openGraph: { title: "Roadmaps | TEMAHUX Academy", description: "Turn your goals into a clear learning path." },
};

export default async function RoadmapsPage() {
  const { items, error } = await getRoadmaps();

  return (
    <div className="container catalog-page roadmap-catalog-page">
      <header className="catalog-hero roadmap-catalog-hero">
        <div className="catalog-hero-copy">
          <p className="eyebrow">Roadmaps</p>
          <h1>Know what to learn next.</h1>
          <p className="lead">Turn a technology goal into a clear progression, from foundational ideas to practice, projects, and deeper exploration.</p>
          <div className="catalog-hero-actions"><Link href="#roadmap-catalog" className="button button-primary">Explore roadmaps <span aria-hidden="true">↓</span></Link><Link href="/programs" className="text-link">Browse programs <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="roadmap-hero-path" aria-label="Start, foundation, practice, project, advanced, career">{[["01", "Start"], ["02", "Foundation"], ["03", "Practice"], ["04", "Project"], ["05", "Advanced"], ["06", "Career"]].map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}</div>
      </header>

      <section id="roadmap-catalog" className="catalog-section">
        <div className="catalog-section-heading"><div><span className="eyebrow">Choose a direction</span><h2>Roadmaps for what’s next.</h2></div><span className="catalog-count">{items.length} learning journeys</span></div>
        {error ? <p className="catalog-notice" role="status">{error}</p> : null}
        {items.length ? <div className="roadmap-grid">{items.map((roadmap) => <RoadmapCard key={roadmap.slug} roadmap={roadmap} />)}</div> : <div className="catalog-empty"><span className="eyebrow">Roadmaps</span><h2>No roadmaps found.</h2><p>New learning journeys will appear here when published.</p></div>}
      </section>
    </div>
  );
}

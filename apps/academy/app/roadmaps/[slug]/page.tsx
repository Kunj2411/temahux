import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { RoadmapCard } from "@/components/roadmap-card";
import { classes, projects, roadmaps } from "@/data/site-data";
import { getPrograms, getRoadmap, getRoadmaps } from "@/lib/data/catalog";

const stageDescriptions: Record<string, string> = {
  Start: "Set a direction and get familiar with the subject area.",
  Foundation: "Build an understanding of the core concepts and vocabulary.",
  Practice: "Revisit ideas through exercises, experimentation, and feedback.",
  Project: "Bring concepts together in a practical, original build.",
  Advanced: "Explore more complex systems and strengthen your technical judgment.",
  Career: "Reflect on your skills and choose a focused next step.",
};

export async function generateStaticParams() {
  return roadmaps.filter((item) => item.published).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { item } = await getRoadmap(slug);
  if (!item) return { title: "Roadmap not found" };
  return { title: `${item.title} Roadmap`, description: item.description, alternates: { canonical: `/roadmaps/${item.slug}` }, openGraph: { title: `${item.title} Roadmap | TEMAHUX Academy`, description: item.description } };
}

export default async function RoadmapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { item, error } = await getRoadmap(slug);
  if (!item) notFound();

  const [{ items: programCatalog }, { items: roadmapCatalog }] = await Promise.all([getPrograms(), getRoadmaps()]);
  const relatedPrograms = item.programSlugs.map((programSlug) => programCatalog.find((program) => program.slug === programSlug)).filter((program) => program !== undefined);
  const relatedClasses = item.classSlugs.map((classSlug) => ({ slug: classSlug, title: classes.find((course) => course.slug === classSlug)?.title ?? classSlug.replaceAll("-", " "), category: classes.find((course) => course.slug === classSlug)?.category ?? item.category, level: classes.find((course) => course.slug === classSlug)?.level }));
  const relatedProjects = item.projectSlugs.map((projectSlug) => ({ slug: projectSlug, title: projects.find((project) => project.slug === projectSlug)?.title ?? projectSlug.replaceAll("-", " "), category: projects.find((project) => project.slug === projectSlug)?.category ?? item.category, difficulty: projects.find((project) => project.slug === projectSlug)?.difficulty }));
  const featuredRoadmaps = roadmapCatalog.filter((roadmap) => roadmap.slug !== item.slug && roadmap.featured).slice(0, 3);

  return (
    <PageTemplate eyebrow={`${item.category} roadmap`} title={item.title} intro={item.description}>
      <div className="roadmap-detail">
        {error ? <p className="catalog-notice" role="status">{error}</p> : null}
        <section className="roadmap-detail-intro"><div><span className="roadmap-level">{item.level}</span><p>This journey is organized into {item.steps.length} stages. Take them in sequence, revisit earlier ideas as needed, and use projects to make progress tangible.</p></div><Link href="/programs" className="text-link">Explore programs <span aria-hidden="true">↗</span></Link></section>

        <section className="roadmap-journey-section">
          <div className="product-section-heading"><span className="eyebrow">Your learning journey</span><h2>One stage at a time.</h2></div>
          <div className="roadmap-journey">{item.steps.map((step, index) => <article className="roadmap-stage" key={`${step}-${index}`}><span className="roadmap-stage-index">{String(index + 1).padStart(2, "0")}</span><div className="roadmap-stage-marker"><i />{index < item.steps.length - 1 ? <b /> : null}</div><div className="roadmap-stage-content"><span className="eyebrow">Stage {String(index + 1).padStart(2, "0")}</span><h3>{step}</h3><p>{stageDescriptions[step] ?? "Build understanding through focused learning and practical exploration."}</p></div></article>)}</div>
        </section>

        <section className="product-section split-product-section"><div><span className="eyebrow">Skills and tools</span><h2>What this direction explores.</h2><p>Use the roadmap as a guide, not a deadline. Follow the relevant skills as your interests develop.</p></div><div className="roadmap-skill-groups"><div><h3>Skills</h3><div className="skill-cloud">{item.skills.length ? item.skills.map((skill) => <span key={skill}>{skill}</span>) : <p>Skills are being added as this roadmap develops.</p>}</div></div><div><h3>Tools</h3><div className="skill-cloud">{item.tools.length ? item.tools.map((tool) => <span key={tool}>{tool}</span>) : <p>Tools will be listed when they are part of the published pathway.</p>}</div></div></div></section>

        {relatedPrograms.length ? <section className="product-section related-section"><div className="product-section-heading"><span className="eyebrow">Recommended programs</span><h2>Learn with a little more structure.</h2></div><div className="related-links">{relatedPrograms.map((program) => <Link href={`/programs/${program.slug}`} key={program.slug}><span>{program.category} · ₹{program.price}</span><strong>{program.title}</strong><b aria-hidden="true">↗</b></Link>)}</div></section> : null}
        {relatedClasses.length ? <section className="product-section related-section"><div className="product-section-heading"><span className="eyebrow">Recommended classes</span><h2>Strengthen a focused skill.</h2></div><div className="related-links">{relatedClasses.map((course) => <Link href={`/classes/${course.slug}`} key={course.slug}><span>{course.category}{course.level ? ` · ${course.level}` : ""}</span><strong>{course.title}</strong><b aria-hidden="true">↗</b></Link>)}</div></section> : null}
        {relatedProjects.length ? <section className="product-section related-section"><div className="product-section-heading"><span className="eyebrow">Practice through projects</span><h2>Make your learning visible.</h2></div><div className="related-links">{relatedProjects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug}><span>{project.category}{project.difficulty ? ` · ${project.difficulty}` : ""}</span><strong>{project.title}</strong><b aria-hidden="true">↗</b></Link>)}</div></section> : null}

        <section className="next-roadmaps"><div className="product-section-heading"><span className="eyebrow">Keep exploring</span><h2>Other directions to consider.</h2></div><div className="roadmap-grid">{featuredRoadmaps.map((roadmap) => <RoadmapCard key={roadmap.slug} roadmap={roadmap} />)}</div></section>
        <section className="product-final-cta"><span className="eyebrow">Make a start</span><h2>A clear next step beats a perfect plan.</h2><p>Explore a program or class connected to your interests and start building momentum.</p><Link href="/programs" className="button button-primary">Explore programs <span aria-hidden="true">↗</span></Link></section>
      </div>
    </PageTemplate>
  );
}
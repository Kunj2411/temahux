import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTemplate } from "@academy/components/page-template";
import { ProgramArtwork } from "@academy/components/program-card";
import { classes, faqItems, programs, projects } from "@academy/data/site-data";
import { getProgram } from "@academy/lib/data/catalog";

export async function generateStaticParams() {
  return programs.filter((item) => item.published).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { item } = await getProgram(slug);
  if (!item) return { title: "Program not found" };
  return {
    title: item.title,
    description: item.shortDescription,
    alternates: { canonical: `/academy/programs/${item.slug}` },
    openGraph: { title: `${item.title} | TEMAHUX Academy`, description: item.shortDescription, images: item.imageUrl ? [item.imageUrl] : undefined },
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { item, error } = await getProgram(slug);
  if (!item) notFound();

  const relatedRoadmap = item.roadmapSlug;
  const relatedProjects = item.projectSlugs.map((projectSlug) => projects.find((project) => project.slug === projectSlug)).filter((project) => project !== undefined);
  const relatedClasses = classes.filter((course) => item.focus.some((focus) => `${course.category} ${course.title} ${course.skills.join(" ")}`.toLowerCase().includes(focus.toLowerCase()))).slice(0, 3);

  return (
    <PageTemplate eyebrow={`${item.category} program`} title={item.title} intro={item.shortDescription}>
      <div className="program-detail">
        {error ? <p className="catalog-notice" role="status">{error}</p> : null}
        <section className="program-product-hero">
          <ProgramArtwork program={item} featured />
          <div className="program-product-summary">
            <div className="program-card-kicker"><span>{item.category}</span><span>{item.level}</span></div>
            <p>{item.description}</p>
            <div className="program-product-meta">
              <span>Designed around<strong>{item.focus.slice(0, 3).join(" · ")}</strong></span>
              {item.duration ? <span>Duration<strong>{item.duration}</strong></span> : null}
            </div>
            <div className="program-purchase-row">
              <span className="program-price"><small>Start learning at</small><strong>₹{item.price}</strong></span>
              <Link href="/academy/signup" className="button button-primary">Start this program <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="product-section product-overview">
          <div className="product-section-heading"><span className="eyebrow">The experience</span><h2>A broader path, made practical.</h2></div>
          <div><p>{item.description}</p><p>Move through the ideas at the heart of {item.title}, then bring them together through practice and purposeful projects.</p></div>
        </section>

        <section className="product-section">
          <div className="product-section-heading"><span className="eyebrow">Learning outcomes</span><h2>What you’ll work toward.</h2></div>
          <div className="outcome-list">{item.outcomes.map((outcome, index) => <div className="outcome-item" key={outcome}><span>0{index + 1}</span><h3>{outcome}</h3><b aria-hidden="true">↗</b></div>)}</div>
        </section>

        <section className="product-section split-product-section">
          <div><span className="eyebrow">Skills and focus</span><h2>Build useful fluency.</h2><p>Explore the ideas and capabilities included in this pathway.</p></div>
          <div className="skill-cloud">{[...new Set([...item.skills, ...item.focus])].map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="product-section curriculum-section">
          <div className="product-section-heading"><span className="eyebrow">Curriculum</span><h2>Learning, in clear stages.</h2></div>
          {item.modules?.length ? <div className="module-list">{item.modules.map((module, index) => <article className="module-row" key={module.title}><span>0{index + 1}</span><div><h3>{module.title}</h3><p>{module.description}</p></div></article>)}</div> : <div className="curriculum-empty"><span className="curriculum-mark">↗</span><div><h3>Curriculum details are taking shape.</h3><p>The published program outcomes above are the current guide to this learning experience. Module details will appear here when available.</p></div></div>}
        </section>

        {relatedProjects.length ? <section className="product-section related-section"><div className="product-section-heading"><span className="eyebrow">Build and apply</span><h2>Projects connected to this path.</h2></div><div className="related-links">{relatedProjects.map((project) => <Link href={`/academy/projects/${project.slug}`} key={project.slug}><span>{project.category}</span><strong>{project.title}</strong><b aria-hidden="true">↗</b></Link>)}</div></section> : null}
        {relatedClasses.length ? <section className="product-section related-section"><div className="product-section-heading"><span className="eyebrow">Focused skills</span><h2>Explore connected classes.</h2></div><div className="related-links">{relatedClasses.map((course) => <Link href={`/academy/classes/${course.slug}`} key={course.slug}><span>{course.category}</span><strong>{course.title}</strong><b aria-hidden="true">↗</b></Link>)}</div></section> : null}
        {relatedRoadmap ? <section className="continue-journey"><div><span className="eyebrow">Continue your journey</span><h2>Connect this program to a roadmap.</h2><p>See the next stages around {item.title}.</p></div><Link href={`/academy/roadmaps/${relatedRoadmap}`} className="button button-light">View recommended roadmap <span aria-hidden="true">↗</span></Link></section> : null}

        <section className="product-section product-faq"><div className="product-section-heading"><span className="eyebrow">A few useful answers</span><h2>Before you begin.</h2></div><div className="faq-list">{faqItems.slice(0, 3).map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
        <section className="product-final-cta"><span className="eyebrow">Your next step</span><h2>Curiosity is a good place to start.</h2><p>Explore {item.title} and see where a structured learning path can take you.</p><Link href="/academy/signup" className="button button-primary">Start learning at ₹{item.price} <span aria-hidden="true">↗</span></Link></section>
      </div>
    </PageTemplate>
  );
}

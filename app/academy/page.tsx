import Link from "next/link";
import { SectionHeading } from "@academy/components/section-heading";
import { FeaturedProgramCard, ProgramCard } from "@academy/components/program-card";
import { RoadmapCard } from "@academy/components/roadmap-card";
import { blogPosts, classes, projects } from "@academy/data/site-data";
import { getPrograms, getRoadmaps } from "@academy/lib/data/catalog";

export default async function Home() {
  const [{ items: programs, error: programsError }, { items: roadmaps, error: roadmapsError }] = await Promise.all([getPrograms(), getRoadmaps()]);
  const featuredProgram = programs.find((program) => program.featured) ?? programs[0];
  const featuredPrograms = programs.filter((program) => program.slug !== featuredProgram?.slug).slice(0, 2);
  const featuredRoadmaps = roadmaps.filter((roadmap) => roadmap.featured).slice(0, 4);

  return (
    <>
      <section className="hero-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Learn → Practice → Build → Grow</p>
            <h1 className="heading-1">Build the future with a deeper way to learn.</h1>
            <p className="lead">
              TEMAHUX Academy helps students and future builders move from curiosity to confident practice,
              product thinking, and real-world technology skills.
            </p>
            <div className="button-row">
              <Link href="/academy/programs" className="button button-primary">Explore programs <span aria-hidden="true">↗</span></Link>
              <Link href="/academy/roadmaps" className="button button-secondary">Find your roadmap <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="chip-row">
              {[
                "STEM",
                "Coding",
                "Robotics",
                "AI",
                "AR / VR",
                "Career",
              ].map((label) => (
                <span key={label} className="chip">{label}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            {featuredProgram ? <FeaturedProgramCard program={featuredProgram} /> : <div className="featured-program-empty"><span className="eyebrow">Featured program</span><h2>Build something real.</h2><p>Explore structured learning pathways for technology and creative problem solving.</p><Link href="/academy/programs" className="button button-primary">Explore programs</Link></div>}
            <div className="hero-value-tile hero-value-build"><span className="tile-index">01 / BUILD</span><strong>Projects that make ideas tangible.</strong><Link href="/academy/projects">Explore projects <span aria-hidden="true">↗</span></Link></div>
            <div className="hero-value-tile hero-value-path"><span className="tile-index">02 / PATHWAYS</span><strong>Programs + roadmaps + classes.</strong><Link href="/academy/learning">Explore learning <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      {programsError || roadmapsError ? <div className="container home-data-notice" role="status">{programsError ?? roadmapsError}</div> : null}

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why TEMAHUX"
            title="A technology education ecosystem built for exploration and depth."
            description="From STEM foundations to AI and robotics, every track is designed to teach concepts through practice, creation, and purposeful projects."
          />

          <div className="card-grid cards-3 mt-10">
            {[
              { title: "Hands-on learning", text: "Concepts gain meaning through experiments, challenges, and practical builds." },
              { title: "Project-driven growth", text: "Students move from understanding to shipping solutions they can be proud of." },
              { title: "Career readiness", text: "Learning pathways connect curiosity with applied technology and structured progress." },
            ].map((item) => (
              <div key={item.title} className="surface-card">
                <div className="card-accent blue" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our programs"
            title="A bigger experience than a single class."
            description="Structured pathways bring learning, practice, and projects together around the skills you want to build. Start learning at ₹49."
          />

          <div className="program-grid mt-10">{featuredPrograms.map((program) => <ProgramCard key={program.slug} program={program} />)}</div>
          <div className="section-end-link"><span>Structured learning starts at <strong>₹49</strong></span><Link href="/academy/programs" className="button button-secondary">View all programs <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section roadmap-home-section">
        <div className="container">
          <div className="roadmap-home-heading"><SectionHeading eyebrow="Roadmaps" title="Know what to learn next." description="Turn a goal into a clear learning path, one useful stage at a time." /><Link href="/academy/roadmaps" className="text-link">Explore all roadmaps <span aria-hidden="true">↗</span></Link></div>
          {featuredRoadmaps.length ? <div className="roadmap-grid">{featuredRoadmaps.map((roadmap) => <RoadmapCard key={roadmap.slug} roadmap={roadmap} />)}</div> : <div className="catalog-inline-empty"><p>Roadmaps will appear here as they are published.</p><Link href="/academy/roadmaps">Explore roadmaps <span aria-hidden="true">↗</span></Link></div>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured classes"
            title="Explore the building blocks of modern technology."
            description="The class catalog is organized to encourage discovery, guided learning, and sustained progress across STEM, AI, robotics, and engineering."
          />

          <div className="card-grid cards-3 mt-10">
            {classes.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/academy/classes/${item.slug}`} className="surface-card card-link">
                <span className="badge soft">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="meta-row">
                  <span>{item.level}</span>
                  <span>{item.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionHeading
            eyebrow="Project lab"
            title="Build what you learn."
            description="Projects turn learning into elegant, practical experiences that help students reason, create, and iterate."
          />

          <div className="card-grid cards-3 mt-10">
            {projects.map((project) => (
              <Link key={project.slug} href={`/academy/projects/${project.slug}`} className="surface-card card-link">
                <span className="badge">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="meta-row">
                  <span>{project.difficulty}</span>
                  <span>{project.skills[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container learning-steps">
          <SectionHeading
            eyebrow="Learning journey"
            title="A learning path designed to keep momentum high."
          />

          <div className="timeline-grid mt-10">
            {[
              ["01", "Discover", "Start with subjects that match your interests, from coding to science and AI."],
              ["02", "Learn", "Explore clear concepts, guided frameworks, and structured challenges."],
              ["03", "Practice", "Move from instruction to repetition, debugging, and confidence."],
              ["04", "Build", "Create projects that combine ideas, tools, and real-world thinking."],
              ["05", "Showcase", "Present work, reflect, and build a portfolio of evidence."],
              ["06", "Grow", "Iterate toward deeper technical skill and stronger career direction."],
            ].map(([step, title, text]) => (
              <div key={step} className="timeline-item">
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Fresh thinking from the TEMAHUX learning community."
          />

          <div className="card-grid cards-3 mt-10">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/academy/blog/${post.slug}`} className="surface-card card-link">
                <span className="badge soft">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="meta-row">
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container home-final-cta-inner">
          <div><span className="eyebrow">TEMAHUX Academy</span><h2>Learn with intention.<br />Build with confidence.</h2></div>
          <div><p>Choose a program, follow a roadmap, and turn what you learn into something real.</p><Link href="/academy/signup" className="button button-light">Start Free <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}

export const metadata = { alternates: { canonical: "/academy" } };

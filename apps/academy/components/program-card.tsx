import Image from "next/image";
import Link from "next/link";
import type { ProgramItem } from "@/data/site-data";

function themeFor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function ProgramArtwork({ program, featured = false }: { program: ProgramItem; featured?: boolean }) {
  return (
    <div className={`program-artwork theme-${themeFor(program.category)}${featured ? " is-featured" : ""}${program.imageUrl ? " has-image" : ""}`} aria-hidden="true">
      {program.imageUrl ? (
        <Image src={program.imageUrl} alt="" fill sizes={featured ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 700px) 100vw, 33vw"} unoptimized className="program-artwork-image" />
      ) : null}
      <div className="art-orbit art-orbit-one" />
      <div className="art-orbit art-orbit-two" />
      <div className="art-grid" />
      <div className="art-console">
        <div className="console-top"><span /><span /><span /><i>{program.category} / LAB</i></div>
        <div className="console-code"><b>01</b><span>{program.focus[0] ?? "Explore"}</span></div>
        <div className="console-code"><b>02</b><span>{program.focus[1] ?? "Practice"}</span></div>
        <div className="console-code"><b>03</b><span>{program.focus[2] ?? "Build"}</span></div>
      </div>
      <div className="art-object art-object-main"><span>{program.category === "AI" ? "AI" : program.category === "Robotics" ? "RX" : "TX"}</span></div>
      <div className="art-object art-object-small">+</div>
      <span className="art-stamp">T / A</span>
    </div>
  );
}

export function ProgramCard({ program }: { program: ProgramItem }) {
  return (
    <Link href={`/programs/${program.slug}`} className="program-card">
      <ProgramArtwork program={program} />
      <div className="program-card-content">
        <div className="program-card-kicker"><span>{program.category}</span><span>{program.level}</span></div>
        <h3>{program.title}</h3>
        <p>{program.shortDescription}</p>
        <div className="program-card-bottom">
          <span className="program-price"><small>Start learning at</small><strong>₹{program.price}</strong></span>
          <span className="program-card-cta">Explore program <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProgramCard({ program }: { program: ProgramItem }) {
  return (
    <article className="featured-program-card">
      <ProgramArtwork program={program} featured />
      <div className="featured-program-copy">
        <span className="featured-label"><i /> Featured program</span>
        <h2>{program.title}</h2>
        <p>{program.shortDescription}</p>
        <div className="featured-program-bottom">
          <span className="featured-price">₹{program.price}<small> program entry</small></span>
          <Link href={`/programs/${program.slug}`} className="button button-light">Explore program <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  );
}
import Link from "next/link";
import type { RoadmapItem } from "@/data/site-data";

export function RoadmapCard({ roadmap }: { roadmap: RoadmapItem }) {
  return (
    <Link href={`/roadmaps/${roadmap.slug}`} className="roadmap-card">
      <div className="roadmap-card-top">
        <span className="roadmap-category">{roadmap.category}</span>
        <span className="roadmap-level">{roadmap.level}</span>
      </div>
      <h3>{roadmap.title}</h3>
      <p>{roadmap.description}</p>
      <div className="roadmap-mini-steps" aria-label={`${roadmap.steps.length} learning stages`}>
        {roadmap.steps.map((step, index) => (
          <span key={`${step}-${index}`} className={index === roadmap.steps.length - 1 ? "is-last" : ""}>
            <i />{index < roadmap.steps.length - 1 ? <b /> : null}
          </span>
        ))}
      </div>
      <div className="roadmap-card-bottom"><span>{roadmap.steps.length} stages</span><span>View roadmap <b aria-hidden="true">↗</b></span></div>
    </Link>
  );
}
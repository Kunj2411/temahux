import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { classes } from "@/data/site-data";

export function generateStaticParams() {
  return classes.map((item) => ({ slug: item.slug }));
}

export default async function ClassDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = classes.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <PageTemplate eyebrow={item.category} title={item.title} intro={item.description}>
      <div className="detail-page">
        <div className="detail-hero">
          <div className="page-card">
            <span className="badge">{item.level}</span>
            <h3>Learning outcomes</h3>
            <ul>
              {item.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div className="feature-panel">
            <h3>Who it is for</h3>
            <ul>
              {item.audience.map((aud) => (
                <li key={aud}>{aud}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-list">
          {item.modules.map((module) => (
            <div key={module.title} className="page-card">
              <span className="badge soft">Module</span>
              <h3>{module.title}</h3>
              <p>{module.summary}</p>
            </div>
          ))}
        </div>

        <div className="card-list">
          {["Skills", "Tools", "Projects"].map((label) => (
            <div key={label} className="page-card">
              <span className="badge soft">{label}</span>
              <h3>{label}</h3>
              <p>
                {label === "Skills"
                  ? item.skills.join(" • ")
                  : label === "Tools"
                    ? "Code editor, browser tools, labs, design thinking, and project workflows."
                    : "Small, meaningful builds that turn theory into practical capability."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}

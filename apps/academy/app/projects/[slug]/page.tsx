import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { projects } from "@/data/site-data";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <PageTemplate eyebrow={item.category} title={item.title} intro={item.description}>
      <div className="detail-page">
        <div className="detail-hero">
          <div className="page-card">
            <span className="badge">{item.difficulty}</span>
            <h3>Problem</h3>
            <p>Turn an idea into a tangible, testable artifact using the right logic and systems.</p>
          </div>
          <div className="feature-panel">
            <h3>Skills</h3>
            <ul>
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-list">
          {[
            { title: "Solution", description: "Design a workable approach, test assumptions, and iterate quickly." },
            { title: "Technologies", description: item.skills.join(" • ") },
            { title: "Learning outcomes", description: "Strengthen product thinking, debugging, and applied technical reasoning." },
          ].map((entry) => (
            <div key={entry.title} className="page-card">
              <span className="badge soft">{entry.title}</span>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}

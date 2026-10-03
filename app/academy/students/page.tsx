import { PageTemplate } from "@academy/components/page-template";

export default function StudentsPage() {
  return (
    <PageTemplate
      eyebrow="For students"
      title="Build real skills through guided challenges."
      intro="Students learn by asking better questions, solving meaningful problems, and joining a progression of applied learning."
    >
      <div className="card-list">
        {[
          ["Foundations", "Start by understanding core ideas and strong reasoning patterns."],
          ["Projects", "Translate theory into small, exciting builds and experiments."],
          ["Confidence", "Develop a clearer, more resilient approach to technology and learning."],
        ].map(([title, text]) => (
          <div key={title} className="page-card">
            <span className="badge soft">{title}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/students" } };

import { PageTemplate } from "@academy/components/page-template";

export default function ParentsPage() {
  return (
    <PageTemplate
      eyebrow="For parents"
      title="An educational experience that supports growth with clarity."
      intro="Parents can look for structure, accountability, and a learning journey that builds durable confidence and curiosity."
    >
      <div className="card-list">
        {[
          ["Structure", "Clear pathways, milestones, and a progression that makes sense."],
          ["Safety", "Thoughtful educational design with a focus on wellbeing and development."],
          ["Progress", "A learning rhythm that encourages growth without overwhelm."],
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

export const metadata = { alternates: { canonical: "/academy/parents" } };

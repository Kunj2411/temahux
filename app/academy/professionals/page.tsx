import { PageTemplate } from "@academy/components/page-template";

export default function ProfessionalsPage() {
  return (
    <PageTemplate
      eyebrow="For professionals"
      title="Refresh your understanding and create stronger technical fluency."
      intro="Professional learners benefit from a thoughtful blend of fundamentals, modern tools, and practical projects that connect theory to real-world work."
    >
      <div className="card-list">
        {[
          ["AI Literacy", "Understand emerging systems and how they shape modern products."],
          ["Systems Thinking", "Learn to connect concepts across tools, teams, and problems."],
          ["Applied Innovation", "Build solutions that are grounded in practice and strategic thinking."],
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

export const metadata = {
  title: "For Professionals — AI Literacy & Technical Upskilling",
  description: "Professional learners at TEMAHUX Academy build AI literacy, systems thinking, and applied innovation skills through practical projects.",
  alternates: { canonical: "/academy/professionals" },
};

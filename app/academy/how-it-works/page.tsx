import { PageTemplate } from "@academy/components/page-template";

export default function HowItWorksPage() {
  return (
    <PageTemplate
      eyebrow="How it works"
      title="A clear path from curiosity to applied skills."
      intro="Every learning journey follows a cycle of discovery, understanding, building, and steady growth."
    >
      <div className="timeline-grid">
        {[
          ["01", "Discover", "Pick a pathway that matches your interests and goals."],
          ["02", "Learn", "Move through structured concepts and nuanced explanations."],
          ["03", "Practice", "Solve problems, debug, and sharpen your reasoning."],
          ["04", "Build", "Create meaningful projects that use the skills you’ve developed."],
          ["05", "Showcase", "Present your work and reflect on what you’re learning."],
          ["06", "Grow", "Keep improving with deeper exploration and stronger direction."],
        ].map(([step, title, text]) => (
          <div key={step} className="timeline-item">
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/how-it-works" } };

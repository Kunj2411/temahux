import { PageTemplate } from "@/components/page-template";

export default function PricingPage() {
  return (
    <PageTemplate
      eyebrow="Pricing"
      title="Explore programs and learn in the right format for you."
      intro="Pricing details are intentionally flexible, and the experience is designed to guide learners toward the right pathway rather than push a single plan."
    >
      <div className="card-list">
        {[
          { title: "Explore Programs", description: "Browse learning journeys by age, ambition, and technology focus." },
          { title: "Contact TEMAHUX", description: "Talk to the team about pathways, groups, and curriculum fit." },
          { title: "Plans Coming Soon", description: "New learning packages and onboarding options will be announced as they are ready." },
        ].map((item) => (
          <div key={item.title} className="page-card">
            <span className="badge soft">{item.title}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

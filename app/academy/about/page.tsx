import { PageTemplate } from "@academy/components/page-template";

export default function AboutPage() {
  return (
    <PageTemplate
      eyebrow="About"
      title="Think. Explore. Master. Analyze. Highlight. Understand. eXcel."
      intro="TEMAHUX is built around a philosophy of active learning: understand deeply, practice consistently, build real projects, and grow into confident technology creators."
    >
      <div className="card-list">
        {[
          { title: "Learn", description: "Start with great questions and strong foundations." },
          { title: "Practice", description: "Reinforce concepts through repetition and thoughtful challenge." },
          { title: "Build", description: "Create projects that connect learning to action." },
          { title: "Apply", description: "Use technology with intention and clarity." },
          { title: "Grow", description: "Iterate, reflect, and continue building momentum." },
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

export const metadata = { alternates: { canonical: "/academy/about" } };

import { CardGrid, PageTemplate } from "@/components/page-template";

export default function AIPPage() {
  return (
    <PageTemplate
      eyebrow="AI"
      title="Learn the systems behind intelligent tools."
      intro="From machine learning fundamentals to generative AI and responsible practice, this path helps learners understand how AI works and where it matters."
    >
      <CardGrid
        items={[
          { title: "AI Fundamentals", description: "Explore models, data, prediction, and decision-making.", badge: "Core" },
          { title: "Machine Learning", description: "Learn how systems improve from patterns and examples.", badge: "ML" },
          { title: "Generative AI", description: "Understand creative AI and text-driven workflows.", badge: "GenAI" },
          { title: "Prompt Engineering", description: "Communicate with AI systems more clearly and accurately.", badge: "Prompting" },
          { title: "Computer Vision", description: "Work with image and visual understanding systems.", badge: "Vision" },
          { title: "Responsible AI", description: "Evaluate fairness, transparency, and practical limitations.", badge: "Ethics" },
        ]}
      />
    </PageTemplate>
  );
}

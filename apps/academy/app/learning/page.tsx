import { CardGrid, PageTemplate } from "@/components/page-template";

export default function LearningPage() {
  return (
    <PageTemplate
      eyebrow="Learning"
      title="A structured path from curiosity to mastery."
      intro="TEMAHUX learning combines guided instruction, practice, projects, and reflection to help students build momentum over time."
    >
      <CardGrid
        items={[
          { title: "Learn", description: "Start with clear explanations, visual teaching, and conceptual structure.", href: "/classes", badge: "Core" },
          { title: "Practice", description: "Sharpen reasoning through exercises, debugging, and optimization challenges.", href: "/practice", badge: "Active" },
          { title: "Build", description: "Transform concepts into projects that teach persistence and design thinking.", href: "/projects", badge: "Build" },
          { title: "Review", description: "Strengthen retention with checkpoints, reflection, and synthesis.", href: "/resources", badge: "Reflect" },
          { title: "Master", description: "Move toward more advanced work, independence, and deeper execution.", href: "/roadmaps", badge: "Advance" },
          { title: "Career", description: "Apply your growth to direction, readiness, and future opportunity.", href: "/career", badge: "Prepare" },
        ]}
      />
    </PageTemplate>
  );
}

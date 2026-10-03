import { CardGrid, PageTemplate } from "@academy/components/page-template";

export default function STEMPage() {
  return (
    <PageTemplate
      eyebrow="STEM"
      title="A vibrant STEM ecosystem."
      intro="Explore science, technology, engineering, mathematics, and creative problem solving through challenge-based learning."
    >
      <CardGrid
        items={[
          { title: "Science", description: "Ask questions, test hypotheses, and uncover evidence-driven answers.", badge: "Explore" },
          { title: "Technology", description: "Learn tools and systems that support coding, building, and digital design.", badge: "Tools" },
          { title: "Engineering", description: "Design, prototype, and improve solutions with iterative thinking.", badge: "Build" },
          { title: "Mathematics", description: "Use patterns, logic, and quantitative reasoning to make decisions.", badge: "Reason" },
          { title: "Creative Problem Solving", description: "Combine imagination and structure to generate stronger ideas.", badge: "Create" },
          { title: "Experiments", description: "Turn observations into outcomes through guided, measurable exploration.", badge: "Test" },
        ]}
      />
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/stem" } };

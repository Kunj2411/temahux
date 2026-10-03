import { CardGrid, PageTemplate } from "@academy/components/page-template";

export default function CareerPage() {
  return (
    <PageTemplate
      eyebrow="Career"
      title="Prepare for a future in tech with clarity and direction."
      intro="Career development at TEMAHUX focuses on skills, portfolio thinking, interview readiness, and practical technical confidence."
    >
      <CardGrid
        items={[
          { title: "Skills", description: "Build the technical and collaborative strengths that matter in modern workflows.", badge: "Core" },
          { title: "Portfolio", description: "Show your thinking through evidence, projects, and polished work.", badge: "Proof" },
          { title: "DSA", description: "Strengthen logic and structured problem solving for technical challenges.", badge: "Logic" },
          { title: "Interview Prep", description: "Practice communication, reasoning, and story-driven self-presentation.", badge: "Prepare" },
          { title: "Internship Readiness", description: "Apply technical fundamentals in realistic, team-based contexts.", badge: "Readiness" },
          { title: "Industry Exposure", description: "Build a clearer understanding of modern technology roles and expectations.", badge: "Exposure" },
        ]}
      />
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/career" } };

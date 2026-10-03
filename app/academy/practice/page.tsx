import { CardGrid, PageTemplate } from "@academy/components/page-template";

export default function PracticePage() {
  return (
    <PageTemplate
      eyebrow="Practice"
      title="Challenge yourself with deliberate problem solving."
      intro="Practice is about repetition, debugging, and creative reasoning. It turns understanding into fluency and confidence."
    >
      <CardGrid
        items={[
          { title: "Coding", description: "Solve short programming tasks with logic, iteration, and clean execution.", badge: "Beginner" },
          { title: "DSA", description: "Strengthen algorithmic thinking through pattern recognition and efficient design.", badge: "Intermediate" },
          { title: "MCQs", description: "Check your understanding of core ideas in fast, focused rounds.", badge: "Review" },
          { title: "Debugging", description: "Find and fix errors while learning how systems actually behave.", badge: "Professional" },
          { title: "AI Challenges", description: "Experiment with prompts, reasoning, and responsible tool use.", badge: "AI" },
          { title: "Robotics Challenges", description: "Turn sensor data and movement into trustworthy action.", badge: "Robotics" },
        ]}
      />
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/practice" } };

import { CardGrid, PageTemplate } from "@/components/page-template";
import { projects } from "@/data/site-data";

export default function ProjectsPage() {
  return (
    <PageTemplate
      eyebrow="Projects"
      title="Build what you learn."
      intro="Every project is designed to connect concepts and tools to a real outcome, turning learning into confident action."
    >
      <CardGrid
        items={projects.map((project) => ({
          title: project.title,
          description: project.description,
          href: `/projects/${project.slug}`,
          badge: project.category,
        }))}
      />
    </PageTemplate>
  );
}

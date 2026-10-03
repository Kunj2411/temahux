import { CardGrid, PageTemplate } from "@academy/components/page-template";
import { projects } from "@academy/data/site-data";

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
          href: `/academy/projects/${project.slug}`,
          badge: project.category,
        }))}
      />
    </PageTemplate>
  );
}

export const metadata = {
  title: "Projects — Build Real Technology with What You Learn",
  description: "Every TEMAHUX project connects concepts and tools to a real outcome, turning learning into confident action.",
  alternates: { canonical: "/academy/projects" },
};

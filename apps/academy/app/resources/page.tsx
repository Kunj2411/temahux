import { CardGrid, PageTemplate } from "@/components/page-template";
import { resources } from "@/data/site-data";

export default function ResourcesPage() {
  return (
    <PageTemplate
      eyebrow="Resources"
      title="Tools and guides for ongoing growth."
      intro="A collection of supporting materials to help learners revisit ideas, learn faster, and deepen understanding beyond the classroom."
    >
      <CardGrid
        items={resources.map((resource) => ({
          title: resource,
          description: "Helpful supporting content designed for revision, reference, and guided learning.",
          badge: "Resource",
        }))}
      />
    </PageTemplate>
  );
}

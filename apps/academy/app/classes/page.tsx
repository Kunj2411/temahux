import { CardGrid, PageTemplate } from "@/components/page-template";
import { classes } from "@/data/site-data";

export default function ClassesPage() {
  return (
    <PageTemplate
      eyebrow="Classes"
      title="Explore a world of technology learning."
      intro="From STEM and coding to robotics, AI, and immersive design, each class is built to help learners discover, practice, and create with confidence."
    >
      <CardGrid
        items={classes.map((item) => ({
          title: item.title,
          description: item.description,
          href: `/classes/${item.slug}`,
          badge: item.category,
        }))}
      />
    </PageTemplate>
  );
}

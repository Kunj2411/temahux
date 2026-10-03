import { CardGrid, PageTemplate } from "@/components/page-template";
import { blogPosts } from "@/data/site-data";

export default function BlogPage() {
  return (
    <PageTemplate
      eyebrow="Blog"
      title="Insights for curious builders."
      intro="Articles and notes designed to help students learn through reflection, practice, and real-world technology storytelling."
    >
      <CardGrid
        items={blogPosts.map((post) => ({
          title: post.title,
          description: post.excerpt,
          href: `/blog/${post.slug}`,
          badge: post.category,
        }))}
      />
    </PageTemplate>
  );
}

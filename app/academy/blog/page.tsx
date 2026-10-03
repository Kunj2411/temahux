import { CardGrid, PageTemplate } from "@academy/components/page-template";
import { blogPosts } from "@academy/data/site-data";

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
          href: `/academy/blog/${post.slug}`,
          badge: post.category,
        }))}
      />
    </PageTemplate>
  );
}

export const metadata = {
  title: "Blog — Insights for Curious Technology Builders",
  description: "Articles and notes from TEMAHUX Academy to help students learn through reflection, practice, and real-world technology storytelling.",
  alternates: { canonical: "/academy/blog" },
};

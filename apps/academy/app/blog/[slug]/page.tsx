import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { blogPosts } from "@/data/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTemplate eyebrow={post.category} title={post.title} intro={post.excerpt}>
      <div className="detail-page">
        <div className="page-card">
          <span className="badge soft">{post.readTime}</span>
          <h3>Article summary</h3>
          <p>
            This article explores practical learning systems, thoughtful iteration, and the value of project-based growth in modern technology education.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

import { redirect } from "next/navigation";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/academy/classes/${slug}`);
}
export const metadata = { alternates: { canonical: "/academy/courses/[slug]" } };

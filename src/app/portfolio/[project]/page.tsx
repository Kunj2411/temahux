import { notFound, redirect } from "next/navigation";
const products = ["university-os", "paper-checking-ai", "lms"];
export function generateStaticParams() { return products.map((project) => ({ project })); }
export default async function ProjectRedirect({ params }: { params: Promise<{ project: string }> }) { const { project } = await params; if (!products.includes(project)) notFound(); redirect(`/products/${project}`); }

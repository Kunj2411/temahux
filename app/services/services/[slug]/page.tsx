import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@services/components/layout/Navbar";
import ServiceFooter from "@services/components/services/v2/ServiceFooter";
import { extendedServices } from "@services/lib/extended-content";
import { siteUrl } from "@services/lib/services";

export function generateStaticParams() { return extendedServices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = extendedServices.find((item) => item.slug === slug);
  return service ? { title: `${service.title} | Temahux`, description: service.short, alternates: { canonical: `${siteUrl}/services/${slug}` }, openGraph: { title: `${service.title} | Temahux`, description: service.short, url: `${siteUrl}/services/${slug}` } } : {};
}
export default async function ExtendedServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = extendedServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.short, serviceType: service.title, url: `${siteUrl}/services/${slug}`, provider: { "@type": "Organization", name: "Temahux", url: siteUrl }, areaServed: "IN" };
  return <><Navbar /><main className="svc-page bg-bg text-text"><section className="svc-hero"><div className="svc-container"><p className="svc-mono text-signal">{service.eyebrow}</p><div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><h1 className="max-w-3xl font-display-services text-[clamp(2.7rem,7vw,6.2rem)] leading-[.98] tracking-[-.055em]">{service.title}<span className="text-brand">.</span></h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted">{service.short}</p><Link className="mt-9 inline-flex items-center gap-3 rounded-panel bg-brand px-6 py-4 text-sm text-white transition hover:bg-white hover:text-bg" href="/services/services/contact-consultation">Talk to Temahux <ArrowRight size={16} /></Link></div><div className="border border-line bg-surface-1 p-7 md:p-9"><p className="svc-mono-sm text-text-muted">CAPABILITIES</p><ul className="mt-6 space-y-4">{service.capabilities.map((capability) => <li key={capability} className="flex gap-3 text-[15px] leading-relaxed"><Check size={16} className="mt-1 shrink-0 text-brand" />{capability}</li>)}</ul></div></div></div></section><section className="svc-container grid gap-10 border-t border-line py-16 md:grid-cols-3 md:py-20">{[["01", "Understand", "We begin with the job to be done, the people involved and the systems already in place."], ["02", "Design & build", "Shape the experience and technical approach, then develop and review in visible increments."], ["03", "Launch & support", "Prepare the deployment, hand over the system and provide support based on the agreed scope."]].map(([n, title, copy]) => <article key={n} className="border-t border-line pt-5"><p className="svc-mono-sm text-signal">{n} / PROCESS</p><h2 className="mt-4 text-2xl tracking-tight">{title}</h2><p className="mt-3 text-sm leading-relaxed text-text-muted">{copy}</p></article>)}</section><section className="border-y border-line bg-surface-1"><div className="svc-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between"><div><p className="svc-mono-sm text-signal">A PRACTICAL NEXT STEP</p><h2 className="mt-3 text-3xl tracking-tight">Start with what needs to work.</h2></div><Link href="/services/services/contact-consultation" className="inline-flex items-center gap-3 text-sm">Describe the project <ArrowRight size={16} /></Link></div></section></main><ServiceFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

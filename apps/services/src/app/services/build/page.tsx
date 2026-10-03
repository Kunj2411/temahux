import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Capabilities from "@/components/services/v2/Capabilities";
import { PracticeDiagram } from "@/components/services/v2/ArchitectureDiagram";
import ServiceFooter from "@/components/services/v2/ServiceFooter";
import {
  conversionLabel,
  finalCtaCopy,
  getPractice,
  practices,
  siteUrl,
} from "@/lib/services";

const practice = getPractice("build");
const path = `/services/${practice.slug}`;

export const metadata: Metadata = {
  title: "Build — From an idea to something running | Temahux",
  description: practice.description,
  alternates: { canonical: `${siteUrl}${path}` },
  openGraph: {
    title: "Build — From an idea to something running | Temahux",
    description: practice.description,
    url: `${siteUrl}${path}`,
    type: "website",
  },
};

export default function BuildPracticePage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <section className="svc-page-top border-b border-line pb-16">
          <div className="svc-container">
            <p className="svc-mono text-signal">
              {practice.index} · {practice.label}
            </p>

            <h1 className="mt-6 max-w-3xl font-display-services text-[32px] leading-[1.08] tracking-[-0.03em] text-text md:text-[40px] xl:text-[56px]">
              {practice.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-[1.65] text-text-muted">
              {practice.description}
            </p>

            <p className="svc-mono mt-8 text-text-muted">{practice.theme}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/services/contact-consultation"
                className="rounded-panel bg-brand px-7 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {conversionLabel}
              </Link>
              <Link
                href="/services/pricing"
                className="rounded-panel border border-line px-7 py-4 text-[15px] font-medium text-text transition-colors duration-200 hover:border-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="svc-section">
          <div className="svc-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-20">
              <div>
                <h2 className="svc-mono text-text-muted">Capabilities</h2>
                <div className="mt-6">
                  <Capabilities groups={practice.groups} />
                </div>
              </div>

              <div className="hidden lg:block">
                <PracticeDiagram slug={practice.slug} />
              </div>
            </div>

            <p className="svc-mono-sm mt-12 border-t border-line pt-6 text-text-muted">
              {practice.workNote}
            </p>

            <nav
              aria-label="Other practices"
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {practices
                .filter((item) => item.slug !== practice.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="svc-mono text-text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {item.index} {item.label} →
                  </Link>
                ))}
            </nav>
          </div>
        </section>

        <section className="svc-section border-t border-line">
          <div className="svc-container">
            <h2 className="max-w-2xl font-display-services text-[28px] leading-[1.15] tracking-[-0.03em] text-text md:text-[40px]">
              {finalCtaCopy.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
              {finalCtaCopy.body}
            </p>
            <Link
              href="/services/contact-consultation"
              className="mt-10 inline-block rounded-panel bg-brand px-7 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {conversionLabel}
            </Link>
          </div>
        </section>
      </main>

      <ServiceFooter />
    </>
  );
}

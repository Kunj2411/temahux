import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import SectionHeader from "@/components/services/v2/SectionHeader";
import ServiceFooter from "@/components/services/v2/ServiceFooter";
import { conversionLabel, siteUrl } from "@/lib/services";

export const metadata: Metadata = {
  title: "Branding & Design — Logo, identity and visual systems | Temahux",
  description:
    "Distinctive brand identities from logos to complete visual systems. Published entry point ₹8,000+.",
  alternates: { canonical: `${siteUrl}/services/branding-design` },
};

const capabilities = [
  { name: "Logo Design", detail: "Unique brand marks and wordmarks" },
  {
    name: "Brand Identity",
    detail: "Complete visual system and guidelines",
  },
  {
    name: "Marketing Collateral",
    detail: "Business cards, brochures, and more",
  },
];

export default function BrandingDesignPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <section className="svc-page-top border-b border-line pb-16">
          <div className="svc-container">
            <SectionHeader
              level={1}
              eyebrow="Service Offering"
              heading="Branding & Design"
              intro="Distinctive brand identities that resonate with your audience. From logos to complete visual systems, we craft memorable brand experiences."
            />

            <p className="svc-price mt-8 text-signal">Starting from ₹8,000</p>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-text-muted">
              Logo packages start at ₹8k, full brand identity from ₹25k.
            </p>

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
            <h2 className="svc-mono text-text-muted">What this covers</h2>

            <div className="mt-6 grid gap-px border-y border-line bg-line md:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.name} className="bg-bg py-7 md:px-7">
                  <h3 className="font-display-services text-[19px] tracking-[-0.01em] text-text">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <nav
              aria-label="Related services pages"
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
            >
              <Link
                href="/services/grow"
                className="svc-mono text-text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Grow practice →
              </Link>
              <Link
                href="/services"
                className="svc-mono text-text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                All services →
              </Link>
            </nav>
          </div>
        </section>
      </main>

      <ServiceFooter />
    </>
  );
}

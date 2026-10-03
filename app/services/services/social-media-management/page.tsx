import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@services/components/layout/Navbar";
import SectionHeader from "@services/components/services/v2/SectionHeader";
import ServiceFooter from "@services/components/services/v2/ServiceFooter";
import { conversionLabel, siteUrl } from "@services/lib/services";

export const metadata: Metadata = {
  title: "Social Media Management — 20 posts a month | Temahux",
  description:
    "Social media management from ₹5,000/month: 20 posts, caption writing, hashtag strategy, profile optimisation and monthly analytics across Instagram, Facebook, LinkedIn and Twitter.",
  alternates: { canonical: "/services/services/social-media-management" },
};

const capabilities = [
  {
    name: "Content Strategy",
    detail: "Platform-specific content planning",
  },
  {
    name: "Community Management",
    detail: "Engagement and response handling",
  },
  {
    name: "Analytics & Reporting",
    detail: "Performance tracking and insights",
  },
];

export default function SocialMediaManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <section className="svc-page-top border-b border-line pb-16">
          <div className="svc-container">
            <SectionHeader
              level={1}
              eyebrow="Service Offering"
              heading="Social Media Management"
              intro="Strategic social media presence that drives engagement, builds community, and converts followers into customers across all major platforms."
            />

            <p className="svc-price mt-8 text-signal">
              Starting from ₹5,000/month
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-text-muted">
              Packages include content creation, posting, and engagement. 20
              posts, caption writing, hashtag strategy, profile optimisation and
              monthly analytics across Instagram, Facebook, LinkedIn and
              Twitter.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/services/services/contact-consultation"
                className="rounded-panel bg-brand px-7 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {conversionLabel}
              </Link>
              <Link
                href="/services/services/pricing"
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
                href="/services/services/grow"
                className="svc-mono text-text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Grow practice →
              </Link>
              <Link
                href="/services/services"
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

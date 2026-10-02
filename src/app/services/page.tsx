import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ServicesHero from "@/components/services/v2/ServicesHero";
import ProblemSelect from "@/components/services/v2/ProblemSelect";
import PracticeSwitcher from "@/components/services/v2/PracticeSwitcher";
import ProcessSection from "@/components/services/v2/ProcessSection";
import { DeliverablesSection } from "@/components/services/v2/Capabilities";
import WorkRows from "@/components/services/v2/WorkRows";
import Engagement from "@/components/services/v2/Engagement";
import PricingSection from "@/components/services/v2/PricingSection";
import TalkToTemahux from "@/components/services/v2/TalkToTemahux";
import ServiceFooter from "@/components/services/v2/ServiceFooter";
import { faqs, pricing, siteUrl } from "@/lib/services";

/**
 * /services — thin server component.
 *
 * All copy and data live in `src/lib/services.ts`. Client islands on this
 * page are limited to `PracticeSwitcher`, `ProblemSelect` and the
 * `ConsultationForm` inside `TalkToTemahux`.
 */

export const metadata: Metadata = {
  title: "Services — Build, Grow, Automate, Operate | Temahux",
  description:
    "Four practices: Build, Grow, Automate and Operate. Web development from ₹3,000, branding and design from ₹8,000, AI automation from ₹15,000, social media management from ₹5,000/month and digital marketing from ₹10,000/month. Published INR entry points.",
  keywords:
    "web development India, branding and design, digital marketing retainer, social media management, AI automation, post-launch support",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services — Build, Grow, Automate, Operate | Temahux",
    description:
      "One team taking a system from a first idea to production, and keeping it running after launch. Published INR entry points from ₹3,000.",
    url: `${siteUrl}/services`,
    type: "website",
  },
};

/**
 * JSON-LD is serialised from the same arrays the page renders, so the schema
 * cannot drift from the visible content.
 */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/services#service`,
  name: "Temahux Digital Services",
  description:
    "Web development, branding and design, digital marketing, social media management and AI automation for businesses in India.",
  serviceType: "Digital services",
  url: `${siteUrl}/services`,
  areaServed: "IN",
  provider: {
    "@type": "Organization",
    name: "Temahux",
    url: siteUrl,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: pricing
      .filter((row) => row.amount !== null)
      .map((row) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: row.service,
          description: row.detail,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: String(row.amount),
          priceCurrency: row.currency,
        },
        url: `${siteUrl}${row.href}`,
      })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/services#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <ServicesHero />
        <ProblemSelect />
        <PracticeSwitcher />
        <ProcessSection />
        <DeliverablesSection />
        <WorkRows />
        <Engagement />
        <PricingSection />
        <TalkToTemahux />
      </main>

      <ServiceFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

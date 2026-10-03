import type { Metadata } from "next";
import Navbar from "@services/components/layout/Navbar";
import PricingSection from "@services/components/services/v2/PricingSection";
import ServiceFooter from "@services/components/services/v2/ServiceFooter";
import { siteUrl } from "@services/lib/services";

export const metadata: Metadata = {
  title: "Pricing — Published INR Entry Points",
  description:
    "Web development from ₹3,000, branding and design from ₹8,000, AI automation from ₹15,000, social media management from ₹5,000/month and digital marketing from ₹10,000/month. 50% to begin, 50% on completion.",
  alternates: { canonical: "/services/services/pricing" },
};

/**
 * Renders the same `PricingSection` used by /services#pricing, from the same
 * `src/lib/services.ts` data. There is exactly one pricing table in the
 * codebase, so the two surfaces cannot drift.
 */
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text">
        <PricingSection level={1} first />
      </main>
      <ServiceFooter />
    </>
  );
}

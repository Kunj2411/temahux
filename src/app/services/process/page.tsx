import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ProcessSection from "@/components/services/v2/ProcessSection";
import ServiceFooter from "@/components/services/v2/ServiceFooter";
import { siteUrl } from "@/lib/services";

export const metadata: Metadata = {
  title: "Process — Five stages, and you know which one you're in | Temahux",
  description:
    "Scope, Design, Build, Launch, Support. What you receive at each stage and a typical duration, from a 1-week scope to a 1, 3 or 6-month support window.",
  alternates: { canonical: `${siteUrl}/services/process` },
};

/**
 * Aligned with the single process model on the site. The retired
 * /services/framework model (Infrastructure Audit / System Scaffolding /
 * Algorithmic Pulse) is gone and must not return.
 */
export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text">
        <ProcessSection level={1} first />
      </main>
      <ServiceFooter />
    </>
  );
}

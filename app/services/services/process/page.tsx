import type { Metadata } from "next";
import Navbar from "@services/components/layout/Navbar";
import ProcessSection from "@services/components/services/v2/ProcessSection";
import ServiceFooter from "@services/components/services/v2/ServiceFooter";
import { siteUrl } from "@services/lib/services";

export const metadata: Metadata = {
  title: "Process — Five Stages from Scope to Support",
  description:
    "Scope, Design, Build, Launch, Support. What you receive at each stage and a typical duration, from a 1-week scope to a 1, 3 or 6-month support window.",
  alternates: { canonical: "/services/services/process" },
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

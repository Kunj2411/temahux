import Link from "next/link";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { heroCopy, pricing } from "@services/lib/services";

const entryPoint = pricing.find((row) => row.tier === "project");

/**
 * /services hero.
 *
 * Server component. The illustration is a live abstract architecture diagram
 * rendered as inline SVG — no image request, no stock photography, no 3D, no
 * neon. Its only animation is the single travelling node, which is driven by
 * CSS so it pauses on hover/focus and never runs under
 * `prefers-reduced-motion: reduce`.
 */
export default function ServicesHero() {
  return (
    <section className="svc-hero svc-hero-art relative overflow-hidden border-b border-line">
      <div className="svc-container">
        <div className="grid items-center gap-16 xl:grid-cols-2 xl:gap-20">
          <div>
            <p className="svc-mono text-signal">{heroCopy.eyebrow}</p>

            <h1 className="mt-6 max-w-xl font-display-services text-[32px] leading-[1.06] tracking-[-0.03em] text-text md:text-[40px] xl:text-[64px]">
              {heroCopy.headline}
            </h1>

            <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-text-muted">
              {heroCopy.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/services/services/contact-consultation"
                className="rounded-panel bg-brand px-7 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {heroCopy.primaryCta}
              </Link>
              <a
                href="#practices"
                className="rounded-panel border border-line px-7 py-4 text-[15px] font-medium text-text transition-colors duration-200 hover:border-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {heroCopy.secondaryCta}
              </a>
            </div>

            {entryPoint ? (
              <p className="svc-mono-sm mt-10 text-text-muted">
                Project entry points from {entryPoint.price}
              </p>
            ) : null}
          </div>

          <div aria-hidden="true" className="hidden xl:block">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Diagram moves beneath the copy on smaller viewports. */}
        <div className="mt-16 xl:hidden">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

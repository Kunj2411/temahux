import SectionHeader from "./SectionHeader";
import { processCopy, processStages } from "@services/lib/services";

/**
 * Section 04 — "How we work".
 *
 * The ONLY process model on the site. The retired /services/framework model
 * (Infrastructure Audit / System Scaffolding / Algorithmic Pulse) is deleted
 * and must not reappear.
 *
 * Rendered as a vertical sequence on a connecting rule — deliberately not
 * five numbered circles. Server component.
 */
export default function ProcessSection({
  level = 2,
  first = false,
}: {
  level?: 1 | 2;
  /** Adds clearance for the fixed Navbar when this is a page's first section. */
  first?: boolean;
}) {
  return (
    <section
      id="process"
      className={`svc-section ${first ? "svc-page-top" : ""} scroll-mt-24 border-t border-line`}
    >
      <div className="svc-container">
        <SectionHeader
          level={level}
          eyebrow={processCopy.eyebrow}
          heading={processCopy.heading}
          intro={processCopy.intro}
        />

        <div className="relative mt-16">
          {/* The connecting rule the five stages sit on. */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-px bg-line md:block"
          />

          <ol className="border-t border-line md:pl-10">
            {processStages.map((stage) => (
              <li
                key={stage.index}
                className="grid gap-x-12 gap-y-4 border-b border-line py-8 md:grid-cols-[64px_minmax(0,1fr)_180px]"
              >
                <p className="svc-mono text-signal">{stage.index}</p>

                <div>
                  <h3 className="font-display-services text-[20px] tracking-[-0.02em] text-text">
                    {stage.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-text-muted">
                    {stage.description}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.6] text-text">
                    <span className="svc-mono-sm text-text-muted">
                      Output ·{" "}
                    </span>
                    {stage.output}
                  </p>
                </div>

                <p className="svc-mono-sm text-text-muted md:text-right">
                  Typical · {stage.duration}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

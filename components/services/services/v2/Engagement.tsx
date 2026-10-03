import SectionHeader from "./SectionHeader";
import {
  engagementCopy,
  engagementModels,
  engagementNote,
} from "@services/lib/services";

/**
 * Section 07 — "Engagement models".
 *
 * Three buying decisions, separated by hairline rules rather than three
 * cards with gradient borders. Server component.
 */
export default function Engagement() {
  return (
    <section id="engagement" className="svc-section scroll-mt-24 border-t border-line">
      <div className="svc-container">
        <SectionHeader
          eyebrow={engagementCopy.eyebrow}
          heading={engagementCopy.heading}
        />

        <div className="mt-16 grid gap-px border-y border-line bg-line lg:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.name}
              className="flex flex-col bg-bg pb-8 lg:px-8 lg:py-10"
            >
              <p className="svc-mono-sm text-text-muted">{model.index}</p>

              <h3 className="mt-3 font-display-services text-[24px] tracking-[-0.02em] text-text">
                {model.name}
              </h3>

              <p className="mt-2 text-[15px] leading-[1.6] text-text-muted">
                {model.summary}
              </p>

              <p className="mt-6 text-[16px] leading-[1.65] text-text-muted">
                {model.body}
              </p>

              <p className="svc-mono mt-auto pt-8 text-signal">{model.from}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-text">
          {engagementNote}
        </p>
      </div>
    </section>
  );
}

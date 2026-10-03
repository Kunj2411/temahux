import PricingTable from "@services/components/services/PricingTable";
import SectionHeader from "./SectionHeader";
import {
  faqs,
  hosting,
  operationalFacts,
  pricing,
  pricingCopy,
  supportTiers,
  timelines,
} from "@services/lib/services";

/**
 * Section 08 — "Pricing".
 *
 * ONE table, one source of truth (`src/lib/services.ts`). The operational
 * facts that were previously buried in an accordion are surfaced as compact
 * mono metadata beside it. No "contact us for pricing" hedge: if a number is
 * published, it is stated.
 *
 * The FAQ block is the single rendering of the verified questions; the
 * FAQPage JSON-LD in `src/app/services/page.tsx` is serialised from the same
 * `faqs` array, so the visible copy and the schema cannot drift.
 */
export default function PricingSection({
  level = 2,
  first = false,
}: {
  level?: 1 | 2;
  /** Adds clearance for the fixed Navbar when this is a page's first section. */
  first?: boolean;
}) {
  return (
    <section
      id="pricing"
      className={`svc-section ${first ? "svc-page-top" : ""} scroll-mt-24 border-t border-line`}
    >
      <div className="svc-container">
        <SectionHeader
          level={level}
          eyebrow={pricingCopy.eyebrow}
          heading={pricingCopy.heading}
          intro={pricingCopy.intro}
        />

        <div className="mt-16">
          <PricingTable rows={pricing} />
        </div>

        <dl className="mt-12 grid gap-px border-y border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {operationalFacts.map((fact) => (
            <div key={fact.label} className="bg-bg py-5 sm:px-5">
              <dt className="svc-mono-sm text-text-muted">{fact.label}</dt>
              <dd className="mt-2 text-[15px] leading-[1.6] text-text">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="svc-mono text-text-muted">Typical timelines</h3>
            <ul className="mt-4 border-t border-line">
              {timelines.map((item) => (
                <li
                  key={item.scope}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <span className="text-[15px] leading-[1.6] text-text-muted">
                    {item.scope}
                  </span>
                  <span className="svc-mono-sm shrink-0 text-text">
                    {item.duration}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-text-muted">
              Hosting is separate, typically {hosting.range} depending on
              requirements — {hosting.providers.join(", ")}. {hosting.note}
            </p>
          </div>

          <div>
            <h3 className="svc-mono text-text-muted">
              Support included with every build
            </h3>
            <ul className="mt-4 border-t border-line">
              {supportTiers.map((item) => (
                <li
                  key={item.scope}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <span className="text-[15px] leading-[1.6] text-text-muted">
                    {item.scope}
                  </span>
                  <span className="svc-mono-sm shrink-0 text-text">
                    {item.duration}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-text-muted">
              Support covers bug fixes, minor updates and technical assistance.
            </p>
          </div>
        </div>

        <p className="mt-14 max-w-3xl text-[16px] leading-[1.65] text-text">
          {pricingCopy.closing}
        </p>

        <div className="mt-16">
          <h3 className="font-display-services text-[20px] tracking-[-0.02em] text-text">
            {pricingCopy.faqHeading}
          </h3>

          <div className="mt-6 border-t border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="svc-faq border-b border-line">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-5 text-[17px] leading-[1.5] text-text transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  {faq.question}
                  <span aria-hidden="true" className="svc-mono-sm shrink-0 text-text-muted">
                    <span className="svc-faq-closed">+</span>
                    <span className="svc-faq-open">−</span>
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 text-[16px] leading-[1.65] text-text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

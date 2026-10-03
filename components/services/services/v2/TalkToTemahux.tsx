import ConsultationForm from "@services/components/services/ConsultationForm";
import { finalCtaCopy } from "@services/lib/services";

/**
 * Section 09 — "Talk to Temahux".
 *
 * Holds the single violet/blue gradient in the entire services experience:
 * the hairline at the top of this section. Nowhere else.
 */
export default function TalkToTemahux() {
  return (
    <section id="talk" className="svc-section scroll-mt-24 border-t border-line">
      <div className="svc-container">
        <div className="svc-cta-hairline" aria-hidden="true" />

        <div className="mt-14 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-20">
          <div>
            <p className="svc-mono text-signal">{finalCtaCopy.eyebrow}</p>

            <h2 className="mt-5 max-w-xl font-display-services text-[30px] leading-[1.08] tracking-[-0.03em] text-text md:text-[40px] xl:text-[52px]">
              {finalCtaCopy.heading}
            </h2>

            <p className="mt-6 max-w-xl text-[18px] leading-[1.65] text-text-muted">
              {finalCtaCopy.body}
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="#pricing"
                className="svc-mono text-brand transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {finalCtaCopy.secondaryPricing} →
              </a>
              <a
                href="#work"
                className="svc-mono text-text-muted transition-colors duration-200 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {finalCtaCopy.secondaryWork} →
              </a>
            </div>
          </div>

          <div className="border border-line bg-surface-1 p-6 md:p-8">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

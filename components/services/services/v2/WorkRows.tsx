import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { workCopy } from "@services/lib/services";
import { caseStudies } from "@services/lib/case-studies";

/**
 * Section 06 — "Selected work".
 *
 * Full-width rows, never a grid and never cards. Outcome is rendered only
 * when a real measurable outcome exists; otherwise the row carries its
 * status line alone.
 *
 * With zero verified case studies this renders an honest, complete-looking
 * empty state — no placeholders, no invented projects, no broken grid.
 */
export default function WorkRows() {
  return (
    <section id="work" className="svc-section scroll-mt-24 border-t border-line">
      {/*
        Compatibility anchor. The shared Navbar dropdown (out of scope) links
        to `#portfolio`, an anchor from the previous IA. This keeps that link
        resolving without touching Navbar.tsx.
      */}
      <span id="portfolio" aria-hidden="true" />

      <div className="svc-container">
        <SectionHeader
          eyebrow={workCopy.eyebrow}
          heading={workCopy.heading}
          intro={workCopy.intro}
        />

        <div className="mt-16 border-t border-line">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-line py-6">
            <p className="svc-mono text-signal">{workCopy.emptyState}</p>
            <p className="svc-mono-sm text-text-muted">
              {String(caseStudies.length).padStart(2, "0")} published
            </p>
          </div>

          <p className="mt-10 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
            {workCopy.emptyStateDetail}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={workCopy.emptyStateCtaHref}
              className="rounded-panel bg-brand px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {workCopy.emptyStateCta}
            </Link>
            <Link
              href="/services/services/pricing"
              className="rounded-panel border border-line px-6 py-3.5 text-[15px] font-medium text-text transition-colors duration-200 hover:border-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              See pricing
            </Link>
          </div>
        </div>

        {caseStudies.length > 0 ? (
          <ul className="mt-4">
            {caseStudies.map((study) => (
              <li key={study.slug} className="border-t border-line py-10">
                <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                  <div>
                    <p className="svc-mono-sm text-signal">
                      {study.client} / {study.projectType}
                    </p>
                    <p className="svc-mono-sm mt-4 text-text-muted">
                      {study.status}
                    </p>
                    {study.outcome ? (
                      <p className="mt-4 text-[15px] leading-[1.6] text-text">
                        Outcome · {study.outcome}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-[17px] leading-[1.65] text-text">
                      {study.problem}
                    </p>
                    <p className="mt-4 text-[16px] leading-[1.65] text-text-muted">
                      {study.built}
                    </p>
                    <p className="svc-mono-sm mt-6 text-text-muted">
                      {study.technologies.join(" · ")}
                    </p>
                    <Link
                      href={study.href}
                      className="svc-mono mt-6 inline-block text-brand transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      View project →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

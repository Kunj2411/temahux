"use client";

import { problemCopy, problemIntents, practices } from "@services/lib/services";
import SectionHeader from "./SectionHeader";

/**
 * Section 02 — "The problem".
 *
 * Six intent statements. Selecting one sets the matching practice in the
 * switcher and moves the reader there. Native <button>s, so the whole list
 * is keyboard reachable and operable without any custom key handling; each
 * button's `aria-controls` points at the switcher's tablist.
 */

/** Respect the user's motion preference when scrolling to the switcher. */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const practiceLabel = (slug: string) =>
  practices.find((practice) => practice.slug === slug)?.label ?? slug;

function selectPractice(slug: string) {
  if (typeof window === "undefined") return;

  window.history.pushState(
    null,
    "",
    `${window.location.pathname}${window.location.search}#${slug}`
  );

  // pushState does not fire hashchange, so tell the switcher explicitly.
  window.dispatchEvent(new Event("hashchange"));

  // Move focus to the selected tab so a keyboard user lands on the thing
  // that just changed, then bring the switcher into view.
  const tab = document.getElementById(`tab-${slug}`);
  if (tab instanceof HTMLElement) {
    tab.focus({ preventScroll: true });
  }

  document.getElementById("practices")?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

export default function ProblemSelect() {
  return (
    <section id="problem" className="svc-section scroll-mt-24 border-t border-line">
      <div className="svc-container">
        <SectionHeader
          eyebrow={problemCopy.eyebrow}
          heading={problemCopy.heading}
          intro={problemCopy.intro}
        />

        {/*
          Column headers plus aligned columns are what make this read as a
          diagnostic readout — symptom on the left, the practice it routes to
          on the right — rather than a stack of marketing rows.
        */}
        <div className="mt-16 grid grid-cols-[32px_minmax(0,1fr)] gap-x-4 border-y border-line py-3 md:grid-cols-[40px_minmax(0,1fr)_132px]">
          <p className="svc-mono-sm text-text-muted">No.</p>
          <p className="svc-mono-sm text-text-muted">Symptom</p>
          <p className="svc-mono-sm hidden text-text-muted md:block md:text-right">
            Route to
          </p>
        </div>

        <ul>
          {problemIntents.map((intent, index) => (
            <li key={intent.statement} className="border-b border-line">
              <button
                type="button"
                aria-controls="practices-tablist"
                onClick={() => selectPractice(intent.practice)}
                className="group grid w-full grid-cols-[32px_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 py-5 text-left transition-colors duration-200 hover:bg-surface-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:grid-cols-[40px_minmax(0,1fr)_132px]"
              >
                <span className="svc-mono-sm text-text-muted transition-colors duration-200 group-hover:text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[17px] leading-[1.5] text-brand"
                  >
                    ›
                  </span>
                  <span className="text-[17px] leading-[1.55] text-text md:text-[19px]">
                    {intent.statement}
                  </span>
                </span>

                <span className="svc-mono-sm col-start-2 text-text-muted transition-colors duration-200 group-hover:text-brand md:col-start-3 md:text-right">
                  {practiceLabel(intent.practice)}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
          {problemCopy.closing}
        </p>
      </div>
    </section>
  );
}

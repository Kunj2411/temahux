"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Practice, PracticeSlug } from "@services/lib/services";
import { practices } from "@services/lib/services";
import Capabilities from "./Capabilities";
import { PracticeDiagram } from "./ArchitectureDiagram";

/**
 * Section 03 — four practices. The centrepiece.
 *
 * Desktop: a vertical `role="tablist"` rail and one visible `role="tabpanel"`.
 * All four panels stay mounted so every tab's `aria-controls` resolves; the
 * inactive ones are `hidden`.
 *
 * Mobile: a vertical accordion with persistent practice headers and
 * capabilities expanding inline — not a compressed desktop.
 *
 * State is URL-addressable (`/services#automate`), deep-linkable, and
 * back-button safe: selection pushes history, and `popstate`/`hashchange`
 * drive the active practice.
 */

const SLUGS = practices.map((practice) => practice.slug) as PracticeSlug[];

function slugFromHash(): PracticeSlug | null {
  if (typeof window === "undefined") return null;
  const raw = window.location.hash.slice(1);
  return (SLUGS as string[]).includes(raw) ? (raw as PracticeSlug) : null;
}

/**
 * Per-practice accent treatment and panel rhythm. This is what stops the
 * four practices reading as one card with swapped text.
 */
const treatment: Record<PracticeSlug, { rule: string; indent: string }> = {
  build: { rule: "bg-brand", indent: "lg:pl-16" },
  grow: { rule: "bg-signal", indent: "lg:pl-24" },
  automate: { rule: "bg-brand", indent: "lg:pl-10" },
  operate: { rule: "bg-signal", indent: "lg:pl-28" },
};

/** The content of a single practice panel. Shared by both layouts. */
function PracticePanel({ practice }: { practice: Practice }) {
  const isRoute = practice.ctaHref.startsWith("/");
  const ctaClass =
    "svc-mono rounded-panel border border-line px-5 py-3 text-text transition-colors duration-200 hover:border-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

  return (
    <div>
      <p className="svc-mono text-signal">{practice.theme}</p>

      <h3 className="mt-4 max-w-2xl font-display-services text-[28px] leading-[1.15] tracking-[-0.03em] text-text">
        {practice.headline}
      </h3>

      <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
        {practice.description}
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-16">
        <Capabilities groups={practice.groups} />
        <div className="hidden lg:block">
          <PracticeDiagram slug={practice.slug} />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-line pt-6">
        <p className="svc-mono-sm text-text-muted">{practice.workNote}</p>

        {isRoute ? (
          <Link href={practice.ctaHref} className={ctaClass}>
            {practice.ctaLabel} →
          </Link>
        ) : (
          <a href={practice.ctaHref} className={ctaClass}>
            {practice.ctaLabel} →
          </a>
        )}
      </div>
    </div>
  );
}

export default function PracticeSwitcher() {
  const [active, setActive] = useState<PracticeSlug>("build");
  /** true only after mount + only at >=1024px; SSR and first paint use the
   *  mobile accordion so no duplicate element ids are ever emitted. */
  const [isTabLayout, setIsTabLayout] = useState(false);
  const [open, setOpen] = useState<PracticeSlug[]>(["build"]);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Hash is the source of truth for deep links, back and forward.
  useEffect(() => {
    const sync = () => {
      const slug = slugFromHash();
      if (!slug) return;
      setActive(slug);
      setOpen((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
    };

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsTabLayout(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const select = useCallback((slug: PracticeSlug) => {
    setActive(slug);
    if (typeof window !== "undefined") {
      window.history.pushState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#${slug}`
      );
    }
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const current = SLUGS.indexOf(active);
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = (current + 1) % SLUGS.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = (current - 1 + SLUGS.length) % SLUGS.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = SLUGS.length - 1;
    }

    if (next === null) return;

    event.preventDefault();
    const slug = SLUGS[next];
    select(slug);
    tabRefs.current[slug]?.focus();
  };

  const toggle = (slug: PracticeSlug) => {
    setOpen((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const tabClass = (slug: PracticeSlug) =>
    [
      "flex w-full items-baseline gap-4 border-b border-line py-5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
      slug === active ? "text-text" : "text-text-muted hover:text-text",
    ].join(" ");

  const railMark = (slug: PracticeSlug) => (
    <span
      aria-hidden="true"
      className={`ml-auto h-px w-6 self-center transition-opacity duration-200 ${treatment[slug].rule}`}
      style={{ opacity: slug === active ? 1 : 0.2 }}
    />
  );

  return (
    <section id="practices" className="svc-section scroll-mt-24 border-t border-line">
      <div className="svc-container">
        <p className="svc-mono text-signal">Four practices</p>
        <h2 className="sr-only">Four practices</h2>

        {isTabLayout ? (
          <div className="mt-14 grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
            <div
              role="tablist"
              id="practices-tablist"
              aria-orientation="vertical"
              aria-label="Four practices"
              onKeyDown={onKeyDown}
              className="flex flex-col border-t border-line"
            >
              {practices.map((practice) => (
                <button
                  key={practice.slug}
                  type="button"
                  role="tab"
                  id={`tab-${practice.slug}`}
                  ref={(element) => {
                    tabRefs.current[practice.slug] = element;
                  }}
                  aria-selected={practice.slug === active}
                  aria-controls={`panel-${practice.slug}`}
                  tabIndex={practice.slug === active ? 0 : -1}
                  onClick={() => select(practice.slug)}
                  className={tabClass(practice.slug)}
                >
                  <span className="svc-mono-sm">{practice.index}</span>
                  <span className="font-display-services text-[24px] tracking-[-0.02em]">
                    {practice.label}
                  </span>
                  {railMark(practice.slug)}
                </button>
              ))}
            </div>

            {/* Keyed on `active` so the cross-fade replays on selection. */}
            <div key={active}>
              {practices.map((practice) => (
                <div
                  key={practice.slug}
                  role="tabpanel"
                  id={`panel-${practice.slug}`}
                  aria-labelledby={`tab-${practice.slug}`}
                  tabIndex={0}
                  hidden={practice.slug !== active}
                  className={`focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                    treatment[practice.slug].indent
                  } ${practice.slug === active ? "svc-panel-in" : ""}`}
                >
                  <PracticePanel practice={practice} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Only one of the two layouts is ever in the DOM, so the id is
             safe to reuse: ProblemSelect's `aria-controls` always resolves. */
          <div id="practices-tablist" className="mt-14">
            {practices.map((practice) => {
              const isOpen = open.includes(practice.slug);

              return (
                <div
                  key={practice.slug}
                  className="border-t border-line last:border-b"
                >
                  <h3>
                    <button
                      type="button"
                      id={`tab-${practice.slug}`}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${practice.slug}`}
                      onClick={() => {
                        select(practice.slug);
                        toggle(practice.slug);
                      }}
                      className="flex w-full items-baseline gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      <span className="svc-mono-sm text-text-muted">
                        {practice.index}
                      </span>
                      <span className="font-display-services text-[22px] tracking-[-0.02em] text-text">
                        {practice.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="svc-mono-sm ml-auto text-text-muted"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`panel-${practice.slug}`}
                    hidden={!isOpen}
                    className="pb-10"
                  >
                    <PracticePanel practice={practice} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Section header for the /services experience.
 *
 * Server component. Eyebrow is mono instrumentation type; the heading uses
 * the services display scale (40px desktop / 28px mobile) — deliberately
 * smaller than the hero, which is the only place big type runs.
 */

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  /** 1 renders an h1 (one per page). Defaults to h2. */
  level?: 1 | 2;
  /** Optional third line, rendered in muted text under the intro. */
  note?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  intro,
  level = 2,
  note,
}: SectionHeaderProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <header className="max-w-3xl">
      <p className="svc-mono text-signal">{eyebrow}</p>

      <Heading className="mt-5 font-display-services text-[28px] leading-[1.18] tracking-[-0.03em] text-text md:text-[40px]">
        {heading}
      </Heading>

      {intro ? (
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
          {intro}
        </p>
      ) : null}

      {note ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-text-muted">
          {note}
        </p>
      ) : null}
    </header>
  );
}

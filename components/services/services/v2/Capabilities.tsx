import type { CapabilityGroup } from "@services/lib/services";
import { capabilityGroups, deliverablesCopy } from "@services/lib/services";
import SectionHeader from "./SectionHeader";

/**
 * Grouped capability list for a practice.
 *
 * Rows, not cards — the whole point of the rebuild is that four practices
 * don't collapse into a grid of identical tiles. Server component.
 */
export default function Capabilities({
  groups,
}: {
  groups: CapabilityGroup[];
}) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="svc-mono-sm text-text-muted">{group.title}</h3>

          <ul className="mt-4 border-t border-line">
            {group.items.map((item) => (
              <li key={item.name} className="border-b border-line py-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-[16px] font-medium leading-[1.5] text-text">
                    {item.name}
                  </h4>
                  {item.status === "coming-soon" ? (
                    <span className="svc-mono-sm text-text-muted">
                      Coming soon
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[15px] leading-[1.65] text-text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/**
 * Section 05 — "What we build".
 *
 * A ruled inventory of every verified capability, regrouped by discipline
 * (WEB / BRAND / GROWTH / AUTOMATION / OPERATE) rather than by practice, so
 * it says something the practice switcher above does not already say.
 *
 * Deliberately a hairline frame with hairline cell separators — no radius,
 * no shadow, no elevation, no hover lift. Server component, no client island.
 */
export function DeliverablesSection() {
  return (
    <section className="svc-section border-t border-line">
      <div className="svc-container">
        <SectionHeader
          eyebrow={deliverablesCopy.eyebrow}
          heading={deliverablesCopy.heading}
          intro={deliverablesCopy.intro}
        />

        <div className="mt-16 grid border-t border-l border-line sm:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <section
              key={group.title}
              aria-labelledby={`discipline-${group.title.toLowerCase()}`}
              className="border-r border-b border-line p-7 sm:last:col-span-2 xl:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  id={`discipline-${group.title.toLowerCase()}`}
                  className="font-display-services text-[20px] tracking-[-0.01em] text-text"
                >
                  {group.title}
                </h3>

                <p className="svc-mono-sm text-text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <ul className="mt-5 border-t border-line">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-line py-3 last:border-b-0"
                  >
                    <p className="text-[15px] leading-[1.5] text-text">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.6] text-text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

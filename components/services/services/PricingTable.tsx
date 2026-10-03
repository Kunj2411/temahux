import { pricingTiers } from "@services/lib/services";
import type { PricingRow } from "@services/lib/services";

/**
 * The single pricing table for the /services subtree.
 *
 * Every row comes from `src/lib/services.ts` — there is no second copy of a
 * price anywhere in the app. The two buying decisions are visually separate:
 * one-off project entry points versus monthly retainers, with scoped work
 * clearly labelled as priced to scope.
 *
 * Server component: no client JS, and the row layout stacks on narrow
 * screens instead of ever scrolling horizontally.
 */
export default function PricingTable({ rows }: { rows: PricingRow[] }) {
  return (
    <div className="border-t border-line">
      {pricingTiers.map((tier) => {
        const tierRows = rows.filter((row) => row.tier === tier.id);
        if (tierRows.length === 0) return null;

        return (
          <div key={tier.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5">
              <h3 className="svc-mono text-text">{tier.label}</h3>
              <p className="svc-mono-sm text-text-muted">{tier.note}</p>
            </div>

            <ul>
              {tierRows.map((row) => (
                <li
                  key={row.service}
                  className="grid gap-x-12 gap-y-3 border-t border-line py-6 md:grid-cols-[minmax(0,1fr)_200px] md:items-baseline"
                >
                  <div>
                    <h4 className="font-display-services text-[19px] tracking-[-0.01em] text-text">
                      {row.service}
                    </h4>
                    <p className="mt-2 max-w-xl text-[15px] leading-[1.65] text-text-muted">
                      {row.detail}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="svc-price text-signal">{row.price}</p>
                    <p className="svc-mono-sm mt-2 text-text-muted">
                      {row.tierLabel} · {row.currency}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

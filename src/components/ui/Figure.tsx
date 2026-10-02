import Image from "next/image";

/**
 * Figure — the masked-image primitive.
 *
 * The reference's signature move is imagery sitting inside a silhouette that
 * is NOT a plain rounded rectangle, with a pastel tint block offset behind it
 * for depth. Temahux has no photography budget and no product screenshots, so:
 *
 *  - with `src`, this renders a real photograph inside the same mask;
 *  - without `src`, it renders an abstract composition built only from the
 *    tint palette and 1px brand strokes — which is exactly what the reference
 *    does for its own decorative vectors.
 *
 * It never fabricates a screenshot, a dashboard mock or a client logo.
 */

export type TintName = "violet" | "mint" | "sky" | "peach" | "lime" | "sand";

export type MaskName = "notch" | "arch" | "blob" | "round";

const TINT_HEX: Record<TintName, string> = {
  violet: "#EDE9FE",
  mint: "#D7F5E4",
  sky: "#DCE9FE",
  peach: "#FCE8D5",
  lime: "#EAF7D4",
  sand: "#F3EADA",
};

const MASK_CLASS: Record<MaskName, string> = {
  notch: "tx-mask-notch",
  arch: "tx-mask-arch",
  blob: "tx-mask-blob",
  round: "tx-mask-round",
};

const BRAND = "#5B3DF5";
const INK = "#12121A";

/** Deterministic abstract compositions — identical across renders. */
function Composition({ variant, tint }: { variant: number; tint: string }) {
  const v = variant % 4;

  if (v === 0) {
    /* Concentric arcs over a horizon rule. */
    return (
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="h-full w-full"
      >
        <rect width="400" height="300" fill={tint} />
        <g fill="none" stroke={BRAND} strokeWidth="1">
          <path d="M0 210 H400" />
          <path d="M0 232 H400" opacity="0.5" />
          <circle cx="268" cy="140" r="44" />
          <circle cx="268" cy="140" r="74" opacity="0.6" />
          <circle cx="268" cy="140" r="104" opacity="0.3" />
          <path d="M40 60 H160 M40 84 H120 M40 108 H140" opacity="0.7" />
        </g>
        <circle cx="268" cy="140" r="12" fill={BRAND} />
        <path d="M40 60 H160" stroke={INK} strokeWidth="1" opacity="0.35" />
      </svg>
    );
  }

  if (v === 1) {
    /* Split grid with an offset block. */
    return (
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="h-full w-full"
      >
        <rect width="400" height="300" fill={tint} />
        <g stroke={BRAND} strokeWidth="1" opacity="0.55">
          <path d="M100 0 V300 M200 0 V300 M300 0 V300" />
          <path d="M0 75 H400 M0 150 H400 M0 225 H400" />
        </g>
        <rect
          x="140"
          y="96"
          width="120"
          height="108"
          fill={BRAND}
          opacity="0.14"
        />
        <rect
          x="200"
          y="136"
          width="80"
          height="68"
          fill="none"
          stroke={INK}
          strokeWidth="1"
        />
        <circle cx="100" cy="75" r="7" fill={BRAND} />
        <circle cx="300" cy="225" r="7" fill={INK} opacity="0.5" />
      </svg>
    );
  }

  if (v === 2) {
    /* Diagonal signal band. */
    return (
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="h-full w-full"
      >
        <rect width="400" height="300" fill={tint} />
        <path
          d="M-40 300 L200 0 L300 0 L60 300 Z"
          fill={BRAND}
          opacity="0.12"
        />
        <g fill="none" stroke={BRAND} strokeWidth="1">
          <path d="M-40 300 L200 0" />
          <path d="M40 300 L280 0" opacity="0.6" />
          <path d="M120 300 L360 0" opacity="0.3" />
        </g>
        <g stroke={INK} strokeWidth="1" opacity="0.4" fill="none">
          <path d="M40 40 H160 V140 H40 Z" />
          <path d="M40 40 L160 140 M160 40 L40 140" />
        </g>
        <circle
          cx="316"
          cy="222"
          r="26"
          fill="none"
          stroke={BRAND}
          strokeWidth="1"
        />
        <circle cx="316" cy="222" r="6" fill={BRAND} />
      </svg>
    );
  }

  /* Stacked rule field. */
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect width="400" height="300" fill={tint} />
      <g stroke={BRAND} strokeWidth="1" fill="none">
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M40 ${54 + i * 24} H${140 + ((i * 47) % 200)}`}
            opacity={0.35 + (i % 4) * 0.16}
          />
        ))}
      </g>
      <rect
        x="240"
        y="150"
        width="110"
        height="110"
        fill="none"
        stroke={INK}
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M240 260 L350 150"
        stroke={INK}
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="72" cy="240" r="20" fill={BRAND} opacity="0.9" />
    </svg>
  );
}

export type FigureProps = {
  /** Real asset. When omitted, an abstract tint composition is drawn instead. */
  src?: string;
  alt?: string;
  tint?: TintName;
  mask?: MaskName;
  variant?: number;
  /** Aspect-ratio utility classes, e.g. "aspect-[4/3]". */
  ratio?: string;
  className?: string;
  /** Offset tint block behind the frame — the reference's depth trick. */
  offset?: boolean;
};

export default function Figure({
  src,
  alt = "",
  tint = "violet",
  mask = "notch",
  variant = 0,
  ratio = "aspect-[4/3]",
  className = "",
  offset = true,
}: FigureProps) {
  const tintHex = TINT_HEX[tint];

  return (
    <div className={`relative ${ratio} ${className}`}>
      {offset && (
        <div
          aria-hidden="true"
          className="absolute -bottom-4 -right-4 h-full w-full rounded-panel"
          style={{ backgroundColor: tintHex }}
        />
      )}

      <div
        className={`relative h-full w-full overflow-hidden ${MASK_CLASS[mask]}`}
        style={{ backgroundColor: tintHex }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 640px, 100vw"
            className="h-full w-full object-cover"
          />
        ) : (
          <Composition variant={variant} tint={tintHex} />
        )}
      </div>
    </div>
  );
}

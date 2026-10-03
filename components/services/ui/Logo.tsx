import type { CSSProperties } from "react";
import Image from "next/image";

/** Compact use of the supplied Temahux logo mark. */
export function LogoMark({
  className,
  title,
  style,
}: {
  className?: string;
  /** Omit when the mark sits beside the wordmark — the lockup is the label. */
  title?: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      src="/assets/services/favicon.png"
      alt={title ?? ""}
      width={48}
      height={48}
      className={className}
      style={style}
    />
  );
}

export type LogoVariant = "full" | "mark";

/**
 * Primary lockup uses the supplied TEMAHUX wordmark asset on light surfaces.
 *
 * `variant="full"` for the light navbar; use `variant="mark"` on dark
 * surfaces where the white-background wordmark asset would not fit.
 *
 * The Devanagari tagline never appears inside this lockup.
 */
export default function Logo({
  variant = "full",
  className = "",
  title = "Temahux",
}: {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}) {
  if (variant === "mark") {
    return <LogoMark className={className} title={title} />;
  }

  return (
    <span
      className={`relative inline-flex h-[34px] w-[clamp(170px,20vw,252px)] shrink-0 items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={title}
    >
      <Image
        src="/assets/services/temahux-wordmark.png"
        alt=""
        width={2172}
        height={724}
        priority
        className="absolute left-1/2 top-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ width: "100%" }}
      />
    </span>
  );
}

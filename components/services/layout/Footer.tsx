import Link from "next/link";
import Logo from "@services/components/ui/Logo";
import {
  contact,
  ctaLink,
  footerColumns,
  footerLine,
  legalLinks,
  mainSiteUrl,
  siteName,
  social,
} from "@services/lib/site";

/**
 * Two-tier footer, following the reference pattern.
 *
 * Upper tier: logo, one line, contact details, optional socials, CTA.
 * Lower tier: a sitemap `<nav aria-label="Footer">` of four link columns,
 * then the legal row and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tx-band relative mt-24 overflow-hidden lg:mt-28">
      {/* Decorative surface: dot texture + a soft orb, both aria-hidden. */}
      <div className="tx-dot-pattern absolute inset-0" aria-hidden="true" />
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 640 640"
        className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2"
      >
        <defs>
          <radialGradient id="txFooterOrb" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#5B3DF5" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#150E33" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="txFooterRim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5B3DF5" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="320" cy="320" r="224" fill="url(#txFooterOrb)" />
        <circle
          cx="320"
          cy="320"
          r="224"
          fill="none"
          stroke="url(#txFooterRim)"
          strokeWidth="1"
        />
        <circle
          cx="320"
          cy="320"
          r="152"
          fill="none"
          stroke="url(#txFooterRim)"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M96 320 H544 M320 96 V544"
          stroke="#EDE9FE"
          strokeWidth="1"
          opacity="0.14"
        />
      </svg>

      <div className="tx-container relative">
        {/* ---------------- Upper tier: contact / info band -------------- */}
        <div className="grid gap-10 border-b border-white/12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <Link
              href={mainSiteUrl}
              aria-label="Temahux — home"
              className="inline-flex items-center gap-2.5 rounded-full text-white"
            >
              <Logo variant="mark" title="" className="h-[26px] w-[26px] shrink-0" />
              <span className="font-[family-name:var(--font-primary)] text-[17px] font-semibold uppercase tracking-[0.14em]">Temahux</span>
            </Link>
            <p className="mt-5 max-w-sm text-[17px] leading-[1.6] text-white/70">
              {footerLine}
            </p>
            <div className="mt-7">
              <Link href={ctaLink.href} className="tx-btn tx-btn-primary">
                {ctaLink.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <ContactBlock label="Global HQ" value={contact.hq} />
            <ContactBlock
              label="Direct dial"
              value={contact.phone}
              href={contact.phoneHref}
            />
            <ContactBlock
              label="Email"
              value={contact.email}
              href={contact.emailHref}
            />
            <div>
              <p className="tx-eyebrow text-white/45">Follow</p>
              {social.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {social.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-[16px] text-white/70 transition-opacity duration-300 hover:opacity-100"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-[15px] text-white/45">
                  Social profiles not yet published.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- Lower tier: sitemap band -------------------- */}
        <nav
          aria-label="Footer"
          className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="tx-h3 text-[20px] leading-none text-white">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/60 transition-opacity duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-white/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-white/50">
            © {year} {siteName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] text-white/50 transition-opacity duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function ContactBlock({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="tx-eyebrow text-white/45">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-4 block break-words text-[17px] text-white/85 transition-colors duration-300 hover:text-white"
        >
          {value}
        </a>
      ) : (
        <p className="mt-4 text-[17px] text-white/85">{value}</p>
      )}
    </div>
  );
}

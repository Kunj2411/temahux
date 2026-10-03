import { practices } from "./services";

/**
 * Site-wide chrome content — navigation, footer, contact.
 *
 * Single source of truth for everything the navbar and footer render. No copy
 * is hardcoded inside JSX. The four practice links are DERIVED from
 * `practices` in `services.ts` so the two can never drift.
 *
 * Everything here is verified against the codebase or the official Temahux
 * company profile. Nothing is invented.
 */

/** Canonical origin for this product site. Matches `robots.ts` and `sitemap.ts`. */
export const siteUrl = "https://www.temahux.com/services";
export const mainSiteUrl = "/";
export const academySiteUrl = "/academy";

export const siteName = "Temahux Services";

/** Verified: this app is the services product site and must advertise its own domain. */
export const siteTitle = "Temahux Services | Digital Products, Software & AI";

/**
 * Replaces the unsupported "Venture-backed SaaS + Education Infrastructure"
 * claim that previously sat in `layout.tsx` and `manifest.json`.
 * Built only from the four verified practices.
 */
export const siteDescription =
  "Temahux builds and improves digital products, websites, software, AI solutions and automation systems for businesses and institutions.";

export const contact = {
  /** Verified in `src/app/contact/page.tsx`. */
  hq: "Gandhinagar, India",
  phone: "+91 9104578807",
  phoneHref: "tel:+919104578807",
  email: "kunj.joshi@temahux.com",
  emailHref: "mailto:kunj.joshi@temahux.com",
} as const;

/**
 * [CONTENT NEEDED] — no social profiles are published anywhere in this
 * codebase, so the footer renders no social row rather than linking to
 * handles that may not exist. Supply verified URLs to enable it.
 */
export const social: { label: string; href: string }[] = [];

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/** Geometric icon keys for the four practices — rendered in `Navbar`. */
export type PracticeIcon = "build" | "grow" | "automate" | "operate";

export const practiceNav = practices.map((p) => ({
  label: p.label,
  href: p.ctaHref,
  theme: p.theme,
  index: p.index,
  icon: p.slug as PracticeIcon,
}));

export const companyColumn: NavColumn = {
  title: "Company",
  links: [
    { label: "About", href: "/services/about" },
    { label: "Vision", href: "/services/vision" },
    { label: "Architecture", href: "/services/architecture" },
    { label: "Portfolio", href: "/services/portfolio" },
    { label: "Industries", href: "/services/industries" },
    { label: "Insights", href: "/services/insights" },
  ],
};

export const productsColumn: NavColumn = {
  title: "Products",
  links: [
    { label: "University OS", href: "/services/products/university-os" },
    { label: "Paper Checking AI", href: "/services/products/paper-checking-ai" },
    { label: "LMS", href: "/services/products/lms" },
  ],
};

/** Top-level links that are not part of the mega panel. */
export const topLevelNav: NavLink[] = [
  { label: "Contact", href: "/services/contact" },
  { label: "Temahux Home", href: mainSiteUrl },
  { label: "Academy", href: academySiteUrl },
];

export const ctaLink: NavLink = {
  label: "Start a Project",
  href: "/services/services/contact-consultation",
};

/* ---------------------------------------------------------------------- *
 * Footer — two tier: an upper contact band and a lower sitemap band.
 * ---------------------------------------------------------------------- */

export const footerColumns: NavColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/services/about" },
      { label: "Vision", href: "/services/vision" },
      { label: "Architecture", href: "/services/architecture" },
      { label: "Portfolio", href: "/services/portfolio" },
      { label: "Contact", href: "/services/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services/services" },
      { label: "Pricing", href: "/services/services/pricing" },
      { label: "Process", href: "/services/services/process" },
      { label: "Consultation", href: "/services/services/contact-consultation" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "University OS", href: "/services/products/university-os" },
      { label: "Paper Checking AI", href: "/services/products/paper-checking-ai" },
      { label: "LMS", href: "/services/products/lms" },
      { label: "All products", href: "/services/products" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Temahux Home", href: mainSiteUrl },
      { label: "Academy", href: academySiteUrl },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/services/privacy-policy" },
  { label: "Terms", href: "/services/terms-and-conditions" },
];

/** Short line for the footer's upper band. */
export const footerLine =
  "Think. Explore. Master. Analyze. Highlight. Understand. eXcel.";

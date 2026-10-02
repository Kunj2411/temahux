import Link from "next/link";
import { practices } from "@/lib/services";

/**
 * Footer for the /services subtree ONLY.
 *
 * Deliberately not a site-wide footer — `layout.tsx` has none, and adding one
 * is out of scope. No contact details are invented here: the only contact
 * route is the existing contact page.
 */

const practiceLinks = practices.map((practice) => ({
  label: practice.label,
  href: `/services/${practice.slug}`,
}));

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Branding & Design", href: "/services/branding-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "AI Automation", href: "/services/ai-automation" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const metaLinks = [
  { label: "Pricing", href: "/services/pricing" },
  { label: "Process", href: "/services/process" },
  { label: "Talk to Temahux", href: "/services/contact-consultation" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title} className="min-w-[160px]">
      <h2 className="svc-mono-sm text-text-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="rounded-panel text-[15px] leading-[1.6] text-text transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ServiceFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="svc-container py-16 md:py-20">
        <p className="svc-mono text-signal">Temahux</p>
        <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-text-muted">
          Build, Grow, Automate, Operate. One team taking a system from a first
          idea to production.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-16 gap-y-10">
          <FooterColumn title="Practices" links={practiceLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="More" links={metaLinks} />
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="svc-mono-sm text-text-muted">
            Temahux · Serving businesses in India
          </p>
        </div>
      </div>
    </footer>
  );
}

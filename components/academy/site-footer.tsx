import Link from "next/link";
import Image from "next/image";
import { sites } from "@academy/lib/sites";

const footerLinks = {
  Explore: [
    { label: "Classes", href: "/academy/classes" },
    { label: "Programs", href: "/academy/programs" },
    { label: "Learning", href: "/academy/learning" },
    { label: "Practice", href: "/academy/practice" },
    { label: "Projects", href: "/academy/projects" },
  ],
  Company: [
    { label: "About", href: "/academy/about" },
    { label: "How it Works", href: "/academy/how-it-works" },
    { label: "Career", href: "/academy/career" },
    { label: "Resources", href: "/academy/resources" },
    { label: "Blog", href: "/academy/blog" },
    { label: "Temahux Home", href: sites.main },
    { label: "Services", href: sites.services },
  ],
  Legal: [
    { label: "Privacy", href: "/academy/privacy" },
    { label: "Terms", href: "/academy/terms" },
    { label: "FAQ", href: "/academy/faq" },
    { label: "Contact", href: "/academy/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href={sites.main} className="brand footer-brand" aria-label="Temahux home">
            <span className="brand-symbol-frame"><Image src="/assets/academy/favicon.png" alt="" width={56} height={56} className="brand-symbol" /></span>
            <Image src="/assets/academy/temahux-wordmark.png" alt="TEMAHUX" width={150} height={34} className="brand-wordmark-image" />
          </Link>
          <p className="footer-copy">
            Learn deeply. Practice regularly. Build projects that matter.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

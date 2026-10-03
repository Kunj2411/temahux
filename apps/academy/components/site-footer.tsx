import Link from "next/link";
import Image from "next/image";
import { sites } from "@/lib/sites";

const footerLinks = {
  Explore: [
    { label: "Classes", href: "/classes" },
    { label: "Programs", href: "/programs" },
    { label: "Learning", href: "/learning" },
    { label: "Practice", href: "/practice" },
    { label: "Projects", href: "/projects" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Career", href: "/career" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Temahux Home", href: sites.main },
    { label: "Services", href: sites.services },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href={sites.main} className="brand footer-brand" aria-label="Temahux home">
            <span className="brand-symbol-frame"><Image src="/favicon.png" alt="" width={56} height={56} className="brand-symbol" /></span>
            <Image src="/temahux-wordmark.png" alt="TEMAHUX" width={150} height={34} className="brand-wordmark-image" />
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

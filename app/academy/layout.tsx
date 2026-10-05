import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@academy/components/site-footer";
import { SiteHeader } from "@academy/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.temahux.com"),
  title: { default: "TEMAHUX Academy — Learn AI, Coding, Robotics & STEM", template: "%s | TEMAHUX Academy" },
  description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem for students and future builders.",
  openGraph: {
    type: "website",
    siteName: "TEMAHUX Academy",
    title: "TEMAHUX Academy — Learn AI, Coding, Robotics & STEM",
    description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem for students and future builders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMAHUX Academy — Learn AI, Coding, Robotics & STEM",
    description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem for students and future builders.",
  },
  icons: { icon: "/assets/academy/favicon.png" },
};

export default function AcademyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "TEMAHUX Academy",
            alternateName: "Temahux Academy",
            url: "https://www.temahux.com/academy",
            logo: "https://www.temahux.com/assets/academy/temahux-symbol.png",
            parentOrganization: {
              "@type": "Organization",
              name: "TEMAHUX",
              url: "https://www.temahux.com/",
            },
          }),
        }}
      />
      <div className="academy-site">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import FloatingCTA from "@services/components/ui/FloatingCTA";
import SiteFooter from "@services/components/layout/SiteFooter";
import { siteDescription, siteTitle } from "@services/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.temahux.com"),
  title: { default: siteTitle, template: "%s | Temahux" },
  description: siteDescription,
  applicationName: "Temahux Services",
  creator: "Temahux",
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  openGraph: {
    type: "website",
    siteName: "Temahux",
    title: siteTitle,
    description: siteDescription,
  },
  manifest: "/assets/services/site.webmanifest",
  icons: { icon: "/assets/services/favicon.svg" },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`services-site ${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Temahux",
            url: "https://www.temahux.com/services",
            logo: "https://www.temahux.com/assets/services/favicon.svg",
            email: "kunj.joshi@temahux.com",
            telephone: "+91 9104578807",
            address: { "@type": "PostalAddress", addressLocality: "Gandhinagar", addressCountry: "IN" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Temahux Services",
            url: "https://www.temahux.com/services",
          }),
        }}
      />
      {children}
      <SiteFooter />
      <FloatingCTA />
    </div>
  );
}

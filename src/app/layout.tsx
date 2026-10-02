import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/ui/FloatingCTA";
import SiteFooter from "@/components/layout/SiteFooter";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/*
 * Display + instrumentation faces for the whole site.
 *
 * These two were previously `preload: false` and scoped to /services only.
 * The redesign uses Inter Tight and JetBrains Mono everywhere (eyebrows,
 * prices, indices, metadata), so they are now preloaded for every route.
 */
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

/*
 * Manrope and Cormorant Garamond are gone: the design language permits
 * exactly three families — Inter Tight, Inter, JetBrains Mono. `--font-display`
 * and `--font-body` in globals.css were repointed in the same change so no
 * rule still resolves a family that is no longer loaded.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Temahux Services",
  creator: "Temahux",
  alternates: { canonical: siteUrl },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  openGraph: {
    type: "website",
    siteName: "Temahux Services",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EqVw9MIRlBS76px2XiIEjCTLeYE1lubAd3eaNhlUGvw"
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Temahux", url: siteUrl, logo: `${siteUrl}/favicon.svg`, email: "kunj.joshi@temahux.com", telephone: "+91 9104578807", address: { "@type": "PostalAddress", addressLocality: "Gandhinagar", addressCountry: "IN" } }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Temahux", url: siteUrl, publisher: { "@type": "Organization", name: "Temahux", url: siteUrl } }) }} />
        {children}
        <SiteFooter />
        <FloatingCTA />
      </body>
    </html>
  );
}

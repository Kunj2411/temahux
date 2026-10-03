import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  metadataBase: new URL("https://academy.temahux.com"),
  title: { default: "TEMAHUX Academy", template: "%s | TEMAHUX Academy" },
  description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem.",
  alternates: { canonical: "https://academy.temahux.com" },
  openGraph: {
    type: "website",
    siteName: "TEMAHUX Academy",
    title: "TEMAHUX Academy",
    description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem.",
    url: "https://academy.temahux.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMAHUX Academy",
    description: "A modern STEM, coding, AI, robotics, and project-based learning ecosystem.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

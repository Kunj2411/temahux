import type { Metadata } from "next";
import { Inter, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/ui/FloatingCTA";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Temahux | Hybrid Digital Ecosystem",
  description: "Venture-backed SaaS + Education Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="EqVw9MIRlBS76px2XiIEjCTLeYE1lubAd3eaNhlUGvw" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${cormorant.variable} antialiased`}>
        <PageLoader />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

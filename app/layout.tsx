import "./globals.css";

export const metadata = {
  title: "TEMAHUX — Digital Systems, AI & Automation",
  description:
    "TEMAHUX builds digital products, websites, software, AI solutions and automation systems for businesses and institutions. Explore Services, Academy, and Products.",
  metadataBase: new URL("https://www.temahux.com"),
  alternates: {
    canonical: "https://www.temahux.com/",
  },
  applicationName: "TEMAHUX",
  creator: "TEMAHUX",
  openGraph: {
    title: "TEMAHUX — Digital Systems, AI & Automation",
    description: "TEMAHUX builds digital products, websites, software, AI solutions and automation systems for businesses and institutions.",
    type: "website",
    url: "https://www.temahux.com/",
    siteName: "TEMAHUX",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMAHUX — Digital Systems, AI & Automation",
    description: "TEMAHUX builds digital products, websites, software, AI solutions and automation systems for businesses and institutions.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TEMAHUX",
  alternateName: "Temahux",
  url: "https://www.temahux.com/",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TEMAHUX",
  alternateName: "Temahux",
  url: "https://www.temahux.com/",
  logo: "https://www.temahux.com/temahux-symbol.png",
  email: "kunj.joshi@temahux.com",
  telephone: "+91 9104578807",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gandhinagar",
    addressCountry: "IN",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "TEMAHUX \u2014 Digital Systems, AI & Automation",
  description:
    "Temahux builds digital products, websites, software, AI solutions and automation systems. Explore Services, Academy, and Products.",
  metadataBase: new URL("https://www.temahux.com"),
  alternates: {
    canonical: "https://www.temahux.com/",
  },
  openGraph: {
    title: "TEMAHUX \u2014 Digital Systems, AI & Automation",
    description: "Temahux builds digital products, websites, software, AI solutions and automation systems.",
    type: "website",
    url: "https://www.temahux.com/",
  },
  twitter: {
    title: "TEMAHUX \u2014 Digital Systems, AI & Automation",
    description: "Temahux builds digital products, websites, software, AI solutions and automation systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

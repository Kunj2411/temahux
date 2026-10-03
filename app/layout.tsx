import "./globals.css";

export const metadata = {
  title: "TEMAHUX — where everything is possible.",
  description:
    "One continuous, procedural 3D scroll journey: Origin, Services, Academy, Products, Return.",
  metadataBase: new URL("https://www.temahux.com"),
  alternates: {
    canonical: "https://www.temahux.com/",
  },
  openGraph: {
    title: "TEMAHUX",
    description: "where everything is possible.",
    type: "website",
    url: "https://www.temahux.com/",
  },
  twitter: {
    title: "TEMAHUX",
    description: "where everything is possible.",
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

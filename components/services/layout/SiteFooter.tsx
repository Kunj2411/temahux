"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/**
 * Root-layout footer with a route gate.
 *
 * `/services*` renders `ServiceFooter` as part of its own composition, so the
 * site-wide two-tier footer must not double up under that subtree.
 */
export default function SiteFooter() {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/services")) {
    return null;
  }

  return <Footer />;
}

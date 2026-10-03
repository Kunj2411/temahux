"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import type { ChapterId } from "@/lib/scene-state";
import { hasScrolled, getLenis, state } from "@/lib/scene-state";
import { destinations } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { navigationProgress } from "../world/Timeline";

/**
 * Fixed masthead matching the reference's logo / navigation / CTA arrangement.
 *
 * The scroll hint retires as soon as the journey begins.
 */
export function Chrome() {
  const reduced = useReducedMotion();
  const hintRef = useRef<HTMLDivElement>(null);
  const productsLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastScrolled: boolean | null = null;
    let lastActive: ChapterId | null = null;

    const tick = () => {
      const scrolled = hasScrolled();
      if (scrolled !== lastScrolled && hintRef.current) {
        hintRef.current.classList.toggle("is-hidden", scrolled);
        hintRef.current.setAttribute("aria-hidden", String(scrolled));
        lastScrolled = scrolled;
      }

      const progress = state.progress;
      const active: ChapterId | null =
        progress >= 0.76 && progress < 0.93 ? "products" : null;
      if (active !== lastActive) {
        if (productsLink.current) {
          if (active === "products") productsLink.current.setAttribute("aria-current", "location");
          else productsLink.current.removeAttribute("aria-current");
        }
        lastActive = active;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <header className="chrome" data-reduced={reduced || undefined}>
      <a className="chrome__logo" href="#origin" aria-label="Temahux home" onClick={(event) => navigate(event, "origin")}>
        <img src="/temahux-symbol.png" alt="" /><span>TEMAHUX</span>
      </a>
      <nav className="chrome__nav" aria-label="Main navigation">
        <Link href={destinations.services}>Services</Link>
        <Link href={destinations.academy}>Academy</Link>
        <Link ref={productsLink} href={destinations.products}>Products</Link>
      </nav>
      <a className="chrome__action" href="mailto:kunj.joshi@temahux.com">Let’s talk <span aria-hidden="true">↗</span></a>
      <div className="chrome__hint" ref={hintRef} aria-hidden="false"><span>Scroll to begin</span><i aria-hidden="true" /></div>
    </header>
  );
}

function navigate(event: MouseEvent<HTMLAnchorElement>, id: ChapterId) {
  event.preventDefault();
  const lenis = getLenis();
  if (!lenis) {
    window.location.hash = id;
    return;
  }
  lenis.scrollTo(lenis.limit * navigationProgress(id), { duration: 1.1 });
  if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
}

export default Chrome;

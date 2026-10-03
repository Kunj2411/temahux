"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { detectQuality, supportsWebGL } from "@/components/world/quality";
import Preloader from "@/components/overlay/Preloader";
import Chrome from "@/components/overlay/Chrome";
import Chapters from "@/components/overlay/Chapters";
import StaticExperience from "@/components/overlay/StaticExperience";
import ScrollController from "@/components/overlay/ScrollController";

const World = dynamic(() => import("@/components/world/World"), { ssr: false, loading: () => null });

/**
 * Entry shell.
 *
 * Two rules shape this component:
 *
 * 1. The chapter copy is always in the DOM, never behind a mount gate. The whole
 *    point of the HTML overlay is SEO, accessibility and mobile legibility, so the
 *    server-rendered markup has to contain the real headings and product list. The
 *    only thing that waits for the client is the WebGL layer itself.
 *
 * 2. Reduced motion and no-WebGL get the complete static experience instead of the
 *    animated one. The Preloader is only mounted once that decision has been made,
 *    so a visitor who can never get a frame never stares at a loader.
 *
 * `detectQuality()` writes `state.reducedMotion`, `state.coarse` and
 * `state.quality` before the Canvas mounts, so the very first frame is already at
 * the correct tier.
 */
export default function Experience() {
  const [mode, setMode] = useState<"pending" | "animated" | "static">("pending");

  useEffect(() => {
    detectQuality();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const webgl = supportsWebGL();

    // Note: the `low` quality tier is still the animated world with fewer
    // particles and no post-processing — only a genuine absence of WebGL (or an
    // explicit reduced-motion request) drops to the static experience.
    setMode(reduced || !webgl ? "static" : "animated");
  }, []);

  /*
   * The scroll length.
   *
   * Every chapter is `position: fixed`, so nothing in normal flow has height. Without
   * this the document is one screen tall and Lenis computes `limit = 0`, which pins
   * progress at 0 — a frozen page until the effect above resolves.
   *
   * It is rendered in the pending branch as well as the animated one so the height is
   * correct from the first byte of SSR, and it is shared as a single element so the two
   * branches cannot drift. `StaticExperience` supplies its own document flow, so the
   * static branch does not need it.
   */
  const spacer = <div className="scroll-spacer" aria-hidden="true" />;

  if (mode === "static") {
    return <StaticExperience />;
  }

  if (mode === "pending") {
    // SSR output and first paint: chapter copy and scroll length only — no loader,
    // no canvas. The canvas is the only thing that may wait for the client.
    return (
      <main className="app-shell">
        <Chrome />
        {spacer}
        <Chapters />
      </main>
    );
  }

  return (
    <main className="app-shell">
      <Preloader />
      <Chrome />
      <div className="canvas-layer" aria-hidden="true">
        <World />
      </div>
      {spacer}
      <Chapters />
      <ScrollController />
    </main>
  );
}

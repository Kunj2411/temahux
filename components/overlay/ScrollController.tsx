"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { attachLenis, detachLenis, state, CHAPTER_IDS } from "@/lib/scene-state";
import { clamp01 } from "@/lib/keys";
import { updateWeights } from "../world/Timeline";
import { navigationProgress } from "../world/Timeline";

/**
 * The single scroll source.
 *
 * Lenis owns the scroll. Everything else — camera, chapter weights, the HTML
 * overlay, the progress bar, the atmosphere — reads the normalised value this
 * controller writes into `state`. Nothing scrolls independently.
 *
 * Deliberately not wired up:
 *  - GSAP ScrollTrigger. Two scroll drivers on one document is the classic way
 *    this kind of experience breaks, and ScrollTrigger is no longer a dependency
 *    of the new world. Chapter awareness comes from the same normalised progress.
 *  - `html { scroll-behavior: smooth }`. It fights Lenis and breaks keyboard and
 *    anchor navigation.
 *
 * Motion is disabled — but scrolling is not — when the visitor prefers reduced
 * motion, so the journey stays fully navigable as a static document.
 */
export function ScrollController() {
  useEffect(() => {
    const lenis = new Lenis({
      // Mobile keeps native momentum; desktop gets the eased glide.
      duration: state.coarse ? 0.9 : 1.15,
      smoothWheel: !state.coarse,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      syncTouch: false,
      autoRaf: false,
    });

    attachLenis(lenis);

    // Seed the chapter envelopes so the world is correctly lit before the first
    // scroll event ever fires.
    updateWeights(state.progress);

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const onScroll = () => {
      const limit = lenis.limit;
      const next = limit > 0 ? clamp01(lenis.scroll / limit) : 0;
      state.velocity = next - state.progress;
      state.progress = next;
      updateWeights(next);
    };

    const restoreLocation = () => {
      const id = window.location.hash.slice(1);
      const chapter = CHAPTER_IDS.find((candidate) => candidate === id);
      const destination = chapter ? navigationProgress(chapter) : 0;
      lenis.scrollTo(lenis.limit * destination, { immediate: true });
    };

    lenis.on("scroll", onScroll);
    frame = requestAnimationFrame(raf);

    // Hash destinations map to normalized timeline positions because panels are fixed overlays.
    const restoreFrame = requestAnimationFrame(() => requestAnimationFrame(restoreLocation));
    window.addEventListener("popstate", restoreLocation);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(restoreFrame);
      window.removeEventListener("popstate", restoreLocation);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      detachLenis(lenis);
    };
  }, []);

  return null;
}

export default ScrollController;

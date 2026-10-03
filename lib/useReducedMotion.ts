"use client";

import { useEffect, useState } from "react";
import { state } from "@/lib/scene-state";

/**
 * Tracks prefers-reduced-motion and mirrors it into the shared world state so the
 * WebGL layer can switch to a static composition on the very first frame.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReduced(query.matches);
      state.reducedMotion = query.matches;
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return reduced;
}
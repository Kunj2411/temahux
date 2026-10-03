"use client";

import { useEffect, useRef, useState } from "react";
import { state } from "@/lib/scene-state";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Never let a failed renderer leave the visitor staring at a loader. */
const SAFETY_TIMEOUT = 4200;

/**
 * The preloader.
 *
 * Because the world is entirely procedural there is nothing to download and no
 * progress bar to fake. The loader does exactly one thing honestly: it stays up
 * until the renderer has produced a real frame (`state.ready`), then hands over.
 * The line underneath fills asymptotically so a stalled frame never reads as a
 * finished load.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const start = performance.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      if (fill.current) fill.current.style.transform = "scaleX(1)";
      window.setTimeout(() => setDone(true), reduced ? 120 : 520);
    };

    if (reduced) {
      const timer = window.setTimeout(finish, 260);
      return () => window.clearTimeout(timer);
    }

    let frame = 0;

    const tick = (time: number) => {
      const elapsed = time - start;
      if (fill.current) {
        const target = state.ready ? 1 : 1 - Math.exp(-elapsed / 900);
        fill.current.style.transform = `scaleX(${Math.min(target, 0.93)})`;
      }
      if (state.ready && elapsed > 650) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    const safety = window.setTimeout(finish, SAFETY_TIMEOUT);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
    };
  }, [reduced]);

  if (done) return null;

  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader__inner">
        <span className="preloader__mark">TEMAHUX</span>
        <span className="preloader__line">
          <span ref={fill} className="preloader__fill" />
        </span>
        <span className="preloader__hint">{state.ready ? "Entering" : "Building the world"}</span>
      </div>
    </div>
  );
}

export default Preloader;

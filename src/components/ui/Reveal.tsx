"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The one shared scroll-reveal primitive. Fade + directional translate,
 * nothing else. Every section on the site reuses this instead of
 * hand-rolling its own animation wrapper.
 *
 * Under `prefers-reduced-motion: reduce` the element is simply present —
 * no transform, no delay, no viewport dependency.
 */
export type RevealProps = {
  children: ReactNode;
  /** Seconds to wait after entering the viewport. */
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
};

const OFFSET = 28;

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  const from =
    reduced || direction === "none"
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: direction === "left" ? -OFFSET : direction === "right" ? OFFSET : 0,
          y: direction === "up" ? OFFSET : direction === "down" ? -OFFSET : 0,
        };

  return (
    <motion.div
      className={className}
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduced ? 0 : 0.52,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

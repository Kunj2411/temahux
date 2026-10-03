"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92, y: 12 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            href="/services/services/contact-consultation"
            className="group flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
          >
            <span className="text-sm font-black uppercase tracking-widest">
              Start a Project
            </span>
            <div className="size-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
              <span className="text-white">→</span>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

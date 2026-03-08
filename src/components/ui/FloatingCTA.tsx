"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

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
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            href="/services/contact-consultation"
            className="group flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
          >
            <span className="text-sm font-black uppercase tracking-widest">
              Free Consultation
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

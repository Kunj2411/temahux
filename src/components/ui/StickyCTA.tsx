"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface-dark/95 backdrop-blur-md border-t border-white/10 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-white">
            Ready to start your project?
          </h3>
          <p className="text-sm text-slate-400">
            Get a free consultation and custom quote today.
          </p>
        </div>
        <Link
          href="/services/contact-consultation"
          className="px-8 py-4 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all shadow-xl whitespace-nowrap"
        >
          Start Your Project
        </Link>
      </div>
    </motion.div>
  );
}

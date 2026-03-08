"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6"
        >
          {headline}
        </motion.h2>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={primaryCTA.href}
            className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
          >
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="px-10 py-5 bg-white/5 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all border border-white/10"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  href: string;
  delay?: number;
  featured?: boolean;
}

export default function PackageCard({
  name,
  price,
  features,
  href,
  delay = 0,
  featured = false,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div
        className={`h-full p-6 rounded-2xl transition-all duration-300 ${
          featured
            ? "bg-primary/10 border-2 border-primary shadow-2xl shadow-primary/20 scale-105"
            : "bg-[#151022] border border-white/10 hover:border-purple-500 hover:shadow-xl"
        }`}
      >
        {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full">
              Popular
            </span>
          </div>
        )}

        <div className="space-y-6">
          {/* Package Name */}
          <h3 className="text-xl font-black tracking-tight text-white">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-accent">{price}</span>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Includes:
            </p>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={16} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
                <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link
              href={href}
              className={`block text-center px-6 py-4 rounded-button text-xs font-black uppercase tracking-widest transition-all ${
                featured
                  ? "bg-primary text-white hover:bg-accent hover:text-surface-dark"
                  : "bg-white/5 text-white border border-white/10 hover:bg-primary hover:border-primary"
              }`}
            >
              Start My Project
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

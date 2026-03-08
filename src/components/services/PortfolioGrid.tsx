"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image?: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="bg-surface-base/50 border border-white/5 rounded-card overflow-hidden hover:border-primary/50 transition-all">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-white/10">
                    {item.category.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-widest text-accent font-black">
                {item.category}
              </span>
              <h3 className="text-xl font-black text-white mt-2 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

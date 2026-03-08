"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PricingItem {
  category: string;
  services: {
    name: string;
    price: string;
    description?: string;
  }[];
}

interface PricingTableProps {
  items: PricingItem[];
}

export default function PricingTable({ items }: PricingTableProps) {
  return (
    <div className="space-y-12">
      {items.map((category, idx) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="border border-white/5 rounded-card overflow-hidden"
        >
          <div className="bg-surface-base/50 px-8 py-6 border-b border-white/5">
            <h3 className="text-2xl font-black text-white tracking-tight">
              {category.category}
            </h3>
          </div>
          <div className="divide-y divide-white/5">
            {category.services.map((service, serviceIdx) => (
              <div
                key={serviceIdx}
                className="px-8 py-6 hover:bg-surface-base/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {service.name}
                    </h4>
                    {service.description && (
                      <p className="text-sm text-slate-400">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-accent">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <Link
          href="/services/contact-consultation"
          className="inline-block px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
        >
          Get Custom Quote
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="mb-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
          <Icon 
            size={24} 
            className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" 
            strokeWidth={2}
          />
        </div>
      </div>
      <h3 className="text-lg font-black mb-2 text-white">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

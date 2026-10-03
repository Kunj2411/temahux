"use client";

import { motion } from "framer-motion";
import { Network, Brain, TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ModelCardProps {
  title: string;
  description: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  "System-Driven": Network,
  "Intelligence-First": Brain,
  "Build for Scale": TrendingUp,
};

export default function ModelCard({ title, description, delay = 0 }: ModelCardProps) {
  const IconComponent = iconMap[title] || Network;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 border border-white/10 bg-[#151022] rounded-2xl group hover:border-purple-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
          <IconComponent 
            size={24} 
            className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" 
            strokeWidth={2}
          />
        </div>
      </div>
      <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-accent group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

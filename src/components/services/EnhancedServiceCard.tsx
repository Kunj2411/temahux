"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Megaphone, PenTool, Bot, BarChart3, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface EnhancedServiceCardProps {
  title: string;
  description: string;
  startingPrice: string;
  features: string[];
  href: string;
  delay?: number;
  icon?: string;
}

const iconMap: Record<string, LucideIcon> = {
  "Web Development": Code,
  "Social Media Management": Megaphone,
  "Branding & Design": PenTool,
  "AI Automation": Bot,
  "Digital Marketing": BarChart3,
};

export default function EnhancedServiceCard({
  title,
  description,
  startingPrice,
  features,
  href,
  delay = 0,
}: EnhancedServiceCardProps) {
  const IconComponent = iconMap[title] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex items-center justify-between">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all">
              <IconComponent 
                size={24} 
                className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" 
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-slate-500 uppercase tracking-wider">Starting</span>
            <span className="text-2xl font-black text-accent">
              {startingPrice}
            </span>
          </div>

          {/* Features - Always Visible */}
          <div className="pt-4 border-t border-white/10 space-y-3">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-button text-xs font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all w-full justify-center"
            >
              View Details
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

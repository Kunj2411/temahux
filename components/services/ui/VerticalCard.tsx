"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Building2, GraduationCap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface VerticalCardProps {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  "🚀": Rocket,
  "🏛️": Building2,
  "🎓": GraduationCap,
};

export default function VerticalCard({
  title,
  description,
  ctaText,
  href,
  icon,
  delay = 0,
}: VerticalCardProps) {
  const IconComponent = iconMap[icon] || Rocket;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <Link href={href}>
        <div className="relative h-full p-10 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Gradient Border Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 space-y-6">
            {/* Icon */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
              <IconComponent 
                size={32} 
                className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" 
                strokeWidth={2}
              />
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-400 leading-relaxed min-h-[80px]">
              {description}
            </p>
            
            {/* CTA */}
            <div className="pt-4 flex items-center gap-3 group/cta">
              <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                {ctaText}
              </span>
              <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>
    </motion.div>
  );
}

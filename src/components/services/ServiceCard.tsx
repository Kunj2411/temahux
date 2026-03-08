"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Megaphone, PenTool, Bot, BarChart3 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  startingPrice: string;
  href: string;
  icon?: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  "Web Development": Code,
  "Social Media Management": Megaphone,
  "Branding & Design": PenTool,
  "AI Automation": Bot,
  "Digital Marketing": BarChart3,
};

export default function ServiceCard({
  title,
  description,
  startingPrice,
  href,
  delay = 0,
}: ServiceCardProps) {
  const IconComponent = iconMap[title] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <Link href={href}>
        <div className="h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
          <div className="space-y-6">
            {/* Icon */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
              <IconComponent 
                size={24} 
                className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" 
                strokeWidth={2}
              />
            </div>

            <h3 className="text-xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">
              {description}
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Starting at
              </span>
              <p className="text-2xl font-black text-accent mt-1">
                {startingPrice}
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Building2, Users, GraduationCap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TargetCustomerCardProps {
  title: string;
  description: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  "B2B SaaS Platforms": Building2,
  "High-Ticket Service Firms": Users,
  "Institutional Tech": GraduationCap,
};

export default function TargetCustomerCard({
  title,
  description,
  delay = 0,
}: TargetCustomerCardProps) {
  const IconComponent = iconMap[title] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group"
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
      <h4 className="text-xl font-black text-white mb-4">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

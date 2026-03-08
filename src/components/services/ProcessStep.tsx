"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({
  step,
  title,
  description,
  delay = 0,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6 p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex-shrink-0">
        <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <span className="text-2xl font-black text-primary">{step}</span>
        </div>
      </div>
      <div className="pt-2">
        <h4 className="text-xl font-black text-white mb-4">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

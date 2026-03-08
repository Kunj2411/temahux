"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, PenTool, Megaphone, Bot } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

function ProjectCard({ title, category, description, icon: Icon, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-[#151022] border border-white/10 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        {/* Icon-based visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <Icon size={64} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={1.5} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent opacity-80"></div>
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-widest text-accent font-black">
          {category}
        </span>
        <h3 className="text-xl font-black text-white mt-2 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const projects = [
    { 
      title: "E-Commerce Platform", 
      category: "Web Development",
      description: "Full-stack e-commerce store with payment integration and admin dashboard.",
      icon: Code
    },
    { 
      title: "Brand Identity System", 
      category: "Branding & Design",
      description: "Complete brand identity including logo, color palette, and brand guidelines.",
      icon: PenTool
    },
    { 
      title: "Social Media Campaign", 
      category: "Social Media",
      description: "Multi-platform social media strategy with content calendar and analytics.",
      icon: Megaphone
    },
    { 
      title: "AI Chatbot Integration", 
      category: "AI Automation",
      description: "Intelligent chatbot with natural language processing and lead capture.",
      icon: Bot
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-surface-base/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
            Recent Work
          </h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
            Projects that <span className="text-primary italic">deliver.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              icon={project.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-button text-xs font-black uppercase tracking-widest text-white hover:bg-primary hover:border-primary transition-all"
          >
            View Full Portfolio
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

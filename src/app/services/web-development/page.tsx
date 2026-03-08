import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { Zap, Building2, ShoppingCart } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
              Service Offering
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
              Web <span className="text-primary italic">Development</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
              Professional websites engineered for performance, scalability, and conversion. 
              Built for businesses, startups, and creators who demand excellence.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.3}>
              <div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
                    <Zap size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-black mb-2 text-white">Landing Pages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">High-converting single-page sites</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
                    <Building2 size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-black mb-2 text-white">Business Websites</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Multi-page corporate presence</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
                    <ShoppingCart size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-black mb-2 text-white">E-Commerce</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Full-featured online stores</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="bg-[#151022] rounded-2xl p-12 mb-12 border border-white/10">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Pricing</h2>
              <p className="text-4xl font-black text-accent mb-4">Starting from ₹3,000</p>
              <p className="text-sm text-slate-400">Custom quotes based on project scope and requirements</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="px-10 py-5 bg-white/5 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all border border-white/10"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

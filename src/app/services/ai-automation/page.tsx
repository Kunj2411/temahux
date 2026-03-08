import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function AIAutomationPage() {
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
              AI <span className="text-primary italic">Automation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
              Intelligent automation solutions that streamline operations and unlock efficiency. 
              Leverage AI to transform your business processes and decision-making.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 bg-surface-base/30 border border-white/5 rounded-card">
                <h3 className="text-lg font-black mb-2">Workflow Automation</h3>
                <p className="text-sm text-slate-400">Streamline repetitive business tasks</p>
              </div>
              <div className="p-6 bg-surface-base/30 border border-white/5 rounded-card">
                <h3 className="text-lg font-black mb-2">AI Chatbots</h3>
                <p className="text-sm text-slate-400">24/7 customer support automation</p>
              </div>
              <div className="p-6 bg-surface-base/30 border border-white/5 rounded-card">
                <h3 className="text-lg font-black mb-2">Data Analysis</h3>
                <p className="text-sm text-slate-400">AI-powered insights and predictions</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-surface-base rounded-card p-12 mb-12 border border-white/5">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Pricing</h2>
              <p className="text-4xl font-black text-accent mb-4">Starting from ₹15,000</p>
              <p className="text-sm text-slate-400">Custom AI solutions priced based on complexity and integration needs</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
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

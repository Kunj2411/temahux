import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block text-center">
              Our Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter text-center">
              Project <span className="text-primary italic">Portfolio</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.3}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-card mb-4 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <span className="text-6xl font-black text-white/10">01</span>
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">E-Commerce Platform</h3>
                <p className="text-sm text-slate-400 mb-2">Full-stack online store with payment integration</p>
                <span className="text-xs font-black uppercase tracking-widest text-accent">Web Development</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-trust/20 to-primary/20 rounded-card mb-4 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <span className="text-6xl font-black text-white/10">02</span>
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">Brand Identity System</h3>
                <p className="text-sm text-slate-400 mb-2">Complete rebrand for tech startup</p>
                <span className="text-xs font-black uppercase tracking-widest text-accent">Branding & Design</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-trust/20 rounded-card mb-4 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <span className="text-6xl font-black text-white/10">03</span>
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">Social Media Campaign</h3>
                <p className="text-sm text-slate-400 mb-2">6-month campaign with 300% engagement growth</p>
                <span className="text-xs font-black uppercase tracking-widest text-accent">Social Media</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-lavender/20 to-accent/20 rounded-card mb-4 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <span className="text-6xl font-black text-white/10">04</span>
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">AI Chatbot Integration</h3>
                <p className="text-sm text-slate-400 mb-2">Custom support bot reducing response time by 80%</p>
                <span className="text-xs font-black uppercase tracking-widest text-accent">AI Automation</span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

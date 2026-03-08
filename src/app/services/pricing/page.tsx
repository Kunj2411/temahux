import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block text-center">
              Transparent Pricing
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter text-center">
              Service <span className="text-primary italic">Pricing</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
              Clear, competitive pricing for all our services. No hidden fees, no surprises.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.3}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">Web Development</h3>
                <p className="text-4xl font-black text-accent mb-4">₹3,000+</p>
                <p className="text-sm text-slate-400 mb-6">Professional websites and web applications</p>
                <Link href="/services/web-development" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">Social Media</h3>
                <p className="text-4xl font-black text-accent mb-4">₹5,000/mo</p>
                <p className="text-sm text-slate-400 mb-6">Complete social media management</p>
                <Link href="/services/social-media-management" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">Branding & Design</h3>
                <p className="text-4xl font-black text-accent mb-4">₹8,000+</p>
                <p className="text-sm text-slate-400 mb-6">Logo and brand identity design</p>
                <Link href="/services/branding-design" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">Digital Marketing</h3>
                <p className="text-4xl font-black text-accent mb-4">₹10,000/mo</p>
                <p className="text-sm text-slate-400 mb-6">SEO, ads, and email campaigns</p>
                <Link href="/services/digital-marketing" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">AI Automation</h3>
                <p className="text-4xl font-black text-accent mb-4">₹15,000+</p>
                <p className="text-sm text-slate-400 mb-6">Custom AI and automation solutions</p>
                <Link href="/services/ai-automation" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-black mb-2">Enterprise</h3>
                <p className="text-4xl font-black text-accent mb-4">Custom</p>
                <p className="text-sm text-slate-400 mb-6">Tailored solutions for large organizations</p>
                <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Contact Us →
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
              >
                Request Custom Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

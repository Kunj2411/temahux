import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block text-center">
              How We Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter text-center">
              Our <span className="text-primary italic">Process</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
              A proven methodology that delivers results. From discovery to deployment, we ensure excellence at every step.
            </p>
          </FadeIn>

          <div className="space-y-12 mb-16">
            <FadeIn delay={0.3}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">1</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">Discovery & Strategy</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We start by understanding your business goals, target audience, and competitive landscape. 
                    This phase includes stakeholder interviews, market research, and strategic planning.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">2</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">Design & Planning</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Our team creates detailed wireframes, mockups, and prototypes. We define the technical 
                    architecture and project timeline, ensuring alignment with your vision.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">3</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">Development & Implementation</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We build your solution using modern technologies and best practices. Regular check-ins 
                    and progress updates keep you informed throughout the development cycle.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">4</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">Testing & Quality Assurance</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Rigorous testing ensures everything works flawlessly. We test across devices, browsers, 
                    and scenarios to deliver a polished, bug-free product.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">5</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">Launch & Support</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We handle the deployment and provide training for your team. Post-launch support ensures 
                    smooth operation and addresses any issues that arise.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.55}>
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

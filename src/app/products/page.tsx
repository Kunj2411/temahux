import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
              Institutional Infrastructure
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
              Temahux <br />
              <span className="text-primary italic">SaaS Products</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
              We are building next-generation institutional infrastructure powered by AI. Modular systems designed for universities, schools, and educational institutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-button">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-accent">
                Coming Soon
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Abstract Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-trust/10 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-16">
              Upcoming Products
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* University OS */}
            <FadeIn delay={0.1}>
              <div className="group relative p-10 bg-surface-base/30 border border-white/10 rounded-card hover:border-trust/50 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">
                    Launching Soon
                  </span>
                </div>
                
                <div className="text-5xl mb-6">🏛️</div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-trust transition-colors">
                  University OS
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  Complete ERP operating system for universities and educational institutions. Manage students, faculty, courses, and operations from one unified platform.
                </p>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-trust">•</span>
                    <span>Student Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-trust">•</span>
                    <span>Faculty Portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-trust">•</span>
                    <span>Course Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-trust">•</span>
                    <span>Financial Management</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Paper Checking AI */}
            <FadeIn delay={0.2}>
              <div className="group relative p-10 bg-surface-base/30 border border-white/10 rounded-card hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">
                    Launching Soon
                  </span>
                </div>
                
                <div className="text-5xl mb-6">🤖</div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">
                  Paper Checking AI
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  AI-powered grading system that reduces faculty workload and improves evaluation accuracy. Intelligent assessment for subjective answers.
                </p>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Automated Grading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Plagiarism Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Detailed Feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Analytics Dashboard</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* T-Learn LMS */}
            <FadeIn delay={0.3}>
              <div className="group relative p-10 bg-surface-base/30 border border-white/10 rounded-card hover:border-lavender/50 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">
                    Launching Soon
                  </span>
                </div>
                
                <div className="text-5xl mb-6">📚</div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-lavender transition-colors">
                  T-Learn LMS
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  Next generation learning management system with AI-driven feedback and skill tracking. Modern education delivery platform.
                </p>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lavender">•</span>
                    <span>Course Builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lavender">•</span>
                    <span>Video Hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lavender">•</span>
                    <span>AI Assessments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lavender">•</span>
                    <span>Progress Tracking</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Be the first to <span className="text-primary italic">experience</span> the future.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Join our early access program and get exclusive benefits when we launch. Limited spots available for pilot institutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all shadow-2xl shadow-primary/20"
            >
              Join Early Access
              <span>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

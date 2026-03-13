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
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
              What are we <span className="text-primary italic">building?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-20">
              Next-generation institutional infrastructure powered by AI. Modular systems designed for universities, schools, and educational institutions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* University OS */}
            <FadeIn delay={0.2}>
              <div className="group relative h-full">
                <div className="relative h-full p-10 bg-[#151022] border border-white/10 rounded-2xl hover:border-trust hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-trust/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Badge */}
                    <div className="inline-flex px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent self-start">
                      Launching Soon
                    </div>

                    {/* Icon */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-trust/50 transition-all self-start">
                      <svg className="w-8 h-8 text-trust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-trust transition-colors mt-2">
                      University OS
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed min-h-[80px]">
                      Complete ERP operating system for universities and educational institutions. Manage students, faculty, courses, and operations from one unified platform.
                    </p>
                    
                    {/* CTA */}
                    <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                      <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-trust transition-colors">
                        Coming Soon
                      </span>
                      <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-trust transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-trust/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </FadeIn>

            {/* Paper Checking AI */}
            <FadeIn delay={0.3}>
              <div className="group relative h-full">
                <div className="relative h-full p-10 bg-[#151022] border border-white/10 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Badge */}
                    <div className="inline-flex px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent self-start">
                      Launching Soon
                    </div>

                    {/* Icon */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-primary/50 transition-all self-start">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors mt-2">
                      Paper Checking AI
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed min-h-[80px]">
                      AI-powered grading system that reduces faculty workload and improves evaluation accuracy. Intelligent assessment for subjective answers.
                    </p>
                    
                    {/* CTA */}
                    <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                      <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                        Coming Soon
                      </span>
                      <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </FadeIn>

            {/* T-Learn LMS */}
            <FadeIn delay={0.4}>
              <div className="group relative h-full">
                <div className="relative h-full p-10 bg-[#151022] border border-white/10 rounded-2xl hover:border-lavender hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Badge */}
                    <div className="inline-flex px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black uppercase tracking-widest text-accent self-start">
                      Launching Soon
                    </div>

                    {/* Icon */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-lavender/50 transition-all self-start">
                      <svg className="w-8 h-8 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-lavender transition-colors mt-2">
                      T-Learn LMS
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed min-h-[80px]">
                      Next generation learning management system with AI-driven feedback and skill tracking. Modern education delivery platform.
                    </p>
                    
                    {/* CTA */}
                    <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                      <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-lavender transition-colors">
                        Coming Soon
                      </span>
                      <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-lavender transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-lavender/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

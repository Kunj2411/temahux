import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-surface-light text-surface-dark selection:bg-lavender">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto text-center">
                    <FadeIn>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">
                            Career Acceleration Platform
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
                            Temahux <br />
                            <span className="text-primary italic">Academy</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Hands-on programs to master AI systems, SaaS development, and digital growth. Learn by building real products with industry mentors.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-button">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-xs font-black uppercase tracking-widest text-primary">
                                Coming Soon
                            </span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Upcoming Programs */}
            <section className="py-32 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
                            What will you <span className="text-primary italic">master?</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-slate-500 text-center text-lg max-w-2xl mx-auto mb-20">
                            Hands-on programs to master AI systems, SaaS development, and digital growth. Learn by building real products with industry mentors.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* AI Systems Engineer */}
                        <FadeIn delay={0.2}>
                            <div className="group relative h-full">
                                <div className="relative h-full p-10 bg-white border border-slate-200 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Gradient Border Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10 flex flex-col gap-6">
                                        {/* Badge */}
                                        <div className="inline-flex px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary self-start">
                                            Launching Soon
                                        </div>

                                        {/* Icon */}
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 inline-flex group-hover:border-primary/50 transition-all self-start">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-3xl font-black tracking-tight text-surface-dark group-hover:text-primary transition-colors mt-2">
                                            AI Systems Engineer
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-slate-500 leading-relaxed min-h-[80px]">
                                            Master AI integration, automation systems, and intelligent product development. Build production-ready AI applications.
                                        </p>
                                        
                                        {/* CTA */}
                                        <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                                            <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                                                12 Weeks
                                            </span>
                                            <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* SaaS Product Builder */}
                        <FadeIn delay={0.3}>
                            <div className="group relative h-full">
                                <div className="relative h-full p-10 bg-white border border-slate-200 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Gradient Border Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10 flex flex-col gap-6">
                                        {/* Badge */}
                                        <div className="inline-flex px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary self-start">
                                            Launching Soon
                                        </div>

                                        {/* Icon */}
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 inline-flex group-hover:border-primary/50 transition-all self-start">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-3xl font-black tracking-tight text-surface-dark group-hover:text-primary transition-colors mt-2">
                                            SaaS Product Builder
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-slate-500 leading-relaxed min-h-[80px]">
                                            Learn to build scalable SaaS products from scratch. Full-stack development, architecture, and product strategy.
                                        </p>
                                        
                                        {/* CTA */}
                                        <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                                            <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                                                16 Weeks
                                            </span>
                                            <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Growth Architect */}
                        <FadeIn delay={0.4}>
                            <div className="group relative h-full">
                                <div className="relative h-full p-10 bg-white border border-slate-200 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Gradient Border Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10 flex flex-col gap-6">
                                        {/* Badge */}
                                        <div className="inline-flex px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary self-start">
                                            Launching Soon
                                        </div>

                                        {/* Icon */}
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 inline-flex group-hover:border-primary/50 transition-all self-start">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-3xl font-black tracking-tight text-surface-dark group-hover:text-primary transition-colors mt-2">
                                            Growth Architect
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-slate-500 leading-relaxed min-h-[80px]">
                                            Master digital marketing, growth hacking, and data-driven strategies to scale businesses online.
                                        </p>
                                        
                                        {/* CTA */}
                                        <div className="pt-4 flex items-center gap-3 group/cta mt-auto">
                                            <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                                                10 Weeks
                                            </span>
                                            <div className="h-[2px] w-8 bg-accent group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Join Waitlist CTA */}
            <section className="py-24 px-6 bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                            Join the <span className="text-primary italic">founding cohort.</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
                            Be among the first to experience our intensive career programs. Early members get lifetime access and exclusive mentorship.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-surface-dark transition-all shadow-2xl shadow-primary/20"
                        >
                            Join Waitlist
                            <span>→</span>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

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
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                            Upcoming Programs
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
                            Build your <span className="text-primary italic">future career.</span>
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* AI Systems Engineer */}
                        <FadeIn delay={0.1}>
                            <div className="group relative bg-white p-10 border border-slate-200 rounded-card hover:border-primary transition-all duration-300 h-full">
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                                        Launching Soon
                                    </span>
                                </div>
                                
                                <div className="text-5xl mb-6">🤖</div>
                                
                                <h3 className="text-2xl font-black mb-4 text-surface-dark group-hover:text-primary transition-colors">
                                    AI Systems Engineer
                                </h3>
                                
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Master AI integration, automation systems, and intelligent product development. Build production-ready AI applications.
                                </p>

                                <div className="space-y-2 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>LLM Integration</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>AI Automation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Vector Databases</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Production Deployment</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest font-black">Duration</span>
                                        <span className="font-bold text-surface-dark">12 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* SaaS Product Builder */}
                        <FadeIn delay={0.2}>
                            <div className="group relative bg-white p-10 border border-slate-200 rounded-card hover:border-primary transition-all duration-300 h-full">
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                                        Launching Soon
                                    </span>
                                </div>
                                
                                <div className="text-5xl mb-6">💻</div>
                                
                                <h3 className="text-2xl font-black mb-4 text-surface-dark group-hover:text-primary transition-colors">
                                    SaaS Product Builder
                                </h3>
                                
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Learn to build scalable SaaS products from scratch. Full-stack development, architecture, and product strategy.
                                </p>

                                <div className="space-y-2 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Full-Stack Development</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>System Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Database Design</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Product Strategy</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest font-black">Duration</span>
                                        <span className="font-bold text-surface-dark">16 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Growth Architect */}
                        <FadeIn delay={0.3}>
                            <div className="group relative bg-white p-10 border border-slate-200 rounded-card hover:border-primary transition-all duration-300 h-full">
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                                        Launching Soon
                                    </span>
                                </div>
                                
                                <div className="text-5xl mb-6">📈</div>
                                
                                <h3 className="text-2xl font-black mb-4 text-surface-dark group-hover:text-primary transition-colors">
                                    Growth Architect
                                </h3>
                                
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Master digital marketing, growth hacking, and data-driven strategies to scale businesses online.
                                </p>

                                <div className="space-y-2 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>SEO & Content Strategy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Paid Advertising</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Analytics & Optimization</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Growth Frameworks</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest font-black">Duration</span>
                                        <span className="font-bold text-surface-dark">10 Weeks</span>
                                    </div>
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

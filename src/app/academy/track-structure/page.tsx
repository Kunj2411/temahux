import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function AcademyTrackStructurePage() {
    return (
        <div className="min-h-screen bg-white text-surface-dark selection:bg-primary">
            <Navbar />

            {/* Hero: The Method */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
                            Path <br />
                            <span className="text-primary italic">Structure.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
                            Our tracks are not courses. They are high-intensity deployments designed to turn knowledge into institutional-grade skills.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Skill Progression Model */}
            <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-16 text-center">Skill Progression Model</h2>
                    </FadeIn>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <PathPoint
                                num="01"
                                title="Algorithmic Foundations"
                                desc="Understanding the mathematical and logical structures that underpin digital growth and SaaS systems."
                                delay={0.1}
                            />
                            <PathPoint
                                num="02"
                                title="Live Deployment"
                                desc="Building and deploying modular components into the Temahux Sandbox environment."
                                delay={0.2}
                            />
                            <PathPoint
                                num="03"
                                title="Capstone Thesis"
                                desc="Designing a complete ecosystem solution for a real-world institutional pilot partner."
                                delay={0.3}
                            />
                        </div>
                        <FadeIn delay={0.2} className="h-full">
                            <div className="bg-white border border-slate-200 p-12 rounded-card shadow-2xl h-full">
                                <h4 className="text-xl font-black mb-6">Certification Roadmap</h4>
                                <p className="text-slate-500 text-sm mb-12">Every track culminates in a Portfolio-as-a-Service (PaaS)—a live, functional demonstration of your infrastructure capabilities.</p>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <span>Founding Batch Roadmap</span>
                                        <span>Cohort 01</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="p-4 bg-slate-50 border-l-4 border-primary rounded-r text-xs font-bold">Month 1-2: Core Architecture</li>
                                        <li className="p-4 bg-slate-50 border-l-4 border-slate-200 rounded-r text-xs font-bold text-slate-400">Month 3-4: Vertical Deployment</li>
                                        <li className="p-4 bg-slate-50 border-l-4 border-slate-200 rounded-r text-xs font-bold text-slate-400">Month 5-6: Capstone & Placement</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Placement Philosophy */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-12">The Placement Protocol</h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-12">We don't guarantee placement metrics. **We guarantee skill relevance.** Graduates of the Temahux Academy are directly funneled into our Partner Ecosystem—a network of 15+ pilot institutions and high-growth B2B firms.</p>
                            <span className="text-xs font-black uppercase tracking-widest text-primary border border-primary/20 px-6 py-3 rounded-full">Now accepting Founding Batch Applications.</span>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

function PathPoint({ num, title, desc, delay }: any) {
    return (
        <FadeIn delay={delay} className="w-full">
            <div className="flex gap-8 group">
                <span className="text-primary font-black text-4xl leading-none group-hover:scale-110 transition-transform">
                    {num}
                </span>
                <div>
                    <h4 className="text-lg font-black mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
            </div>
        </FadeIn>
    )
}

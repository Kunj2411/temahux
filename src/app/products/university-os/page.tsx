import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function UniversityOSPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white font-body selection:bg-trust">
            <Navbar />

            {/* Hero: Deployment Ready */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn scale={0.9} className="size-16 bg-trust rounded-2xl mb-8 flex items-center justify-center border border-white/20 shadow-2xl">
                        <span className="text-white font-black text-2xl">U</span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] max-w-4xl">
                            The Institutional <br />
                            Operating <span className="text-trust">System.</span>
                        </h1>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <FadeIn delay={0.2} className="max-w-2xl">
                            <div>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    A unified, data-driven backbone designed to remove the friction from complex academic operations. University OS is a modular ERP system built specifically for high-volume institutions.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-black uppercase tracking-widest text-accent">Status: Phase 01 Deployment</span>
                                    <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded text-[10px] font-black uppercase tracking-widest text-primary">Pilot Program Active</span>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <button className="px-10 py-5 bg-trust text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all shadow-xl">
                                Request Pilot Access
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* System Modules */}
            <section className="py-24 px-6 bg-surface-base/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-16">Core System Modules</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                        <ModuleItem
                            title="Lifecycle Intake"
                            desc="Automated student onboarding and document verification engine with AI-driven validation."
                            delay={0.1}
                        />
                        <ModuleItem
                            title="Curriculum OS"
                            desc="Dynamic course mapping and prerequisite logic that adapts to real-time skill requirement shifts."
                            delay={0.2}
                        />
                        <ModuleItem
                            title="Faculty Hub"
                            desc="Resource allocation and performance analytics for teaching staff and institutional leadership."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Security & Roadmap */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
                    <FadeIn>
                        <div>
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-accent">Security First.</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">University OS uses a stateless architecture with isolated encryption for sensitive student data. We are building toward full SOC2 and GDPR compliance out of the box for all pilot partners.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div>
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-accent">Module Roadmap</h3>
                            <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                <li className="flex items-center gap-3"><span className="size-2 bg-primary rounded-full"></span> ERP Foundations (Available)</li>
                                <li className="flex items-center gap-3"><span className="size-2 bg-primary rounded-full"></span> AI Intake Extractor (Beta)</li>
                                <li className="flex items-center gap-3"><span className="size-2 bg-white/10 rounded-full"></span> Global Credit Portability (Q4 2026)</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

function ModuleItem({ title, desc, delay }: any) {
    return (
        <FadeIn delay={delay} className="w-full">
            <div className="p-12 bg-surface-dark group hover:bg-surface-base transition-all h-full">
                <h4 className="text-xl font-black mb-4 group-hover:text-trust transition-colors">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </FadeIn>
    )
}

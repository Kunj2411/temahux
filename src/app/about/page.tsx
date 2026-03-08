import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* SECTION 1 — ABOUT HERO */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12 tracking-tighter max-w-4xl">
                            About <br />
                            <span className="text-primary italic">Temahux.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-8">
                            Temahux builds the digital infrastructure that powers the next generation of businesses, institutions, and creators.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-slate-500 max-w-3xl leading-relaxed">
                            We combine digital growth services, intelligent SaaS systems, and a talent academy to create a self-reinforcing ecosystem for long-term scale.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 2 — THE PROBLEM */}
            <section className="py-24 px-6 border-y border-white/5 bg-surface-base/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <FadeIn direction="right">
                            <div>
                                <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">
                                    The Infrastructure <br />
                                    <span className="text-accent">Gap.</span>
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-slate-400 leading-relaxed">
                                        Most organizations today operate on fragmented digital systems. Websites, marketing platforms, learning systems, and internal tools exist separately without integration.
                                    </p>
                                    <p className="text-slate-400 leading-relaxed">
                                        This fragmentation creates:
                                    </p>
                                    <ul className="space-y-3 text-slate-400">
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Slow decision making</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Operational inefficiencies</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Difficulty scaling</span>
                                        </li>
                                    </ul>
                                    <p className="text-slate-300 font-medium pt-4">
                                        Temahux solves this by creating connected digital infrastructure.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="grid gap-8">
                            <FadeIn delay={0.1} direction="left">
                                <div className="p-8 bg-surface-base border border-white/5 rounded-card">
                                    <h4 className="font-bold text-accent mb-2">Fragmented Data</h4>
                                    <p className="text-sm text-slate-500">Legacy systems create silos that prevent real-time institutional intelligence.</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2} direction="left">
                                <div className="p-8 bg-surface-base border border-white/5 rounded-card">
                                    <h4 className="font-bold text-accent mb-2">Inelastic Growth</h4>
                                    <p className="text-sm text-slate-500">Traditional models require linear headcount growth to achieve exponential scale.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — THE TEMAHUX MODEL */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-center">
                            The Temahux <span className="text-accent italic">Model</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-slate-400 text-center text-lg max-w-3xl mx-auto mb-20">
                            Three verticals working together to create a complete ecosystem for digital transformation.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn delay={0.2}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full hover:border-primary transition-all group">
                                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Digital Growth Services</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Helping businesses build websites, marketing systems, and AI automation.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full hover:border-primary transition-all group">
                                <div className="size-12 bg-trust/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">SaaS Products</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                    Building intelligent institutional software such as:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li className="flex items-start gap-2">
                                        <span className="text-trust">•</span>
                                        <span>University OS</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-trust">•</span>
                                        <span>AI grading systems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-trust">•</span>
                                        <span>Learning platforms</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full hover:border-primary transition-all group">
                                <div className="size-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Temahux Academy</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Training the next generation of builders in AI systems, SaaS development, and digital growth engineering.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — THE OPERATING LOOP */}
            <section className="py-24 px-6 bg-surface-base/10 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn direction="right">
                            <div className="relative aspect-square bg-surface-base border border-white/5 rounded-full flex items-center justify-center p-12 overflow-hidden">
                                {/* Abstract Diagram Representation */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                                </div>
                                <div className="relative flex flex-col items-center gap-12 w-full text-center">
                                    <div className="size-48 rounded-full border border-primary flex items-center justify-center bg-primary/5">
                                        <span className="text-xs font-black uppercase tracking-widest">TEMAHUX CORE</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-8 w-full">
                                        <div className="p-4 border border-white/10 rounded bg-surface-dark text-[10px] font-bold uppercase tracking-widest">Services</div>
                                        <div className="p-4 border border-white/10 rounded bg-surface-dark text-[10px] font-bold uppercase tracking-widest">Products</div>
                                        <div className="p-4 border border-white/10 rounded bg-surface-dark text-[10px] font-bold uppercase tracking-widest">Academy</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <div>
                            <FadeIn delay={0.1}>
                                <h2 className="text-3xl font-black mb-8 uppercase tracking-widest">
                                    The Temahux <br />
                                    <span className="text-accent">Operating Loop</span>
                                </h2>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-slate-400 mb-12 leading-relaxed">
                                    Every component is engineered to feed and scale the others, creating a continuous feedback loop.
                                </p>
                            </FadeIn>
                            <div className="space-y-12">
                                <ArchPoint
                                    num="01"
                                    title="Services identify real-world problems"
                                    desc="Real-world growth bottlenecks identified in our Services vertical are turned into modular SaaS solutions."
                                    delay={0.3}
                                />
                                <ArchPoint
                                    num="02"
                                    title="Products transform solutions into scalable software"
                                    desc="Our SaaS modules generate deep institutional behavioral data that refines our AI and growth strategies."
                                    delay={0.4}
                                />
                                <ArchPoint
                                    num="03"
                                    title="Academy trains people to operate and expand"
                                    desc="The Academy builds the high-certified workforce needed to operate and manage these complex infrastructures."
                                    delay={0.5}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — ROADMAP */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-20 text-center">Development Roadmap</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-[120px] left-0 right-0 h-px bg-white/5 -z-0"></div>

                        <TimelineStep
                            title="Pilot Foundations"
                            time="2026"
                            desc="Deploying initial service frameworks and early SaaS modules."
                            status="Active"
                            delay={0.1}
                        />
                        <TimelineStep
                            title="Ecosystem Integration"
                            time="2027"
                            desc="Connecting services, products, and academy into one platform."
                            status="Scheduled"
                            delay={0.2}
                        />
                        <TimelineStep
                            title="Institutional Scale"
                            time="2028"
                            desc="Expanding Temahux systems globally."
                            status="Vision"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Infrastructure Philosophy */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <FadeIn>
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-12">Engineered Discipline</h3>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <FadeIn delay={0.1}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full">
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Stateless Security</h4>
                                <p className="text-sm text-slate-400">Security is not a feature; it's the foundation. Our architecture uses isolation protocols to ensure institutional data integrity.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full">
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Unified Identity</h4>
                                <p className="text-sm text-slate-400">One ID across the entire ecosystem. Seamless transition from Student to Business Owner to Institutional Faculty.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-base/30 h-full">
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Context-Aware AI</h4>
                                <p className="text-sm text-slate-400">Our LLM-layer is tuned specifically for institutional rubrics, not general-purpose chat. It understands domain context.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TimelineStep({ title, time, desc, status, delay }: any) {
    return (
        <FadeIn delay={delay} className="h-full">
            <div className="relative z-10 bg-surface-dark border border-white/5 p-10 rounded-card group hover:border-primary transition-all h-full">
                <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-2">{time}</span>
                <h3 className="text-xl font-black mb-4">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">{desc}</p>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded w-fit ${status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-500'}`}>
                    {status}
                </span>
            </div>
        </FadeIn>
    )
}

function ArchPoint({ num, title, desc, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div className="flex gap-8 group">
                <span className="text-primary font-black text-4xl leading-none group-hover:scale-110 transition-transform">
                    {num}
                </span>
                <div>
                    <h4 className="text-lg font-black mb-2 uppercase tracking-tight">{title}</h4>
                    <p className="text-sm text-slate-400/80 leading-relaxed">{desc}</p>
                </div>
            </div>
        </FadeIn>
    )
}

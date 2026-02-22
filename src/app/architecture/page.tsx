import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function ArchitecturePage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* Hero: The Blueprint */}
            <section className="pt-40 pb-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12 tracking-tighter max-w-4xl">
                            System <br />
                            <span className="text-accent italic">Architecture.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                            Temahux is built as a **Closed-Loop Ecosystem**. Every component is engineered to feed and scale the others.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Ecosystem Map (Visual Concept) */}
            <section className="py-24 px-6 bg-surface-base/10 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn direction="right">
                            <div className="relative aspect-square bg-surface-base border border-white/5 rounded-full flex items-center justify-center p-12 overflow-hidden">
                                {/* Abstract Diagram Representation */}
                                <div className="absolute inset-0 opacity-20">
                                    <Image
                                        src="/grid.svg"
                                        alt="background grid"
                                        fill
                                        className="object-cover"
                                    />
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
                                <h2 className="text-3xl font-black mb-8 uppercase tracking-widest">The Operating <br /> Loop</h2>
                            </FadeIn>
                            <div className="space-y-12">
                                <ArchPoint
                                    num="01"
                                    title="Services Feed Products"
                                    desc="Real-world growth bottlenecks identified in our Services vertical are turned into modular SaaS solutions."
                                    delay={0.2}
                                />
                                <ArchPoint
                                    num="02"
                                    title="Products Feed Data"
                                    desc="Our SaaS modules generate deep institutional behavioral data that refines our AI and growth strategies."
                                    delay={0.3}
                                />
                                <ArchPoint
                                    num="03"
                                    title="Academy Feeds Talent"
                                    desc="The Academy builds the high-certified workforce needed to operate and manage these complex infrastructures."
                                    delay={0.4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Philosophy */}
            <section className="py-24 px-6">
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

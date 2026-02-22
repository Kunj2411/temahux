import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesFrameworkPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* Hero: The Method */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
                            The Growth <br />
                            <span className="text-accent italic">Framework.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                            We replace ad-hoc execution with clinical system design.
                            Our framework is built for institutions where precision is non-negotiable.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Engagement Model */}
            <section className="py-24 px-6 bg-surface-base/10 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div>
                            <FadeIn>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">The Engagement Model</h2>
                            </FadeIn>
                            <div className="space-y-12">
                                <ProcessStep
                                    num="01"
                                    title="Infrastructure Audit"
                                    desc="We perform a deep-dive scan of your existing growth scaffolds to identify 'Operational Entropy'."
                                    delay={0.1}
                                />
                                <ProcessStep
                                    num="02"
                                    title="System Scaffolding"
                                    desc="We deploy our proprietary SEO and AdTech frameworks as a primary layer on your root domain."
                                    delay={0.2}
                                />
                                <ProcessStep
                                    num="03"
                                    title="Algorithmic Pulse"
                                    desc="Continuous system tuning based on real-time data ingestion and behavior modeling."
                                    delay={0.3}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-8">
                            <FadeIn delay={0.2}>
                                <div className="p-12 bg-surface-dark border border-white/5 rounded-card relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 bg-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">Lead Magnet Concept</div>
                                    <h4 className="text-2xl font-black mb-4">The v2.0 Growth PDF</h4>
                                    <p className="text-slate-400 text-sm mb-8">Download our 40-page blueprint on building 'Zero-Friction' institutional growth engines.</p>
                                    <button className="px-8 py-4 bg-white text-surface-dark font-black uppercase text-[10px] tracking-widest rounded-button hover:bg-primary hover:text-white transition-all">
                                        Access Framework PDF
                                    </button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anti-Persona (Authority Builder) */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center border-t border-white/5 pt-24">
                    <FadeIn>
                        <h3 className="text-xl font-black uppercase tracking-widest mb-12">Who This is NOT For.</h3>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <FadeIn delay={0.1}>
                            <div className="space-y-2 opacity-60">
                                <h5 className="font-bold text-xs uppercase text-slate-500">Short-term Hype Seekers</h5>
                                <p className="text-sm leading-relaxed">If you are looking for rapid, unsustainable vanity metrics without building infrastructure, we are not the right fit.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="space-y-2 opacity-60">
                                <h5 className="font-bold text-xs uppercase text-slate-500">Fragmented Teams</h5>
                                <p className="text-sm leading-relaxed">Our model requires high-level coordination and institutional readiness to deploy integrated systems.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProcessStep({ num, title, desc, delay }: any) {
    return (
        <FadeIn delay={delay} className="w-full">
            <div className="flex gap-6 group">
                <span className="text-2xl font-black text-primary leading-none">{num}</span>
                <div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
            </div>
        </FadeIn>
    )
}

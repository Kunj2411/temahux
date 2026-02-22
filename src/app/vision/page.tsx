import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* Hero: Institutional Engineering */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
                            The Decade Ahead
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12 tracking-tighter max-w-4xl">
                            Engineering <br />
                            Institutional <br />
                            <span className="text-primary italic">Infrastructure.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12">
                            Temahux exists to bridge the widening gap between traditional institutional operations and the speed of digital intelligence. We don't just solve problems; we build the scaffolds for the next 10 years of scale.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Infrastructure Gap */}
            <section className="py-24 px-6 border-y border-white/5 bg-surface-base/10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">The <br /> Infrastructure Gap.</h2>
                            <div className="space-y-8">
                                <p className="text-slate-400">Most institutions today operate on fragmented software layers that weren't designed to talk to each other. This creates 'Operational Entropy'—where every new feature adds more friction than value.</p>
                                <p className="text-slate-400 text-sm italic border-l-2 border-primary pl-6">"Scaling is not about adding more; it's about removing the bottlenecks that prevent more from happening. We build the vacuum that pulls growth forward."</p>
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
            </section>

            {/* Roadmap Timeline */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-20 text-center">Development Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-[120px] left-0 right-0 h-px bg-white/5 -z-0"></div>

                        <TimelineStep
                            title="Pilot Foundations"
                            time="Now — Q3 2026"
                            desc="Deploying core University OS modules with founding pilot institutions. Refining the AI Assessment Layer."
                            status="Active"
                            delay={0.1}
                        />
                        <TimelineStep
                            title="Ecosystem Integration"
                            time="Q4 2026 — Q2 2027"
                            desc="Connecting the Growth Frameworks with API-first product modules. Launching the unified Student Dashboard."
                            status="Scheduled"
                            delay={0.2}
                        />
                        <TimelineStep
                            title="Institutional Scale"
                            time="2027 & Beyond"
                            desc="Global deployment of the Temahux OS. Standardizing AI-driven institutional grading and certification."
                            status="Vision"
                            delay={0.3}
                        />
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

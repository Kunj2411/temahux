import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* Hero: Strategic Infrastructure */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
                            B2B Hybrid Growth
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
                            Growth <br />
                            <span className="text-primary italic">Infrastructure.</span>
                        </h1>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <FadeIn delay={0.2} className="max-w-2xl">
                            <div>
                                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
                                    We build the high-performance digital engines that enable scale-ready firms to capture global equity. Our services are framework-driven, not execution-led.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/services/framework" className="px-10 py-5 bg-white text-surface-dark font-black uppercase text-xs tracking-widest rounded-button hover:bg-primary hover:text-white transition-all shadow-2xl">
                                        Explore Frameworks
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="p-8 border border-white/5 bg-surface-base/30 rounded-card">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Availability</h4>
                                <p className="text-sm text-slate-400">Now accepting 2 strategic partners for Q3 2026. Focus: High-ticket B2B & Institutional Software.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Abstract Geometry */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-0"></div>
            </section>

            {/* Services Overview */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-16">The Growth Triad</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ServiceColumn
                            title="SEO Architecture"
                            desc="Programmatic content systems that transform search intent into high-value equity. Built for longevity."
                            delay={0.1}
                        />
                        <ServiceColumn
                            title="Paid Performance"
                            desc="Algorithmic bidding engines and performance creative frameworks that treat ad-spend as an investment asset."
                            delay={0.2}
                        />
                        <ServiceColumn
                            title="Conversion OS"
                            desc="Designing the behavior-based ecosystems that move users from initial intent to high-ticket conversion."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceColumn({ title, desc, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div className="space-y-6">
                <div className="size-1 w-12 bg-primary"></div>
                <h3 className="text-2xl font-black tracking-tight uppercase">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </FadeIn>
    )
}

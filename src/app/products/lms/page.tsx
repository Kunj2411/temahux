import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function LMSPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white font-body selection:bg-lavender">
            <Navbar />

            {/* Hero: Modular LMS */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn scale={0.9} className="size-16 bg-lavender/20 rounded-2xl mb-8 flex items-center justify-center border border-lavender/30 shadow-2xl">
                        <span className="text-lavender font-black text-2xl">L</span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] max-w-4xl">
                            T-Learn <br />
                            <span className="text-lavender italic">LMS.</span>
                        </h1>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <FadeIn delay={0.2} className="max-w-2xl">
                            <div>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    A high-intensity Learning Management System designed for modern skill engineering. T-Learn focus on productivity, behavioral tracking, and milestone-based certification.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-black uppercase tracking-widest text-lavender">System Status: Beta</span>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <button className="px-10 py-5 bg-lavender/10 border border-lavender/30 text-lavender font-black uppercase text-xs tracking-widest rounded-button hover:bg-lavender hover:text-white transition-all">
                                Access Pilot Specs
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-24 px-6 border-y border-white/5 bg-surface-base/20">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-widest mb-12">The LMS Friction Problem</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">Traditional LMS platforms were built for content storage. T-Learn is built for **Performance Delivery**. We replace static course-taking with an interactive 'Skaffold' model that tracks actual skill acquisition, not just video watch-time.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Integration Capabilities */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    <FeatureBlock
                        title="Skaffold Logic"
                        desc="Content is unlocked based on behavior and successful assessment, ensuring a true vertical ladder of skill progression."
                        delay={0.1}
                    />
                    <FeatureBlock
                        title="AI Critique Host"
                        desc="Integrated with Paper Checking AI to provide real-time feedback within the learning flow."
                        delay={0.2}
                    />
                    <FeatureBlock
                        title="Career Connect"
                        desc="Direct talent pipeline mapping for corporate partners looking for certified graduates."
                        delay={0.3}
                    />
                </div>
            </section>
        </div>
    );
}

function FeatureBlock({ title, desc, delay }: any) {
    return (
        <FadeIn delay={delay} className="h-full">
            <div className="p-10 border border-white/5 rounded-card bg-surface-base/10 group hover:border-lavender transition-all h-full">
                <h4 className="text-lg font-black mb-4 uppercase tracking-tight group-hover:text-lavender transition-colors">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </FadeIn>
    )
}

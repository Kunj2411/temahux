import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function PaperCheckingAIPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white font-body selection:bg-primary">
            <Navbar />

            {/* Hero: Intelligent Assessment */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">
                            Intelligent Assessment Layer
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] max-w-4xl">
                            AI Grading <br />
                            <span className="text-primary italic">Engine.</span>
                        </h1>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <FadeIn delay={0.2} className="max-w-2xl">
                            <div>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    An integrated LLM-driven assessment engine that automates complex grading while preserving academic integrity. Designed to reduce grading latency by 90% for pilot institutions.
                                </p>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-8 border-l border-primary pl-4">
                                    "Accuracy is the benchmark. Integrity is the requirement."
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <button className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all shadow-xl shadow-primary/20">
                                Inquire for Pilot
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Integration Capabilities */}
            <section className="py-24 px-6 bg-surface-base/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-16">Ecosystem Integration</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 gap-12">
                        <FadeIn delay={0.1}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-dark h-full">
                                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">University OS Sync</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">Direct connection to student records. Grades and feedback loops are automatically pushed to the Faculty Hub for final validation.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="p-10 border border-white/5 rounded-card bg-surface-dark h-full">
                                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">LMS Interconnect</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">Built for Canvas, Moodle, and T-Learn LMS. Modular endpoints for seamless injection into existing course lifecycles.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Integrity Guards */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-8">Role-Based Integrity</h3>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <FadeIn delay={0.1}>
                            <div>
                                <h5 className="text-accent font-black text-xs uppercase mb-2">Admin View</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Global integrity metrics, batch processing overrides, and rubric calibration.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div>
                                <h5 className="text-accent font-black text-xs uppercase mb-2">Faculty View</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Human-in-the-loop validation, AI feedback tuning, and student performance insights.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div>
                                <h5 className="text-accent font-black text-xs uppercase mb-2">Student View</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Real-time feedback, interactive critique, and structured improvement paths.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}

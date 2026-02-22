import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-surface-light text-surface-dark selection:bg-lavender">
            <Navbar />

            {/* Hero: Skill Engine */}
            <section className="pt-40 pb-20 px-6 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <FadeIn direction="right">
                            <div>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">
                                    Institutional Talent Engine
                                </span>
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] max-w-2xl">
                                    Master the <br />
                                    Digital <span className="text-primary italic">Scaffold.</span>
                                </h1>
                                <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                                    Structured certification tracks designed for the architects of the next digital decade. We replace course-taking with high-intensity skill engineering.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/academy/track-structure" className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-surface-dark transition-all shadow-xl text-center">
                                        Explore Model
                                    </Link>
                                    <div className="p-4 bg-slate-50 border border-slate-100 rounded">
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Status</span>
                                        <span className="text-primary font-bold text-xs">Launching Cohort 01 (Founding Batch)</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2} className="flex-1">
                        <div className="bg-slate-50 border border-slate-200 p-12 rounded-card h-full">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">The Academy Vision</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">"Most graduates are trained for yesterday's interfaces. Our Academy is built to produce the architects who will build tomorrow's infrastructures."</p>
                            <div className="space-y-4">
                                <span className="block text-[9px] font-black uppercase text-slate-400">Certification Tracks</span>
                                <ul className="text-xs font-bold space-y-2">
                                    <li className="flex items-center gap-2"><div className="size-1.5 bg-primary rounded-full"></div> Growth Architect</li>
                                    <li className="flex items-center gap-2"><div className="size-1.5 bg-primary rounded-full"></div> SaaS Product Strategist</li>
                                    <li className="flex items-center gap-2"><div className="size-1.5 bg-primary rounded-full"></div> AI Systems Engineer</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Progression Sections */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-16">The Progression Model</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <ProgressionCard
                            level="Foundation"
                            title="Skill Integration"
                            desc="Mastering the core scaffolds of digital architecture and system design logic."
                            delay={0.1}
                        />
                        <ProgressionCard
                            level="Core"
                            title="Vertical Specialization"
                            desc="Deep-diving into specific domains: Growth Infrastructure, SaaS Hubs, or AI Engines."
                            delay={0.2}
                        />
                        <ProgressionCard
                            level="Elite"
                            title="Capstone Deployment"
                            desc="Deploying real-world systems for institutional partners in our Pilot Program."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProgressionCard({ level, title, desc, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div className="bg-white p-10 border border-slate-200 rounded-card group hover:border-primary transition-all h-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block mb-4">{level}</span>
                <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
        </FadeIn>
    )
}

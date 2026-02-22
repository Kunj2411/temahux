import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white font-body selection:bg-primary">
            <Navbar />

            {/* Hero: Authority & Mission */}
            <section className="pt-40 pb-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
                                Bridging Human <br className="hidden md:block" />
                                Strategy with <br className="hidden md:block" />
                                <span className="text-primary italic">Automated Scale.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-400 leading-relaxed">
                                Temahux is a category-defining hybrid platform.
                                We build the digital infrastructure that enables institutional growth through SaaS,
                                Strategic Services, and Career Acceleration.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Values / Philosophy */}
            <section className="py-24 px-6 bg-surface-base/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
                    <ValueItem
                        title="System-Driven"
                        description="We don't believe in ad-hoc solutions. Everything we build is part of a scalable, future-proof ecosystem."
                        delay={0.1}
                    />
                    <ValueItem
                        title="Intelligence First"
                        description="Our AI engines aren't add-ons; they are the core assessment and automation layers of our infrastructure."
                        delay={0.2}
                    />
                    <ValueItem
                        title="Venture Mindset"
                        description="We architect for hyper-scale. Whether it's a student's career or a university's OS, we build for growth."
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Stats / Proof Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-12 justify-between">
                    <StatItem label="Entities Managed" value="12M+" delay={0.1} />
                    <StatItem label="AI Assessments" value="450k" delay={0.2} />
                    <StatItem label="Growth Partners" value="85+" delay={0.3} />
                    <StatItem label="Deployments" value="Global" delay={0.4} />
                </div>
            </section>
        </div>
    );
}

function ValueItem({ title, description, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div>
                <div className="size-1 w-12 bg-primary mb-6"></div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
        </FadeIn>
    )
}

function StatItem({ label, value, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div>
                <span className="block text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">{value}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{label}</span>
            </div>
        </FadeIn>
    )
}

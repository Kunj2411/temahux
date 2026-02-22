import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white">
            <Navbar />

            {/* Hero: Institutional Infrastructure */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn direction="right">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                                Next-Gen <br />
                                <span className="text-trust">Institutional OS.</span>
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Standalone SaaS ecosystems designed for complex institutions.
                                Built for high-volume data, AI-driven automation, and total security compliance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Product Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <FadeIn delay={0.1}>
                        <ProductCard
                            title="University OS"
                            subtitle="Core Institutional Management"
                            description="A unified operating system for academic operations, student lifecycle, and resource planning."
                            href="/products/university-os"
                            tags={["ERP", "Automation", "Security"]}
                        />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <ProductCard
                            title="Paper Checking AI"
                            subtitle="LLM-Driven Grading Engine"
                            description="Proprietary AI engine that automates grading while maintaining rigorous academic integrity."
                            href="/products/paper-checking-ai"
                            tags={["AI Hub", "Compliance", "API-Ready"]}
                        />
                    </FadeIn>
                </div>
            </section>

            {/* API Ready Section */}
            <section className="py-24 px-6 bg-surface-base/20 border-y border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <FadeIn className="max-w-xl">
                        <div>
                            <h2 className="text-3xl font-black mb-4 uppercase tracking-widest">Enterprise Ready. API First.</h2>
                            <p className="text-slate-400 text-sm">Every product includes a robust GraphQL API and webhooks for seamless integration with existing institutional legacy systems.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <button className="px-8 py-4 bg-trust text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-primary transition-all">
                            Access Documentation
                        </button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

function ProductCard({ title, subtitle, description, href, tags }: any) {
    return (
        <Link href={href} className="group flex flex-col bg-surface-base/30 border border-white/5 rounded-card p-12 hover:border-trust transition-all h-full">
            <div className="flex justify-between items-start mb-12">
                <div className="flex gap-2">
                    {tags.map((tag: any) => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="size-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-trust group-hover:border-trust transition-all">
                    →
                </div>
            </div>
            <div className="mt-auto">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-trust mb-2">{subtitle}</h4>
                <h3 className="text-3xl lg:text-4xl font-black mb-4">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{description}</p>
            </div>
        </Link>
    )
}

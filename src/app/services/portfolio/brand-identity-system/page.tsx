import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Identity System Case Study - Temahux",
    description: "Complete brand identity including logo, color palette, and visual guidelines created by Temahux.",
};

export default function BrandIdentityCaseStudy() {
    return (
        <div className="min-h-screen bg-surface-dark text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <Link href="/services/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Portfolio
                        </Link>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-6">
                        Branding
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Brand Identity System
                    </h1>
                    
                    <p className="text-xl text-slate-400 leading-relaxed">
                        A comprehensive brand identity system including logo design, color palette, typography, and complete visual guidelines for consistent brand communication.
                    </p>
                </div>
                
                <div className="max-w-6xl mx-auto mt-12">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-surface-base rounded-2xl border border-white/5 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-32 h-32 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Problem */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">The Challenge</h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                        Client <span className="text-primary">Problem</span>
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        A fast-growing startup needed a professional brand identity to establish credibility and stand out in a competitive market. They faced:
                    </p>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Inconsistent visual identity across platforms
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Generic logo that didn't reflect their values
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Lack of brand guidelines for team members
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Poor brand recognition in their target market
                        </li>
                    </ul>
                </div>
            </section>

            {/* Our Solution */}
            <section className="py-20 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">What We Built</h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                        Our <span className="text-primary">Solution</span>
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Temahux created a complete brand identity system that captures the essence of their business:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Custom Logo Design</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Modern, memorable logo with multiple variations for different use cases.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Color System</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Strategic color palette that evokes trust and professionalism.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Typography Guidelines</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Carefully selected fonts for headings, body text, and UI elements.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Brand Guidelines</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Comprehensive 40-page brand book with usage examples and dos/don'ts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Used */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Tools</h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                        Design <span className="text-primary">Tools</span>
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Brand Guidelines'].map((tech) => (
                            <div key={tech} className="px-6 py-3 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all">
                                <span className="font-bold text-white">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Impact</h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                        The <span className="text-primary">Results</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">85%</div>
                            <p className="text-slate-400">Improved brand recognition</p>
                        </div>
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">3x</div>
                            <p className="text-slate-400">Increase in social media engagement</p>
                        </div>
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">100%</div>
                            <p className="text-slate-400">Brand consistency across channels</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">Gallery</h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-12 text-center">
                        Brand <span className="text-primary">Assets</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-video bg-gradient-to-br from-accent/10 to-surface-base rounded-2xl border border-white/5 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-slate-600 text-lg font-bold">Brand Asset {item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        Need a <span className="text-primary">brand identity?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Let Temahux create a memorable brand that stands out.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-[#5a2ef5] transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                        <Link 
                            href="/services/portfolio" 
                            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all duration-300"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

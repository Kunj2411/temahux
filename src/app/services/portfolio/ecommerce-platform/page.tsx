import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Commerce Platform Case Study - Temahux",
    description: "Full-featured online store with payment integration and inventory management built by Temahux.",
};

export default function EcommercePlatformCaseStudy() {
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
                    
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-6">
                        Web Development
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        E-Commerce Platform
                    </h1>
                    
                    <p className="text-xl text-slate-400 leading-relaxed">
                        A modern, full-featured online store with seamless payment integration, real-time inventory management, and optimized checkout experience.
                    </p>
                </div>
                
                {/* Hero Image Placeholder */}
                <div className="max-w-6xl mx-auto mt-12">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-surface-base rounded-2xl border border-white/5 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-32 h-32 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Problem */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                        The Challenge
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                        Client <span className="text-primary">Problem</span>
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Our client, a growing retail business, was struggling with an outdated e-commerce platform that couldn't handle their expanding product catalog and increasing customer base. Their existing system had:
                    </p>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Slow page load times leading to 40% cart abandonment rate
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Manual inventory management causing stock discrepancies
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Limited payment options reducing conversion rates
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Poor mobile experience affecting 60% of their traffic
                        </li>
                    </ul>
                </div>
            </section>

            {/* Our Solution */}
            <section className="py-20 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                        What We Built
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                        Our <span className="text-primary">Solution</span>
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Temahux designed and developed a modern, scalable e-commerce platform from the ground up. Our solution included:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Lightning-Fast Performance</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Built with Next.js 14 for optimal speed, SEO, and user experience. Pages load in under 1 second.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Real-Time Inventory</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Automated inventory tracking with low-stock alerts and seamless supplier integration.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Multiple Payment Options</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Integrated Stripe, PayPal, and UPI for maximum payment flexibility and security.
                            </p>
                        </div>
                        <div className="p-6 bg-surface-dark border border-white/5 rounded-2xl">
                            <h4 className="text-xl font-black text-white mb-3">Mobile-First Design</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Responsive design optimized for all devices with touch-friendly interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Used */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                        Tech Stack
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                        Technologies <span className="text-primary">Used</span>
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Shopify APIs', 'PostgreSQL', 'Vercel'].map((tech) => (
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
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                        Impact
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                        The <span className="text-primary">Results</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">40%</div>
                            <p className="text-slate-400">Increase in sales within 3 months</p>
                        </div>
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">65%</div>
                            <p className="text-slate-400">Reduction in cart abandonment</p>
                        </div>
                        <div className="text-center p-8 bg-surface-dark border border-white/5 rounded-2xl">
                            <div className="text-5xl font-black text-primary mb-3">2.5x</div>
                            <p className="text-slate-400">Faster page load times</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
                        Gallery
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-12 text-center">
                        Project <span className="text-primary">Screenshots</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-video bg-gradient-to-br from-primary/10 to-surface-base rounded-2xl border border-white/5 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-slate-600 text-lg font-bold">Screenshot {item}</span>
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
                        Ready to build your <span className="text-primary">e-commerce platform?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Let's discuss how Temahux can help you grow your online business.
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

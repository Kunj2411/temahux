"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Layers, CreditCard, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPageClient() {
    return (
        <div className="min-h-screen bg-surface-dark text-white">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="pt-40 pb-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Tagline */}
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block animate-fade-in">
                            Digital Growth Services
                        </span>
                        
                        {/* Hero Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight animate-fade-in-up">
                            Digital Growth Services <br />
                            for <span className="text-primary">Modern Businesses</span>
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Temahux helps businesses grow through websites, branding, digital marketing, and AI automation.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <a 
                                href="#consultation" 
                                className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-[#5a2ef5] transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
                            >
                                Start Project
                            </a>
                            <a 
                                href="#pricing" 
                                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all duration-300"
                            >
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Futuristic Tech Grid Background */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* Primary glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
                    
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(68,12,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(68,12,227,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    
                    {/* Accent dots */}
                    <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-32 left-40 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Diagonal lines */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
                </div>
            </section>

            {/* 2. SERVICE CATEGORIES */}
            <section id="service-categories" className="py-24 px-6 border-t border-white/5 scroll-mt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Our Services
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight">
                            What We <span className="text-primary">Offer</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Web Development */}
                        <Link href="/services/web-development" className="group">
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                    Web Development
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Business websites, landing pages and e-commerce stores.
                                </p>
                                <div className="text-primary font-black text-lg mb-6">
                                    Starting ₹3,000+
                                </div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    View Details
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Social Media Management */}
                        <Link href="/services/social-media-management" className="group">
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                    Social Media Management
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Strategic social media presence that drives engagement and growth.
                                </p>
                                <div className="text-primary font-black text-lg mb-6">
                                    Starting ₹5,000/mo
                                </div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    View Details
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Branding & Design */}
                        <Link href="/services/branding-design" className="group">
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                    Branding & Design
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Distinctive brand identities from logos to complete visual systems.
                                </p>
                                <div className="text-primary font-black text-lg mb-6">
                                    Starting ₹8,000+
                                </div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    View Details
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Digital Marketing */}
                        <Link href="/services/digital-marketing" className="group">
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                    Digital Marketing
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Data-driven marketing campaigns across SEO, paid ads, and email.
                                </p>
                                <div className="text-primary font-black text-lg mb-6">
                                    Starting ₹10,000/mo
                                </div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    View Details
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* AI Automation */}
                        <Link href="/services/ai-automation" className="group">
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                    AI Automation
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Intelligent automation solutions that streamline operations.
                                </p>
                                <div className="text-primary font-black text-lg mb-6">
                                    Starting ₹15,000+
                                </div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    View Details
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. PRICING PREVIEW */}
            <section id="pricing" className="py-24 px-6 border-t border-white/5 bg-surface-base/10 scroll-mt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Pricing
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight">
                            Simple, <span className="text-primary">Transparent</span> Pricing
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Website */}
                        <div className="p-8 bg-surface-dark border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                            <h3 className="text-xl font-black mb-2 text-white">Starter Website</h3>
                            <div className="text-5xl font-black text-primary mb-6">₹3,000</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-6">Includes:</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    3 pages
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Mobile responsive
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Contact form
                                </li>
                            </ul>
                            <Link href="/services/pricing" className="block w-full px-6 py-4 bg-primary/10 border border-primary/20 rounded-button text-center text-primary font-bold hover:bg-primary hover:text-white transition-all group-hover:scale-105">
                                View Full Pricing
                            </Link>
                        </div>

                        {/* Business Website - Featured */}
                        <div className="p-8 bg-surface-dark border-2 border-primary/50 rounded-2xl hover:border-primary transition-all duration-300 group relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-white text-xs font-black uppercase tracking-wider">
                                Popular
                            </div>
                            <h3 className="text-xl font-black mb-2 text-white">Business Website</h3>
                            <div className="text-5xl font-black text-primary mb-6">₹6,000</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-6">Includes:</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    5 pages
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    SEO setup
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Google Analytics
                                </li>
                            </ul>
                            <Link href="/services/pricing" className="block w-full px-6 py-4 bg-primary rounded-button text-center text-white font-bold hover:bg-[#5a2ef5] transition-all group-hover:scale-105 shadow-lg shadow-primary/30">
                                View Full Pricing
                            </Link>
                        </div>

                        {/* E-Commerce Store */}
                        <div className="p-8 bg-surface-dark border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                            <h3 className="text-xl font-black mb-2 text-white">E-Commerce Store</h3>
                            <div className="text-5xl font-black text-primary mb-6">₹12,000+</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-6">Includes:</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Product catalog
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Payment gateway
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Order management
                                </li>
                            </ul>
                            <Link href="/services/pricing" className="block w-full px-6 py-4 bg-primary/10 border border-primary/20 rounded-button text-center text-primary font-bold hover:bg-primary hover:text-white transition-all group-hover:scale-105">
                                View Full Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PORTFOLIO PREVIEW */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Our Work
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                            Recent <span className="text-primary">Projects</span>
                        </p>
                        <p className="text-lg text-slate-400 max-w-3xl">
                            See how Temahux helps businesses grow through design, development, marketing, and AI automation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1: E-Commerce Platform */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group"
                        >
                            <Link href="/services/portfolio/ecommerce-platform" className="block">
                                <div className="relative bg-surface-base/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-surface-base overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-primary/40 group-hover:text-primary/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-4">
                                            Web Development
                                        </span>
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                            E-Commerce Platform
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Full-featured online store with payment integration and inventory management.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                            <span>View Case Study</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Project 2: Brand Identity System */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group"
                        >
                            <Link href="/services/portfolio/brand-identity-system" className="block">
                                <div className="relative bg-surface-base/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-surface-base overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-accent/40 group-hover:text-accent/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-4">
                                            Branding
                                        </span>
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                            Brand Identity System
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Complete brand identity including logo, color palette, and visual guidelines.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                            <span>View Case Study</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Project 3: Social Media Campaign */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="group"
                        >
                            <Link href="/services/portfolio/social-media-campaign" className="block">
                                <div className="relative bg-surface-base/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-trust/20 to-surface-base overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-trust/40 group-hover:text-trust/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-trust/10 border border-trust/20 rounded-full text-xs font-bold uppercase tracking-wider text-trust mb-4">
                                            Marketing
                                        </span>
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                            Social Media Campaign
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Multi-platform campaign increasing engagement and conversions.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                            <span>View Case Study</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Project 4: AI Chatbot Integration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="group"
                        >
                            <Link href="/services/portfolio/ai-chatbot-integration" className="block">
                                <div className="relative bg-surface-base/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-lavender/20 to-surface-base overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-lavender/40 group-hover:text-lavender/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-lavender/10 border border-lavender/20 rounded-full text-xs font-bold uppercase tracking-wider text-lavender mb-4">
                                            AI Automation
                                        </span>
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                            AI Chatbot Integration
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Automated customer support system handling inquiries instantly.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                            <span>View Case Study</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    
                    {/* View Full Portfolio Button */}
                    <div className="mt-12 text-center">
                        <Link 
                            href="/services/portfolio" 
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-button text-white font-bold hover:bg-white hover:text-surface-dark transition-all hover:scale-105"
                        >
                            View Full Portfolio
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS SECTION */}
            <section className="py-24 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            How It Works
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight">
                            Our <span className="text-primary">Process</span>
                        </p>
                    </div>
                    
                    {/* Desktop: Horizontal Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>
                            
                            <div className="grid grid-cols-5 gap-4">
                                {/* Step 1: Consultation */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-dark border-2 border-primary rounded-2xl flex items-center justify-center relative z-10">
                                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm z-20">
                                        1
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-white">Consultation</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">We discuss your goals, challenges, and vision for success.</p>
                                </div>

                                {/* Step 2: Strategy */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative z-10">
                                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm z-20">
                                        2
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-white">Strategy</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">We create a detailed plan tailored to your business needs.</p>
                                </div>

                                {/* Step 3: Development */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative z-10">
                                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm z-20">
                                        3
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-white">Development</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">Our team builds your solution with precision and quality.</p>
                                </div>

                                {/* Step 4: Launch */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative z-10">
                                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm z-20">
                                        4
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-white">Launch</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">We deploy your project and ensure everything runs smoothly.</p>
                                </div>

                                {/* Step 5: Support */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative z-10">
                                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm z-20">
                                        5
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-white">Support</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">Ongoing maintenance and support to keep you growing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet: Vertical Steps */}
                    <div className="lg:hidden space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-surface-dark border-2 border-primary rounded-2xl flex items-center justify-center relative">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-black mb-2 text-white">Consultation</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">We discuss your goals, challenges, and vision for success.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-black mb-2 text-white">Strategy</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">We create a detailed plan tailored to your business needs.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                                        3
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-black mb-2 text-white">Development</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">Our team builds your solution with precision and quality.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                                        4
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-black mb-2 text-white">Launch</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">We deploy your project and ensure everything runs smoothly.</p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-surface-dark border-2 border-primary/50 rounded-2xl flex items-center justify-center relative">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                                        5
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-black mb-2 text-white">Support</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">Ongoing maintenance and support to keep you growing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TRUST SIGNALS */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight">
                            Trusted by <span className="text-primary">Businesses</span>
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Projects Completed */}
                        <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl text-center hover:border-primary/30 transition-all">
                            <div className="text-6xl font-black text-primary mb-4">50+</div>
                            <h3 className="text-xl font-black text-white mb-2">Projects Completed</h3>
                            <p className="text-slate-400 text-sm">Successfully delivered across multiple industries</p>
                        </div>

                        {/* Industries Served */}
                        <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl text-center hover:border-primary/30 transition-all">
                            <div className="text-6xl font-black text-primary mb-4">15+</div>
                            <h3 className="text-xl font-black text-white mb-2">Industries Served</h3>
                            <p className="text-slate-400 text-sm">From e-commerce to healthcare and education</p>
                        </div>

                        {/* Client Satisfaction */}
                        <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl text-center hover:border-primary/30 transition-all">
                            <div className="text-6xl font-black text-primary mb-4">98%</div>
                            <h3 className="text-xl font-black text-white mb-2">Client Satisfaction</h3>
                            <p className="text-slate-400 text-sm">Clients rate our service as excellent</p>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-black text-center mb-8 text-white">
                            Technologies We <span className="text-primary">Master</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* React */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
                                    </svg>
                                    <span className="font-bold text-white">React</span>
                                </div>
                            </div>

                            {/* Next.js */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                                    </svg>
                                    <span className="font-bold text-white">Next.js</span>
                                </div>
                            </div>

                            {/* WordPress */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                                    </svg>
                                    <span className="font-bold text-white">WordPress</span>
                                </div>
                            </div>

                            {/* Shopify */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.337 23.979c-.265 0-.531-.062-.763-.185l-2.688-1.433c-.344-.188-.594-.656-.594-1.094V8.697c0-.281.156-.547.406-.719l2.875-1.875c.438-.281 1.063-.281 1.5 0l2.875 1.875c.25.172.406.438.406.719v12.57c0 .438-.25.906-.594 1.094l-2.688 1.433c-.234.123-.5.185-.735.185zm-2.188-3.297l1.875 1 1.875-1V9.635l-1.875-1.219-1.875 1.219v11.047z"/>
                                        <path d="M20.817 23.979c-.266 0-.532-.062-.766-.185l-2.687-1.433c-.344-.188-.594-.656-.594-1.094V8.697c0-.281.156-.547.406-.719l2.875-1.875c.438-.281 1.063-.281 1.5 0l2.875 1.875c.25.172.406.438.406.719v12.57c0 .438-.25.906-.594 1.094l-2.687 1.433c-.235.123-.5.185-.735.185zm-2.187-3.297l1.875 1 1.875-1V9.635l-1.875-1.219-1.875 1.219v11.047z"/>
                                    </svg>
                                    <span className="font-bold text-white">Shopify</span>
                                </div>
                            </div>

                            {/* AI APIs */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span className="font-bold text-white">AI APIs</span>
                                </div>
                            </div>

                            {/* Node.js */}
                            <div className="px-6 py-4 bg-surface-base/30 border border-white/5 rounded-button hover:border-primary/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                                    </svg>
                                    <span className="font-bold text-white">Node.js</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Testimonials */}
                    <div>
                        <h3 className="text-2xl font-black text-center mb-8 text-white">
                            What Our <span className="text-primary">Clients Say</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Testimonial 1 */}
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 leading-relaxed italic">
                                    "Temahux transformed our online presence. The website they built is fast, beautiful, and has significantly increased our conversions."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                        <span className="text-primary font-black text-lg">GJ</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Gayatri Joshi</p>
                                        <p className="text-sm text-slate-400">Teacher, Tution Classes</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 leading-relaxed italic">
                                    "Professional, responsive, and delivered exactly what we needed. Their AI automation saved us countless hours every week."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                        <span className="text-primary font-black text-lg">GR</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Gautam Rajgor</p>
                                        <p className="text-sm text-slate-400">Founder, Geetanjali-HR-Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SERVICE NAVIGATION + CONVERSION */}
            <section className="py-24 px-6 border-t border-white/5 bg-surface-base/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Next Steps
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                            Choose Your <span className="text-primary">Service Path</span>
                        </p>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Explore our services and find the right solution to grow your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: Explore Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <a 
                                href="#service-categories"
                                className="block h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300"
                                aria-label="Explore all digital services offered by Temahux"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <Layers className="w-7 h-7 text-primary" strokeWidth={2} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        Explore Services
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        See all digital services offered by Temahux including websites, branding, marketing and AI automation.
                                    </p>
                                    
                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>View Services</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        {/* Card 2: View Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <Link 
                                href="/services/pricing"
                                className="block h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300"
                                aria-label="View transparent pricing packages"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <CreditCard className="w-7 h-7 text-primary" strokeWidth={2} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        View Pricing
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        Transparent pricing packages designed for startups, businesses, and growing brands.
                                    </p>
                                    
                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>See Pricing</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 3: See Our Work */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <Link 
                                href="/services/portfolio"
                                className="block h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300"
                                aria-label="View portfolio of recent projects"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <Briefcase className="w-7 h-7 text-primary" strokeWidth={2} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        See Our Work
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        Explore recent projects and see how we helped businesses grow online.
                                    </p>
                                    
                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>View Portfolio</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 4: Start Your Project */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <a 
                                href="#consultation"
                                className="block h-full p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300"
                                aria-label="Book a free consultation"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <Rocket className="w-7 h-7 text-primary" strokeWidth={2} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        Start Your Project
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        Book a free consultation and let's discuss how Temahux can help you grow.
                                    </p>
                                    
                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>Free Consultation</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="consultation" className="py-24 px-6 border-t border-white/5 scroll-mt-32">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                            FAQ
                        </h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ 1 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    How long does a website project take?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    A typical website project takes 2-4 weeks from start to launch. The timeline depends on the complexity and scope of your project. 
                                    Starter websites (3 pages) usually take 1-2 weeks, while business websites (5+ pages) take 2-3 weeks. 
                                    E-commerce stores with custom features may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
                                </p>
                            </div>
                        </details>

                        {/* FAQ 2 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    Do you provide hosting services?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    Yes, we provide hosting assistance and can help you set up reliable hosting with providers like Vercel, Netlify, or traditional hosting services. 
                                    We'll guide you through the setup process and ensure your website is properly configured for optimal performance and security. 
                                    Hosting costs are separate and typically range from ₹500-2,000 per month depending on your needs.
                                </p>
                            </div>
                        </details>

                        {/* FAQ 3 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    Can you manage social media monthly?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    Absolutely! Our <Link href="/services/social-media-management" className="text-primary hover:underline">social media management service</Link> starts at ₹5,000/month 
                                    and includes 20 posts, caption writing, hashtag strategy, profile optimization, and monthly analytics. 
                                    We handle Instagram, Facebook, LinkedIn, and Twitter. Custom packages are available for businesses with specific needs or higher posting frequencies.
                                </p>
                            </div>
                        </details>

                        {/* FAQ 4 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    Do you offer AI automation services?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    Yes! Our <Link href="/services/ai-automation" className="text-primary hover:underline">AI automation services</Link> start at ₹15,000 
                                    and include AI chatbots, WhatsApp automation, lead capture systems, AI content assistants, and custom integrations. 
                                    We use cutting-edge AI technologies to streamline your business operations, reduce manual work, and improve customer experience. 
                                    Each solution is customized to your specific business needs and workflows.
                                </p>
                            </div>
                        </details>

                        {/* FAQ 5 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    What payment methods do you accept?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    We accept bank transfers, UPI, credit/debit cards, and online payment platforms. 
                                    For most projects, we require a 50% deposit to begin work and the remaining 50% upon completion. 
                                    For monthly services like social media management or digital marketing, we offer flexible payment plans. 
                                    All pricing is transparent with no hidden fees.
                                </p>
                            </div>
                        </details>

                        {/* FAQ 6 */}
                        <details className="group p-6 bg-surface-base/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-black text-white group-open:text-primary transition-colors">
                                    Do you provide ongoing support after project completion?
                                </h3>
                                <svg className="w-6 h-6 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-slate-400 leading-relaxed">
                                    Yes! All our packages include post-launch support. Starter websites include 1 month of support, 
                                    business websites include 3 months, and e-commerce stores include 6 months. 
                                    Support covers bug fixes, minor updates, and technical assistance. 
                                    After the initial support period, we offer affordable maintenance packages to keep your digital assets running smoothly.
                                </p>
                            </div>
                        </details>
                    </div>

                    {/* Still have questions CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-400 mb-6">Still have questions?</p>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/20 rounded-button text-primary font-bold hover:bg-primary hover:text-white transition-all"
                        >
                            Contact Us
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
                        Ready to build your <br />
                        <span className="text-primary">digital infrastructure?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                        Start your project with Temahux today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="px-10 py-5 bg-gradient-to-r from-primary to-[#5a2ef5] text-white font-black uppercase text-xs tracking-widest rounded-button hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                        >
                            Start Project
                        </Link>
                        <Link 
                            href="/services/contact-consultation" 
                            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all duration-300"
                        >
                            Free Consultation
                        </Link>
                    </div>
                </div>
                
                {/* Soft Glow Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Primary glow - center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                    
                    {/* Secondary glows */}
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px]"></div>
                    
                    {/* Subtle grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(68,12,227,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(68,12,227,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
                </div>
            </section>

            {/* Structured Data - JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Temahux Digital Services",
                        "description": "Professional web development, branding, digital marketing, social media management, and AI automation services for modern businesses.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Temahux",
                            "url": "https://temahux.tech"
                        },
                        "areaServed": "IN",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Digital Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Development",
                                        "description": "Business websites, landing pages and e-commerce stores"
                                    },
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "price": "3000",
                                        "priceCurrency": "INR"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Social Media Management",
                                        "description": "Strategic social media presence that drives engagement and growth"
                                    },
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "price": "5000",
                                        "priceCurrency": "INR"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Branding & Design",
                                        "description": "Distinctive brand identities from logos to complete visual systems"
                                    },
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "price": "8000",
                                        "priceCurrency": "INR"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Digital Marketing",
                                        "description": "Data-driven marketing campaigns across SEO, paid ads, and email"
                                    },
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "price": "10000",
                                        "priceCurrency": "INR"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "AI Automation",
                                        "description": "Intelligent automation solutions that streamline operations"
                                    },
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "price": "15000",
                                        "priceCurrency": "INR"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How long does a website project take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A typical website project takes 2-4 weeks from start to launch. Starter websites (3 pages) usually take 1-2 weeks, while business websites (5+ pages) take 2-3 weeks. E-commerce stores with custom features may take 4-6 weeks."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide hosting services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide hosting assistance and can help you set up reliable hosting with providers like Vercel, Netlify, or traditional hosting services. Hosting costs typically range from ₹500-2,000 per month depending on your needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you manage social media monthly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! Our social media management service starts at ₹5,000/month and includes 20 posts, caption writing, hashtag strategy, profile optimization, and monthly analytics. We handle Instagram, Facebook, LinkedIn, and Twitter."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer AI automation services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! Our AI automation services start at ₹15,000 and include AI chatbots, WhatsApp automation, lead capture systems, AI content assistants, and custom integrations using cutting-edge AI technologies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide ongoing support after project completion?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! All our packages include post-launch support. Starter websites include 1 month of support, business websites include 3 months, and e-commerce stores include 6 months. Support covers bug fixes, minor updates, and technical assistance."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}

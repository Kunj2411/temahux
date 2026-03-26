"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
    const pathname = usePathname();
    const isAcademy = pathname?.startsWith("/academy");
    const isServicesPage = pathname === "/services";
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/academy", label: "Academy" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${isAcademy ? 'bg-white/80 border-slate-200' : 'bg-surface-dark/80 border-white/5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                    <div className="group-hover:scale-110 transition-transform">
                        <Logo size={36} showWordmark={false} />
                    </div>
                    <span className={`text-lg sm:text-xl font-black tracking-tighter ${isAcademy ? "text-surface-dark" : "text-white"}`}>
                        TEMAHUX
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className={`hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest ${isAcademy ? "text-slate-500" : "text-slate-400"}`}>
                    <div 
                        className="relative"
                        onMouseEnter={() => isServicesPage && setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                        <Link 
                            href="/services" 
                            className={`hover:text-primary transition-colors ${pathname?.startsWith('/services') ? 'text-primary' : ''}`}
                        >
                            Services
                        </Link>
                        
                        {isServicesPage && (
                            <div 
                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 ${
                                    showServicesDropdown 
                                        ? 'opacity-100 visible translate-y-0' 
                                        : 'opacity-0 invisible -translate-y-2'
                                }`}
                            >
                                <div className="bg-[#151022] border border-white/10 rounded-2xl shadow-2xl p-4 min-w-[200px]">
                                    <div className="flex flex-col gap-2">
                                        <a href="#pricing" className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center">
                                            Pricing
                                        </a>
                                        <a href="#portfolio" className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center">
                                            Portfolio
                                        </a>
                                        <a href="#process" className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center">
                                            Process
                                        </a>
                                        <a href="#consultation" className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-button hover:bg-accent hover:text-surface-dark transition-all text-center">
                                            Start Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {navLinks.filter(l => l.href !== "/services").map(link => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`hover:text-primary transition-colors ${pathname?.startsWith(link.href) ? 'text-primary' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className={`hidden md:block px-6 py-3 rounded-button text-xs font-black uppercase tracking-widest transition-all ${isAcademy ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105' : 'bg-accent text-surface-dark shadow-lg shadow-accent/20 hover:scale-105'}`}
                >
                    Pilot Briefing
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isAcademy ? 'text-surface-dark hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`md:hidden border-t ${isAcademy ? 'bg-white/95 border-slate-200' : 'bg-surface-dark/95 border-white/10'}`}>
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                                    pathname?.startsWith(link.href)
                                        ? 'bg-primary text-white'
                                        : isAcademy
                                            ? 'text-surface-dark hover:bg-slate-100'
                                            : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 mt-4 rounded-lg text-sm font-bold text-center transition-colors ${
                                isAcademy
                                    ? 'bg-primary text-white'
                                    : 'bg-accent text-surface-dark'
                            }`}
                        >
                            Pilot Briefing
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const isAcademy = pathname?.startsWith("/academy");
    const isServicesPage = pathname === "/services";
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${isAcademy ? 'bg-white/80 border-slate-200' : 'bg-surface-dark/80 border-white/5'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-20 rounded-lg overflow-hidden group-hover:rotate-12 transition-transform">
                        <Image 
                            src="/logo.png" 
                            alt="Temahux Logo" 
                            width={128} 
                            height={128}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className={`text-xl font-black tracking-tighter ${isAcademy ? "text-surface-dark" : "text-white"}`}>
                        TEMAHUX
                    </span>
                </Link>

                {/* Vertical Links */}
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
                        
                        {/* Dropdown Navigation - Only shows on Services page */}
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
                                        <a 
                                            href="#pricing" 
                                            className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center"
                                        >
                                            Pricing
                                        </a>
                                        <a 
                                            href="#portfolio" 
                                            className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center"
                                        >
                                            Portfolio
                                        </a>
                                        <a 
                                            href="#process" 
                                            className="px-4 py-2 text-white text-xs font-bold rounded-button hover:bg-primary transition-all text-center"
                                        >
                                            Process
                                        </a>
                                        <a 
                                            href="#consultation" 
                                            className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-button hover:bg-accent hover:text-surface-dark transition-all text-center"
                                        >
                                            Start Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <Link href="/products" className={`hover:text-primary transition-colors ${pathname?.startsWith('/products') ? 'text-primary' : ''}`}>Products</Link>
                    <Link href="/academy" className={`hover:text-primary transition-colors ${pathname?.startsWith('/academy') ? 'text-primary' : ''}`}>Academy</Link>
                    <Link href="/about" className={`hover:text-primary transition-colors ${pathname?.startsWith('/about') ? 'text-primary' : ''}`}>About</Link>
                </div>

                <Link
                    href="/contact"
                    className={`px-6 py-3 rounded-button text-xs font-black uppercase tracking-widest transition-all ${isAcademy ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105' : 'bg-accent text-surface-dark shadow-lg shadow-accent/20 hover:scale-105'}`}
                >
                    Pilot Briefing
                </Link>
            </div>
        </nav>
    );
}

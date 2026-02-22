"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isAcademy = pathname?.startsWith("/academy");

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${isAcademy ? 'bg-white/80 border-slate-200' : 'bg-surface-dark/80 border-white/5'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <span className="text-white font-black text-xl">T</span>
                    </div>
                    <span className={`text-xl font-black tracking-tighter ${isAcademy ? "text-surface-dark" : "text-white"}`}>
                        TEMAHUX
                    </span>
                </Link>

                {/* Vertical Links */}
                <div className={`hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest ${isAcademy ? "text-slate-500" : "text-slate-400"}`}>
                    <Link href="/vision" className={`hover:text-primary transition-colors ${pathname === '/vision' ? 'text-primary' : ''}`}>Vision</Link>
                    <Link href="/architecture" className={`hover:text-primary transition-colors ${pathname === '/architecture' ? 'text-primary' : ''}`}>Architecture</Link>
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <Link href="/services" className={`hover:text-primary transition-colors ${pathname === '/services' ? 'text-primary' : ''}`}>Services</Link>
                    <Link href="/products" className={`hover:text-primary transition-colors ${pathname === '/products' ? 'text-primary' : ''}`}>Products</Link>
                    <Link href="/academy" className={`hover:text-primary transition-colors ${pathname === '/academy' ? 'text-primary' : ''}`}>Academy</Link>
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

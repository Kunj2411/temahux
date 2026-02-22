"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "My Learning", icon: "◈", href: "/academy/dashboard" },
    { label: "Certification", icon: "⬡", href: "/academy/certification" },
    { label: "Growth Roadmap", icon: "⬢", href: "/academy/roadmap" },
    { label: "Resources", icon: "⬣", href: "/academy/resources" },
    { label: "Mentorship", icon: "◎", href: "/academy/mentorship" },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6 sticky top-0 h-screen">
            <Link href="/" className="flex items-center gap-3 mb-12">
                <div className="size-6 bg-primary rounded flex items-center justify-center">
                    <span className="text-white font-black text-xs">T</span>
                </div>
                <span className="font-black text-sm tracking-tighter">TEMAHUX</span>
            </Link>

            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-4 px-4 py-3 rounded-lg text-xs font-bold transition-all ${pathname === item.href
                                ? 'bg-primary/5 text-primary shadow-sm'
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <span>{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-slate-200 rounded-full"></div>
                    <div>
                        <h4 className="text-xs font-bold">Alex Rivera</h4>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Elite Member</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

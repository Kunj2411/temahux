"use client";

import Link from "next/link";
import Image from "next/image";

export default function Pillar({ title, subtitle, description, href, color, tag, isLight = false }: any) {
    return (
        <Link
            href={href}
            className={`relative flex-1 group overflow-hidden flex flex-col justify-end p-8 md:p-16 transition-all duration-700 hover:flex-[1.5] ${color}`}
        >
            {/* Background Effects - Using next/image for optimization */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isLight ? 'invert' : ''}`}>
                <Image
                    src="/grid.svg"
                    alt="background grid"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded w-fit ${isLight ? 'bg-primary text-white' : 'bg-white/10 text-accent'}`}>
                    {tag}
                </span>

                <div className="flex flex-col">
                    <h3 className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-primary' : 'text-accent'}`}>
                        {subtitle}
                    </h3>
                    <h2 className={`text-4xl lg:text-5xl font-black leading-tight mt-2 ${isLight ? 'text-surface-dark' : 'text-white'}`}>
                        {title}
                    </h2>
                </div>

                <p className={`text-sm lg:text-base max-w-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 ${isLight ? 'text-surface-base' : 'text-slate-400'}`}>
                    {description}
                </p>

                <div className="mt-8 flex items-center gap-2 group/btn">
                    <span className={`text-xs font-black uppercase tracking-widest ${isLight ? 'text-surface-dark' : 'text-white'}`}>
                        Enter Vertical
                    </span>
                    <div className={`h-[1px] w-12 transition-all duration-500 group-hover/btn:w-20 ${isLight ? 'bg-surface-dark' : 'bg-white'}`}></div>
                </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none opacity-60 ${isLight ? 'from-white via-transparent' : 'from-black via-transparent'}`}></div>
        </Link>
    );
}

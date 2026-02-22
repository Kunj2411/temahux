"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
    return (
        <FadeIn delay={0.1}>
            <div className="bg-surface-base/30 border border-white/5 p-12 rounded-card shadow-3xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputGroup label="Full Name" placeholder="Alex Rivera" />
                        <InputGroup label="Corporate Email" placeholder="alex@company.com" />
                    </div>
                    <InputGroup label="Organization / Institution" placeholder="Global University Group" />
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Core Interest</label>
                        <select className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none appearance-none">
                            <option>Strategic Growth Infrastructure</option>
                            <option>Institutional SaaS Deployment</option>
                            <option>Academy Team Certification</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Intent / Message</label>
                        <textarea className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none min-h-[120px]" placeholder="Brief context of your requirements..."></textarea>
                    </div>
                    <button className="w-full py-5 bg-white text-surface-dark font-black uppercase text-xs tracking-widest rounded-button hover:bg-primary hover:text-white transition-all">
                        Initialize briefing
                    </button>
                </form>
            </div>
        </FadeIn>
    );
}

function InputGroup({ label, placeholder }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
            <input
                type="text"
                className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}

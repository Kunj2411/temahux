"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
    return (
        <FadeIn delay={0.1}>
            <div className="bg-surface-base/30 border border-white/5 p-12 rounded-card shadow-3xl">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    {/* Web3Forms Access Key */}
                    <input type="hidden" name="access_key" value="5dc38729-8ddc-4b2f-b86a-be5498c6c759" />

                    <div className="grid md:grid-cols-2 gap-6">
                        <InputGroup label="Full Name" name="name" placeholder="Alex Rivera" required />
                        <InputGroup label="Corporate Email" name="email" type="email" placeholder="alex@company.com" required />
                    </div>

                    <InputGroup label="Organization / Institution" name="organization" placeholder="Global University Group" required />

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Core Interest</label>
                        <select
                            name="interest"
                            className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none appearance-none"
                            defaultValue="Strategic Growth Infrastructure"
                        >
                            <option>Strategic Growth Infrastructure</option>
                            <option>Institutional SaaS Deployment</option>
                            <option>Academy Team Certification</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Intent / Message</label>
                        <textarea
                            name="message"
                            className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none min-h-[120px]"
                            placeholder="Brief context of your requirements..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-white text-surface-dark font-black uppercase text-xs tracking-widest rounded-button hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                        Initialize briefing
                    </button>
                </form>
            </div>
        </FadeIn>
    );
}

function InputGroup({ label, placeholder, name, type = "text", required = false }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full bg-surface-dark border border-white/10 rounded-button p-4 text-xs font-bold focus:border-primary outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}

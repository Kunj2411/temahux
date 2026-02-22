import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white font-body selection:bg-primary">
            <Navbar />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
                    {/* Left: Engagement Intent */}
                    <FadeIn direction="right">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]">
                                Initiate <br />
                                Pilot <br />
                                <span className="text-accent italic">Briefing.</span>
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-lg">
                                We are currently accepting a limited number of pilot institutions and strategic partners for Q3 2026. Request a briefing to evaluate system fit.
                            </p>

                            <div className="space-y-8">
                                <ContactDetail label="Global HQ" content="Innovation District, Block 4" delay={0.1} />
                                <ContactDetail label="Direct Dial" content="+1 (800) TEMAHUX" delay={0.2} />
                                <ContactDetail label="Email" content="strategic@temahux.com" delay={0.3} />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Lead Engineering Form */}
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

function ContactDetail({ label, content, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">{label}</span>
                <span className="text-xl font-bold text-white">{content}</span>
            </div>
        </FadeIn>
    )
}

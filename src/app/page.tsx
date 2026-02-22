import Link from "next/link";
import Pillar from "@/components/ui/Pillar";
import ModelCard from "@/components/ui/ModelCard";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-surface-dark overflow-x-hidden flex flex-col">
      {/* Three Pillars Hero Layer */}
      <div className="flex flex-col md:flex-row min-h-screen">
        <Pillar
          title="Digital Growth Services"
          subtitle="Growth Infrastructure"
          description="Strategic growth frameworks for scale-ready firms. Engagement models engineered for precision."
          href="/services"
          color="bg-primary"
          tag="Strategic B2B"
        />

        <Pillar
          title="Intelligent SaaS Products"
          subtitle="Institutional Systems"
          description="Modular software ecosystems for complex institutions. Now in Pilot Phase."
          href="/products"
          color="bg-trust"
          tag="SaaS Hub"
        />

        <Pillar
          title="Temahux Academy"
          subtitle="Skill Engine"
          description="Career acceleration tracks for digital architects. Launching Cohort 01."
          href="/academy"
          color="bg-white"
          isLight
          tag="Global Academy"
        />
      </div>

      {/* The Temahux Operating Model - Philosophy Section */}
      <section className="py-24 px-6 md:px-12 bg-surface-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                The Temahux <br />
                <span className="text-accent italic">Operating Model.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We don't build websites; we engineer institutional infrastructure. Our model connects strategic growth services with scalable SaaS products and high-intensity education.
              </p>
            </div>
            <Link href="/architecture" className="flex items-center gap-3 group/arch">
              <span className="text-xs font-black uppercase tracking-widest group-hover/arch:text-primary transition-colors">Explore Architecture</span>
              <div className="size-10 rounded-full border border-white/10 flex items-center justify-center group-hover/arch:border-primary transition-all">→</div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ModelCard
              title="System-Driven"
              description="Everything connects. Our services feed our products, and our products scale with our academy's talent pipeline."
            />
            <ModelCard
              title="Intelligence-First"
              description="AI is not an add-on; it is the core assessment and automation layer embedded in every modular system we deploy."
            />
            <ModelCard
              title="Build for Scale"
              description="Engineered for institutions ready to modernize without the noise. Precision frameworks for predictable outcomes."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

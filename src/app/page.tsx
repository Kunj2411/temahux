import Link from "next/link";
import Pillar from "@/components/ui/Pillar";
import ModelCard from "@/components/ui/ModelCard";
import VerticalCard from "@/components/ui/VerticalCard";
import FadeIn from "@/components/ui/FadeIn";

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

      {/* What Brings You Here Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
              What brings you <span className="text-primary italic">here?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-20">
              Choose your path. Whether you're scaling a business, building institutional systems, or mastering future tech.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <VerticalCard
              icon="🚀"
              title="Grow My Business Online"
              description="Websites, social media management, digital marketing, branding, and AI automation to grow your business."
              ctaText="Explore Services"
              href="/services"
              delay={0.2}
            />
            <VerticalCard
              icon="🏛️"
              title="Software Infrastructure"
              description="AI-powered institutional systems including university OS, LMS platforms, and AI grading engines."
              ctaText="Explore Products"
              href="/products"
              delay={0.3}
            />
            <VerticalCard
              icon="🎓"
              title="Learn Future Tech"
              description="Hands-on career programs in AI systems, SaaS product development, and digital growth engineering."
              ctaText="Explore Academy"
              href="/academy"
              delay={0.4}
            />
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-3 gap-8">
            <ModelCard
              title="System-Driven"
              description="Everything connects. Our services feed our products, and our products scale with our academy's talent pipeline."
              delay={0.1}
            />
            <ModelCard
              title="Intelligence-First"
              description="AI is not an add-on; it is the core assessment and automation layer embedded in every modular system we deploy."
              delay={0.2}
            />
            <ModelCard
              title="Build for Scale"
              description="Engineered for institutions ready to modernize without the noise. Precision frameworks for predictable outcomes."
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

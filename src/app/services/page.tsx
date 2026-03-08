import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import EnhancedServiceCard from "@/components/services/EnhancedServiceCard";
import PackageCard from "@/components/services/PackageCard";
import PortfolioShowcase from "@/components/services/PortfolioShowcase";
import TargetCustomerCard from "@/components/services/TargetCustomerCard";
import ProcessStep from "@/components/services/ProcessStep";
import CTASection from "@/components/services/CTASection";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-surface-dark text-white selection:bg-primary">
            <Navbar />

            {/* Hero: Strategic Infrastructure */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
                            B2B Hybrid Growth
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
                            Growth <br />
                            <span className="text-primary italic">Infrastructure.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
                            Temahux helps businesses grow through websites, branding, digital marketing, and AI automation.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="#consultation" className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all shadow-2xl">
                                Start Project
                            </Link>
                            <Link href="#pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all">
                                View Pricing
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <FadeIn delay={0.4}>
                            <div className="p-8 border border-white/5 bg-surface-base/30 rounded-card">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Availability</h4>
                                <p className="text-sm text-slate-400">Now accepting 2 strategic partners for Q3 2026. Focus: High-ticket B2B & Institutional Software.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Abstract Geometry */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-0"></div>
            </section>

            {/* Services Overview */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Our Services</h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
                            Clear pricing. <span className="text-primary italic">Real value.</span>
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EnhancedServiceCard
                            title="Web Development"
                            description="Professional websites and web applications built with modern technologies for optimal performance."
                            startingPrice="₹3,000+"
                            features={[
                                "Business website",
                                "Mobile responsive design",
                                "Contact form",
                                "Basic SEO setup",
                                "Hosting assistance"
                            ]}
                            href="/services/web-development"
                            delay={0.1}
                        />
                        <EnhancedServiceCard
                            title="Social Media Management"
                            description="Strategic social media presence that drives engagement and converts followers into customers."
                            startingPrice="₹5,000/mo"
                            features={[
                                "20 social posts",
                                "Caption writing",
                                "Hashtag strategy",
                                "Profile optimization",
                                "Monthly analytics"
                            ]}
                            href="/services/social-media-management"
                            delay={0.2}
                        />
                        <EnhancedServiceCard
                            title="Branding & Design"
                            description="Distinctive brand identities from logos to complete visual systems that resonate with your audience."
                            startingPrice="₹8,000+"
                            features={[
                                "Logo design",
                                "Brand identity kit",
                                "Business card design",
                                "Social media templates",
                                "Brand guidelines"
                            ]}
                            href="/services/branding-design"
                            delay={0.3}
                        />
                        <EnhancedServiceCard
                            title="Digital Marketing"
                            description="Data-driven marketing campaigns across SEO, paid ads, and email for maximum ROI."
                            startingPrice="₹10,000/mo"
                            features={[
                                "Google Ads",
                                "Facebook Ads",
                                "Lead generation",
                                "Analytics setup",
                                "Monthly reporting"
                            ]}
                            href="/services/digital-marketing"
                            delay={0.4}
                        />
                        <EnhancedServiceCard
                            title="AI Automation"
                            description="Intelligent automation solutions that streamline operations and unlock business efficiency."
                            startingPrice="₹15,000+"
                            features={[
                                "AI chatbot",
                                "WhatsApp automation",
                                "Lead capture system",
                                "AI content assistant",
                                "Custom integrations"
                            ]}
                            href="/services/ai-automation"
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* Website Packages Section */}
            <section id="pricing" className="py-24 px-6 border-t border-white/5 scroll-mt-32">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Website Packages</h2>
                        <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
                            Choose your <span className="text-primary italic">perfect fit.</span>
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PackageCard
                            name="Starter Website"
                            price="₹3,000"
                            features={[
                                "3 pages",
                                "Mobile responsive",
                                "Contact form",
                                "Basic SEO",
                                "1 month support"
                            ]}
                            href="/services/contact-consultation"
                            delay={0.1}
                        />
                        <PackageCard
                            name="Business Website"
                            price="₹6,000"
                            features={[
                                "5 pages",
                                "SEO setup",
                                "Google Analytics",
                                "Hosting assistance",
                                "3 months support"
                            ]}
                            href="/services/contact-consultation"
                            delay={0.2}
                            featured={true}
                        />
                        <PackageCard
                            name="E-Commerce Store"
                            price="₹12,000+"
                            features={[
                                "Product catalog",
                                "Payment gateway",
                                "Order management",
                                "Inventory system",
                                "6 months support"
                            ]}
                            href="/services/contact-consultation"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <div id="portfolio" className="scroll-mt-32">
                <PortfolioShowcase />
            </div>

            {/* Target Customers */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Who We Work With</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-2xl md:text-4xl font-black tracking-tight mb-16 max-w-3xl">
                            Scale-ready B2B firms and institutional software companies seeking <span className="text-primary italic">infrastructure</span>, not execution.
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TargetCustomerCard
                            title="B2B SaaS Platforms"
                            description="Enterprise software companies with proven product-market fit seeking systematic growth infrastructure."
                            delay={0.1}
                        />
                        <TargetCustomerCard
                            title="High-Ticket Service Firms"
                            description="Consulting and professional services firms with $50k+ deal sizes requiring precision lead generation."
                            delay={0.2}
                        />
                        <TargetCustomerCard
                            title="Institutional Tech"
                            description="Education, healthcare, and government technology providers needing compliant, scalable growth systems."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Engagement Process */}
            <section id="process" className="py-24 px-6 border-t border-white/5 bg-surface-base/10 scroll-mt-32">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Engagement Model</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-2xl md:text-4xl font-black tracking-tight mb-16">
                            Audit → Scaffold → <span className="text-accent italic">Pulse</span>
                        </p>
                    </FadeIn>
                    <div className="space-y-12">
                        <ProcessStep
                            step={1}
                            title="Infrastructure Audit"
                            description="We perform a deep-dive scan of your existing growth scaffolds to identify 'Operational Entropy' and system gaps."
                            delay={0.1}
                        />
                        <ProcessStep
                            step={2}
                            title="System Scaffolding"
                            description="We deploy our proprietary SEO and AdTech frameworks as a primary layer on your root domain infrastructure."
                            delay={0.2}
                        />
                        <ProcessStep
                            step={3}
                            title="Algorithmic Pulse"
                            description="Continuous system tuning based on real-time data ingestion and behavior modeling for sustained performance."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Anti-Persona */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8 text-center">Who This Is NOT For</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                            We are selective about partnerships. Our framework requires institutional readiness and long-term commitment.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 gap-8">
                        <FadeIn delay={0.2}>
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card opacity-60">
                                <h4 className="text-lg font-black text-white mb-3">Short-Term Hype Seekers</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    If you're looking for rapid, unsustainable vanity metrics without building infrastructure, we're not the right fit.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="p-8 bg-surface-base/30 border border-white/5 rounded-card opacity-60">
                                <h4 className="text-lg font-black text-white mb-3">Fragmented Teams</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Our model requires high-level coordination and institutional readiness to deploy integrated systems.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Consultation Form */}
            <section id="consultation" className="py-24 px-6 border-t border-white/5 scroll-mt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Request Strategic Briefing</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-3xl md:text-5xl font-black tracking-tight">
                                Initialize <span className="text-primary italic">Partnership</span>
                            </p>
                        </FadeIn>
                    </div>
                    <SimpleForm />
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                headline="Ready to Build Infrastructure?"
                subtext="Limited availability for Q3 2026. Strategic partnerships only."
                primaryCTA={{
                    text: "View Framework",
                    href: "/services/framework"
                }}
                secondaryCTA={{
                    text: "Contact Us",
                    href: "/contact"
                }}
            />
        </div>
    );
}

function SimpleForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
        <input type="hidden" name="access_key" value="5dc38729-8ddc-4b2f-b86a-be5498c6c759" />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Service Interest
          </label>
          <select
            name="service"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="SEO Architecture">SEO Architecture</option>
            <option value="Paid Performance">Paid Performance</option>
            <option value="Conversion OS">Conversion OS</option>
            <option value="Full Growth Infrastructure">Full Growth Infrastructure</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="$10k-$25k">$10k - $25k</option>
            <option value="$25k-$50k">$25k - $50k</option>
            <option value="$50k-$100k">$50k - $100k</option>
            <option value="$100k+">$100k+</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Project Details
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your growth objectives..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
        >
          Request Consultation
        </button>
      </form>
    </div>
  );
}

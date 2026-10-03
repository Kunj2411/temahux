import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, Braces, Cpu, Layers3, Workflow } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { practices, siteUrl } from "@/lib/services";

export const metadata: Metadata = {
  title: "Temahux — Technology that moves work forward",
  description: "Temahux builds, grows, automates and operates useful digital systems for businesses and institutions.",
  alternates: { canonical: siteUrl },
  openGraph: { title: "Temahux — Technology that moves work forward", description: "Useful digital systems, built around the work they need to do.", url: siteUrl, type: "website" },
};

const principles = [
  ["01", "Business first", "Start with the work, the people doing it and the problem worth solving."],
  ["02", "Product thinking", "Connect the experience, the technology and the operation behind it."],
  ["03", "Built to keep working", "Make considered choices for launch, handover and what comes next."],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-shell">
        <section className="home-hero">
          <div className="home-hero-grid" aria-hidden="true" />
          <div className="home-hero-inner">
            <div className="home-hero-copy">
              <p className="home-kicker"><span /> DIGITAL SYSTEMS, BUILT WITH INTENT</p>
              <h1>Make the next<br />thing <em>work.</em></h1>
              <p className="home-lede">Websites, software, AI and automation—designed around the work they need to do.</p>
              <div className="home-actions">
                <Link className="home-button home-button-blue" href="/services/contact-consultation">Start a Project <ArrowUpRight size={17} /></Link>
                <Link className="home-text-link" href="/services">Explore Services <ArrowRight size={16} /></Link>
              </div>
              <div className="home-price-note"><span>Start small. Build smart.<small>Services starting at just</small></span><strong>₹99</strong></div>
              <div className="home-proofline"><span>THINK CLEARLY</span><i /> <span>BUILD USEFULLY</span><i /> <span>KEEP IMPROVING</span></div>
            </div>
            <div className="home-system" role="img" aria-label="Temahux connects product design, engineering, intelligent systems and operations">
              <div className="home-system-head"><span>THE TEMAHUX SYSTEM</span><span className="home-live"><i /> CONNECTED</span></div>
              <div className="home-system-center"><div className="home-orbit home-orbit-one" /><div className="home-orbit home-orbit-two" /><div className="home-core"><Image src="/favicon.png" alt="" width={36} height={36} priority className="home-core-mark" /><span>TEMAHUX</span></div><div className="home-node home-node-a"><Layers3 size={16} /><span>PRODUCT</span></div><div className="home-node home-node-b"><Braces size={16} /><span>ENGINEERING</span></div><div className="home-node home-node-c"><Cpu size={16} /><span>INTELLIGENCE</span></div><div className="home-node home-node-d"><Workflow size={16} /><span>OPERATIONS</span></div></div>
              <div className="home-system-foot"><span>IDEA</span><b /> <span>DESIGN</span><b /> <span>BUILD</span><b /> <span>RUN</span></div>
            </div>
          </div>
          <a className="home-scroll" href="#what-we-do">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </section>

        <section className="home-intro" id="what-we-do">
          <div className="home-section-meta"><span>01 / WHAT WE DO</span><span>TECHNOLOGY WITH A PURPOSE</span></div>
          <div className="home-intro-layout"><h2>From the first<br />question to the<br /><span>working system.</span></h2><div className="home-intro-copy"><p>Good technology starts with understanding what needs to change. We bring product thinking, design and engineering together to make digital work clearer and more useful.</p><Link href="/about" className="home-underlined">How we think <ArrowUpRight size={15} /></Link></div></div>
          <div className="home-practices">{practices.map((practice) => <Link className="home-practice" href={`/services/${practice.slug}`} key={practice.slug}><span className="home-index">{practice.index}</span><span className="home-practice-copy"><b>{practice.label}</b><small>{practice.headline}</small></span><ArrowUpRight size={18} /></Link>)}</div>
        </section>

        <section className="home-dark-band">
          <div className="home-dark-inner"><div><p className="home-kicker home-kicker-light"><span /> FROM IDEA TO WORKING PRODUCT</p><h2>Thoughtful at the start.<br /><em>Solid in the real world.</em></h2><p className="home-dark-copy">A clear path from the problem to a system people can use, your team can run and your business can build on.</p><Link href="/services/process" className="home-button home-button-white">See how we work <ArrowUpRight size={17} /></Link></div><div className="home-flow"><div className="home-flow-line" />{[["01", "Understand", "The work and the people"], ["02", "Shape", "The right solution"], ["03", "Build", "Design and engineering"], ["04", "Launch", "Handover and support"]].map(([n, title, copy]) => <div className="home-flow-step" key={n}><span>{n}</span><div><b>{title}</b><small>{copy}</small></div><ArrowUpRight size={15} /></div>)}</div></div>
        </section>

        <section className="home-offerings">
          <div className="home-section-meta"><span>02 / CAPABILITIES</span><span>DESIGN × ENGINEERING × SYSTEMS</span></div>
          <div className="home-offerings-heading"><h2>Built for the<br /><span>whole picture.</span></h2><p>Bring one challenge or a complete product idea. We’ll find a practical way forward with you.</p></div>
          <div className="home-offer-grid"><Link href="/services/build" className="home-offer home-offer-featured"><span className="home-offer-icon"><Boxes size={20} /></span><span className="home-offer-num">01 — DIGITAL PRODUCTS</span><h3>Websites &amp; software</h3><p>Web platforms, applications, e-commerce and the integrations that connect them.</p><span className="home-card-link">Explore Build <ArrowUpRight size={15} /></span><div className="home-window" aria-hidden="true"><div /><div /><div /><span /></div></Link><Link href="/services/automate" className="home-offer"><span className="home-offer-icon"><Cpu size={20} /></span><span className="home-offer-num">02 — INTELLIGENCE</span><h3>AI &amp; automation</h3><p>Practical assistants and workflows that reduce repetitive work and connect tools.</p><span className="home-card-link">Explore Automate <ArrowUpRight size={15} /></span><div className="home-automate-art" aria-hidden="true"><i /><i /><i /><b /></div></Link><Link href="/services/grow" className="home-offer"><span className="home-offer-icon"><ArrowUpRight size={20} /></span><span className="home-offer-num">03 — EXPERIENCE &amp; GROWTH</span><h3>Design &amp; visibility</h3><p>Brand, user experience and digital foundations that help people find and understand you.</p><span className="home-card-link">Explore Grow <ArrowUpRight size={15} /></span><div className="home-growth-art" aria-hidden="true"><i /><i /><i /><i /></div></Link></div>
          <div className="home-capability-foot"><span>ALSO: PLATFORM SUPPORT · SEO · CAMPAIGNS · API INTEGRATION</span><Link href="/services">All capabilities <ArrowRight size={15} /></Link></div>
        </section>

        <section className="home-ecosystem"><div className="home-ecosystem-copy"><p className="home-kicker"><span /> BUILT TO BE USEFUL</p><h2>One team.<br /><em>Connected work.</em></h2><p>Services, products and company expertise come together around practical technology and the people who use it.</p><Link href="/architecture" className="home-underlined">Explore the ecosystem <ArrowUpRight size={15} /></Link></div><div className="home-ecosystem-cards"><Link href="/services" className="home-eco-card"><span>01 / SERVICES</span><b>Build and improve<br />digital systems.</b><ArrowUpRight size={18} /></Link><Link href="/products" className="home-eco-card"><span>02 / PRODUCTS</span><b>Tools for learning<br />and institutions.</b><ArrowUpRight size={18} /></Link><Link href="/about" className="home-eco-card"><span>03 / COMPANY</span><b>People and principles<br />behind the work.</b><ArrowUpRight size={18} /></Link></div></section>

        <section className="home-principles"><div className="home-section-meta"><span>03 / HOW WE THINK</span><span>OUR WORKING PRINCIPLES</span></div><div className="home-principles-layout"><h2>Technology<br />should earn<br /><em>its place.</em></h2><div className="home-principle-list">{principles.map(([n, title, copy]) => <article className="home-principle" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={16} /></article>)}</div></div></section>

        <section className="home-cta"><div className="home-cta-orb" aria-hidden="true" /><div className="home-cta-inner"><p className="home-kicker home-kicker-light"><span /> HAVE SOMETHING IN MIND?</p><h2>Let’s make it<br /><em>work in the real world.</em></h2><div className="home-cta-bottom"><p>Tell us what you’re building, improving or trying to untangle. We’ll start with the problem.</p><Link href="/services/contact-consultation" className="home-button home-button-blue">Start a Project <ArrowUpRight size={17} /></Link></div></div></section>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is TEMAHUX? | Technology, SaaS & Digital Growth",
  description:
    "TEMAHUX is a technology company based in Gandhinagar, India, building digital products, AI automation, SaaS tools, and a technology education ecosystem called TEMAHUX Academy.",
  alternates: { canonical: "https://www.temahux.com/what-is-temahux" },
  openGraph: {
    title: "What is TEMAHUX? | Technology, SaaS & Digital Growth",
    description:
      "TEMAHUX is a technology company building digital products, AI automation, SaaS tools, and a technology education ecosystem.",
    url: "https://www.temahux.com/what-is-temahux",
    type: "website",
    siteName: "TEMAHUX",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is TEMAHUX? | Technology, SaaS & Digital Growth",
    description:
      "TEMAHUX is a technology company building digital products, AI automation, SaaS tools, and a technology education ecosystem.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TEMAHUX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEMAHUX is a technology company based in Gandhinagar, India. It builds digital products, websites, software, AI automation systems, and SaaS tools for businesses and institutions. TEMAHUX also operates TEMAHUX Academy, a technology education ecosystem for students and future builders.",
      },
    },
    {
      "@type": "Question",
      name: "What does TEMAHUX do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEMAHUX provides four core services: Build (websites, applications, e-commerce), Grow (brand identity, SEO, digital marketing), Automate (AI chatbots, workflow automation), and Operate (post-launch support and maintenance). It also develops SaaS products for educational institutions and runs TEMAHUX Academy.",
      },
    },
    {
      "@type": "Question",
      name: "What is TEMAHUX Academy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEMAHUX Academy is a STEM, coding, AI, robotics, and project-based learning ecosystem for students and future builders. It offers structured programs, roadmaps, classes, and hands-on projects starting at ₹49.",
      },
    },
    {
      "@type": "Question",
      name: "Where is TEMAHUX based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEMAHUX is based in Gandhinagar, India. You can reach the team at kunj.joshi@temahux.com or +91 9104578807.",
      },
    },
    {
      "@type": "Question",
      name: "Is TEMAHUX the same as Termux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TEMAHUX is a distinct technology company and brand. Termux is an unrelated Android terminal emulator application. TEMAHUX — spelled T-E-M-A-H-U-X — is a digital services, SaaS, and education company based in Gandhinagar, India.",
      },
    },
    {
      "@type": "Question",
      name: "What SaaS products does TEMAHUX offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEMAHUX builds SaaS products focused on education and institutional workflows, including University OS (an institutional operating system for admissions, academic workflows and examinations), Paper Checking AI, and an LMS platform.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TEMAHUX", item: "https://www.temahux.com/" },
    { "@type": "ListItem", position: 2, name: "What is TEMAHUX?", item: "https://www.temahux.com/what-is-temahux" },
  ],
};

export default function WhatIsTemahux() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="wit-shell">
        <nav className="wit-nav" aria-label="Main navigation">
          <Link href="/" aria-label="TEMAHUX home">
            <img src="/temahux-symbol.png" alt="" width={26} height={26} />
            <span>TEMAHUX</span>
          </Link>
          <div className="wit-nav-links">
            <Link href="/services">Services</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/services/products">Products</Link>
          </div>
          <a href="mailto:kunj.joshi@temahux.com" className="wit-nav-cta">Let&apos;s talk ↗</a>
        </nav>

        <section className="wit-hero">
          <p className="wit-eyebrow">TEMAHUX · Gandhinagar, India</p>
          <h1 className="wit-h1">What is TEMAHUX?</h1>
          <p className="wit-lead">
            TEMAHUX is a technology company that builds digital products, AI automation systems, SaaS tools,
            and a technology education ecosystem — all under one connected practice.
          </p>
          <div className="wit-hero-links">
            <Link href="/services">Explore Services ↗</Link>
            <Link href="/academy">Explore Academy ↗</Link>
          </div>
        </section>

        <section className="wit-section">
          <h2>About TEMAHUX</h2>
          <p>
            TEMAHUX is a technology company based in Gandhinagar, India. Founded by Kunj Joshi, AI Engineer
            and Digital Infrastructure Architect, TEMAHUX engineers digital ecosystems for businesses and
            institutions — combining services, products, and learning into one connected practice.
          </p>
          <p>
            The name TEMAHUX stands for: <strong>Think. Explore. Master. Analyze. Highlight. Understand. eXcel.</strong>{" "}
            These seven principles shape how TEMAHUX approaches every project.
          </p>
        </section>

        <section className="wit-section">
          <h2>What TEMAHUX Does</h2>
          <p>
            TEMAHUX operates across four service practices:
          </p>
          <ul className="wit-list">
            <li>
              <strong>Build</strong> — Websites, web applications, e-commerce systems, and software platforms
              built from brief to live product.{" "}
              <Link href="/services/services/build">Explore Build ↗</Link>
            </li>
            <li>
              <strong>Grow</strong> — Brand identity, UI/UX design, technical SEO, digital marketing, and
              social media management.{" "}
              <Link href="/services/services/grow">Explore Grow ↗</Link>
            </li>
            <li>
              <strong>Automate</strong> — AI chatbots, WhatsApp automation, lead capture systems, document
              automation, and custom AI integrations.{" "}
              <Link href="/services/services/automate">Explore Automate ↗</Link>
            </li>
            <li>
              <strong>Operate</strong> — Post-launch support, hosting coordination, and ongoing maintenance
              for systems already in production.{" "}
              <Link href="/services/services/operate">Explore Operate ↗</Link>
            </li>
          </ul>
        </section>

        <section className="wit-section">
          <h2>TEMAHUX Digital Growth</h2>
          <p>
            TEMAHUX helps businesses become findable and worth finding. The Grow practice covers brand
            identity, technical SEO, paid campaigns, social media management (from ₹5,000/month), and
            content strategy — all designed to build lasting digital visibility.
          </p>
          <Link href="/services/services/grow" className="wit-link">Learn about TEMAHUX digital growth ↗</Link>
        </section>

        <section className="wit-section">
          <h2>TEMAHUX SaaS &amp; Products</h2>
          <p>
            TEMAHUX builds SaaS products focused on education and institutional workflows:
          </p>
          <ul className="wit-list">
            <li>
              <strong>University OS</strong> — An institutional operating system for admissions, academic
              workflows, faculty management, examinations, and analytics.
            </li>
            <li>
              <strong>Paper Checking AI</strong> — AI-powered assessment and document checking for
              educational institutions.
            </li>
            <li>
              <strong>LMS</strong> — A learning management system for structured course delivery.
            </li>
          </ul>
          <Link href="/services/products" className="wit-link">Explore TEMAHUX Products ↗</Link>
        </section>

        <section className="wit-section">
          <h2>TEMAHUX Academy</h2>
          <p>
            TEMAHUX Academy is a STEM, coding, AI, robotics, and project-based learning ecosystem for
            students and future builders. It helps learners move from curiosity to confident practice,
            product thinking, and real-world technology skills.
          </p>
          <p>
            Academy programs cover: Python &amp; Programming, AI &amp; Machine Learning, Robotics, Web &amp;
            Software Development, Mobile Development, AR/VR &amp; Spatial Computing, and Projects &amp;
            Internships. Learning starts at ₹49.
          </p>
          <Link href="/academy" className="wit-link">Explore TEMAHUX Academy ↗</Link>
        </section>

        <section className="wit-section">
          <h2>Who TEMAHUX Is For</h2>
          <ul className="wit-list">
            <li>Businesses that need a digital product built, improved, or automated</li>
            <li>Institutions looking for SaaS tools for admissions, examinations, or learning management</li>
            <li>Students and future builders who want structured technology education</li>
            <li>Organisations that need brand identity, SEO, or digital marketing</li>
          </ul>
        </section>

        <section className="wit-section">
          <h2>TEMAHUX&apos;s Approach</h2>
          <p>
            TEMAHUX starts with the work — the people doing it and the problem worth solving. Every project
            follows a five-stage process: Scope, Design, Build, Launch, and Support. Technology is chosen
            to serve the work, not the other way around.
          </p>
          <Link href="/services/services/process" className="wit-link">See how TEMAHUX works ↗</Link>
        </section>

        <section className="wit-section wit-faq">
          <h2>Frequently Asked Questions</h2>
          <dl className="wit-faq-list">
            <div>
              <dt>Is TEMAHUX the same as Termux?</dt>
              <dd>
                No. TEMAHUX (T-E-M-A-H-U-X) is a distinct technology company and brand based in Gandhinagar,
                India. Termux is an unrelated Android terminal emulator. TEMAHUX builds digital services,
                SaaS products, and a technology education ecosystem.
              </dd>
            </div>
            <div>
              <dt>How much do TEMAHUX services cost?</dt>
              <dd>
                Web development starts at ₹3,000. Branding and design starts at ₹8,000. AI automation
                starts at ₹15,000. Social media management starts at ₹5,000/month. Academy programs start
                at ₹49.
              </dd>
            </div>
            <div>
              <dt>Where is TEMAHUX located?</dt>
              <dd>TEMAHUX is based in Gandhinagar, India. Contact: kunj.joshi@temahux.com · +91 9104578807.</dd>
            </div>
            <div>
              <dt>What technology does TEMAHUX use?</dt>
              <dd>TEMAHUX builds with React, Next.js, Node.js, and AI APIs, among other modern technologies.</dd>
            </div>
          </dl>
        </section>

        <section className="wit-section wit-contact">
          <h2>Contact TEMAHUX</h2>
          <p>
            Ready to start a project or learn more about TEMAHUX? Reach out directly.
          </p>
          <div className="wit-contact-links">
            <a href="mailto:kunj.joshi@temahux.com">kunj.joshi@temahux.com ↗</a>
            <a href="tel:+919104578807">+91 9104578807</a>
            <Link href="/services/services/contact-consultation" className="wit-cta">Start a Project ↗</Link>
          </div>
        </section>

        <footer className="wit-footer">
          <Link href="/">TEMAHUX</Link>
          <Link href="/services">Services</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/services/products">Products</Link>
          <span>© {new Date().getFullYear()} TEMAHUX · Gandhinagar, India</span>
        </footer>
      </main>

      <style>{`
        .wit-shell{max-width:1100px;margin:0 auto;padding:0 clamp(20px,5vw,60px);font-family:"Outfit","Helvetica Neue",Arial,sans-serif;color:#171411;background:#eee;min-height:100svh}
        .wit-nav{display:flex;align-items:center;gap:clamp(16px,3vw,40px);padding:18px 0;border-bottom:1px solid rgba(23,20,17,.12);position:sticky;top:0;background:rgba(238,238,236,.92);backdrop-filter:blur(10px);z-index:10}
        .wit-nav>a:first-child{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;letter-spacing:.1em;text-decoration:none;color:#171411;margin-right:auto}
        .wit-nav-links{display:flex;gap:clamp(16px,2.5vw,36px);font-size:12px}
        .wit-nav-links a{color:rgba(23,20,17,.7);text-decoration:none}
        .wit-nav-links a:hover{color:#171411}
        .wit-nav-cta{font-size:12px;padding:7px 14px;border:1px solid rgba(23,20,17,.3);border-radius:999px;text-decoration:none;color:#171411;white-space:nowrap}
        .wit-hero{padding:clamp(60px,10vh,100px) 0 clamp(40px,6vh,60px);border-bottom:1px solid rgba(23,20,17,.12)}
        .wit-eyebrow{margin:0 0 16px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#8e3d29}
        .wit-h1{margin:0 0 20px;font-size:clamp(42px,7vw,80px);font-weight:300;line-height:.94;letter-spacing:-.06em}
        .wit-lead{margin:0 0 28px;font-size:clamp(16px,2vw,20px);font-weight:300;line-height:1.45;color:#4a4540;max-width:680px}
        .wit-hero-links{display:flex;gap:24px;flex-wrap:wrap}
        .wit-hero-links a{font-size:13px;padding-bottom:4px;border-bottom:1px solid #171411;text-decoration:none;color:#171411}
        .wit-section{padding:clamp(40px,6vh,64px) 0;border-bottom:1px solid rgba(23,20,17,.12)}
        .wit-section h2{margin:0 0 18px;font-size:clamp(22px,3vw,32px);font-weight:400;letter-spacing:-.03em}
        .wit-section p{margin:0 0 14px;font-size:15px;line-height:1.6;color:#3a3530;max-width:720px}
        .wit-list{margin:12px 0 16px;padding-left:0;list-style:none}
        .wit-list li{padding:10px 0;border-bottom:1px solid rgba(23,20,17,.08);font-size:14px;line-height:1.55;color:#3a3530}
        .wit-list li strong{color:#171411}
        .wit-list a{color:#8e3d29;text-decoration:none;font-size:12px}
        .wit-link{display:inline-block;margin-top:8px;font-size:13px;color:#8e3d29;text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:2px}
        .wit-faq-list{margin:0;padding:0}
        .wit-faq-list>div{padding:16px 0;border-bottom:1px solid rgba(23,20,17,.1)}
        .wit-faq-list dt{font-size:15px;font-weight:500;margin-bottom:8px;color:#171411}
        .wit-faq-list dd{margin:0;font-size:14px;line-height:1.6;color:#4a4540}
        .wit-contact-links{display:flex;flex-wrap:wrap;gap:16px;margin-top:16px;align-items:center}
        .wit-contact-links a{font-size:13px;color:#171411;text-decoration:none;border-bottom:1px solid rgba(23,20,17,.3);padding-bottom:2px}
        .wit-cta{padding:10px 20px;background:#171411;color:#eee!important;border:none!important;border-radius:999px;font-size:12px}
        .wit-footer{display:flex;flex-wrap:wrap;gap:20px;align-items:center;padding:20px 0;border-top:1px solid rgba(23,20,17,.12);font-size:11px;color:rgba(23,20,17,.55);margin-top:0}
        .wit-footer a{color:rgba(23,20,17,.7);text-decoration:none}
        .wit-footer a:first-child{font-weight:500;color:#171411;letter-spacing:.08em}
        @media(max-width:600px){.wit-nav-links{display:none}.wit-nav-cta{display:none}}
        a:focus-visible{outline:2px solid #8e3d29;outline-offset:4px;border-radius:3px}
      `}</style>
    </>
  );
}

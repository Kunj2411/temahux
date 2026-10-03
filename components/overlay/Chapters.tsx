"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { state } from "@/lib/scene-state";
import { brand, destinations, services, academyTracks } from "@/lib/content";
import { PRODUCTS_URL, products } from "@/products";
import { getLenis } from "@/lib/scene-state";

type Beat = { id: string; from: number; to: number };
const beats: readonly Beat[] = [
  { id: "origin", from: 0, to: 0.075 },
  { id: "motion", from: 0.075, to: 0.15 },
  { id: "statement", from: 0.15, to: 0.235 },
  { id: "vision", from: 0.235, to: 0.28 },
  { id: "metrics", from: 0.28, to: 0.36 },
  { id: "trust", from: 0.36, to: 0.41 },
  { id: "unique", from: 0.41, to: 0.48 },
  { id: "services", from: 0.48, to: 0.6 },
  { id: "academy", from: 0.6, to: 0.76 },
  { id: "products", from: 0.76, to: 0.93 },
  { id: "finale", from: 0.93, to: 0.982 },
  { id: "footer", from: 0.982, to: 1 },
];

/** Editorial overlays that advance with the same normalized scroll as the camera. */
export function Chapters() {
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const priceRefs = useRef<Record<string, HTMLElement | null>>({});
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      for (const beat of beats) {
        const el = refs.current[beat.id];
        if (!el) continue;
        const fade = 0.024;
        const smooth = (a: number, b: number, x: number) => {
          const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
          return t * t * (3 - 2 * t);
        };
        const enterAt = beat.from === 0 ? -fade : beat.from - fade;
        const weight = smooth(enterAt, enterAt + fade, state.progress) *
          (1 - smooth(beat.to - fade, beat.to, state.progress));
        el.style.opacity = weight.toFixed(3);
        el.style.visibility = weight < 0.004 ? "hidden" : "visible";
        el.style.transform = `translateY(${((1 - weight) * 14).toFixed(1)}px)`;
        el.setAttribute("aria-hidden", weight < 0.5 ? "true" : "false");
        el.inert = weight < 0.5;
        const price = priceRefs.current[beat.id];
        if (price) {
          const priceWeight = smooth(beat.from - 0.006, beat.from + 0.02, state.progress) *
            (1 - smooth(beat.to - 0.04, beat.to - 0.012, state.progress));
          price.style.opacity = priceWeight.toFixed(3);
          price.style.transform = `translateY(${((1 - priceWeight) * 7).toFixed(1)}px)`;
          price.style.visibility = priceWeight < 0.004 ? "hidden" : "visible";
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const bind = (id: string) => (el: HTMLElement | null) => { refs.current[id] = el; };
  const bindPrice = (id: string) => (el: HTMLElement | null) => { priceRefs.current[id] = el; };
  return (
    <div className="chapters">
      <section id="origin" ref={bind("origin")} className="chapter chapter--hero">
        <div className="hero-composition"><p className="hero-overline">Digital services · practical learning · useful products</p><h1 className="hero-title">{brand.name}</h1><p className="hero-tagline">{brand.line}</p></div>
        <p className="hero-note">Digital services, practical learning<br />and products built for real use.</p>
        <a className="hero-round-link" href="mailto:kunj.joshi@temahux.com" aria-label="Talk to Temahux">↗</a>
      </section>

      <section ref={bind("motion")} className="chapter chapter--center"><div><p className="chapter__eyebrow">A connected digital practice</p><h2 className="chapter__title">A little further.<br />A little more possible.</h2></div></section>
      <section ref={bind("statement")} className="chapter chapter--editorial"><div className="chapter__inner"><p className="chapter__eyebrow">TEMAHUX · Ahmedabad, India</p><h2 className="chapter__title">WE ENGINEER<br />DIGITAL ECOSYSTEMS.</h2><p className="chapter__side-note chapter__side-note--left">Software, AI, automation, marketing, learning<br />and consulting connected across four divisions.</p></div></section>
      <section ref={bind("vision")} className="chapter chapter--center"><div><p className="chapter__eyebrow">From an idea to something real</p><h2 className="chapter__title">Built for the<br />way people work.</h2><p className="chapter__side-note chapter__side-note--left">Services power products. Products create room<br />for learning, talent and new ideas.</p></div></section>

      <section ref={bind("metrics")} className="chapter chapter--editorial"><div className="chapter__inner"><div className="chapter__heading-row"><p className="chapter__eyebrow">TEMAHUX at a glance</p><p className="chapter__side-note">A growing practice,<br />grounded in real work.</p></div><div className="chapter__stats"><div><strong>20+</strong><span>Client projects</span></div><div><strong>15+</strong><span>Industries served</span></div><div><strong>98%</strong><span>Client satisfaction</span></div><div><strong>04</strong><span>Business divisions</span></div></div></div></section>
      <section ref={bind("trust")} className="chapter chapter--center"><div><p className="chapter__eyebrow">Company · Ahmedabad, India</p><h2 className="chapter__title chapter__title--mid">From transport and insurance<br />to education and real estate.</h2><p className="chapter__side-note chapter__side-note--left">Founded by Kunj Joshi, AI Engineer and<br />Digital Infrastructure Architect.</p></div></section>
      <section ref={bind("unique")} className="chapter chapter--editorial"><div className="chapter__inner"><div className="chapter__heading-row"><p className="chapter__eyebrow">What makes us unique?</p><p className="chapter__side-note">One connected ecosystem.<br />Four distinct divisions.</p></div><ol className="chapter__list"><li><span className="chapter__list-index">01</span><span className="chapter__list-name">System-driven</span><span className="chapter__list-note">Services feed products and learning.</span></li><li><span className="chapter__list-index">02</span><span className="chapter__list-name">Intelligence-first</span><span className="chapter__list-note">AI for assessment and automation.</span></li><li><span className="chapter__list-index">03</span><span className="chapter__list-name">Built for scale</span><span className="chapter__list-note">Modular systems for institutions.</span></li></ol></div></section>

      <section id="services" ref={bind("services")} className="chapter chapter--editorial"><div className="chapter__inner"><div className="chapter__heading-row"><p className="chapter__eyebrow">What we make possible <span>01—07</span></p><p ref={bindPrice("services")} className="price-note">Services · starting at just ₹99</p></div><h2 className="chapter__title chapter__title--mid">BUILDING DIGITAL<br />POSSIBILITIES.</h2><p className="chapter__intro">Digital engineering, software, AI, brand and growth work for businesses and institutions.</p><ol className="chapter__list">{services.map((service, index) => <li key={service.id}><span className="chapter__list-index">{String(index + 1).padStart(2, "0")}</span><span className="chapter__list-name">{service.name}</span><span className="chapter__list-note">{service.note}</span></li>)}</ol><a className="chapter__cta" href={destinations.services}>Explore services <span>↗</span></a></div></section>

      <section id="academy" ref={bind("academy")} className="chapter chapter--editorial"><div className="chapter__inner"><div className="chapter__heading-row"><p className="chapter__eyebrow">TEMAHUX Academy</p><p ref={bindPrice("academy")} className="price-note">Academy · starting at just ₹49</p></div><h2 className="chapter__title chapter__title--mid">Learn.<br />Build. Create.</h2><p className="chapter__intro">Project-based learning in programming, AI, software and emerging technology—built around practice.</p><p className="academy-topics">{academyTracks.map((track) => track.name).join("  ·  ")}</p><a className="chapter__cta" href={destinations.academy}>Explore Academy <span>↗</span></a></div></section>

      <section id="products" ref={bind("products")} className="chapter chapter--editorial"><div className="chapter__inner"><div className="chapter__heading-row"><p className="chapter__eyebrow">TEMAHUX Products</p><p className="chapter__side-note">Tools made to solve<br />specific problems.</p></div><h2 className="chapter__title chapter__title--mid">Made to be used.</h2><ul className="chapter__list chapter__list--products">{products.map((product) => <li key={product.id}><span className="chapter__list-index">{product.index}</span><span className="chapter__list-name">{product.href ? <Link className="product-link" href={product.href} aria-label={`Learn about ${product.name} on TEMAHUX Products`}>{product.name} ↗</Link> : product.name}</span><span className="product-info"><span>{product.description}</span><small>{product.category} · {product.status}</small></span></li>)}</ul><Link className="chapter__cta" href={PRODUCTS_URL}>Discover our products <span>↗</span></Link></div></section>

      <section ref={bind("finale")} className="chapter chapter--finale"><div className="finale__content"><p className="chapter__eyebrow">TEMAHUX <span>· Ahmedabad, India</span></p><h2 className="finale__title">Where everything<br />is possible.</h2><p className="finale__tagline">A good idea can start here.</p><a className="finale__cta" href={`mailto:${brand.email}`}>Start a conversation <span>↗</span></a></div></section>
      <section ref={bind("footer")} className="chapter chapter--footer"><footer className="finale__footer"><a href="#origin" onClick={(event) => { event.preventDefault(); const lenis = getLenis(); lenis?.scrollTo(0, { duration: 1.1 }); if (window.location.hash !== "#origin") window.history.pushState(null, "", "#origin"); }}>TEMAHUX</a><a href={destinations.services}>Services</a><a href={destinations.academy}>Academy</a><span>© {new Date().getFullYear()} Temahux · Ahmedabad, India</span><a href={`mailto:${brand.email}`}>{brand.email}</a></footer></section>
    </div>
  );
}

export default Chapters;

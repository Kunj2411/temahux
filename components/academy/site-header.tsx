"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sites } from "@academy/lib/sites";

const topNav = [
  { label: "Classes", href: "/academy/classes" },
  { label: "Programs", href: "/academy/programs" },
  { label: "Learning", href: "/academy/learning" },
  { label: "Practice", href: "/academy/practice" },
  { label: "Projects", href: "/academy/projects" },
  { label: "STEM", href: "/academy/stem" },
  { label: "AI", href: "/academy/ai" },
  { label: "Resources", href: "/academy/resources" },
  { label: "Career", href: "/academy/career" },
  { label: "About", href: "/academy/about" },
  { label: "Services", href: sites.services },
];

type MenuLink = { title: string; description: string; href: string };

function containsNode(container: HTMLElement, target: EventTarget | null) {
  return typeof Node !== "undefined" && target instanceof Node && container.contains(target);
}

const megaMenu: Record<string, MenuLink[]> = {
  Classes: [
    { title: "STEM", description: "Explore science, math, and engineering through making.", href: "/academy/classes/stem" },
    { title: "Coding", description: "Build a strong foundation in Python and web development.", href: "/academy/classes/python" },
    { title: "Robotics", description: "Connect code, sensors, and physical systems.", href: "/academy/classes/robotics" },
    { title: "AI", description: "Understand models, data, and responsible AI.", href: "/academy/classes/artificial-intelligence" },
    { title: "AR / VR", description: "Design spatial and immersive experiences.", href: "/academy/classes/ar-vr" },
    { title: "Technology", description: "Explore the wider technology class catalog.", href: "/academy/classes/web-development" },
  ],
  Programs: [
    { title: "Explore all programs", description: "Structured journeys from foundations to applied projects.", href: "/academy/programs" },
    { title: "Popular pathways", description: "STEM Explorer, Young Coder, and Robotics Builder.", href: "/academy/programs" },
    { title: "AI and engineering", description: "Explore AI Explorer and Future Engineer.", href: "/academy/programs" },
    { title: "Roadmaps", description: "Connect a program to your next learning milestone.", href: "/academy/roadmaps" },
  ],
  Learning: [
    { title: "Learning", description: "Find your learning rhythm and subject areas.", href: "/academy/learning" },
    { title: "Practice", description: "Strengthen understanding with focused practice.", href: "/academy/practice" },
    { title: "Projects", description: "Apply new ideas through hands-on builds.", href: "/academy/projects" },
    { title: "Roadmaps", description: "See the stages between a goal and your next step.", href: "/academy/roadmaps" },
  ],
  Practice: [
    { title: "Practice library", description: "Browse guided challenges and learning activities.", href: "/academy/practice" },
    { title: "Projects", description: "Put concepts to work in practical builds.", href: "/academy/projects" },
    { title: "Classes", description: "Revisit the foundations behind each skill.", href: "/academy/classes" },
    { title: "Roadmaps", description: "Choose what to learn and practice next.", href: "/academy/roadmaps" },
  ],
  Projects: [
    { title: "Web", description: "Explore interfaces, apps, and the open web.", href: "/academy/projects" },
    { title: "AI", description: "Build thoughtful experiments with AI systems.", href: "/academy/ai" },
    { title: "Robotics", description: "Explore automation, movement, and sensors.", href: "/academy/robotics" },
    { title: "STEM and data", description: "Turn questions into experiments and evidence.", href: "/academy/stem" },
    { title: "AR / VR", description: "Create interactive, spatial experiences.", href: "/academy/ar-vr" },
    { title: "Automation", description: "Connect tools and logic to solve useful problems.", href: "/academy/projects" },
  ],
  STEM: [
    { title: "STEM Foundations", description: "Build confidence with science and engineering ideas.", href: "/academy/classes/stem" },
    { title: "STEM projects", description: "Explore experiments and practical challenges.", href: "/academy/projects" },
    { title: "STEM Explorer", description: "Follow a broader interdisciplinary program.", href: "/academy/programs/stem-explorer" },
    { title: "Learning paths", description: "Browse classes, programs, and roadmaps.", href: "/academy/learning" },
  ],
  AI: [
    { title: "AI Foundations", description: "Learn how AI systems use data and models.", href: "/academy/classes/artificial-intelligence" },
    { title: "Generative AI", description: "Explore responsible creative applications of AI.", href: "/academy/ai" },
    { title: "Machine Learning", description: "Build intuition for training and evaluating models.", href: "/academy/ai" },
    { title: "Computer Vision", description: "Explore how systems interpret images and scenes.", href: "/academy/ai" },
    { title: "AI Agents and projects", description: "Discover practical AI builds and experiments.", href: "/academy/projects" },
  ],
};

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current || !containsNode(headerRef.current, event.target)) setActiveMenu(null);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="nav-shell">
        <Link href={sites.main} className="brand" aria-label="Temahux home">
          <span className="brand-symbol-frame"><Image src="/assets/academy/favicon.png" alt="" width={64} height={64} className="brand-symbol" /></span>
          <Image src="/assets/academy/temahux-wordmark.png" alt="TEMAHUX" width={178} height={40} className="brand-wordmark-image" />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {topNav.map((item) => (
            <div
              key={item.label}
              className="nav-item-wrap"
              onPointerEnter={() => setActiveMenu(megaMenu[item.label] ? item.label : null)}
              onPointerLeave={(event) => {
                if (!containsNode(event.currentTarget, event.relatedTarget)) setActiveMenu(null);
              }}
              onFocusCapture={() => setActiveMenu(megaMenu[item.label] ? item.label : null)}
              onBlur={(event) => {
                if (!containsNode(event.currentTarget, event.relatedTarget)) setActiveMenu(null);
              }}
            >
              <Link
                href={item.href}
                className="nav-item"
                aria-haspopup={megaMenu[item.label] ? "true" : undefined}
                aria-expanded={megaMenu[item.label] ? activeMenu === item.label : undefined}
                aria-controls={megaMenu[item.label] ? `menu-${item.label.toLowerCase()}` : undefined}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" && megaMenu[item.label]) {
                    event.preventDefault();
                    setActiveMenu(item.label);
                    requestAnimationFrame(() => requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#menu-${item.label.toLowerCase()} a`)?.focus()));
                  }
                }}
              >
                {item.label}
              </Link>
              {megaMenu[item.label as keyof typeof megaMenu] ? (
                <div
                  id={`menu-${item.label.toLowerCase()}`}
                  className={`nav-dropdown ${activeMenu === item.label ? "is-open" : ""}`}
                  onClick={(event) => {
                    if (event.target === event.currentTarget) setActiveMenu(null);
                  }}
                >
                  <div className="dropdown-heading">
                    <span className="eyebrow">Explore {item.label}</span>
                    <Link href={item.href} className="dropdown-all">View all <span aria-hidden="true">→</span></Link>
                  </div>
                  <div className="dropdown-grid">
                    {megaMenu[item.label].map((entry) => (
                      <Link key={entry.title} href={entry.href} className="dropdown-link" onClick={() => setActiveMenu(null)}>
                        <span className="dropdown-link-title">{entry.title}</span>
                        <span className="dropdown-link-description">{entry.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/academy/signup" className="button button-primary button-small">Start Free</Link>
          <button className="menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="mobile-panel" aria-label="Mobile navigation">
          <div className="mobile-links">
            {topNav.map((item) => (
              <div key={item.label} className="mobile-nav-group">
                <div className="mobile-nav-row">
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  {megaMenu[item.label] ? (
                    <button
                      type="button"
                      aria-label={`${mobileMenu === item.label ? "Collapse" : "Expand"} ${item.label} menu`}
                      aria-expanded={mobileMenu === item.label}
                      onClick={() => setMobileMenu((current) => current === item.label ? null : item.label)}
                    >{mobileMenu === item.label ? "−" : "+"}</button>
                  ) : null}
                </div>
                {mobileMenu === item.label ? (
                  <div className="mobile-submenu">
                    {megaMenu[item.label]?.map((entry) => (
                      <Link key={entry.title} href={entry.href} onClick={() => setMobileOpen(false)}>{entry.title}</Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link href="/academy/signup" className="mobile-start" onClick={() => setMobileOpen(false)}>Start Free</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "@services/components/ui/Logo";
import {
  ctaLink,
  companyColumn,
  mainSiteUrl,
  practiceNav,
  productsColumn,
  topLevelNav,
  type PracticeIcon,
} from "@services/lib/site";

/* ---------------------------------------------------------------------- *
 * Geometric practice marks — 1px strokes, no filled illustration.
 * ---------------------------------------------------------------------- */
const ICONS: Record<PracticeIcon, React.ReactNode> = {
  build: (
    <>
      <rect x="3" y="3" width="9" height="9" rx="1" />
      <rect x="12" y="12" width="9" height="9" rx="1" />
    </>
  ),
  grow: (
    <>
      <path d="M3 18 L9 12 L13 15 L21 6" />
      <path d="M15 6 H21 V12" />
    </>
  ),
  automate: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21" />
    </>
  ),
  operate: (
    <>
      <path d="M3 7 H21 M3 12 H21 M3 17 H14" />
      <circle cx="18" cy="17" r="3" />
    </>
  ),
};

function PracticeGlyph({ name }: { name: PracticeIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-5 w-5 shrink-0"
    >
      {ICONS[name]}
    </svg>
  );
}
const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function titleCase(v: string) {
  return v.charAt(0) + v.slice(1).toLowerCase();
}

type MenuKey = "services" | "company" | "products";

const MENUS: { key: MenuKey; label: string }[] = [
  { key: "services", label: "Services" },
  { key: "company", label: "Company" },
  { key: "products", label: "Solutions" },
];

const MOBILE_GROUPS = [
  {
    title: "Services",
    links: practiceNav.map((p) => ({ label: titleCase(p.label), href: p.href })),
  },
  { title: "Company", links: companyColumn.links },
  { title: "Products", links: productsColumn.links },
  { title: "More", links: topLevelNav },
];

/** Elements that can receive focus inside the open mobile panel. */
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  return <NavbarContent key={pathname} pathname={pathname} />;
}

function NavbarContent({ pathname }: { pathname: string }) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Border appears on the pill once the page has scrolled. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside click closes; Escape closes and returns focus to the trigger. */
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (headerRef.current?.contains(target)) return;
      setOpenMenu(null);
      setMobileOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        burgerRef.current?.focus();
      }
      if (openMenu) {
        setOpenMenu(null);
        headerRef.current
          ?.querySelector<HTMLElement>('[data-menu-trigger][aria-expanded="true"]')
          ?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu, mobileOpen]);

  /* Body scroll lock while the mobile panel is open. */
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  /* Focus trap + initial focus for the mobile panel. */
  useEffect(() => {
    if (!mobileOpen) return;
    const node = panelRef.current;
    if (!node) return;

    node.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = Array.from(
        node.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (items.length === 0) return;

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(
    () => () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    },
    []
  );

  const openOnHover = useCallback((key: MenuKey) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(key), 90);
  }, []);

  const closeOnHover = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (
          !(nextTarget instanceof Element) ||
          (!nextTarget.closest("[data-menu-trigger]") &&
            !nextTarget.closest("#tx-mega-panel"))
        ) {
          setOpenMenu(null);
        }
      }}
      className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div
        className={`relative mx-auto w-full max-w-[1280px] rounded-full border bg-tx-white px-3 transition-colors duration-300 sm:px-4 ${
          scrolled ? "border-tx-line" : "border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-1.5">
          <Link
            href={mainSiteUrl}
            aria-label="Temahux — home"
            className="shrink-0 rounded-full px-1 py-1"
          >
            <Logo />
          </Link>

          {/* Desktop */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {MENUS.map((menu) => {
                const open = openMenu === menu.key;
                return (
                  <li
                    key={menu.key}
                    onMouseEnter={() => openOnHover(menu.key)}
                    onMouseLeave={closeOnHover}
                  >
                    <button
                      type="button"
                      data-menu-trigger={menu.key}
                      aria-expanded={open}
                      aria-controls="tx-mega-panel"
                      aria-haspopup="true"
                      onFocus={() => setOpenMenu(menu.key)}
                      onClick={() =>
                        setOpenMenu(open ? null : menu.key)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Escape" && open) {
                          event.stopPropagation();
                          setOpenMenu(null);
                        }
                      }}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] transition-colors duration-200 ${
                        open
                          ? "bg-tx-base-2 text-tx-ink"
                          : "text-tx-ink-soft hover:text-tx-ink"
                      }`}
                    >
                      {menu.label}
                      <Chevron open={open} />
                    </button>
                  </li>
                );
              })}

              {topLevelNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2.5 text-[15px] transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-tx-ink"
                        : "text-tx-ink-soft hover:text-tx-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={ctaLink.href}
              className="tx-btn tx-btn-primary hidden !min-h-[40px] !px-5 !py-2 text-[14px] sm:inline-flex"
            >
              {ctaLink.label}
            </Link>

            <button
              ref={burgerRef}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-tx-line text-tx-ink lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="tx-mobile-panel"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
                focusable="false"
                className="h-5 w-5"
              >
                {mobileOpen ? (
                  <path d="M6 6 L18 18 M18 6 L6 18" />
                ) : (
                  <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Four-column mega panel — opens on click or hover. */}
        {openMenu && (
          <div
            id="tx-mega-panel"
            onMouseEnter={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current);
            }}
            onMouseLeave={closeOnHover}
            className="tx-desktop-menu-in pointer-events-auto absolute left-1/2 top-full z-50 hidden w-[min(1120px,calc(100vw-48px))] -translate-x-1/2 lg:block"
          >
            <div className="rounded-panel border border-tx-line bg-tx-white p-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="tx-eyebrow text-tx-ink-soft">Services</p>
                  <ul className="mt-4 space-y-1">
                    {practiceNav.map((practice) => (
                      <li key={practice.href}>
                        <Link
                          href={practice.href}
                          className="flex items-start gap-3 rounded-tile px-3 py-2.5 transition-colors duration-200 hover:bg-tx-base-2"
                        >
                          <span className="mt-0.5 text-tx-brand">
                            <PracticeGlyph name={practice.icon} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[15px] font-medium text-tx-ink">
                              {titleCase(practice.label)}
                            </span>
                            <span className="mt-0.5 block font-mono text-[10px] uppercase leading-[1.5] tracking-[0.14em] text-tx-ink-soft">
                              {practice.theme}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <MegaColumn column={companyColumn} />
                <MegaColumn column={productsColumn} />

                <div>
                  <p className="tx-eyebrow text-tx-ink-soft">More</p>
                  <ul className="mt-4 space-y-1">
                    {topLevelNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-tile px-3 py-2.5 text-[15px] text-tx-ink transition-colors duration-200 hover:bg-tx-base-2"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ctaLink.href}
                    className="tx-btn tx-btn-primary mt-6 w-full !min-h-[42px] text-[14px]"
                  >
                    {ctaLink.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile panel — grouped, focus-trapped, Escape-dismissible. */}
      {mobileOpen && (
        <div
          id="tx-mobile-panel"
          ref={panelRef}
          className="tx-mobile-menu-in mx-auto mt-3 w-full max-w-[1280px] rounded-panel border border-tx-line bg-tx-white p-5 lg:hidden"
        >
          <nav aria-label="Mobile" className="max-h-[70vh] overflow-y-auto">
            {MOBILE_GROUPS.map((group) => (
              <section
                key={group.title}
                aria-labelledby={`mob-${group.title.toLowerCase()}`}
                className="border-b border-tx-line py-4 last:border-b-0"
              >
                <h2
                  id={`mob-${group.title.toLowerCase()}`}
                  className="tx-eyebrow text-tx-ink-soft"
                >
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-tile px-3 py-2.5 text-[16px] text-tx-ink transition-colors duration-200 hover:bg-tx-base-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="pt-5">
              <Link
                href={ctaLink.href}
                className="tx-btn tx-btn-primary w-full"
              >
                {ctaLink.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MegaColumn({ column }: { column: { title: string; links: { label: string; href: string }[] } }) {
  return (
    <div>
      <p className="tx-eyebrow text-tx-ink-soft">{column.title}</p>
      <ul className="mt-4 space-y-1">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-tile px-3 py-2.5 text-[15px] text-tx-ink transition-colors duration-200 hover:bg-tx-base-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Single source of truth for the /services experience.
 *
 * EVERYTHING rendered inside /services reads from this file. Prices, FAQs,
 * process stages and capabilities are defined exactly once so the visible
 * page and the JSON-LD schema cannot drift apart.
 *
 * Content rules applied here:
 *  - No invented clients, testimonials, statistics, certifications, awards,
 *    revenue, case studies or performance metrics.
 *  - Anything that does not exist yet is marked with a `// [CONTENT NEEDED]`
 *    code comment. The marker is never rendered.
 */

/**
 * Canonical site URL used by the JSON-LD blocks.
 *
 * Was `https://temahux.tech`, which contradicted `robots.ts`, `sitemap.ts`,
 * the official company profile and the deployment docs — all of which say
 * `temahux.com`. Aligned to `.com` so every canonical agrees.
 */
export const siteUrl = "https://services.temahux.com";

/* -------------------------------------------------------------------------
 * Practices
 * ---------------------------------------------------------------------- */

export type PracticeSlug = "build" | "grow" | "automate" | "operate";

export interface Capability {
  name: string;
  description: string;
  /**
   * "coming-soon" renders an explicit label instead of implying the service
   * is available today. Used only where no service content exists yet.
   */
  status?: "available" | "coming-soon";
}

export interface CapabilityGroup {
  title: string;
  items: Capability[];
}

export interface Practice {
  slug: PracticeSlug;
  /** Mono index rendered beside the practice label. */
  index: string;
  label: string;
  /** The practice's theme line, e.g. "IDEA -> PRODUCT -> RUNNING SYSTEM". */
  theme: string;
  headline: string;
  description: string;
  groups: CapabilityGroup[];
  /** Honest stand-in for a case study while none is publishable. */
  workNote: string;
  ctaLabel: string;
  ctaHref: string;
}

export const practices: Practice[] = [
  {
    slug: "build",
    index: "01",
    label: "BUILD",
    theme: "IDEA → PRODUCT → RUNNING SYSTEM",
    headline: "From an idea to something running.",
    description:
      "Websites, applications and e-commerce systems — taken from a rough brief to a live product your team can actually operate. We handle the technology end to end, so you receive a working system rather than a set of files.",
    groups: [
      {
        title: "Build",
        items: [
          {
            name: "Web platforms",
            description:
              "business websites, landing pages and multi-page platforms, mobile-responsive from the first build",
          },
          {
            name: "E-commerce systems",
            description:
              "product catalogue, payment gateway and order management",
          },
          {
            name: "Custom web applications",
            description: "internal tools and customer-facing apps",
          },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            name: "APIs & integrations",
            description: "connecting the systems you already run",
          },
          {
            name: "Software modernization",
            description: "rebuilding or untangling what exists",
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "Technical foundations",
            description:
              "SEO setup and analytics configuration, included rather than bolted on",
          },
        ],
      },
    ],
    // [CONTENT NEEDED] No verified Build case study exists in this codebase.
    workNote: "Relevant work — awaiting verified case studies.",
    ctaLabel: "View all Build capabilities",
    ctaHref: "/services/build",
  },
  {
    slug: "grow",
    index: "02",
    label: "GROW",
    theme: "UNKNOWN → VISIBLE → TRUSTED → GROWING",
    headline: "Be findable, then be worth finding.",
    description:
      "Brand identity, design and ongoing visibility. We make you legible to the people you want to reach — and then keep working on the signals that bring them back.",
    groups: [
      {
        title: "Identity & design",
        items: [
          {
            name: "Brand identity",
            description: "logo, colour, type and a usable set of guidelines",
          },
          {
            name: "UI/UX & design systems",
            description: "interfaces that hold together as products grow",
          },
        ],
      },
      {
        title: "Visibility",
        items: [
          {
            name: "Technical SEO",
            description: "structure, metadata and search setup",
          },
          {
            name: "Paid campaigns",
            description: "search and social campaigns with tracking in place",
          },
          {
            name: "Social media management",
            description:
              "from ₹5,000/month: 20 posts, caption writing, hashtag strategy, profile optimisation and monthly analytics across Instagram, Facebook, LinkedIn and Twitter",
          },
          {
            name: "Content & email",
            description: "ongoing material and campaigns",
          },
        ],
      },
    ],
    // [CONTENT NEEDED] No verified Grow case study exists in this codebase.
    workNote: "Relevant work — awaiting verified case studies.",
    ctaLabel: "View all Grow capabilities",
    ctaHref: "/services/grow",
  },
  {
    slug: "automate",
    index: "03",
    label: "AUTOMATE",
    theme: "MANUAL WORK → SYSTEM → AUTOMATED WORKFLOW",
    headline: "Take the repetition out of the week.",
    description:
      "AI and workflow automation for the tasks people do manually because nobody has had time to remove them. We start with the work itself, then automate the part that doesn't need a person.",
    groups: [
      {
        title: "Conversations",
        items: [
          {
            name: "AI chatbots & assistants",
            description: "answering, routing and handling first-line questions",
          },
          {
            name: "WhatsApp automation",
            description: "moving enquiries off a personal inbox into a system",
          },
        ],
      },
      {
        title: "Operations",
        items: [
          {
            name: "Lead capture systems",
            description: "capturing, organising and following up",
          },
          {
            name: "Document & workflow automation",
            description: "moving data between forms, sheets and systems",
          },
        ],
      },
      {
        title: "Integrations",
        items: [
          {
            name: "Custom AI integrations",
            description: "connecting AI capability to the tools you already use",
          },
        ],
      },
    ],
    // [CONTENT NEEDED] No verified Automate case study exists in this codebase.
    workNote: "Relevant work — awaiting verified case studies.",
    ctaLabel: "View all Automate capabilities",
    ctaHref: "/services/automate",
  },
  {
    slug: "operate",
    index: "04",
    label: "OPERATE",
    theme: "CHAOTIC → STRUCTURED → SYSTEMATIC",
    headline: "Keep it running after it launches.",
    description:
      "Launch is a milestone, not the finish. We provide structured support and maintenance so the system you invested in keeps working — and keep working as the business around it changes.",
    groups: [
      {
        title: "Included with every build",
        items: [
          {
            name: "Post-launch support",
            description:
              "included with every build: 1 month for starter websites, 3 months for business websites, 6 months for e-commerce stores. Covers bug fixes, minor updates and technical assistance.",
          },
        ],
      },
      {
        title: "Hosting & maintenance",
        items: [
          {
            name: "Maintenance & hosting coordination",
            description:
              "we help you set up reliable hosting (Vercel, Netlify or traditional providers) and manage it. Hosting is billed separately, typically ₹500–2,000/month.",
          },
        ],
      },
      {
        /*
         * OPERATE has almost no existing service content. Do not invent
         * consulting, training, recruitment or events services — these ship
         * labelled as coming soon.
         *
         * [CONTENT NEEDED] Technical consulting scope.
         * [CONTENT NEEDED] Team training scope.
         * [CONTENT NEEDED] Managed platform operation scope.
         */
        title: "Coming soon",
        items: [
          {
            name: "Technical consulting",
            description:
              "advisory work scoped around systems already in production",
            status: "coming-soon",
          },
          {
            name: "Team training",
            description: "handover sessions for the team operating the system",
            status: "coming-soon",
          },
          {
            name: "Managed platform operation",
            description: "running the platform day to day on your behalf",
            status: "coming-soon",
          },
        ],
      },
    ],
    // [CONTENT NEEDED] No verified Operate case study exists in this codebase.
    workNote: "Relevant work — awaiting verified case studies.",
    ctaLabel: "Talk to Temahux",
    ctaHref: "#talk",
  },
];

export function getPractice(slug: PracticeSlug): Practice {
  const practice = practices.find((item) => item.slug === slug);
  if (!practice) {
    throw new Error(`Unknown practice slug: ${slug}`);
  }
  return practice;
}

/* -------------------------------------------------------------------------
 * The problem — intent self-selection
 * ---------------------------------------------------------------------- */

export interface Intent {
  statement: string;
  practice: PracticeSlug;
}

/**
 * The approved copy contains six intent statements, not seven. No seventh
 * exists in verified content, so none was invented.
 */
export const problemIntents: Intent[] = [
  { statement: "I have an idea and no technical team.", practice: "build" },
  { statement: "I need to launch something.", practice: "build" },
  {
    statement: "I have a product and no digital presence that works.",
    practice: "grow",
  },
  { statement: "Nobody can find us.", practice: "grow" },
  {
    statement: "My team repeats the same work every week.",
    practice: "automate",
  },
  {
    statement: "Our systems are becoming hard to manage.",
    practice: "operate",
  },
];

/* -------------------------------------------------------------------------
 * How we work — exactly ONE process model on the site
 * ---------------------------------------------------------------------- */

export interface ProcessStage {
  index: string;
  name: string;
  description: string;
  output: string;
  duration: string;
}

export const processStages: ProcessStage[] = [
  {
    index: "01",
    name: "Scope",
    description:
      "We find out what you're actually trying to do, what's already in place, and what would make this a success.",
    output: "a written scope with defined deliverables",
    duration: "1 week",
  },
  {
    index: "02",
    name: "Design",
    description:
      "We design the system before we build it — structure, screens, flows and the technical approach.",
    output:
      "something you can review and change while changes are still cheap",
    duration: "1–2 weeks",
  },
  {
    index: "03",
    name: "Build",
    description:
      "We build in visible increments rather than a single reveal, so you see progress and can redirect early.",
    output: "a working system, not a prototype",
    duration: "1–4 weeks, by scope",
  },
  {
    index: "04",
    name: "Launch",
    description:
      "We deploy, configure, verify and hand over. Your team gets the documentation and the walkthrough.",
    output: "a live system",
    duration: "2–3 days",
  },
  {
    index: "05",
    name: "Support",
    description:
      "Every build includes a support window — 1, 3 or 6 months depending on tier.",
    output: "a system that keeps working",
    duration: "1, 3 or 6 months",
  },
];

/* -------------------------------------------------------------------------
 * Pricing — ONE table, one source of truth
 * ---------------------------------------------------------------------- */

/**
 * The canonical published pricing. This is the only place prices exist.
 *
 * [CONTENT NEEDED] ₹6,000 (Business Website) and ₹12,000+ (E-Commerce Store)
 * appear only in the retired services-page preview and in no other source.
 * They are NOT part of the canonical table and must not be published.
 */
export type PriceTier = "project" | "retainer" | "scoped";

export interface PricingRow {
  service: string;
  /** Pre-formatted display value, e.g. "₹3,000+". */
  price: string;
  /** Numeric value for JSON-LD. Null for "Custom". */
  amount: number | null;
  currency: "INR";
  tier: PriceTier;
  /** Human label for the buying decision. */
  tierLabel: string;
  detail: string;
  href: string;
}

export const pricingTiers: {
  id: PriceTier;
  label: string;
  note: string;
}[] = [
  {
    id: "project",
    label: "Project entry points",
    note: "One defined build, one price, one end point.",
  },
  {
    id: "retainer",
    label: "Monthly retainers",
    note: "Continuous work, billed month to month.",
  },
  {
    id: "scoped",
    label: "Scoped",
    note: "Priced to scope. Every one of these is different.",
  },
];

export const pricing: PricingRow[] = [
  {
    service: "Web Development",
    price: "₹3,000+",
    amount: 3000,
    currency: "INR",
    tier: "project",
    tierLabel: "Entry point",
    detail: "Websites, landing pages and e-commerce systems, mobile-responsive.",
    href: "/services/web-development",
  },
  {
    service: "Branding & Design",
    price: "₹8,000+",
    amount: 8000,
    currency: "INR",
    tier: "project",
    tierLabel: "Entry point",
    detail: "Logo, identity and the visual system around it.",
    href: "/services/branding-design",
  },
  {
    service: "AI Automation",
    price: "₹15,000+",
    amount: 15000,
    currency: "INR",
    tier: "project",
    tierLabel: "Entry point",
    detail: "Chatbots, WhatsApp automation, lead capture and integrations.",
    href: "/services/ai-automation",
  },
  {
    service: "Social Media Management",
    price: "₹5,000/month",
    amount: 5000,
    currency: "INR",
    tier: "retainer",
    tierLabel: "Monthly",
    detail:
      "20 posts, caption writing, hashtag strategy, profile optimisation and monthly analytics.",
    href: "/services/social-media-management",
  },
  {
    service: "Digital Marketing",
    price: "₹10,000/month",
    amount: 10000,
    currency: "INR",
    tier: "retainer",
    tierLabel: "Monthly",
    detail: "Search and social campaigns with tracking in place.",
    href: "/services/digital-marketing",
  },
  {
    service: "Larger programmes",
    price: "Custom",
    amount: null,
    currency: "INR",
    tier: "scoped",
    tierLabel: "Scoped",
    detail: "Multi-system or organisation-wide work, priced to scope.",
    href: "/services/contact-consultation",
  },
];

/* -------------------------------------------------------------------------
 * Operational facts — verified, and currently buried in an accordion
 * ---------------------------------------------------------------------- */

export interface OperationalFact {
  label: string;
  value: string;
}

export const operationalFacts: OperationalFact[] = [
  { label: "Payment", value: "50% to begin · 50% on completion" },
  { label: "Methods", value: "Bank transfer · UPI · cards" },
  { label: "Hosting", value: "Separate · typically ₹500–2,000/month" },
  { label: "Support", value: "1 month starter · 3 months business · 6 months e-commerce" },
];

export interface Timeline {
  scope: string;
  duration: string;
}

export const timelines: Timeline[] = [
  { scope: "Starter website (3 pages)", duration: "1–2 weeks" },
  { scope: "Business website (5+ pages)", duration: "2–3 weeks" },
  { scope: "E-commerce store", duration: "4–6 weeks" },
];

export const supportTiers: Timeline[] = [
  { scope: "Starter website", duration: "1 month" },
  { scope: "Business website", duration: "3 months" },
  { scope: "E-commerce store", duration: "6 months" },
];

export const hosting = {
  separate: true,
  range: "₹500–2,000 per month",
  providers: ["Vercel", "Netlify", "traditional hosting"],
  note: "Temahux helps set it up.",
};

/* -------------------------------------------------------------------------
 * Technologies
 * ---------------------------------------------------------------------- */

/**
 * Only claim what is claimed today.
 *
 * [CONTENT NEEDED] WordPress and Shopify are listed as "claimed" in the
 * verified content but are flagged for confirmation. They are deliberately
 * NOT featured here.
 */
export const technologies: string[] = [
  "React",
  "Next.js",
  "Node.js",
  "AI APIs",
];

/* -------------------------------------------------------------------------
 * FAQ — the 5 real questions. Rendered once, serialised from this array.
 * ---------------------------------------------------------------------- */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How long does a website project take?",
    answer:
      "A typical website project takes 2-4 weeks from start to launch. Starter websites (3 pages) usually take 1-2 weeks, while business websites (5+ pages) take 2-3 weeks. E-commerce stores with custom features may take 4-6 weeks.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "Yes, we provide hosting assistance and can help you set up reliable hosting with providers like Vercel, Netlify, or traditional hosting services. Hosting costs typically range from ₹500-2,000 per month depending on your needs.",
  },
  {
    question: "Can you manage social media monthly?",
    answer:
      "Absolutely! Our social media management service starts at ₹5,000/month and includes 20 posts, caption writing, hashtag strategy, profile optimization, and monthly analytics. We handle Instagram, Facebook, LinkedIn, and Twitter.",
  },
  {
    question: "Do you offer AI automation services?",
    answer:
      "Yes! Our AI automation services start at ₹15,000 and include AI chatbots, WhatsApp automation, lead capture systems, AI content assistants, and custom integrations using cutting-edge AI technologies.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! All our packages include post-launch support. Starter websites include 1 month of support, business websites include 3 months, and e-commerce stores include 6 months. Support covers bug fixes, minor updates, and technical assistance.",
  },
];

/* -------------------------------------------------------------------------
 * Engagement models
 * ---------------------------------------------------------------------- */

export interface EngagementModel {
  index: string;
  name: string;
  summary: string;
  body: string;
  from: string;
}

export const engagementModels: EngagementModel[] = [
  {
    index: "01",
    name: "PROJECT",
    summary: "a defined build",
    body: "A specific piece of work with a clear scope, a fixed price and an end point. Websites, applications, e-commerce systems, brand identities, automation.",
    from: "From ₹3,000",
  },
  {
    index: "02",
    name: "RETAINER",
    summary: "ongoing support",
    body: "Continuous technology and growth work, month to month. Social media management from ₹5,000/month, digital marketing from ₹10,000/month. Post-launch support and maintenance for systems we've already built.",
    from: "From ₹5,000/month",
  },
  {
    index: "03",
    name: "SCOPED",
    summary: "larger programmes",
    body: "Multi-system or organisation-wide work, priced to scope. Nothing published because every one of these is different.",
    from: "Custom",
  },
];

export const engagementNote =
  "Also worth knowing: we ask for 50% to begin and 50% on completion. Bank transfer, UPI and cards all work.";

/* -------------------------------------------------------------------------
 * Page copy — approved verbatim
 * ---------------------------------------------------------------------- */

export const conversionLabel = "Talk to Temahux";

/**
 * Section 05 of the IA ("What we build").
 *
 * [CONTENT NEEDED] The approved copy block for this section was not supplied.
 * The heading below makes no claim beyond the verified capability data it
 * introduces; no deliverable, metric or client is invented.
 */
export const deliverablesCopy = {
  eyebrow: "What we build",
  heading: "Web, brand, growth, automation, operate.",
  intro:
    "Five disciplines, one team. Every line below resolves to a capability already declared on a practice above — this is a re-grouping, not an extra list.",
};

/* -------------------------------------------------------------------------
 * Section 05 — discipline inventory
 * ---------------------------------------------------------------------
 */

/**
 * The practice grouping is the marketing story; section 05 needs the SAME
 * verified capabilities regrouped by discipline. This mapping resolves
 * against `practices` at module load rather than restating any copy, so a
 * capability description stays defined in exactly one place.
 *
 * Anything marked `status: "coming-soon"` is filtered out, so this inventory
 * can never advertise a capability that is not available today.
 */
const disciplineSources: { title: string; sources: [PracticeSlug, string][] }[] = [
  {
    title: "WEB",
    sources: [
      ["build", "Build"],
      ["build", "Connect"],
    ],
  },
  {
    title: "BRAND",
    sources: [["grow", "Identity & design"]],
  },
  {
    title: "GROWTH",
    sources: [
      ["grow", "Visibility"],
      ["build", "Foundations"],
    ],
  },
  {
    title: "AUTOMATION",
    sources: [
      ["automate", "Conversations"],
      ["automate", "Operations"],
      ["automate", "Integrations"],
    ],
  },
  {
    title: "OPERATE",
    sources: [
      ["operate", "Included with every build"],
      ["operate", "Hosting & maintenance"],
    ],
  },
];

export const capabilityGroups: CapabilityGroup[] = disciplineSources.map(
  ({ title, sources }) => ({
    title,
    items: sources.flatMap(([slug, groupTitle]) => {
      const practice = practices.find((entry) => entry.slug === slug);
      const group = practice?.groups.find((entry) => entry.title === groupTitle);
      return (group?.items ?? []).filter((item) => item.status !== "coming-soon");
    }),
  })
);

export const heroCopy = {
  eyebrow: "TEMAHUX SERVICES",
  headline: "We build what your business runs on.",
  subheadline:
    "Four practices — Build, Grow, Automate, Operate. One team taking a system from a first idea to production, and keeping it running after launch.",
  primaryCta: "Talk to Temahux",
  secondaryCta: "See what we build",
};

export const problemCopy = {
  eyebrow: "The problem",
  heading: "Where most teams get stuck",
  intro: "You already know what's broken. The gap is usually somewhere else.",
  closing:
    "Four practices. Pick the one that matches the problem, not the one that matches a service list.",
};

export const processCopy = {
  eyebrow: "How we work",
  heading: "Five stages, and you know which one you're in.",
  intro:
    "Most process pages describe activities. This one describes what you receive and when.",
};

export const workCopy = {
  eyebrow: "Selected work",
  heading: "Case studies are being documented.",
  intro:
    "We publish projects we can evidence. Where a measurable result exists, we state it. Where it doesn't, we say what was delivered and leave it there.",
  emptyState: "awaiting verified case studies",
  emptyStateDetail:
    "Nothing published here yet. We only list work we can evidence, so this section stays empty until the first verified case study is cleared for publication.",
  emptyStateCta: conversionLabel,
  emptyStateCtaHref: "/services/contact-consultation",
};

export const engagementCopy = {
  eyebrow: "Working together",
  heading: "Three ways to work with us.",
};

export const pricingCopy = {
  eyebrow: "Pricing",
  heading: "Real numbers.",
  intro:
    "Published entry points and monthly rates, in INR. The final figure depends on scope — these are where a project starts, not a quote.",
  closing:
    'Not hidden behind "contact us for pricing." If a number is published, we stand behind it.',
  faqHeading: "Operational questions",
};

export const finalCtaCopy = {
  eyebrow: "Talk to Temahux",
  heading: "Tell us what you're trying to build.",
  body:
    "Send the problem, not a brief. What the system needs to do, what's in the way, and roughly when you need it working. We'll tell you honestly whether we're the right fit — including when the answer is that you don't need us yet.",
  primaryCta: "Talk to Temahux",
  secondaryPricing: "See pricing",
  secondaryWork: "See selected work",
};

/**
 * Content for the single continuous experience.
 *
 * Sourced from the TEMAHUX company profile. Every service, track and product
 * listed here is real. Nothing is invented to fill space.
 */

export interface ServiceEntry {
  id: string;
  name: string;
  /** One short line. Written to be read while moving, never a paragraph. */
  note: string;
}

export const services: readonly ServiceEntry[] = [
  { id: "web", name: "Digital Engineering & Software", note: "Web, mobile, UI/UX and software platforms." },
  { id: "commerce", name: "E-Commerce & Platforms", note: "Online stores and digital business platforms." },
  { id: "branding", name: "Brand, Marketing & Growth", note: "Identity, campaigns, SEO and outreach." },
  { id: "social", name: "Personal Brand, Media & Social", note: "Strategy, content, video and channel management." },
  { id: "growth", name: "Corporate, Events & Enterprise", note: "Technology, hiring, learning and event support." },
  { id: "ai", name: "AI Automation & Applied AI", note: "Assessment, document AI and workflow automation." },
  { id: "creator", name: "Consulting & Strategy", note: "Business, technology and AI adoption roadmaps." },
] as const;

export interface AcademyTrack {
  id: string;
  name: string;
}

export const academyTracks: readonly AcademyTrack[] = [
  { id: "programming", name: "Python & Programming" },
  { id: "ai", name: "AI, ML & Robotics" },
  { id: "web", name: "Web & Software" },
  { id: "mobile", name: "Mobile Development" },
  { id: "spatial", name: "AR / VR & Spatial" },
  { id: "projects", name: "Projects & Internships" },
] as const;

export interface AcademyStep {
  id: string;
  word: string;
  note: string;
}

export const academySteps: readonly AcademyStep[] = [
  { id: "learn", word: "Learn", note: "Fundamentals that hold." },
  { id: "build", word: "Build", note: "Ship something real." },
  { id: "create", word: "Create", note: "Own the outcome." },
] as const;

export const destinations = {
  services: "/services",
  academy: "/academy",
  products: "/services/products/",
} as const;

export const brand = {
  name: "TEMAHUX",
  line: "where everything is possible.",
  email: "kunj.joshi@temahux.com",
  site: "https://temahux.com",
  location: "Gandhinagar, India",
} as const;

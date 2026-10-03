/**
 * Case studies for the /services "Selected work" section.
 *
 * This array is intentionally EMPTY.
 *
 * Verified state of the codebase: none of the projects referenced anywhere in
 * `src/` can be evidenced. The four former portfolio entries ("E-Commerce
 * Platform", "Brand Identity System", "Social Media Campaign", "AI Chatbot
 * Integration") were category placeholders rendered with a lucide icon
 * standing in for an image, and have been deleted.
 *
 * [CONTENT NEEDED] Verified case studies — client, project type, problem,
 * what was built, technology, status, and a measurable outcome only where a
 * real one exists.
 *
 * `WorkRows` renders an honest empty state while this is empty. Do not
 * populate it with placeholders.
 */

/** The only status lines permitted for an entry in this array. */
export type WorkStatus =
  | "Delivered platform"
  | "Live website"
  | "Prototype"
  | "Product in development";

export interface CaseStudy {
  /** Stable slug, used for the row's anchor and key. */
  slug: string;
  /** Client name, or "Client work" when the client is not disclosed. */
  client: string;
  projectType: string;
  /** The problem, in one sentence. */
  problem: string;
  /** What we built. */
  built: string;
  technologies: string[];
  status: WorkStatus;
  /**
   * Set ONLY when a real, measured outcome exists. `undefined` renders
   * nothing — the row falls back to the status line alone.
   */
  outcome?: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [];

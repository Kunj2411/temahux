import type Lenis from "lenis";

export type QualityTier = "low" | "medium" | "high";
export type ChapterId = "origin" | "services" | "academy" | "products" | "finale";

export const CHAPTER_IDS: readonly ChapterId[] = [
  "origin",
  "services",
  "academy",
  "products",
  "finale",
];

/**
 * The single mutable world state.
 *
 * One normalised scroll value (0 -> 1) is the only input that drives the entire
 * experience. Both the WebGL layer and the HTML overlay read from this object,
 * which means:
 *
 *   - there is exactly one scroll source,
 *   - scene objects never trigger React re-renders,
 *   - DOM copy and 3D geometry can never drift out of sync.
 *
 * Mutated from Lenis (scroll) and read in `useFrame` and rAF loops.
 *
 * `progress` is the only driver. Nothing else may gate animation on layout or on an
 * observer: a second scroll-derived signal is a second thing that can disagree with
 * the first, and the disagreement is invisible until the page is half broken.
 */
export interface SceneState {
  /** Normalised scroll progress, 0 at the top of the journey, 1 at the end. */
  progress: number;
  /** Instantaneous scroll velocity, retained for diagnostics and optional weighting. */
  velocity: number;
  /** Detected device capability tier. Resolved once, before the canvas mounts. */
  quality: QualityTier;
  /** True once the renderer has produced its first frame. */
  ready: boolean;
  /** Mirrors prefers-reduced-motion. */
  reducedMotion: boolean;
  /** True on coarse pointers (touch-first layout). */
  coarse: boolean;
  /** Per-chapter presence envelopes, 0..1, recomputed from progress. */
  weights: Record<ChapterId, number>;
}

export const state: SceneState = {
  progress: 0,
  velocity: 0,
  quality: "high",
  ready: false,
  reducedMotion: false,
  coarse: false,
  weights: {
    origin: 1,
    services: 0,
    academy: 0,
    products: 0,
    finale: 0,
  },
};

let activeLenis: Lenis | null = null;

export function attachLenis(instance: Lenis): void {
  activeLenis = instance;
}

export function detachLenis(instance: Lenis): void {
  if (activeLenis === instance) activeLenis = null;
}

export function getLenis(): Lenis | null {
  return activeLenis;
}

/** True when scroll progress is meaningfully above zero — used to retire the scroll hint. */
export function hasScrolled(): boolean {
  return state.progress > 0.012;
}

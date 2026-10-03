import { state } from "@/lib/scene-state";
import type { QualityTier } from "@/lib/scene-state";

export interface QualityProfile {
  tier: QualityTier;
  /** Device pixel ratio ceiling. */
  dpr: [number, number];
  /** Particle counts for each dust layer. */
  dust: [number, number];
  /** Render a fullscreen gradient backdrop shader. */
  backdrop: boolean;
  /** Render the reflective environment probes. */
  environment: boolean;
  /** Enable bloom / tone mapping / SMAA. */
  post: boolean;
  /** Emissive particle count inside the academy volume. */
  sparks: number;
  /** Segment count for procedural rings. */
  ringDetail: number;
}

const PROFILES: Record<QualityTier, QualityProfile> = {
  high: {
    tier: "high",
    dpr: [1, 1.75],
    dust: [2600, 1500],
    backdrop: true,
    environment: true,
    post: true,
    sparks: 420,
    ringDetail: 128,
  },
  medium: {
    tier: "medium",
    dpr: [1, 1.4],
    dust: [1300, 700],
    backdrop: true,
    environment: true,
    post: true,
    sparks: 240,
    ringDetail: 80,
  },
  low: {
    tier: "low",
    dpr: [1, 1.15],
    dust: [520, 260],
    backdrop: false,
    environment: false,
    post: false,
    sparks: 90,
    ringDetail: 48,
  },
};

export function profileFor(tier: QualityTier): QualityProfile {
  return PROFILES[tier];
}

/** Final DPR ceiling, taking the reduced-motion frame budget into account. */
export function resolveDpr(profile: QualityProfile): [number, number] {
  const ceiling = state.reducedMotion ? Math.min(profile.dpr[1], 1.25) : profile.dpr[1];
  return [1, ceiling];
}

function readRendererString(): string {
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ??
      canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return "";
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const value = info
      ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL))
      : String(gl.getParameter(gl.RENDERER));
    const lose = gl.getExtension("WEBGL_lose_context");
    lose?.loseContext();
    return value.toLowerCase();
  } catch {
    return "";
  }
}

export function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

/**
 * Resolves the quality tier once, before the canvas mounts, so the very first
 * frame is already correct — no remount, no mid-flight downgrade flicker.
 */
export function detectQuality(): QualityTier {
  if (typeof window === "undefined") return "medium";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  state.reducedMotion = reduced;
  state.coarse = window.matchMedia("(pointer: coarse)").matches;

  if (!supportsWebGL()) {
    state.quality = "low";
    return "low";
  }

  const renderer = readRendererString();
  const software = /swiftshader|llvmpipe|software|basic render|mesa offscreen/.test(renderer);
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  const width = window.innerWidth;
  const coarse = state.coarse;

  let tier: QualityTier;
  if (software || memory <= 2 || cores <= 2) {
    tier = "low";
  } else if (coarse || memory <= 4 || cores <= 4 || width <= 820) {
    tier = "medium";
  } else {
    tier = "high";
  }

  // Reduced motion lowers the frame budget (see resolveDpr) but must never remove
  // post-processing — a static premium frame is still a premium frame.
  state.quality = tier;
  return tier;
}
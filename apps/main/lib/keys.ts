export type EaseName =
  | "linear"
  | "inOutCubic"
  | "outCubic"
  | "inCubic"
  | "inOutQuint"
  | "outExpo"
  | "inOutSine";

export interface Keyframe {
  at: number;
  value: number;
  /** Easing applied on the segment that ends at this keyframe. */
  ease?: EaseName;
}

export const EASES: Record<EaseName, (t: number) => number> = {
  linear: (t) => t,
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inCubic: (t) => t * t * t,
  inOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
};

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

export function clamp(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  if (edge1 === edge0) return x < edge0 ? 0 : 1;
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/** Samples a keyframed scalar track at normalised position `t`. */
export function sample(keys: readonly Keyframe[], t: number): number {
  const count = keys.length;
  if (count === 0) return 0;
  const first = keys[0];
  if (t <= first.at) return first.value;
  const last = keys[count - 1];
  if (t >= last.at) return last.value;

  for (let i = 0; i < count - 1; i += 1) {
    const a = keys[i];
    const b = keys[i + 1];
    if (t >= a.at && t <= b.at) {
      const span = b.at - a.at;
      const local = span <= 0 ? 1 : (t - a.at) / span;
      const ease = EASES[b.ease ?? "inOutCubic"];
      return a.value + (b.value - a.value) * ease(local);
    }
  }
  return last.value;
}

/** Samples three scalar tracks into a pre-allocated object. Avoids per-frame allocation. */
export function sampleVec3(
  x: readonly Keyframe[],
  y: readonly Keyframe[],
  z: readonly Keyframe[],
  t: number,
  out: { x: number; y: number; z: number },
): { x: number; y: number; z: number } {
  out.x = sample(x, t);
  out.y = sample(y, t);
  out.z = sample(z, t);
  return out;
}

/**
 * Normalised position inside the span [start, end].
 * Returns 0 before the span and 1 after it.
 */
export function spanProgress(t: number, start: number, end: number): number {
  if (end <= start) return t >= end ? 1 : 0;
  return clamp01((t - start) / (end - start));
}

/**
 * Presence envelope: rises over `fadeIn`, holds, falls over `fadeOut`.
 * Used by both the WebGL layer and the HTML overlay so they never disagree.
 *
 * The fades straddle the chapter boundary rather than sitting inside it: a
 * chapter fades *in* as the previous one fades *out*. That keeps the world from
 * ever collapsing to zero between chapters, so a transition is a genuine
 * crossfade rather than a dip to an empty frame.
 *
 * `fadeIn` / `fadeOut` of 0 means "no fade on this edge", which is what keeps
 * Origin present at progress 0 and Finale present at progress 1 — without it the
 * journey would open and close on nothing.
 */
export function presence(
  t: number,
  start: number,
  end: number,
  fadeIn = 0.035,
  fadeOut = 0.035,
): number {
  const rise = fadeIn <= 0 ? 1 : spanProgress(t, start - fadeIn, start);
  const fall = fadeOut <= 0 ? 1 : 1 - spanProgress(t, end - fadeOut, end);

  return smoothstep(0, 1, rise) * smoothstep(0, 1, fall);
}
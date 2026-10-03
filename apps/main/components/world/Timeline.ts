import type { ChapterId } from "@/lib/scene-state";
import { CHAPTER_IDS, state } from "@/lib/scene-state";
import type { Keyframe } from "@/lib/keys";
import { presence, sample, spanProgress } from "@/lib/keys";

export interface Chapter {
  id: ChapterId;
  index: string;
  label: string;
  start: number;
  end: number;
  /** Fade in normalised units. 0 means the chapter is already present at its start. */
  fadeIn: number;
  /** Fade out in normalised units. 0 means the chapter stays present at its end. */
  fadeOut: number;
}

/**
 * The journey: five chapters over one normalised page-scroll timeline.
 *
 * The camera genuinely travels. `pz` runs monotonically from z = 16 down to
 * z = -104, so a chapter's range on screen is a *distance travelled* rather than a
 * section to be scrolled past. Scenes position themselves along that axis and ask
 * `progressAtCameraZ` how close the camera is, which is what keeps geometry and
 * copy describing the same journey.
 */
export const CHAPTERS: readonly Chapter[] = [
  {
    id: "origin",
    index: "01",
    label: "Origin",
    start: 0,
    end: 0.15,
    fadeIn: 0,
    fadeOut: 0.035,
  },
  {
    id: "services",
    index: "02",
    label: "Services",
    start: 0.15,
    end: 0.56,
    fadeIn: 0.035,
    fadeOut: 0.035,
  },
  {
    id: "academy",
    index: "03",
    label: "Academy",
    start: 0.56,
    end: 0.76,
    fadeIn: 0.035,
    fadeOut: 0.035,
  },
  {
    id: "products",
    index: "04",
    label: "Products",
    start: 0.76,
    end: 0.93,
    fadeIn: 0.035,
    fadeOut: 0.035,
  },
  {
    id: "finale",
    index: "05",
    label: "Temahux",
    start: 0.93,
    end: 1,
    fadeIn: 0.035,
    fadeOut: 0,
  },
] as const;

const CHAPTER_BY_ID: Record<ChapterId, Chapter> = CHAPTERS.reduce(
  (accumulator, chapter) => {
    accumulator[chapter.id] = chapter;
    return accumulator;
  },
  {} as Record<ChapterId, Chapter>,
);

export function getChapter(id: ChapterId): Chapter {
  return CHAPTER_BY_ID[id];
}

/** Named destinations land inside the readable part of each editorial panel. */
export function navigationProgress(id: ChapterId): number {
  if (id === "services") return 0.54;
  if (id === "academy") return 0.68;
  if (id === "products") return 0.845;
  return getChapter(id).start;
}

/** Envelope used by the 3D layer. */
export function chapterWeight(id: ChapterId, progress = state.progress): number {
  const chapter = CHAPTER_BY_ID[id];
  return presence(progress, chapter.start, chapter.end, chapter.fadeIn, chapter.fadeOut);
}

/**
 * Envelope used by the HTML overlay.
 *
 * Copy enters earlier than geometry and leaves later, so a headline is already
 * settled while its object is still arriving, and stays readable after the object
 * has gone. Because `presence` straddles the boundary, a longer fadeIn pushes the
 * text forward and a shorter fadeOut lets it hold on — which is the opposite of
 * the 3D chapter's symmetric fades.
 */
export function chapterTextWeight(id: ChapterId, progress = state.progress): number {
  const chapter = CHAPTER_BY_ID[id];
  return presence(progress, chapter.start, chapter.end, TEXT_FADE_IN, TEXT_FADE_OUT);
}

const TEXT_FADE_IN = 0.055;
const TEXT_FADE_OUT = 0.018;

/** Position inside a chapter, 0 at its start and 1 at its end. */
export function localProgress(id: ChapterId, progress = state.progress): number {
  const chapter = CHAPTER_BY_ID[id];
  return spanProgress(progress, chapter.start, chapter.end);
}

/** Index of the chapter currently occupying the viewport. */
export function activeChapter(progress = state.progress): ChapterId {
  for (const chapter of CHAPTERS) {
    if (progress < chapter.end) return chapter.id;
  }
  return "finale";
}

export function updateWeights(progress: number): void {
  for (const id of CHAPTER_IDS) {
    state.weights[id] = chapterWeight(id, progress);
  }
}

/* -------------------------------------------------------------------------- */
/* Camera path                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Camera tracks for a continuous corridor traversal.
 *
 * RECONSTRUCTED. The original per-axis keyframe values were lost (no version
 * control, no backup, no surviving build cache). What follows is a rebuild that
 * satisfies every constraint the original `scripts/verify-timeline.ts` asserted:
 *
 *  - `pz` strictly decreasing, running z = 16 -> z = -104 across the full scroll.
 *  - `tz` never greater than 0, and starting closer than the camera (the look-at
 *    point is always down-corridor, never behind the eye).
 *  - The camera sits *in front of* `servicesStart` at 0.15 and behind `servicesEnd`
 *    by 0.56, i.e. the services corridor is genuinely traversed during its chapter.
 *  - `academyCenter` falls between the camera z at 0.56 and at 0.76.
 *  - Every product slot lands inside progress 0.76 .. 0.93.
 *  - The camera finishes in front of `returnMark` and looks at it.
 *
 * Keyframes sit on the chapter boundaries so travel rate is visibly faster in the
 * long finale and slower through the dense services/academy chapters. `verify-
 * timeline.ts` is the authority on whether these hold up; if a scene needs
 * different staging, adjust `ANCHORS` and re-run it rather than eyeballing.
 *
 * Direction matters: the rig calls `lookAt(target)` with the target well below the
 * camera, so "forward" is *decreasing* z throughout.
 */
export const CAMERA_TRACKS = {
  /** Near-frontal framing: the reference keeps the camera on its centre line. */
  px: [
    { at: 0.0, value: 0 },
    { at: 0.15, value: 0.18, ease: "inOutSine" },
    { at: 0.56, value: -0.12, ease: "inOutSine" },
    { at: 0.76, value: 0.14, ease: "inOutSine" },
    { at: 0.93, value: -0.08, ease: "inOutSine" },
    { at: 1.0, value: 0 },
  ] as readonly Keyframe[],
  /** Small height changes keep a stable front view through each composition. */
  py: [
    { at: 0.0, value: 2.1 },
    { at: 0.15, value: 1.8, ease: "inOutSine" },
    { at: 0.56, value: 1.65, ease: "inOutSine" },
    { at: 0.76, value: 1.7, ease: "inOutSine" },
    { at: 0.93, value: 1.6, ease: "inOutSine" },
    { at: 1.0, value: 1.5 },
  ] as readonly Keyframe[],
  /** The traversal: 16 -> -104, strictly decreasing. */
  pz: [
    { at: 0.0, value: 16 },
    { at: 0.15, value: 3, ease: "inOutCubic" },
    { at: 0.56, value: -15, ease: "inOutCubic" },
    { at: 0.76, value: -31, ease: "linear" },
    { at: 0.93, value: -62, ease: "inOutCubic" },
    { at: 1.0, value: -104 },
  ] as readonly Keyframe[],
  /** Target tracks stay close to centre so object framing remains deliberate. */
  tx: [
    { at: 0.0, value: 0 },
    { at: 0.15, value: 0.1, ease: "inOutSine" },
    { at: 0.56, value: -0.06, ease: "inOutSine" },
    { at: 0.76, value: 0.08, ease: "inOutSine" },
    { at: 0.93, value: -0.04, ease: "inOutSine" },
    { at: 1.0, value: 0 },
  ] as readonly Keyframe[],
  /** Slight target changes follow the reference's low, stable camera height. */
  ty: [
    { at: 0.0, value: 0.7 },
    { at: 0.15, value: 0.5, ease: "inOutSine" },
    { at: 0.56, value: 0.45, ease: "inOutSine" },
    { at: 0.76, value: 0.55, ease: "inOutSine" },
    { at: 0.93, value: 0.4, ease: "inOutSine" },
    { at: 1.0, value: 0.35 },
  ] as readonly Keyframe[],
  /** Never greater than 0, and always ahead of `pz`. */
  tz: [
    { at: 0.0, value: -1 },
    { at: 0.15, value: -3, ease: "inOutCubic" },
    { at: 0.56, value: -22, ease: "inOutCubic" },
    { at: 0.76, value: -38, ease: "linear" },
    { at: 0.93, value: -70, ease: "inOutCubic" },
    { at: 1.0, value: -122 },
  ] as readonly Keyframe[],
  /** Forty degrees, matching the reference camera's saved perspective lens. */
  fov: [
    { at: 0.0, value: 40 },
    { at: 0.56, value: 40, ease: "inOutSine" },
    { at: 0.93, value: 40, ease: "inOutSine" },
    { at: 1.0, value: 40 },
  ] as readonly Keyframe[],
} as const;

/* -------------------------------------------------------------------------- */
/* World anchors                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Staging depths along the traversal axis.
 *
 * RECONSTRUCTED for the same reason as `CAMERA_TRACKS`. Strictly decreasing, which
 * is the invariant that actually matters: `originGate` and `originMark` sit ahead
 * of the services corridor (so nothing occludes the hero T), the services corridor
 * is traversed between 0.15 and 0.56, the academy is passed mid-chapter, the
 * products shelf spans 0.76 .. 0.93, and the return mark closes the run in front of
 * the final camera position.
 *
 * `verify-timeline.ts` checks the ordering, so if you change these the build will
 * tell you rather than silently placing geometry behind the camera.
 */
export const ANCHORS = {
  /** Framing plane ahead of the hero mark, so it reads as depth rather than a decal. */
  originGate: 12,
  /** Hero T mark. */
  originMark: 6,
  /** Near and far edge of the services corridor. */
  servicesStart: 1.5,
  servicesEnd: -13,
  /** Academy core, passed mid-chapter. */
  academyCenter: -22,
  /** Products shelf: first and last slot. */
  productsStart: -34,
  productsEnd: -60,
  /** Backdrop plane the corridor opens onto, still short of the return mark. */
  threshold: -96,
  /**
   * Finale mark, framed dead ahead by the last camera keyframe.
   *
   * Deliberately *beyond* the camera's final z of -104: the camera stops short of
   * it and looks at it, exactly as it opened on originMark. Placing it behind the
   * final position would put the mark behind the eye and the shot would frame
   * empty corridor instead.
   */
  returnMark: -122,
} as const;

/** Samples position and look-at target in one call. Written into `target` to avoid
 * allocating a new object every frame — the camera rig samples this 60 times a
 * second and must not produce garbage.
 */
export function sampleVec3(
  tracks: readonly [readonly Keyframe[], readonly Keyframe[], readonly Keyframe[]],
  progress: number,
  target: { x: number; y: number; z: number },
): { x: number; y: number; z: number } {
  target.x = sample(tracks[0], progress);
  target.y = sample(tracks[1], progress);
  target.z = sample(tracks[2], progress);
  return target;
}

/**
 * Inverse of the `pz` track: the scroll progress at which the camera reaches a
 * given world z.
 *
 * This is how a scene asks "how close am I to being looked at?" rather than
 * guessing. Bisection is safe because `sample` guarantees `pz` is monotonic
 * decreasing: if the camera is still in front of the target z we need more
 * progress, otherwise less.
 */
export function progressAtCameraZ(targetZ: number): number {
  let low = 0;
  let high = 1;

  for (let iteration = 0; iteration < 32; iteration += 1) {
    const mid = (low + high) / 2;
    if (sample(CAMERA_TRACKS.pz, mid) > targetZ) low = mid;
    else high = mid;
  }

  return (low + high) / 2;
}

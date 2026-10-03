/**
 * Timeline verification.
 *
 * Run with: npx tsx scripts/verify-timeline.ts
 *
 * These checks are the authority on the scroll timeline. They exist because the
 * failure mode of this kind of scene is silent: the page builds, the type checker
 * is clean, and the camera is simply somewhere it should not be. Every assertion
 * below encodes an invariant that would otherwise only be found by looking at the
 * rendered page.
 *
 * The checks deliberately avoid asserting exact numeric values where a value is an
 * authoring choice. What they pin down is *relationship* — ordering, containment,
 * monotonicity, round-trip accuracy — because those are the things that break.
 */

import {
  CHAPTERS,
  CAMERA_TRACKS,
  ANCHORS,
  chapterWeight,
  chapterTextWeight,
  localProgress,
  activeChapter,
  progressAtCameraZ,
  sampleVec3,
} from "../components/world/Timeline";
import { sample } from "../lib/keys";

let checks = 0;
let failures = 0;
const failureMessages: string[] = [];

function check(condition: boolean, message: string): void {
  checks += 1;
  if (!condition) {
    failures += 1;
    failureMessages.push(message);
  }
}

function near(a: number, b: number, epsilon: number, message: string): void {
  check(Math.abs(a - b) <= epsilon, `${message} (expected ${a} ~= ${b} +/- ${epsilon})`);
}

const section = (name: string): void => {
  console.log(`\n--- ${name} ---`);
};

/* -------------------------------------------------------------------------- */

section("chapter table");

check(CHAPTERS.length === 5, "expected 5 chapters");
check(CHAPTERS[0].start === 0, "first chapter must start at 0");
check(CHAPTERS[CHAPTERS.length - 1].end === 1, "last chapter must end at 1");

// Continuity: no gap and no overlap in the underlying ranges.
for (let i = 0; i < CHAPTERS.length - 1; i += 1) {
  const current = CHAPTERS[i];
  const next = CHAPTERS[i + 1];
  check(
    current.end === next.start,
    `chapter "${current.id}" must end exactly where "${next.id}" begins`,
  );
}

check(CHAPTERS[0].fadeIn === 0, "origin must be present at progress 0");
check(CHAPTERS[CHAPTERS.length - 1].fadeOut === 0, "finale must still be present at progress 1");

// The authored ranges. These are the copy/geometry contract, not taste.
const REQUIRED_RANGES: Array<[string, number, number]> = [
  ["origin", 0, 0.15],
  ["services", 0.15, 0.56],
  ["academy", 0.56, 0.76],
  ["products", 0.76, 0.93],
  ["finale", 0.93, 1],
];

for (const [id, start, end] of REQUIRED_RANGES) {
  const chapter = CHAPTERS.find((candidate) => candidate.id === id);
  check(chapter !== undefined, `missing chapter "${id}"`);
  if (!chapter) continue;
  near(chapter.start, start, 0.0001, `chapter "${id}" start`);
  near(chapter.end, end, 0.0001, `chapter "${id}" end`);
}

/* -------------------------------------------------------------------------- */

section("chapter envelopes");

near(chapterWeight("origin", 0), 1, 0.0001, "origin fully present at progress 0");
near(chapterWeight("finale", 1), 1, 0.0001, "finale fully present at progress 1");
near(chapterWeight("services", 0), 0, 0.0001, "services absent at progress 0");

// Mid-chapter the envelope should be saturated.
near(chapterWeight("services", 0.355), 1, 0.0001, "services saturated at its midpoint");
near(chapterWeight("academy", 0.66), 1, 0.0001, "academy saturated at its midpoint");
near(chapterWeight("products", 0.845), 1, 0.0001, "products saturated at its midpoint");

// The bookends crossfade into their neighbours. `presence` straddles the boundary,
// so the midpoint of the straddle window — half a fade *before* the boundary — is
// where both chapters should sit at 0.5. At the boundary itself the outgoing
// chapter is already fully gone, which is correct but not what we are testing for.
const STRADDLE_MIDPOINT = 0.5 * 0.035;
const originServicesBoundary = 0.15 - STRADDLE_MIDPOINT;
const originAtBoundary = chapterWeight("origin", originServicesBoundary);
const servicesAtBoundary = chapterWeight("services", originServicesBoundary);
check(
  originAtBoundary > 0 && originAtBoundary < 1,
  "origin must be mid-fade inside the origin/services crossfade",
);
check(
  servicesAtBoundary > 0 && servicesAtBoundary < 1,
  "services must be mid-fade inside the origin/services crossfade",
);

for (let i = 0; i < CHAPTERS.length - 1; i += 1) {
  const boundary = CHAPTERS[i].end - STRADDLE_MIDPOINT;
  const outgoing = chapterWeight(CHAPTERS[i].id, boundary);
  const incoming = chapterWeight(CHAPTERS[i + 1].id, boundary);
  check(
    outgoing > 0 && outgoing < 1,
    `"${CHAPTERS[i].id}" must be mid-fade inside its crossfade`,
  );
  check(
    incoming > 0 && incoming < 1,
    `"${CHAPTERS[i + 1].id}" must be mid-fade inside its crossfade`,
  );
}

// The world must never collapse to nothing. A gap here is the single most visible
// possible bug: an empty frame between two populated ones.
const SAMPLE_COUNT = 200;
for (let i = 0; i <= SAMPLE_COUNT; i += 1) {
  const progress = i / SAMPLE_COUNT;
  let total = 0;
  for (const chapter of CHAPTERS) {
    total += chapterWeight(chapter.id, progress);
  }
  check(total > 0.001, `world envelope collapsed to empty at progress ${progress.toFixed(3)}`);
}

// Envelopes must stay in range across the whole timeline, including before the
// first chapter and after the last.
for (let i = 0; i <= SAMPLE_COUNT; i += 1) {
  const progress = i / SAMPLE_COUNT;
  for (const chapter of CHAPTERS) {
    const weight = chapterWeight(chapter.id, progress);
    check(
      weight >= 0 && weight <= 1,
      `"${chapter.id}" envelope out of range at ${progress.toFixed(3)}: ${weight}`,
    );
    const textWeight = chapterTextWeight(chapter.id, progress);
    check(
      textWeight >= 0 && textWeight <= 1,
      `"${chapter.id}" text envelope out of range at ${progress.toFixed(3)}: ${textWeight}`,
    );
  }
}

// At most two chapters should be meaningfully visible at once. Three-way overlap
// means the DOM has three full-screen panels fighting for the same pixels.
let maxDominant = 0;
for (let i = 0; i <= SAMPLE_COUNT; i += 1) {
  const progress = i / SAMPLE_COUNT;
  let dominant = 0;
  for (const chapter of CHAPTERS) {
    if (chapterWeight(chapter.id, progress) > 0.5) dominant += 1;
  }
  maxDominant = Math.max(maxDominant, dominant);
}
check(maxDominant <= 2, `no more than two chapters may be dominant at once (saw ${maxDominant})`);

// Text must be readable while its chapter is on screen. If the text envelope ever
// dips below the 3D envelope during the body of a chapter, a headline fades out
// before the thing it describes has finished arriving.
const TEXT_ENVELOPE_PROBES = [0.1, 0.15, 0.36, 0.42, 0.58, 0.64, 0.82, 0.88];
for (const progress of TEXT_ENVELOPE_PROBES) {
  check(
    chapterTextWeight("services", progress) >= chapterWeight("services", progress),
    `services text envelope must not fall below its 3D envelope at ${progress}`,
  );
}

/* -------------------------------------------------------------------------- */

section("local progress and active chapter");

near(localProgress("origin", 0), 0, 0.0001, "local progress starts at 0");
near(localProgress("origin", 0.15), 1, 0.0001, "local progress reaches 1 at the chapter end");

near(localProgress("services", 0), 0, 0.0001, "local progress clamps before the span");
near(localProgress("services", 0.355), 0.5, 0.0001, "local progress is halfway at the midpoint");
near(localProgress("services", 1), 1, 0.0001, "local progress clamps after the span");

check(activeChapter(0) === "origin", "active chapter at 0 is origin");
check(activeChapter(0.355) === "services", "active chapter mid-services");
check(activeChapter(0.66) === "academy", "active chapter mid-academy");
check(activeChapter(1) === "finale", "active chapter at 1 is finale");

/* -------------------------------------------------------------------------- */

section("camera tracks");

const samplePosition = (progress: number): { x: number; y: number; z: number } =>
  sampleVec3([CAMERA_TRACKS.px, CAMERA_TRACKS.py, CAMERA_TRACKS.pz], progress, {
    x: 0,
    y: 0,
    z: 0,
  });

const sampleTarget = (progress: number): { x: number; y: number; z: number } =>
  sampleVec3([CAMERA_TRACKS.tx, CAMERA_TRACKS.ty, CAMERA_TRACKS.tz], progress, {
    x: 0,
    y: 0,
    z: 0,
  });

// Keyframe times must be ordered and progress must never run backwards.
for (const [name, track] of Object.entries(CAMERA_TRACKS)) {
  for (let i = 1; i < track.length; i += 1) {
    check(
      track[i].at > track[i - 1].at,
      `${name}: keyframe times must strictly increase (index ${i})`,
    );
  }
  check(track[0].at === 0, `${name}: first keyframe must be at 0`);
  near(track[track.length - 1].at, 1, 0.0001, `${name}: last keyframe must be at 1`);
}

// The camera only ever moves forward. This is the invariant the whole layout rests
// on: if pz ever increased, scenes placed by camera z would drift unpredictably.
const pz = CAMERA_TRACKS.pz;
for (let i = 1; i < pz.length; i += 1) {
  check(
    pz[i].value < pz[i - 1].value,
    `pz must strictly decrease (keyframe ${i}: ${pz[i - 1].value} -> ${pz[i].value})`,
  );
}

// The look-at point must stay ahead of the camera, i.e. at a lower z, and must
// never sit behind the origin plane.
const tz = CAMERA_TRACKS.tz;
for (const key of tz) {
  check(key.value <= 0, `tz must never be greater than 0 (found ${key.value})`);
}
check(tz[0].value < pz[0].value, "tz must start closer than the camera does");

// FOV stays in a sane lens range so we neither fisheye nor telephoto into mush.
for (const key of CAMERA_TRACKS.fov) {
  check(key.value >= 25, `fov must be at least 25 (found ${key.value})`);
  check(key.value <= 70, `fov must be at most 70 (found ${key.value})`);
}

/* -------------------------------------------------------------------------- */

section("camera starts behind the hero");

// The opening frame must show the mark ahead of the camera, not past it.
check(
  samplePosition(0).z > ANCHORS.originMark,
  `camera must start behind originMark (camera ${samplePosition(0).z}, mark ${ANCHORS.originMark})`,
);
check(
  samplePosition(1).z > ANCHORS.returnMark,
  `camera must finish in front of returnMark (camera ${samplePosition(1).z}, mark ${ANCHORS.returnMark})`,
);

// And the finale must actually frame the return mark rather than pointing past it.
const finalTarget = sampleTarget(1);
near(finalTarget.z, ANCHORS.returnMark, 0.5, "final look-at must frame the return mark");

/* -------------------------------------------------------------------------- */

section("camera stops in front of the products");

const productCount = 6;
const productsSpan = ANCHORS.productsStart - ANCHORS.productsEnd;
const productStep = productsSpan / (productCount - 1);

for (let index = 0; index < productCount; index += 1) {
  const productZ = ANCHORS.productsStart - index * productStep;
  check(
    samplePosition(1).z < productZ,
    `camera must stop in front of product ${index} (camera ${samplePosition(1).z}, product ${productZ})`,
  );
}

/* -------------------------------------------------------------------------- */

section("corridors are traversed inside their chapter");

// The services corridor must be crossed *during* the services chapter.
const servicesStartZ = ANCHORS.servicesStart;
const servicesEndZ = ANCHORS.servicesEnd;

check(
  samplePosition(0.15).z > servicesStartZ,
  `camera must be in front of servicesStart at the start of the services chapter (camera ${samplePosition(0.15).z}, start ${servicesStartZ})`,
);
check(
  servicesStartZ > servicesEndZ,
  "servicesStart must be in front of servicesEnd",
);
check(
  samplePosition(0.56).z < servicesEndZ,
  `camera must be past servicesEnd by the end of the services chapter (camera ${samplePosition(0.56).z}, end ${servicesEndZ})`,
);

// Same idea for the academy: it must be passed mid-chapter, not before or after.
const academyCenter = ANCHORS.academyCenter;
check(
  samplePosition(0.56).z > academyCenter,
  `camera must be in front of academyCenter at the start of the academy chapter`,
);
check(
  academyCenter > samplePosition(0.76).z,
  `camera must be past academyCenter by the end of the academy chapter`,
);

/* -------------------------------------------------------------------------- */

section("camera z inversion");

// Inverting the camera track is how scenes decide how present they should be, so
// it has to be genuinely invertible.
const productsStartProgress = progressAtCameraZ(ANCHORS.productsStart);
near(
  samplePosition(productsStartProgress).z,
  ANCHORS.productsStart,
  0.6,
  "progressAtCameraZ must round-trip at productsStart",
);

// Round-trip across the whole travel range.
for (let i = 0; i <= 20; i += 1) {
  const progress = 0.1 + (i / 20) * 0.85;
  const z = samplePosition(progress).z;
  const recovered = progressAtCameraZ(z);
  near(recovered, progress, 0.005, `inversion round-trip at progress ${progress.toFixed(3)}`);
}

// Monotonic: further down the corridor must mean later progress.
check(
  progressAtCameraZ(0) < progressAtCameraZ(-50),
  "inversion must be monotonic in z",
);
check(
  progressAtCameraZ(-50) < progressAtCameraZ(-100),
  "inversion must be monotonic in z across the full range",
);

/* -------------------------------------------------------------------------- */

section("world anchors");

const anchorOrder: Array<[keyof typeof ANCHORS, number]> = [
  ["originGate", ANCHORS.originGate],
  ["originMark", ANCHORS.originMark],
  ["servicesStart", ANCHORS.servicesStart],
  ["servicesEnd", ANCHORS.servicesEnd],
  ["academyCenter", ANCHORS.academyCenter],
  ["productsStart", ANCHORS.productsStart],
  ["productsEnd", ANCHORS.productsEnd],
  ["threshold", ANCHORS.threshold],
  ["returnMark", ANCHORS.returnMark],
];

// Strictly decreasing: every stage is further down the corridor than the last.
for (let i = 1; i < anchorOrder.length; i += 1) {
  const [previousName, previousValue] = anchorOrder[i - 1];
  const [name, value] = anchorOrder[i];
  check(
    previousValue > value,
    `anchors must be strictly ordered: ${previousName} (${previousValue}) must be in front of ${name} (${value})`,
  );
}

// Nothing may stand between the camera and the hero mark.
check(
  ANCHORS.servicesStart < ANCHORS.originMark,
  "servicesStart must be behind originMark so it cannot occlude the hero",
);
check(
  ANCHORS.servicesStart < ANCHORS.originGate,
  "servicesStart must be behind originGate so it cannot occlude the hero",
);

// Everything is staged in front of the opening camera position.
for (const [name, value] of anchorOrder) {
  check(
    value < samplePosition(0).z,
    `anchor ${name} must be in front of the starting camera (anchor ${value}, camera ${samplePosition(0).z})`,
  );
}

/* -------------------------------------------------------------------------- */

section("products land inside the products chapter");

for (let index = 0; index < productCount; index += 1) {
  const productZ = ANCHORS.productsStart - index * productStep;
  const progress = progressAtCameraZ(productZ);
  check(
    progress >= 0.76 && progress <= 0.93,
    `product ${index} must be reached inside the products chapter (progress ${progress.toFixed(3)}, z ${productZ})`,
  );
}

/* -------------------------------------------------------------------------- */

if (failures > 0) {
  console.error(`\n${failures} of ${checks} checks FAILED:\n`);
  for (const message of failureMessages) {
    console.error(`  x ${message}`);
  }
  process.exit(1);
}

console.log(`\nAll ${checks} checks passed.\n`);

# TEMAHUX home experience

A single scrolling document with a procedural 3D world behind it. The camera travels a
corridor from z = 16 to z = -104 across the page; five chapters crossfade in step with
it. Services, Academy and Products lead to their own sub-sites.

## Run locally

`npm install`
`npm run dev`

Open http://localhost:3000.

## Production

`npm run build`
`npm run start`

## How it is built

### The spacer is the scroll length

Every chapter in `components/overlay/Chapters.tsx` is `position: fixed`, stacked in one
full-viewport grid and crossfaded by scroll progress. Nothing in normal flow has height,
so `.scroll-spacer` in `app/globals.css` — 760svh — is the entire journey. `svh` rather
than `vh` so a mobile URL bar appearing or retracting cannot change the document height
mid-scroll and yank the camera.

### One scroll value

`lib/scene-state.ts` holds the single mutable object. `state.progress` (`0` → `1`) is the
only input that drives anything, and it is written in exactly one place:
`components/overlay/ScrollController.tsx`, which owns the only Lenis instance.

There is deliberately no second, coarser signal — no IntersectionObserver, no
GSAP ScrollTrigger, no `scroll-behavior: smooth`. Two scroll drivers on one document is
the classic way an experience like this breaks, and the disagreement between them is
invisible until the page is half broken.

### The camera travels

`CAMERA_TRACKS` in `components/world/Timeline.ts` holds a position and a look-at target
per axis. `pz` runs monotonically from 16 down to -104; forward is *decreasing* z,
because `CameraRig` calls `lookAt(target)` with the target well below the camera.

Keyframes sit on the chapter boundaries, so the travel rate is visibly slower through the
dense Services and Academy chapters and faster through the long finale. A keyframe table
whose Z ever increases is the classic failure: scenes placed by camera z then drift
unpredictably, so `verify-timeline.ts` asserts strict monotonicity.

`progressAtCameraZ()` inverts the track by bisection. This is how a scene asks "how close
am I to being looked at" instead of guessing, and it is safe precisely because `pz` is
monotonic. Bisection needs no derivative and cannot diverge.

### Staging is by depth, not by composition

`ANCHORS` in `Timeline.ts` places every stage along the travel axis, strictly decreasing:

| Anchor         | Role                                        |
| -------------- | ------------------------------------------- |
| `originGate`   | thin plane ahead of the hero mark            |
| `originMark`   | the hero T, opened on dead ahead             |
| `servicesStart` / `servicesEnd` | near and far edge of the services corridor |
| `academyCenter`| passed mid-chapter                           |
| `productsStart` / `productsEnd` | first and last product slot         |
| `threshold`    | backdrop the corridor opens onto             |
| `returnMark`   | the closing mark                             |

Three ordering properties are load-bearing and all enforced by the verify script:

- **Nothing occludes the hero.** `servicesStart` must be behind both `originMark` and
  `originGate`, or the corridor geometry stands between the camera and the opening shot.
- **The corridor is traversed during its chapter.** The camera must be in front of
  `servicesStart` at progress 0.14 and past `servicesEnd` by 0.38. A corridor that is
  merely *near* its chapter renders as an empty frame.
- **`returnMark` is beyond the camera's final position**, not at it. The camera stops
  short and looks at it — the same gesture the film opened on. Put the mark where the
  camera stops and it falls behind the near plane, so the closing shot frames empty
  corridor.

### Rendering

`components/world/World.tsx` mounts the Canvas and five scene groups. All geometry is
procedural — no models or image textures to load, so the only gate is the first rendered
frame, which flips `state.ready` and releases the preloader.

`components/world/quality.ts` resolves a capability tier once, before the canvas mounts,
so the first frame is already at the right budget: DPR ceiling, particle counts, ring
segments and whether the post chain runs at all.

### Content and accessibility

`Chapters.tsx` holds the real, crawlable copy: every service, the Academy method and the
full product registry from `products/`. The 3D world illustrates; it never replaces the
text.

Reduced-motion visitors, and anyone without WebGL, get `StaticExperience`: the complete
experience as ordinary HTML with working links.

Reveal opacity and transforms are written straight to the DOM from a rAF loop rather than
through React state, so scrolling does not re-render the component tree.

### Verification

`npx tsx scripts/verify-timeline.ts`

Around 2400 assertions. The ones specific to this architecture:

- `pz` is strictly decreasing and its keyframe times are ordered;
- the look-at Z never exceeds 0 and always starts closer than the camera does;
- **anchors are strictly ordered**, nothing occludes the origin mark, and every anchor is
  in front of the starting camera;
- the services corridor is genuinely traversed between 0.14 and 0.38, and `academyCenter`
  falls between the camera positions at 0.38 and 0.6;
- **every product slot is reached inside the products chapter** — a product shown at the
  wrong time is the failure this layout exists to prevent;
- `progressAtCameraZ()` round-trips within 0.005 across the travel range and is monotonic
  in Z;
- the world envelope never collapses to empty, and no more than two chapters are dominant
  at once.

## Site gateways

- Services: https://services.temahux.com
- Academy: https://academy.temahux.com
- Products: https://products.temahux.com

import type { PracticeSlug } from "@/lib/services";

/**
 * Abstract system diagrams, drawn as inline SVG.
 *
 * No raster asset, no image request, no library, no 3D. 1px strokes in
 * --color-line. Exactly ONE element in the whole services experience is
 * animated — the travelling node in the hero diagram — and it is driven by
 * CSS so it can be paused on hover/focus and disabled entirely under
 * `prefers-reduced-motion: reduce` (see globals.css).
 *
 * Rule of the design language: no glowing nodes, no neural-network lines,
 * no gradients, no particles.
 */

const rails = [
  { label: "BUILD", y: 40 },
  { label: "GROW", y: 110 },
  { label: "AUTOMATE", y: 180 },
  { label: "OPERATE", y: 250 },
];

/**
 * The six nodes, each sitting on the rail of the practice that produces it:
 *
 *   IDEA -> PRODUCT        BUILD
 *   AUDIENCE               GROW
 *   WORKFLOW -> SYSTEM     AUTOMATE
 *   RUNNING                OPERATE
 *
 * Their positions define the signal path, which is mirrored exactly by the
 * `svc-node-run` keyframes in globals.css. Signal offsets from the base
 * position IDEA (180, 40): 0,0 / 160,0 / 160,70 / 160,140 / 320,140 /
 * 320,210.
 */
const nodes: { label: string; x: number; y: number; shape?: "square" }[] = [
  { label: "IDEA", x: 180, y: 40 },
  { label: "PRODUCT", x: 340, y: 40 },
  { label: "AUDIENCE", x: 340, y: 110 },
  { label: "WORKFLOW", x: 340, y: 180 },
  { label: "SYSTEM", x: 500, y: 180, shape: "square" },
  { label: "RUNNING", x: 500, y: 250 },
];

/** Orthogonal wiring between consecutive nodes. */
const wires: [number, number, number, number][] = [
  [180, 40, 340, 40],
  [340, 40, 340, 110],
  [340, 110, 340, 180],
  [340, 180, 500, 180],
  [500, 180, 500, 250],
];

/**
 * The hero diagram: four practice rails, six labelled nodes wired into a
 * staircase, and one filled signal travelling the path on a 6s loop.
 *
 * Server-rendered. The loop is a CSS animation, not a client island.
 */
export default function ArchitectureDiagram() {
  return (
    <svg
      className="svc-diagram"
      viewBox="0 0 640 300"
      role="img"
      aria-label="System diagram: four rails labelled Build, Grow, Automate and Operate, connected by six nodes — Idea, Product, Audience, Workflow, System and Running — with a single signal travelling from one to the next in a loop."
    >
      {/* Rails */}
      {rails.map((rail) => (
        <line
          key={rail.label}
          className="svc-diagram-rail"
          x1="92"
          y1={rail.y}
          x2="616"
          y2={rail.y}
        />
      ))}

      {/* Rail labels */}
      {rails.map((rail) => (
        <text
          key={`label-${rail.label}`}
          className="svc-diagram-label"
          x="0"
          y={rail.y + 3}
        >
          {rail.label}
        </text>
      ))}

      {/* The signal path */}
      {wires.map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}-${x2}-${y2}`}
          className="svc-diagram-wire"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        />
      ))}

      {/* Static nodes sitting on the rails */}
      {nodes.map((node) =>
        node.shape === "square" ? (
          <rect
            key={node.label}
            className="svc-node"
            x={node.x - 4.5}
            y={node.y - 4.5}
            width="9"
            height="9"
            rx="1"
          />
        ) : (
          <circle
            key={node.label}
            className="svc-node"
            cx={node.x}
            cy={node.y}
            r="3.5"
          />
        )
      )}

      {/* Node labels, set above and to the right of each node */}
      {nodes.map((node) => (
        <text
          key={`text-${node.label}`}
          className="svc-diagram-label"
          x={node.x + 12}
          y={node.y - 9}
        >
          {node.label}
        </text>
      ))}

      {/* The single live node. Base position (180, 40) — IDEA; the CSS
          keyframes in globals.css step it along the six nodes. */}
      <g className="svc-diagram-node">
        <circle className="svc-node-live" cx="180" cy="40" r="4.5" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Practice-specific diagrams
 * ---------------------------------------------------------------------- */

/** BUILD — system architecture: layered and connected. */
function BuildDiagram() {
  const layers = [
    { label: "Client", y: 20 },
    { label: "Application", y: 80 },
    { label: "Data", y: 140 },
  ];

  return (
    <>
      {layers.map((layer) => (
        <g key={layer.label}>
          <rect
            className="svc-node"
            x="20"
            y={layer.y}
            width="320"
            height="40"
            rx="2"
          />
          <text className="svc-diagram-label" x="34" y={layer.y + 24}>
            {layer.label}
          </text>
          {[0, 1, 2].map((cell) => (
            <rect
              key={cell}
              className="svc-node"
              x={230 + cell * 32}
              y={layer.y + 14}
              width="12"
              height="12"
            />
          ))}
        </g>
      ))}

      <line className="svc-diagram-wire" x1="110" y1="60" x2="110" y2="80" />
      <line className="svc-diagram-wire" x1="250" y1="60" x2="250" y2="80" />
      <line className="svc-diagram-wire" x1="110" y1="120" x2="110" y2="140" />
      <line className="svc-diagram-wire" x1="250" y1="120" x2="250" y2="140" />
    </>
  );
}

/** GROW — signal layers radiating outward into four channels. */
function GrowDiagram() {
  return (
    <>
      <circle className="svc-node-live" cx="40" cy="100" r="4.5" />
      <path className="svc-diagram-rail" d="M40 70 A30 30 0 0 1 40 130" />
      <path className="svc-diagram-rail" d="M40 40 A60 60 0 0 1 40 160" />
      <path className="svc-diagram-rail" d="M40 10 A90 90 0 0 1 40 190" />

      {[40, 80, 120, 160].map((y) => (
        <g key={y}>
          <line className="svc-diagram-rail" x1="190" y1={y} x2="340" y2={y} />
          <circle className="svc-node" cx="190" cy={y} r="3.5" />
          <circle className="svc-node" cx="340" cy={y} r="3.5" />
        </g>
      ))}

      <line className="svc-diagram-wire" x1="130" y1="100" x2="190" y2="40" />
      <line className="svc-diagram-wire" x1="130" y1="100" x2="190" y2="80" />
      <line className="svc-diagram-wire" x1="130" y1="100" x2="190" y2="120" />
      <line className="svc-diagram-wire" x1="130" y1="100" x2="190" y2="160" />
    </>
  );
}

/** AUTOMATE — workflow routing: one input, three steps, one output. */
function AutomateDiagram() {
  return (
    <>
      <rect className="svc-node" x="24" y="86" width="48" height="28" rx="2" />
      <text className="svc-diagram-label" x="38" y="104">
        In
      </text>
      <line className="svc-diagram-wire" x1="72" y1="100" x2="88" y2="100" />

      {[26, 86, 146].map((y) => (
        <g key={y}>
          <rect
            className="svc-node"
            x="104"
            y={y}
            width="120"
            height="28"
            rx="2"
          />
          <line
            className="svc-diagram-wire"
            x1="88"
            y1="100"
            x2="88"
            y2={y + 14}
          />
          <line
            className="svc-diagram-wire"
            x1="88"
            y1={y + 14}
            x2="104"
            y2={y + 14}
          />
          <line
            className="svc-diagram-wire"
            x1="224"
            y1={y + 14}
            x2="264"
            y2={y + 14}
          />
        </g>
      ))}

      <rect className="svc-node" x="264" y="86" width="72" height="28" rx="2" />
      <text className="svc-diagram-label" x="278" y="104">
        Out
      </text>
      <circle className="svc-node-live" cx="88" cy="100" r="4" />
    </>
  );
}

/** OPERATE — one platform connected to six surrounding services. */
function OperateDiagram() {
  const satellites: [number, number][] = [
    [180, 24],
    [300, 58],
    [300, 142],
    [180, 176],
    [60, 142],
    [60, 58],
  ];

  return (
    <>
      <rect className="svc-node" x="132" y="80" width="96" height="40" rx="2" />
      <text className="svc-diagram-label" x="148" y="104">
        Platform
      </text>

      {satellites.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line className="svc-diagram-wire" x1="180" y1="100" x2={x} y2={y} />
          <circle className="svc-node" cx={x} cy={y} r="4" />
        </g>
      ))}

      <circle className="svc-node-live" cx="180" cy="100" r="4.5" />
    </>
  );
}

/**
 * Practice diagrams. One is mounted per visible practice panel — never four
 * at once — so each practice reads as a distinct capability rather than a
 * swapped card.
 */
export function PracticeDiagram({ slug }: { slug: PracticeSlug }) {
  const labels: Record<PracticeSlug, string> = {
    build:
      "System architecture diagram: a client layer, an application layer and a data layer, connected.",
    grow: "Signal diagram: layered reach radiating into four distribution channels.",
    automate:
      "Workflow diagram: a single input routed through three steps into one output.",
    operate:
      "Operating system diagram: one platform connected to six surrounding services.",
  };

  return (
    <svg
      className="svc-diagram"
      viewBox="0 0 360 200"
      role="img"
      aria-label={labels[slug]}
    >
      {slug === "build" ? <BuildDiagram /> : null}
      {slug === "grow" ? <GrowDiagram /> : null}
      {slug === "automate" ? <AutomateDiagram /> : null}
      {slug === "operate" ? <OperateDiagram /> : null}
    </svg>
  );
}

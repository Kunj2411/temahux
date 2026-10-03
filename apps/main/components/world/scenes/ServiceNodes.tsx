"use client";

import { useMemo, useRef } from "react";
import type { ReactElement } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { state } from "@/lib/scene-state";
import { services } from "@/lib/content";
import { smoothstep } from "@/lib/keys";
import { ANCHORS, chapterWeight, progressAtCameraZ } from "../Timeline";
import { PALETTE } from "../environment/Atmosphere";

/**
 * Seven service objects staggered along the corridor.
 *
 * x and y are hand-placed to alternate across the camera's path; z is derived from
 * the anchors so the spacing stays even no matter how the corridor is retuned.
 * The camera flies *past* these, they are not staged for a stationary viewpoint.
 *
 * Exported so `scripts/verify-timeline.ts` can assert the whole run falls inside the
 * services chapter.
 */
export const SERVICE_LAYOUT: readonly [number, number][] = [
  [-2.2, 0.1],
  [2.2, -0.2],
  [-1.8, 0.5],
  [1.8, -0.5],
  [-2.3, -0.2],
  [2.3, 0.1],
  [0, 0.6],
];

/** Depth of the nth service, evenly spread across the services corridor. */
export function serviceZ(index: number, total: number): number {
  const t = total <= 1 ? 0 : index / (total - 1);
  return ANCHORS.servicesStart + (ANCHORS.servicesEnd - ANCHORS.servicesStart) * t;
}

const SURFACE = "#38251f";
const EDGE = "#9d6047";

/* -------------------------------------------------------------------------- */
/* Node silhouettes                                                            */
/* -------------------------------------------------------------------------- */

function WebNode() {
  const bars = [1.0, 0.82, 0.62, 0.78, 0.46];
  return (
    <group>
      {bars.map((width, index) => (
        <mesh key={index} position={[0, 1.05 - index * 0.6, 0]}>
          <boxGeometry args={[2.4 * width, 0.15, 1.5]} />
          <meshStandardMaterial color={SURFACE} roughness={0.42} metalness={0.55} />
          <Edges color={index === 0 ? PALETTE.accent : EDGE} threshold={20} />
        </mesh>
      ))}
    </group>
  );
}

function CommerceNode() {
  return (
    <group>
      {[0, 1, 2].map((index) => <mesh key={index} position={[0, 0.48 - index * 0.48, index * -0.12]}><boxGeometry args={[1.8 - index * 0.22, 0.28, 1.45]} /><meshStandardMaterial color={SURFACE} roughness={0.62} /><Edges color={index === 0 ? PALETTE.accent : EDGE} threshold={20} /></mesh>)}
    </group>
  );
}

function BrandingNode() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.8, 1.8, 0.16]} />
        <meshStandardMaterial color={SURFACE} roughness={0.25} metalness={0.8} />
        <Edges color={EDGE} threshold={20} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]} scale={[0.62, 0.62, 0.34]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={SURFACE}
          roughness={0.2}
          metalness={0.85}
          emissive={PALETTE.accentDeep}
          emissiveIntensity={0.7}
        />
        <Edges color={PALETTE.accent} threshold={12} />
      </mesh>
    </group>
  );
}

const NETWORK_POINTS: readonly [number, number, number][] = [
  [0, 0, 0],
  [1.05, 0.35, 0.5],
  [-0.95, 0.6, -0.35],
  [0.35, 1.05, -0.8],
  [-0.5, -0.85, 0.75],
  [0.85, -0.7, -0.85],
  [-1.1, -0.2, 0.25],
  [0.1, -1.12, 0.15],
];

function SocialNode() {
  return <group>{[0,1,2,3].map((index)=><mesh key={index} position={[-0.6 + index * 0.4, index % 2 === 0 ? 0 : 0.35, 0]}><boxGeometry args={[0.32, 0.72, 0.7]} /><meshStandardMaterial color={index === 2 ? PALETTE.accent : SURFACE} roughness={0.62} /></mesh>)}</group>;
}function GrowthNode() {
  const heights = [0.4, 0.64, 0.56, 0.9, 0.76, 1.2, 1.5];
  return (
    <group position={[0, -0.85, 0]}>
      {heights.map((height, index) => (
        <mesh key={index} position={[-1.5 + index * 0.5, height * 0.5, 0]}>
          <boxGeometry args={[0.24, height, 0.24]} />
          <meshStandardMaterial color={SURFACE} roughness={0.3} metalness={0.65} />
          <Edges color={index === heights.length - 1 ? PALETTE.accent : EDGE} threshold={20} />
        </mesh>
      ))}
    </group>
  );
}

function AiNode() {
  const rings = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (rings.current) {
      rings.current.rotation.y = state.progress * Math.PI * 2 * 0.42;
      rings.current.rotation.z = state.progress * Math.PI * 2 * 0.23;
    }
    if (core.current) {
      core.current.scale.setScalar(1 + Math.sin(state.progress * Math.PI * 2) * 0.04);
    }
  });

  return (
    <group>
      <group ref={rings}>
        <mesh><boxGeometry args={[1.8, 0.12, 0.12]} /><meshStandardMaterial color={EDGE} /></mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[1.4, 0.12, 0.12]} /><meshStandardMaterial color={SURFACE} /></mesh>
      </group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color={PALETTE.bone}
          roughness={0.15}
          metalness={0.5}
          emissive={PALETTE.accent}
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

function CreatorNode() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2.55, 1.5, 0.13]} />
        <meshStandardMaterial color={SURFACE} roughness={0.28} metalness={0.72} />
        <Edges color={EDGE} threshold={20} />
      </mesh>
      <mesh position={[0.14, 0, 0.15]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.4, 0.7, 3]} />
        <meshStandardMaterial
          color={SURFACE}
          roughness={0.25}
          metalness={0.7}
          emissive={PALETTE.accent}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

const FORMS: Record<string, () => ReactElement> = {
  web: WebNode,
  commerce: CommerceNode,
  branding: BrandingNode,
  social: SocialNode,
  growth: GrowthNode,
  ai: AiNode,
  creator: CreatorNode,
};

/* -------------------------------------------------------------------------- */
/* Node                                                                        */
/* -------------------------------------------------------------------------- */

function ServiceNode({
  id,
  position,
  z,
  phase,
}: {
  id: string;
  position: [number, number];
  /** Depth along the corridor, derived from the anchors. */
  z: number;
  /** Per-object phase offset so idle motion is not synchronised across the corridor. */
  phase: number;
}) {
  const group = useRef<THREE.Group>(null);
  const hairline = useRef<THREE.MeshBasicMaterial>(null);
  const halo = useRef<THREE.MeshBasicMaterial>(null);
  const Form = FORMS[id] ?? WebNode;

  useFrame(() => {
    // Focus is proximity, not presence: a node lights up as the camera reaches it and
    // dims once it is behind. `progressAtCameraZ` inverts the camera track so "am I
    // being looked at" is answered by the same data that moves the camera.
    const focus = progressAtCameraZ(z - 4.5);
    const proximity = 1 - smoothstep(0, 0.085, Math.abs(state.progress - focus));
    const presence = Math.max(chapterWeight("services") * 0.3, proximity);

    if (group.current) {
      group.current.visible = presence > 0.01;
      group.current.rotation.y = phase * 0.025 + state.progress * 0.18;
      group.current.position.y = position[1] + proximity * 0.18;
    }

    if (hairline.current) hairline.current.opacity = presence * 0.16;
    if (halo.current) halo.current.opacity = presence * 0.11;
  });

  return (
    <group ref={group} position={[position[0], position[1], z]}>
      <Form />

      <mesh position={[0, -1.55, 0]}>
        <boxGeometry args={[3.4, 0.16, 2.8]} />
        <meshStandardMaterial color="#65402f" roughness={0.78} />
      </mesh>

    </group>
  );
}

export function ServiceNodes() {
  const total = services.length;

  return (
    <group>
      {services.map((service, index) => (
        <ServiceNode
          key={service.id}
          id={service.id}
          position={SERVICE_LAYOUT[index % SERVICE_LAYOUT.length]}
          z={serviceZ(index, total)}
          phase={index * 1.7}
        />
      ))}
    </group>
  );
}

"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { state } from "@/lib/scene-state";
import { academySteps } from "@/lib/content";
import { chapterWeight, localProgress, ANCHORS } from "../Timeline";
import { PALETTE } from "../environment/Atmosphere";

/**
 * The Academy is not a classroom. It is a knowledge volume: three tall pylons
 * (LEARN / BUILD / CREATE) around a slowly turning wireframe core, with a lattice of
 * small fragments suspended in between.
 *
 * Staged across the corridor at `academyCenter`, which the camera passes mid-chapter.
 * The pylons sit wide (x = -5.6 and +5.9) because the camera is moving through this,
 * not looking at it — a composition you could only read while flying past.
 */

const SURFACE = "#38251f";
const EDGE = "#9d6047";

/**
 * Where the volume sits in world space. Mirrors the `<group>` position below.
 */
export const ACADEMY_ORIGIN: readonly [number, number, number] = [0, 0, ANCHORS.academyCenter];

/**
 * Three pylons, one per Academy step, relative to `ACADEMY_ORIGIN`. Exported so the
 * verify script can assert the whole set is staged inside the chapter.
 */
export const ACADEMY_PYLONS: readonly [number, number, number][] = [
  [-3.6, 0.4, 1.2],
  [3.6, -0.3, -0.6],
  [0, 0.8, -2.4],
];

function Pylon({ position, accent }: { position: [number, number, number]; accent: boolean }) {
  const seam = useRef<THREE.MeshBasicMaterial>(null);
  const column = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    const presence = chapterWeight("academy");
    if (seam.current) seam.current.opacity = presence * (accent ? 0.95 : 0.4);
    if (column.current) {
      column.current.emissiveIntensity = presence * (accent ? 0.5 : 0.2);
    }
  });

  return (
    <group position={position}>
      <mesh position={[0, 3.2, 0]}>
        <boxGeometry args={[0.72, 6.2, 0.72]} />
        <meshStandardMaterial
          ref={column}
          color={SURFACE}
          roughness={0.28}
          metalness={0.75}
          emissive={accent ? PALETTE.accent : "#2f3d63"}
          emissiveIntensity={0.2}
        />
        <Edges color={accent ? PALETTE.accent : EDGE} threshold={20} />
      </mesh>

      {/* Internal light seam. */}
      <mesh position={[0, 3.2, 0.33]}>
        <boxGeometry args={[0.05, 10.4, 0.02]} />
        <meshBasicMaterial
          ref={seam}
          color={accent ? PALETTE.accent : PALETTE.bone}
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>

      {/* Base collar. */}
    </group>
  );
}

function Core() {
  const shell = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const presence = chapterWeight("academy");
    const travel = localProgress("academy");

    if (shell.current) {
      shell.current.visible = presence > 0.01;
      shell.current.rotation.y = travel * 0.28;
      shell.current.rotation.x = Math.sin(travel * Math.PI) * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={shell}>
        <boxGeometry args={[3.8, 0.24, 2.6]} />
        <meshStandardMaterial
          color={SURFACE}
          roughness={0.22}
          metalness={0.8}
          wireframe={false}
          emissive="#75412f"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[1.1, 0.35, 1.1]} />
        <meshStandardMaterial
          color={PALETTE.bone}
          roughness={0.1}
          metalness={0.4}
          emissive={PALETTE.accent}
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

export function AcademyNodes() {
  const root = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!root.current) return;
    root.current.visible = chapterWeight("academy") > 0.01;
  });

  return (
    <group ref={root} position={[...ACADEMY_ORIGIN] as [number, number, number]}>
      {ACADEMY_PYLONS.map((position, index) => (
        <Pylon key={academySteps[index].id} position={position} accent={index === 1} />
      ))}
      <Core />
    </group>
  );
}

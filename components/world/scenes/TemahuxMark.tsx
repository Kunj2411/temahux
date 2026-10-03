"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state } from "@/lib/scene-state";
import { clamp01, smoothstep } from "@/lib/keys";
import { PALETTE } from "../environment/Atmosphere";

/**
 * Bakes a horizontal three-stop gradient into a geometry's vertex colours so the
 * mark reads as a single continuous object rather than three tinted parts.
 */
function makeGradientGeometry(
  geometry: THREE.BufferGeometry,
  from: THREE.Color,
  via: THREE.Color,
  to: THREE.Color,
): THREE.BufferGeometry {
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  if (!box) return geometry;

  const positions = geometry.getAttribute("position") as THREE.BufferAttribute;
  const colors = new Float32Array(positions.count * 3);
  const width = Math.max(box.max.x - box.min.x, 0.001);

  for (let i = 0; i < positions.count; i += 1) {
    const x = (positions.getX(i) - box.min.x) / width;
    const color = x < 0.52 ? from.clone().lerp(via, x / 0.52) : via.clone().lerp(to, (x - 0.52) / 0.48);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

/**
 * `0 = scattered, 1 = fully assembled`. Accepts a getter so the value can be
 * animated outside React (read fresh every frame) without re-rendering anything.
 */
export type AssemblySource = number | (() => number);

interface PieceProps {
  shape: THREE.Shape;
  /** Offset applied when the mark is fully disassembled. */
  explode: [number, number, number];
  explodeRotation: [number, number, number];
  /** 0 = scattered, 1 = fully assembled. */
  assembly: AssemblySource;
  depth: number;
  /** Per-piece delay so the mark resolves in a sequence rather than all at once. */
  delay: number;
  metalness: number;
  roughness: number;
  emissiveIntensity: number;
}

function MarkPiece({
  shape,
  explode,
  explodeRotation,
  assembly,
  depth,
  delay,
  metalness,
  roughness,
  emissiveIntensity,
}: PieceProps) {
  const group = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const extruded = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
      curveSegments: 8,
    });
    return makeGradientGeometry(
      extruded,
      new THREE.Color(PALETTE.bone),
      new THREE.Color("#bb7655"),
      new THREE.Color("#5d3325"),
    );
  }, [depth, shape]);

  useFrame(() => {
    if (!group.current) return;
    const value = typeof assembly === "function" ? assembly() : assembly;
    // Reduced motion snaps straight to the resolved pose.
    const resolved = state.reducedMotion ? 1 : clamp01((value - delay) / (1 - delay));
    const t = smoothstep(0, 1, resolved);

    group.current.position.set(
      explode[0] * (1 - t),
      explode[1] * (1 - t),
      explode[2] * (1 - t),
    );
    group.current.rotation.set(
      explodeRotation[0] * (1 - t),
      explodeRotation[1] * (1 - t),
      explodeRotation[2] * (1 - t),
    );
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          vertexColors
          metalness={metalness}
          roughness={roughness}
          clearcoat={0.85}
          clearcoatRoughness={0.16}
          sheen={0.3}
          sheenColor={PALETTE.accent}
          emissive={PALETTE.accentDeep}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
    </group>
  );
}

export interface TemahuxMarkProps {
  /**
   * 0 = disassembled and scattered, 1 = fully resolved.
   * Pass a getter to animate it from outside React without re-rendering.
   */
  assembly?: AssemblySource;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  depth?: number;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
  /** Slow idle breathing of the whole mark. Disabled automatically for reduced motion. */
  float?: boolean;
}

export function TemahuxMark({
  assembly = 1,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  depth = 0.28,
  metalness = 0.36,
  roughness = 0.18,
  emissiveIntensity = 0.06,
  float = true,
}: TemahuxMarkProps) {
  const root = useRef<THREE.Group>(null);

  const top = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.78, 1.22);
    s.lineTo(1.78, 1.22);
    s.quadraticCurveTo(1.9, 1.22, 1.82, 1.1);
    s.lineTo(1.22, 0.48);
    s.quadraticCurveTo(1.12, 0.39, 0.98, 0.39);
    s.lineTo(-0.98, 0.39);
    s.quadraticCurveTo(-1.12, 0.39, -1.22, 0.48);
    s.lineTo(-1.82, 1.1);
    s.quadraticCurveTo(-1.9, 1.22, -1.78, 1.22);
    return s;
  }, []);

  const leftLeg = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-0.16, 0.49);
    s.lineTo(-0.13, -0.91);
    s.quadraticCurveTo(-0.13, -0.98, -0.21, -1.03);
    s.lineTo(-0.82, -1.25);
    s.quadraticCurveTo(-0.9, -1.29, -0.9, -1.2);
    s.lineTo(-0.9, -0.21);
    s.quadraticCurveTo(-0.9, 0.24, -0.67, 0.49);
    s.closePath();
    return s;
  }, []);

  const rightLeg = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0.08, 0.39);
    s.lineTo(0.72, 0.39);
    s.quadraticCurveTo(0.37, 0.12, 0.37, -0.22);
    s.lineTo(0.37, -0.85);
    s.quadraticCurveTo(0.37, -0.93, 0.44, -0.88);
    s.lineTo(1.04, -0.56);
    s.quadraticCurveTo(1.11, -0.52, 1.11, -0.43);
    s.lineTo(1.11, -0.22);
    s.quadraticCurveTo(1.11, 0.13, 0.72, 0.39);
    s.closePath();
    return s;
  }, []);

  useFrame(() => {
    if (!root.current) return;
    if (float && !state.reducedMotion) {
      const scrollPhase = state.progress * Math.PI * 2;
      root.current.position.y = position[1] + Math.sin(scrollPhase) * 0.045;
      root.current.rotation.y = rotation[1] + Math.sin(scrollPhase) * 0.035;
    } else {
      root.current.position.y = position[1];
      root.current.rotation.y = rotation[1];
    }
  });

  return (
    <group ref={root} position={position} rotation={rotation} scale={scale}>
      <MarkPiece
        shape={top}
        explode={[0, 5.4, -1.2]}
        explodeRotation={[-0.55, 0.2, 0]}
        assembly={assembly}
        depth={depth}
        delay={0}
        metalness={metalness}
        roughness={roughness}
        emissiveIntensity={emissiveIntensity}
      />
      <MarkPiece
        shape={leftLeg}
        explode={[-5.6, -3.2, 1.4]}
        explodeRotation={[0.3, 1.1, 0.4]}
        assembly={assembly}
        depth={depth}
        delay={0.22}
        metalness={metalness}
        roughness={roughness}
        emissiveIntensity={emissiveIntensity}
      />
      <MarkPiece
        shape={rightLeg}
        explode={[5.8, 3.6, -1.8]}
        explodeRotation={[0.2, -1.2, -0.35]}
        assembly={assembly}
        depth={depth}
        delay={0.44}
        metalness={metalness}
        roughness={roughness}
        emissiveIntensity={emissiveIntensity}
      />
    </group>
  );
}

export default TemahuxMark;

"use client";

import { useMemo, useRef } from "react";
import type { ReactElement } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { state } from "@/lib/scene-state";
import { clamp01 } from "@/lib/keys";
import { products } from "@/products";
import type { Product, ProductForm } from "@/products";
import { smoothstep } from "@/lib/keys";
import { ANCHORS, chapterWeight, progressAtCameraZ } from "../Timeline";
import { PALETTE } from "../environment/Atmosphere";

/**
 * The Products world.
 *
 * Nothing here is hardcoded. The scene reads `products` from the registry, works
 * out its own spacing from the product count, and picks a procedural form from
 * each product's `form` field. Adding a product to the registry adds an object to
 * the world — no scene code changes.
 */

const SURFACE = "#38251f";
const EDGE = "#9d6047";

/** Alternating offset pattern so the camera weaves through the constellation. */
const SWAY: readonly [number, number][] = [
  [-2.5, 0.6],
  [2.5, -0.5],
  [-2.0, 1.0],
  [2.0, -0.4],
  [-1.6, 0.4],
  [1.6, -0.8],
  [-2.4, -0.1],
  [2.4, 0.8],
];

/* -------------------------------------------------------------------------- */
/* Procedural forms                                                            */
/* -------------------------------------------------------------------------- */

function StackForm() {
  return (
    <group>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[0, -0.5 + index * 0.52, index * -0.16]} scale={[1 - index * 0.12, 1, 1]}>
          <boxGeometry args={[1.5, 0.14, 1.1]} />
          <meshStandardMaterial color={SURFACE} roughness={0.32} metalness={0.7} />
          <Edges color={index === 0 ? PALETTE.accent : EDGE} threshold={20} />
        </mesh>
      ))}
    </group>
  );
}

function LatticeForm() {
  const cells = useMemo(() => {
    const layout: [number, number, number][] = [];
    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        for (let z = 0; z < 2; z += 1) {
          layout.push([-0.42 + x * 0.42, -0.42 + y * 0.42, -0.21 + z * 0.42]);
        }
      }
    }
    return layout;
  }, []);

  return (
    <group>
      {cells.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={[0.24, 0.24, 0.24]} />
          <meshStandardMaterial
            color={SURFACE}
            roughness={0.35}
            metalness={0.65}
            emissive={index === 13 ? PALETTE.accent : "#5a3529"}
            emissiveIntensity={index === 13 ? 1.1 : 0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

const ROUTE_POINTS: readonly [number, number, number][] = [
  [-1.1, -0.9, 0],
  [-0.5, 0.1, 0.1],
  [0.15, -0.35, -0.1],
  [0.6, 0.75, 0.05],
  [1.15, 0.35, -0.05],
];

function RouteForm() {
  const line = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(
      ROUTE_POINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
    );
    const material = new THREE.LineBasicMaterial({
      color: PALETTE.accent,
      transparent: true,
      opacity: 0.7,
      toneMapped: false,
    });
    return new THREE.Line(geometry, material);
  }, []);

  return (
    <group>
      <primitive object={line} />
      {ROUTE_POINTS.map((position, index) => {
        const terminal = index === 0 || index === ROUTE_POINTS.length - 1;
        return (
          <mesh key={index} position={position as [number, number, number]}>
            <octahedronGeometry args={[terminal ? 0.16 : 0.1, 0]} />
            <meshStandardMaterial
              color={SURFACE}
              roughness={0.25}
              metalness={0.75}
              emissive={terminal ? PALETTE.accent : "#65402f"}
              emissiveIntensity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function VoiceForm() {
  return (
    <group>
      {[0.3, 0.55, 0.9, 0.52, 0.35].map((height, index) => (
        <mesh key={index} position={[-0.8 + index * 0.4, height / 2, 0]}>
          <boxGeometry args={[0.16, height, 0.18]} />
          <meshStandardMaterial color={index === 2 ? PALETTE.accent : SURFACE} roughness={0.58} />
        </mesh>
      ))}
    </group>
  );
}

function PulseForm() {
  const bars = [0.25, 0.5, 0.85, 0.42, 1.05, 0.68, 0.9, 0.34, 0.6];
  return (
    <group position={[0, -0.5, 0]}>
      {bars.map((height, index) => (
        <mesh key={index} position={[-0.9 + index * 0.22, height * 0.5, 0]}>
          <boxGeometry args={[0.1, height, 0.1]} />
          <meshStandardMaterial
            color={SURFACE}
            roughness={0.3}
            metalness={0.7}
            emissive={index === 4 ? PALETTE.accent : "#222c49"}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

const FORMS: Record<ProductForm, () => ReactElement> = {
  stack: StackForm,
  lattice: LatticeForm,
  route: RouteForm,
  voice: VoiceForm,
  pulse: PulseForm,
};

/* -------------------------------------------------------------------------- */
/* Monolith                                                                    */
/* -------------------------------------------------------------------------- */

function ProductMonolith({
  product,
  position,
  z,
  phase,
}: {
  product: Product;
  position: [number, number];
  /** Depth along the corridor, derived from the anchors. */
  z: number;
  phase: number;
}) {
  const group = useRef<THREE.Group>(null);
  const seam = useRef<THREE.MeshBasicMaterial>(null);
  const halo = useRef<THREE.MeshBasicMaterial>(null);
  const body = useRef<THREE.MeshStandardMaterial>(null);
  const Form = FORMS[product.form] ?? StackForm;

  useFrame(() => {
    // Focus is proximity along the corridor, not chapter presence: each monolith
    // lights as the camera reaches it and dims once passed.
    const focus = progressAtCameraZ(z - 5);
    const proximity = 1 - smoothstep(0, 0.075, Math.abs(state.progress - focus));
    const presence = Math.max(chapterWeight("products") * 0.25, proximity);

    if (group.current) {
      group.current.visible = presence > 0.01;
      group.current.position.y = position[1] + proximity * 0.08;
      group.current.rotation.y = phase * 0.03 + state.progress * 0.35;
    }
    if (seam.current) seam.current.opacity = presence * 0.9;
    if (halo.current) halo.current.opacity = presence * 0.09;
    if (body.current) body.current.emissiveIntensity = 0.08 + presence * 0.34;
  });

  return (
    <group ref={group} position={[position[0], position[1], z]}>
      {/* The plinth every product stands on. */}
      <mesh>
        <boxGeometry args={[1.9, 2.9, 1.35]} />
        <meshStandardMaterial
          ref={body}
          color={SURFACE}
          roughness={0.24}
          metalness={0.82}
          emissive={PALETTE.accentDeep}
          emissiveIntensity={0.12}
        />
        <Edges color={EDGE} threshold={20} />
      </mesh>

      {/* Vertical seam of accent light down the face. */}
      <mesh position={[0.97, 0, 0]}>
        <boxGeometry args={[0.02, 2.7, 0.06]} />
        <meshBasicMaterial ref={seam} color={PALETTE.accent} transparent opacity={0.7} toneMapped={false} />
      </mesh>

      {/* Signature object, floating above the plinth. */}
      <group position={[0, 0, -0.4]} scale={0.86}>
        <Form />
      </group>

      <mesh position={[0, 0, -1.1]}>
        <boxGeometry args={[2.45, 0.08, 2.2]} />
        <meshBasicMaterial
          ref={halo}
          color="#ae6041"
          transparent
          opacity={0.09}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/**
 * Six products on one long run down the corridor, evenly spaced between
 * `productsStart` and `productsEnd`. The camera sweeps the whole run without
 * stopping, so `verify-timeline.ts` asserts every slot is reached inside the products
 * chapter — a product shown at the wrong time is the failure this layout is built to
 * prevent.
 *
 * x and y come from `SWAY`; z is derived from the anchors so spacing stays even.
 */
export const PRODUCT_SWAY: readonly [number, number][] = SWAY;

/** Depth of the nth product, evenly spread across the products run. */
export function productZ(index: number, total: number): number {
  const t = total <= 1 ? 0 : index / (total - 1);
  return ANCHORS.productsStart + (ANCHORS.productsEnd - ANCHORS.productsStart) * t;
}

export function ProductNodes() {
  const root = useRef<THREE.Group>(null);
  const total = products.length;

  useFrame(() => {
    if (!root.current) return;
    root.current.visible = chapterWeight("products") > 0.01;
    root.current.rotation.y = state.progress * 0.1;
  });

  return (
    <group ref={root}>
      {products.map((product, index) => (
        <ProductMonolith
          key={product.id}
          product={product}
          position={PRODUCT_SWAY[index % PRODUCT_SWAY.length]}
          z={productZ(index, total)}
          phase={index * 1.3}
        />
      ))}
    </group>
  );
}

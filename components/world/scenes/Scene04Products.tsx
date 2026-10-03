import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";
import { ProductNodes } from "./ProductNodes";
import { ANCHORS, chapterWeight, localProgress } from "../Timeline";
import { state } from "@/lib/scene-state";

/**
 * 04 — Products.
 *
 * The widest stretch of the journey: `productsStart` to `productsEnd` spans 26 units
 * over 24% of the page, and the camera sweeps the whole run without stopping. The six
 * monoliths are spaced evenly along it, which `verify-timeline.ts` enforces — every
 * slot has to be reached inside this chapter or a product is shown at the wrong time.
 *
 * The grid is the dominant object. It converges on `threshold` ahead of the camera,
 * so the corridor has a visible destination, and it sweeps past as the camera clears
 * the last monolith.
 */
export function Scene04Products() {
  const group = useRef<Group>(null);
  const grid = useRef<Group>(null);
  const floorMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#4a3028",
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  );

  const gridMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#9d6047",
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  );

  const gridGeometry = useMemo(() => {
    const points: number[] = [];
    const lines = 26;
    const extent = 16;

    // Longitudinal lines converging on the threshold.
    for (let i = 0; i <= lines; i += 1) {
      const x = -extent + (i / lines) * extent * 2;
      points.push(x, 0, ANCHORS.productsStart, x, 0, ANCHORS.threshold);
    }

    // Lateral rungs, spaced more tightly with depth so the grid reads as receding.
    for (let i = 0; i <= 40; i += 1) {
      const t = i / 40;
      const z = ANCHORS.productsStart + (ANCHORS.threshold - ANCHORS.productsStart) * t * t;
      points.push(-extent, 0, z, extent, 0, z);
    }

    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return buffer;
  }, []);

  useFrame(() => {
    const weight = chapterWeight("products");
    const travel = localProgress("products");

    if (group.current) {
      group.current.visible = weight > 0.004;
      group.current.rotation.y = Math.sin(travel * Math.PI) * 0.035;
      group.current.position.y = 0;
    }

    if (grid.current) {
      // The grid opens up as the camera advances — the room gets bigger.
      const spread = 1 + travel * 0.9;
      grid.current.scale.set(spread, 1, 1);
      grid.current.position.z = travel * 8;
    }

    gridMaterial.opacity = 0.14 * weight;
    floorMaterial.opacity = 0.6 * weight;
  });

  return (
    <group ref={group}>
      <group ref={grid}>
        <lineSegments geometry={gridGeometry} material={gridMaterial} />
      </group>

      {/* Floor haze so the grid has a surface to sit on rather than floating in void. */}
      <mesh
        position={[0, -2.4, (ANCHORS.productsStart + ANCHORS.productsEnd) / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={floorMaterial}
      >
        <planeGeometry args={[40, 60]} />
      </mesh>

      <ProductNodes />
    </group>
  );
}

export default Scene04Products;

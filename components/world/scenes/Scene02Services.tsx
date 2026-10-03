import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";
import { ServiceNodes } from "./ServiceNodes";
import { ANCHORS, chapterWeight, localProgress } from "../Timeline";
import { state } from "@/lib/scene-state";

/**
 * 02 — Services.
 *
 * A corridor, not a cluster. Seven service nodes are staggered along z between
 * `servicesStart` and `servicesEnd`, alternating left and right of the camera's
 * path, so the chapter is a flight *through* the service list rather than a look at
 * a wall of it.
 *
 * The ribs are what sell the travel: identical rings at even z intervals, which give
 * the eye something regular to measure the camera's motion against. They sweep past
 * the eye as the chapter scrubs rather than being static scenery.
 *
 * Opacity is driven through material refs in `useFrame` so scrolling never triggers
 * a React render.
 */
const RIB_COUNT = 9;

export function Scene02Services() {
  const group = useRef<Group>(null);
  const ribs = useRef<Group>(null);

  const ribMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#a9684c",
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const wallMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#563a2d",
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const ribGeometry = useMemo(() => new THREE.BoxGeometry(8.2, 0.055, 0.12), []);

  const positions = useMemo(() => {
    const start = ANCHORS.servicesStart;
    const end = ANCHORS.servicesEnd;
    const items: Array<{ z: number; offset: number }> = [];

    for (let i = 0; i < RIB_COUNT; i += 1) {
      const t = i / (RIB_COUNT - 1);
      items.push({ z: start + (end - start) * t, offset: i % 2 === 0 ? -1 : 1 });
    }

    return items;
  }, []);

  const midZ = (ANCHORS.servicesStart + ANCHORS.servicesEnd) / 2;

  useFrame(() => {
    const weight = chapterWeight("services");
    const travel = localProgress("services");

    if (group.current) {
      group.current.visible = weight > 0.004;
      group.current.rotation.y = Math.sin(travel * Math.PI) * 0.025;
      group.current.position.y = 0;
    }

    if (ribs.current) {
      // Ribs sweep past the eye as the chapter scrubs.
      ribs.current.position.z = travel * 6;
      const scale = 0.6 + travel * 0.4;
      ribs.current.scale.set(scale, scale, 1);
    }

    ribMaterial.opacity = 0.16 * weight;
    wallMaterial.opacity = 0.5 * weight;
  });

  return (
    <group ref={group}>
      <group ref={ribs}>
        {positions.map((item, index) => (
          <mesh
            key={index}
            position={[item.offset * 0.35, 0, item.z]}
            geometry={ribGeometry}
            material={ribMaterial}
          />
        ))}
      </group>

      {/* The corridor walls: two long planes that close the frame either side. */}
      <mesh position={[-7.4, 0, midZ]} material={wallMaterial}>
        <planeGeometry args={[26, 26]} />
      </mesh>
      <mesh position={[7.4, 0, midZ]} material={wallMaterial}>
        <planeGeometry args={[26, 26]} />
      </mesh>

      <ServiceNodes />
    </group>
  );
}

export default Scene02Services;

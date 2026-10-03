import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";
import { AcademyNodes } from "./AcademyNodes";
import { ANCHORS, chapterWeight, localProgress } from "../Timeline";
import { state } from "@/lib/scene-state";

/**
 * 03 — Academy.
 *
 * The corridor opens out. `servicesEnd` is behind the camera by the time this
 * chapter starts, and `academyCenter` is passed at its midpoint, so the geometry
 * here is a *chamber* the camera moves through and out of — ribs streaming past,
 * then a wide exit aperture at `threshold`.
 *
 * The moving ribs are the continuity device between the two chapters: same ring
 * silhouette as Services, but accelerating and pulling apart, which reads as the
 * space changing rather than the scene being swapped.
 */
const RIB_COUNT = 7;

export function Scene03Academy() {
  const group = useRef<Group>(null);
  const ribs = useRef<Group>(null);

  const ribMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#b77855",
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const exitMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#e8dccb",
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const ribGeometry = useMemo(() => new THREE.BoxGeometry(7.2, 0.07, 0.14), []);

  const positions = useMemo(() => {
    // Ribs run from just behind the academy centre out toward the threshold, so the
    // camera passes every one of them during the chapter.
    const start = ANCHORS.academyCenter + 6;
    const end = ANCHORS.threshold + 12;
    const items: number[] = [];

    for (let i = 0; i < RIB_COUNT; i += 1) {
      items.push(start + (end - start) * (i / (RIB_COUNT - 1)));
    }

    return items;
  }, []);

  useFrame(() => {
    const weight = chapterWeight("academy");
    const travel = localProgress("academy");

    if (group.current) {
      group.current.visible = weight > 0.004;
      group.current.rotation.y = Math.sin(travel * Math.PI) * 0.04;
      group.current.position.y = 0;
    }

    if (ribs.current) {
      // The chamber expands as the camera advances.
      const expansion = 1 + travel * 1.8;
      ribs.current.scale.set(expansion, expansion, 1);
      ribs.current.rotation.z = travel * 0.5;
    }

    ribMaterial.opacity = 0.2 * weight;
    // The exit only resolves late, once the academy is behind the camera.
    exitMaterial.opacity = 0.3 * weight * Math.max(0, (travel - 0.45) / 0.55);
  });

  return (
    <group ref={group}>
      <group ref={ribs}>
        {positions.map((z, index) => (
          <mesh key={index} position={[0, 0, z]} geometry={ribGeometry} material={ribMaterial} />
        ))}
      </group>

      {/* The exit aperture the corridor opens onto. */}
      <mesh position={[0, -2.6, ANCHORS.threshold]} material={exitMaterial}>
        <boxGeometry args={[10, 0.12, 0.28]} />
      </mesh>

      <AcademyNodes />
    </group>
  );
}

export default Scene03Academy;

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mesh, Group } from "three";
import { TemahuxMark } from "./TemahuxMark";
import { ANCHORS, chapterWeight, localProgress } from "../Timeline";

/**
 * 01 — Origin.
 *
 * The camera opens at z = 16 looking down an otherwise empty corridor, with the
 * hero T mark standing at `originMark` (z = 6) and a thin gate ring between them.
 * Nothing else exists yet, which is the point: the first thing a visitor sees is a
 * single object with real depth behind it rather than a flat composition.
 *
 * As the chapter scrubs, the camera flies *past* the mark. That is why `originGate`
 * sits in front of `originMark` and why `servicesStart` is behind both — the mark
 * grows, passes the eye, and is gone by the time the services corridor opens.
 */
export function Scene01Origin() {
  const group = useRef<Group>(null);
  const wash = useRef<Mesh>(null);
  const mark = useRef<Group>(null);

  const washTexture = useMemo(() => makeWashTexture(), []);

  const washMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: washTexture,
        transparent: true,
        depthWrite: false,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      }),
    [washTexture],
  );

  useFrame(() => {
    const weight = chapterWeight("origin");
    const travel = localProgress("origin");

    if (group.current) {
      group.current.visible = weight > 0.004;
    }

    if (mark.current) {
      // The mark leans and settles as the camera closes on it.
      mark.current.rotation.y = Math.sin(travel * Math.PI) * 0.18;
      mark.current.rotation.x = Math.cos(travel * Math.PI * 0.5) * 0.06;
    }

    if (wash.current) {
      washMaterial.opacity = 0.5 * weight;
    }

  });

  return (
    <group ref={group}>
      {/* Wash: the far glow behind the mark, so it silhouettes instead of floating. */}
      <mesh ref={wash} position={[0, 0, ANCHORS.originMark - 3]}>
        <planeGeometry args={[26, 26]} />
        <primitive object={washMaterial} attach="material" />
      </mesh>

      {/* One fine center seam, echoing the reference's restrained depth cue. */}
      {/* Paired low platforms establish the warm, symmetrical journey. */}
      <mesh position={[-3.4, -2.45, ANCHORS.originMark - 7]} rotation={[0, 0.08, 0]}>
        <boxGeometry args={[1.7, 0.22, 2.4]} />
        <meshStandardMaterial color="#59372b" roughness={0.72} metalness={0.08} />
      </mesh>
      <mesh position={[3.4, -2.45, ANCHORS.originMark - 7]} rotation={[0, -0.08, 0]}>
        <boxGeometry args={[1.7, 0.22, 2.4]} />
        <meshStandardMaterial color="#75432f" roughness={0.66} metalness={0.1} />
      </mesh>

      {/* The TEMAHUX symbol supports the headline from the right side of frame. */}
      <group ref={mark} position={[2.2, -0.55, ANCHORS.originMark]} scale={0.16}>
        <TemahuxMark />
      </group>


    </group>
  );
}

/* -------------------------------------------------------------------------- */

function makeWashTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");

  if (context) {
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "rgba(255, 236, 214, 0.85)");
    gradient.addColorStop(0.45, "rgba(200, 182, 160, 0.22)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default Scene01Origin;

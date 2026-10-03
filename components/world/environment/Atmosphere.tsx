"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state } from "@/lib/scene-state";
import { profileFor } from "../quality";

/** Warm, restrained tones sampled from the site's light editorial reference. */
export const PALETTE = {
  void: "#eeeeec",
  bone: "#663624",
  accent: "#a84f32",
  accentDeep: "#48261d",
  steel: "#79645a",
} as const;

const backdropVertex = /* glsl */ `
  varying vec3 vLocal;
  void main() {
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const backdropFragment = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uFloor;
  uniform vec3 uAccent;
  uniform float uStrength;
  varying vec3 vLocal;

  void main() {
    vec3 dir = normalize(vLocal);
    float h = dir.y;

    vec3 color = mix(uHorizon, uTop, smoothstep(0.0, 0.85, h));
    color = mix(color, uFloor, smoothstep(0.0, -0.7, h));

    // A single narrow band of accent sitting just above the horizon line.
    float band = exp(-pow((h - 0.06) * 7.5, 2.0));
    color += uAccent * band * 0.17 * uStrength;

    // Very low frequency vertical breakup so the sky is never a flat fill.
    float drift = sin(dir.x * 2.1 + dir.y * 1.3) * 0.5 + 0.5;
    color *= 0.94 + drift * 0.06;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function Backdrop() {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTop: { value: new THREE.Color("#f5f4f1") },
      uHorizon: { value: new THREE.Color("#e8e5e0") },
      uFloor: { value: new THREE.Color("#eeeae5") },
      uAccent: { value: new THREE.Color(PALETTE.accent) },
      uStrength: { value: 1 },
    }),
    [],
  );

  useFrame(() => {
    if (!material.current) return;
    material.current.uniforms.uStrength.value = 0.7 + state.weights.origin * 0.5;
  });

  return (
    <mesh scale={300} frustumCulled={false} renderOrder={-1000}>
      <sphereGeometry args={[1, 32, 24]} />
      <shaderMaterial
        ref={material}
        vertexShader={backdropVertex}
        fragmentShader={backdropFragment}
        uniforms={uniforms}
        side={THREE.BackSide}
        depthWrite={false}
        fog={false}
        toneMapped={false}
      />
    </mesh>
  );
}

/**
 * Corridor floor.
 *
 * A grid receding to `threshold`, not a bounded stage. The camera travels 120 units,
 * so the floor has to exist over the whole run or the world visibly ends. The lines
 * are the main cue that the camera is moving: without something regular and receding
 * to measure against, travel through a dark corridor reads as nothing happening.
 */
function CorridorFloor() {
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const halfX = 22;
    const near = 16;
    const far = -130;
    const lines = 26;

    for (let i = 0; i <= lines; i += 1) {
      const z = near + ((far - near) / lines) * i;
      positions.push(-halfX, 0, z, halfX, 0, z);
    }

    for (let i = 0; i <= 18; i += 1) {
      const x = -halfX + (i / 18) * halfX * 2;
      positions.push(x, 0, near, x, 0, far);
    }

    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return buffer;
  }, []);

  const material = useRef<THREE.LineBasicMaterial>(null);

  useFrame(() => {
    if (!material.current) return;
    // Holds the frame between chapters rather than fading out with any one of them.
    const emphasis = Math.max(
      state.weights.origin,
      state.weights.services,
      state.weights.academy,
      state.weights.products,
      state.weights.finale,
    );
    material.current.opacity = 0.012 + emphasis * 0.012;
  });

  return (
    <lineSegments geometry={geometry} position={[0, -4.2, 0]}>
      <lineBasicMaterial
        ref={material}
        color="#9d8f85"
        transparent
        opacity={0.1}
        depthWrite={false}
        toneMapped={false}
      />
    </lineSegments>
  );
}

export function Atmosphere() {
  const profile = profileFor(state.quality);
  const keyLight = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!keyLight.current) return;
    keyLight.current.intensity = 21 + Math.max(state.weights.services, state.weights.academy, state.weights.products) * 3;
  });

  return (
    <>
      <color attach="background" args={[PALETTE.void]} />
      {/*
        Fog brackets the whole run. The near plane sits well past the origin mark so
        the opening frame stays clean, and the far plane closes just beyond
        `threshold` so the corridor visibly ends rather than fading into nothing.
      */}
      <fog attach="fog" args={[PALETTE.void, 18, 150]} />

      {profile.backdrop && <Backdrop />}
      <CorridorFloor />

      <ambientLight intensity={0.9} color="#fff8f1" />
      <hemisphereLight args={["#fffaf5", "#765344", 0.8]} />

      {/*
        Key lights are placed at the anchors rather than in one place at the origin.
        A single light at the start of a 120-unit corridor leaves everything past the
        first chapter unlit, so there is one pool per stage.
      */}
      <pointLight
        ref={keyLight}
        position={[0, 9, 9]}
        intensity={24}
        distance={70}
        decay={2}
        color="#ffc39a"
      />
      <pointLight position={[0, 7, -6]} intensity={24} distance={60} decay={2} color="#e8a477" />
      <pointLight position={[0, 8, -30]} intensity={26} distance={60} decay={2} color="#d99168" />
      <pointLight position={[0, 9, -56]} intensity={24} distance={60} decay={2} color="#e2a17b" />
      <pointLight position={[0, 10, -92]} intensity={22} distance={60} decay={2} color="#ffc39a" />

      {/* Flank accents sit inside their own stretch of corridor. */}
      <pointLight position={[-4.6, 1.8, -4]} intensity={8} distance={26} decay={2} color="#c97d58" />
      <pointLight position={[5.2, 1.4, -8]} intensity={8} distance={26} decay={2} color="#d49a70" />
      <pointLight position={[-3.8, -1.6, -26]} intensity={7} distance={24} decay={2} color={PALETTE.accentDeep} />
      <pointLight position={[0, -2.4, -34]} intensity={8} distance={26} decay={2} color={PALETTE.accentDeep} />
      <pointLight position={[2.6, 1.2, -48]} intensity={7} distance={24} decay={2} color="#b66a4b" />
    </>
  );
}

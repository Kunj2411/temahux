"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state } from "@/lib/scene-state";
import { profileFor } from "../quality";
import { PALETTE } from "./Atmosphere";

/**
 * Deterministic particle field.
 *
 * Wrapped around the camera on Z so the volume follows it down the whole 120-unit
 * corridor instead of being authored to fixed coordinates. This is what makes dust
 * worth having on a travelling camera: it is the one element that stays constant
 * relative to the eye while the world streams past, so it reads as speed.
 */
const dustVertex = /* glsl */ `
  uniform float uTime;
  uniform float uCameraZ;
  uniform float uSpan;
  uniform float uSize;
  uniform float uSway;

  attribute float aScale;
  attribute float aSpeed;

  varying float vFade;

  void main() {
    float z = mod(position.z - uCameraZ + uSpan * 0.5, uSpan) - uSpan * 0.5 + uCameraZ;

    vec3 p = vec3(position.x, position.y, z);
    p.x += sin(uTime * aSpeed + position.z * 0.35) * uSway;
    p.y += cos(uTime * aSpeed * 0.7 + position.x * 0.4) * uSway * 0.55;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float depth = -mv.z;
    gl_PointSize = uSize * aScale * (34.0 / max(depth, 0.6));

    // Fade in the very near field so particles never slap the lens, and fade out at
    // the far edge of the wrap volume. Both smoothsteps run low -> high because GLSL
    // leaves a reversed edge pair undefined.
    vFade = smoothstep(1.5, 5.0, depth) * (1.0 - smoothstep(uSpan * 0.16, uSpan * 0.52, depth));
  }
`;

const dustFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    vec2 centered = gl_PointCoord - 0.5;
    float radius = length(centered);
    float alpha = smoothstep(0.5, 0.04, radius);
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(uColor, alpha * vFade * uOpacity);
  }
`;

interface LayerProps {
  count: number;
  span: number;
  spread: number;
  size: number;
  opacity: number;
  color: string;
  sway: number;
  seed: number;
}

function DustLayer({
  count,
  span,
  spread,
  size,
  opacity,
  color,
  sway,
  seed,
}: LayerProps) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);

    let rng = seed;
    const random = () => {
      rng = (rng * 16807) % 2147483647;
      return (rng - 1) / 2147483646;
    };

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (random() - 0.5) * spread;
      positions[i * 3 + 1] = (random() - 0.5) * spread * 0.62;
      positions[i * 3 + 2] = (random() - 0.5) * span;
      scales[i] = 0.35 + random() * random() * 2.1;
      speeds[i] = 0.06 + random() * 0.24;
    }

    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    buffer.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    buffer.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    return buffer;
  }, [count, span, spread, seed]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uCameraZ: { value: 16 },
      uSpan: { value: span },
      uSize: { value: size },
      uSway: { value: sway },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
    }),
    [color, opacity, size, span, sway],
  );

  useFrame(() => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.progress * 12;
    material.current.uniforms.uCameraZ.value = state.progress * -120 + 16;
  });

  return (
    <points geometry={geometry} frustumCulled={false} renderOrder={-10}>
      <shaderMaterial
        ref={material}
        vertexShader={dustVertex}
        fragmentShader={dustFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

export function Dust() {
  const profile = profileFor(state.quality);

  return (
    <>
      <DustLayer
        count={profile.dust[0]}
        span={64}
        spread={48}
        size={2.2}
        opacity={0.42}
        color="#c8d6ff"
        sway={0.7}
        seed={9173}
      />
      <DustLayer
        count={profile.dust[1]}
        span={52}
        spread={34}
        size={4.2}
        opacity={0.3}
        color={PALETTE.accent}
        sway={1.2}
        seed={4421}
      />
    </>
  );
}

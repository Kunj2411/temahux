"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { state } from "@/lib/scene-state";
import { Atmosphere } from "./environment/Atmosphere";
import { CameraRig } from "./CameraRig";
import { Post } from "./Post";
import { profileFor, resolveDpr } from "./quality";
import { Scene01Origin } from "./scenes/Scene01Origin";
import { Scene02Services } from "./scenes/Scene02Services";
import { Scene03Academy } from "./scenes/Scene03Academy";
import { Scene04Products } from "./scenes/Scene04Products";
import { Scene05Return } from "./scenes/Scene05Return";

/**
 * The world root.
 *
 * Everything inside the Canvas is procedural, so there is no asset loader to wait
 * on. The only gate is the first rendered frame, which flips `state.ready` and
 * hands control back to the HTML preloader.
 *
 * Note there is no `Preload` / `Environment` here: the world must be visible
 * before the intro reveal starts, and a scene-level environment capture would
 * blank the first frame. Materials therefore use explicit emissive values and the
 * key lights do the work.
 */
export function World() {
  // Quality is resolved before this component mounts (see detectQuality), so the
  // DPR ceiling is applied on the very first frame instead of being corrected by a
  // later re-render. Low tier and reduced motion stay inside a real budget.
  const profile = profileFor(state.quality);
  const dpr = resolveDpr(profile);

  return (
    <Canvas
      dpr={dpr}
      camera={{ fov: 40, near: 0.1, far: 320, position: [0, 0.8, 16] }}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
      onCreated={({ gl }) => {
        // <Post /> owns ACES tone mapping whenever the post chain is active.
        // The low tier skips the composer entirely, so the renderer applies ACES
        // itself; otherwise low-end devices would render untone-mapped.
        gl.toneMapping = profile.post ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1;
        gl.setClearColor(new THREE.Color("#05060a"), 1);
      }}
    >
      <Director />
      <CameraRig />
      <Atmosphere />
      <Scene01Origin />
      <Scene02Services />
      <Scene03Academy />
      <Scene04Products />
      <Scene05Return />
      <Post />
    </Canvas>
  );
}

/**
 * Signals the first rendered frame so the honest (frame-based) loader can finish.
 * Scroll-driven scene state remains entirely independent of elapsed wall-clock time.
 */
function Director() {
  useFrame(() => {
    state.ready = true;
  });

  return null;
}

export default World;

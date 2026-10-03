"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  SMAA,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import type { BloomEffect } from "postprocessing";
import { BlendFunction, ToneMappingMode } from "postprocessing";
import { state } from "@/lib/scene-state";
import { chapterWeight } from "./Timeline";
import { profileFor } from "./quality";

/**
 * Restrained post-processing.
 *
 * The rule here is that effects serve the image and never announce themselves:
 *
 *  - Bloom is deliberately weak (intensity ~0.45, high luminance threshold) and
 *    only lifts while the camera is inside the Academy, where the core and the
 *    suspended fragments are genuinely emissive.
 *  - Tone mapping is ACES Filmic so bone-white surfaces and accent emissives roll
 *    off instead of clipping.
 *  - SMAA keeps geometry edges clean at low pixel ratios without supersampling.
 *  - Vignette is very light; it only stops the corridor corners going flat black.
 *
 * On the `low` tier the composer is skipped entirely and the renderer falls back
 * to plain Canvas output.
 */
export function Post() {
  const bloom = useRef<BloomEffect>(null);
  const profile = profileFor(state.quality);

  useFrame(() => {
    if (!bloom.current) return;
    // Bloom breathes with the Academy so the rest of the journey stays flat.
    bloom.current.intensity = 0.4 + chapterWeight("academy") * 0.55;
  });

  if (!profile.post) return null;

  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <Bloom
        ref={bloom}
        intensity={0.45}
        luminanceThreshold={0.72}
        luminanceSmoothing={0.28}
        mipmapBlur
        radius={0.62}
      />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <SMAA />
      <Vignette offset={0.28} darkness={0.5} blendFunction={BlendFunction.NORMAL} />
    </EffectComposer>
  );
}

export default Post;
"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { state } from "@/lib/scene-state";
import { CAMERA_TRACKS, sampleVec3 } from "./Timeline";

interface Vec {
  x: number;
  y: number;
  z: number;
}

const desktopPosition: Vec = { x: 0, y: 0, z: 0 };
const desktopTarget: Vec = { x: 0, y: 0, z: 0 };

interface SolvedCamera {
  position: Vec;
  target: Vec;
  fov: number;
}

const POSITION_TRACKS = [CAMERA_TRACKS.px, CAMERA_TRACKS.py, CAMERA_TRACKS.pz] as const;
const TARGET_TRACKS = [CAMERA_TRACKS.tx, CAMERA_TRACKS.ty, CAMERA_TRACKS.tz] as const;

function sampleDesktop(progress: number): SolvedCamera {
  sampleVec3(POSITION_TRACKS, progress, desktopPosition);
  sampleVec3(TARGET_TRACKS, progress, desktopTarget);

  let fov = CAMERA_TRACKS.fov[0].value;
  const track = CAMERA_TRACKS.fov;
  for (let i = 0; i < track.length - 1; i += 1) {
    const a = track[i];
    const b = track[i + 1];
    if (progress >= a.at && progress <= b.at) {
      const span = b.at - a.at;
      const local = span <= 0 ? 1 : (progress - a.at) / span;
      fov = a.value + (b.value - a.value) * local;
      break;
    }
    if (progress > b.at) fov = b.value;
  }

  return { position: desktopPosition, target: desktopTarget, fov };
}

/**
 * Mobile camera.
 *
 * Derived from the desktop path rather than hand-authored a second time, which
 * guarantees the two compositions travel through the same world:
 *   - lateral drift collapses toward the centre line,
 *   - height is reduced so the horizon stays in frame on a tall viewport,
 *   - the camera is pulled closer to its look-at point (shorter sightlines),
 *   - the lens opens to the reference's 70-degree mobile field of view.
 */
function solveCamera(progress: number, mobile: boolean): SolvedCamera {
  const solved = sampleDesktop(progress);
  if (!mobile) return solved;

  const distance = solved.target.z - solved.position.z;
  return {
    position: {
      x: solved.position.x * 0.22,
      y: 0.35 + solved.position.y * 0.42,
      z: solved.position.z + distance * 0.34,
    },
    target: {
      x: solved.target.x * 0.5,
      y: 0.15 + solved.target.y * 0.5,
      z: solved.target.z,
    },
    fov: solved.fov + 30,
  };
}

const desiredPosition = new THREE.Vector3();
const desiredTarget = new THREE.Vector3();

export function CameraRig() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    camera.near = 0.4;
    camera.far = 420;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;

    const reduced = state.reducedMotion;
    const mobile = state.coarse || size.width < 860;

    // Reduced motion holds a still, well composed frame instead of travelling.
    const solved = solveCamera(reduced ? 0 : state.progress, mobile);

    desiredPosition.set(solved.position.x, solved.position.y, solved.position.z);
    desiredTarget.set(solved.target.x, solved.target.y, solved.target.z);

    camera.position.copy(desiredPosition);
    camera.lookAt(desiredTarget);
    const lateral = (desiredTarget.x - desiredPosition.x) * 0.02;
    camera.rotation.z += reduced ? 0 : THREE.MathUtils.clamp(lateral, -0.04, 0.04);
    if (Math.abs(camera.fov - solved.fov) > 0.004) {
      camera.fov = solved.fov;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

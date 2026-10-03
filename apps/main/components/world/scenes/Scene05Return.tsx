import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group, Mesh } from "three";
import { TemahuxMark } from "./TemahuxMark";
import { ANCHORS, chapterWeight, localProgress } from "../Timeline";
import { state } from "@/lib/scene-state";

/**
 * 05 — Temahux.
 *
 * The bookend. The camera has swept from z = 16 to z = -104 and stops, and the mark
 * stands at `returnMark` (z = -122) framed dead ahead by the final look-at keyframe.
 *
 * `returnMark` is deliberately *beyond* the camera's final position rather than at it.
 * Putting the mark where the camera stops would put it behind the near plane and the
 * closing shot would frame empty corridor; stopping short and looking at it is the
 * same gesture the film opened on, which is the point of a bookend.
 *
 * The convergence ring is the only thing between the eye and the mark, and it opens
 * as the chapter resolves.
 */
export function Scene05Return() {
  const group = useRef<Group>(null);
  const mark = useRef<Group>(null);

  useFrame(() => {
    const weight = chapterWeight("finale");
    const travel = localProgress("finale");

    if (group.current) {
      group.current.visible = weight > 0.004;
      group.current.rotation.y = Math.sin(travel * Math.PI) * 0.02;
    }


    if (mark.current) {
      // The mark settles to face the camera squarely for the closing frame.
      mark.current.rotation.y = (1 - travel) * 0.22;
      mark.current.rotation.x = (1 - travel) * -0.08;
    }
  });

  return (
    <group ref={group}>
      <group ref={mark} position={[0, 0, ANCHORS.returnMark]} scale={1.3}>
        <TemahuxMark />
      </group>

      {/* The floor line returning, closing the loop with the opening frame. */}
      <mesh position={[0, -3.4, ANCHORS.returnMark + 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[8, 2.5, 0.08]} />
        <meshStandardMaterial color="#563629" roughness={0.75} />
      </mesh>
    </group>
  );
}

export default Scene05Return;

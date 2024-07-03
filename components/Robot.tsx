/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei/native";
import Modal from "../assets/Modal.glb";
import { useFrame } from "@react-three/fiber/native";
import { easing } from "maath";

import * as THREE from "three";

const Robot = (props) => {
  const groupRef = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>();
  const light = useRef<THREE.PointLight>();

  const { nodes, materials, animations } = useGLTF(Modal);
  const { actions } = useAnimations(animations, groupRef);

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    easing.dampE(
      head.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );
    light.current.intensity = 1 + t;
  });

  return (
    <group {...props} dispose={null} ref={groupRef} position={[0, -0.5, 0]}>
      <group scale={0.01}>
        <group scale={50} ref={head}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["S2WT_E_(LP)_BODY_Body_0"].geometry}
            material={materials["Body.001"]}
            position={[0, 1.14, -0.251]}
          >
            <pointLight
              ref={light}
              intensity={1}
              color={[10, 2, 5]}
              distance={2.5}
            />
          </mesh>
        </group>
        <group scale={50}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["S2WT_E_(LP)_HEAD_Head_0"].geometry}
            material={materials["Head.001"]}
            position={[0, 2.726, 0.052]}
          />
        </group>
      </group>
    </group>
  );
};

export default Robot;

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { Pathfinding } from "three-pathfinding";
import { DoubleSide } from "three";

export function Map(props) {
  const { nodes, materials } = useGLTF("/level.glb");
  return (
    <mesh
      geometry={nodes.Cube.geometry}
      material={materials.Default}
      receiveShadow
      castShadow
    ></mesh>
  );
}

useGLTF.preload("./level.glb");

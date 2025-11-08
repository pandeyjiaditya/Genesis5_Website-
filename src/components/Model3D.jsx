import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model3D({
  modelPath,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  autoRotate = false,
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

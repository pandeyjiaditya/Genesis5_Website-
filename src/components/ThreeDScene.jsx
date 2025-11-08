import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model3D from "./Model3D";

export default function ThreeDScene({
  modelPath,
  cameraPosition = [0, 0, 5],
  modelScale = 1,
  autoRotate = true,
  enableControls = true,
  className = "",
}) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model3D
            modelPath={modelPath}
            position={[0, -1, 0]}
            scale={modelScale}
            autoRotate={autoRotate}
          />
        </Suspense>

        {enableControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  );
}

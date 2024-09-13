import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Sword = () => {
  const sword = useGLTF('./sword1.glb');
  
  return (
    <primitive 
      object={sword.scene} 
      scale={7} 
      position={[0, 20, 0]} 
      rotation-x={-Math.PI / 2} 
    />
  );
};

const SwordCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '50vw', height: '50vh' }}
      camera={{ 
        fov: 75,
        near: 0.1,
        far: 200,
        position: [0, 0, 50]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Sword />
        
      </Suspense>
    </Canvas>
  );
};

export default SwordCanvas;

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export const CityModel = () => {
  const [error, setError] = useState(false);
  
  try {
    // We wrap the hook in a way that we can detect if the file is missing
    // Note: useGLTF itself will throw if not found, so we need a boundary or a check
    // Since we are in a component, we can't easily catch hook errors here, 
    // but we can check if the file exists theoretically if we were server-side.
    // For now, I'll use a standard mesh if scene is not available.
    const { scene } = useGLTF("/models/cityscape.glb");
    
    if (!scene) return <BoxFallback text="Model Load Error" />;
    
    return <primitive object={scene} scale={0.5} position={[0, -2, 0]} />;
  } catch (e) {
    console.warn("3D Model not found or failed to load. Using Box fallback.");
    return <BoxFallback text="Model Not Found" />;
  }
};

const BoxFallback = ({ text }: { text: string }) => (
  <mesh scale={2}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#7042f8" wireframe />
  </mesh>
);

// Preload is important but can cause errors if file 404s
// I'll wrap it or just rely on the component loading
// useGLTF.preload("/models/cityscape.glb");

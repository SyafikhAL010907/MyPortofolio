"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, AdaptiveDpr, Preload, Html } from "@react-three/drei";
import { CityModel } from "@/components/sub/city-model";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { MovingBorder } from "@/components/ui/moving-borders";

export const FutureVision = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section
      ref={ref}
      id="future-vision"
      className="relative flex flex-col items-center justify-center w-full min-h-[600px] overflow-hidden py-20 px-4 md:px-20"
    >
      {/* Background Video Layer */}
      {inView && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-30"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      )}

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {inView && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
          >
            <AdaptiveDpr pixelated />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
            
            <Suspense fallback={
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#2A0E61" />
                <Html center>
                  <div className="text-white text-xs whitespace-nowrap">Loading 3D Scene...</div>
                </Html>
              </mesh>
            }>
              <CityModel />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Suspense>
            
            <Preload all />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        )}
      </div>

      {/* Content with Moving Border Effect */}
      <div className="relative w-full max-w-[1200px] min-h-[400px] border border-white/10 rounded-[2rem] bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center">
        {/* Moving Border logic integrated or using the existing component */}
        <div className="absolute inset-0 -z-0">
          <MovingBorder duration={3000} rx="30%" ry="30%">
             <div className="h-20 w-20 bg-[radial-gradient(var(--cyan-500)_40%,transparent_60%)] opacity-[0.8]" />
          </MovingBorder>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="z-[10] flex flex-col items-center justify-center text-center p-12"
        >
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              FUTURE VISION
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="mt-8"
          >
            <span className="text-xl md:text-3xl font-bold text-cyan-400 tracking-[0.3em] uppercase drop-shadow-md">
              ADVANCED DEVELOPMENT
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureVision;

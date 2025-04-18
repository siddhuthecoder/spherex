"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { div } from "three/tsl";

const PARTICLE_COUNT = 100;
const SPAWN_RADIUS = 10;
const SPEED = 0.005;

const StarBackground = () => {
  const ref = useRef();

  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const velocities = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

 // Spawn particles starting below, moving upwards
useMemo(() => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
      const y = -SPAWN_RADIUS + Math.random() * 2; // lower Y start
      const z = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
  
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
  
      velocities[i * 3] = 0; // no X movement
      velocities[i * 3 + 1] = SPEED; // move upward
      velocities[i * 3 + 2] = 0; // no Z movement
    }
  }, [positions, velocities]);
  
  useFrame(() => {
    const array = ref.current.geometry.attributes.position.array;
  
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i * 3 + 1] += velocities[i * 3 + 1]; // move only Y
  
      // Reset if star goes too high
      if (array[i * 3 + 1] > SPAWN_RADIUS) {
        array[i * 3] = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
        array[i * 3 + 1] = -SPAWN_RADIUS + Math.random(); // reset low
        array[i * 3 + 2] = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
      }
    }
  
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const GrowingStars = () => (
  <div className="flex justify-center w-full h-full z-[20]">
  <div className="absolute  w-full md:w-[500px]  ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
  </div>
);

export default GrowingStars;

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

  // Initialize at completely random positions in a sphere volume (not shell)
  useMemo(() => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
      const y = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
      const z = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      velocities[i * 3] = (-x / len) * SPEED;
      velocities[i * 3 + 1] = (-y / len) * SPEED;
      velocities[i * 3 + 2] = (-z / len) * SPEED;
    }
  }, [positions, velocities]);

  useFrame(() => {
    const array = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i * 3] += velocities[i * 3];
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3 + 2] += velocities[i * 3 + 2];

      const x = array[i * 3];
      const y = array[i * 3 + 1];
      const z = array[i * 3 + 2];
      const distSq = x * x + y * y + z * z;

      if (distSq < 0.05) {
        // Re-spawn at new random location
        const newX = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
        const newY = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;
        const newZ = (Math.random() - 0.5) * 2 * SPAWN_RADIUS;

        array[i * 3] = newX;
        array[i * 3 + 1] = newY;
        array[i * 3 + 2] = newZ;

        const len = Math.sqrt(newX * newX + newY * newY + newZ * newZ) || 1;
        velocities[i * 3] = (-newX / len) * SPEED;
        velocities[i * 3 + 1] = (-newY / len) * SPEED;
        velocities[i * 3 + 2] = (-newZ / len) * SPEED;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015; // adjust speed if needed
      groupRef.current.rotation.x += 0.0005; // optional: multi-axis rotation
    }
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

const StarsCanvas = () => (
  <div className="flex justify-center w-full h-full z-[20]">
  <div className="absolute bottom-1/3 w-full md:w-[500px] ">
    <Canvas camera={{ position: [0, 0, 1] }} >
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
  </div>
);

export default StarsCanvas;

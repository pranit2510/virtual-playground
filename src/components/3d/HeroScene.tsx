import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const Model = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF('/models/ai_model.glb');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <motion.mesh
      ref={meshRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <primitive object={nodes.Scene} />
    </motion.mesh>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366F1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model />
        <Particles />
        <fog attach="fog" args={['#0F172A', 5, 15]} />
      </Canvas>
    </div>
  );
}; 
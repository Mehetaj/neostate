import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import { useScroll } from '../../context/ScrollContext';

// Mock component since we don't have actual 3D models
const Building = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollY } = useScroll();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle rotation animation
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      // Scale based on scroll position
      const scrollScale = 1 - (scrollY / 5000);
      meshRef.current.scale.set(scrollScale, scrollScale, scrollScale);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial 
        color="#0766FF" 
        metalness={0.9}
        roughness={0.1}
        emissive="#0766FF"
        emissiveIntensity={0.2}
      />
      
      {/* Building details */}
      <group position={[0, 0, 1.01]}>
        {/* Windows */}
        {Array.from({ length: 5 }).map((_, row) => (
          Array.from({ length: 3 }).map((_, col) => (
            <mesh 
              key={`window-${row}-${col}`} 
              position={[(col - 1) * 0.5, (row - 2) * 0.5, 0]}
            >
              <boxGeometry args={[0.3, 0.3, 0.1]} />
              <meshStandardMaterial 
                color="#F5F7FF" 
                emissive="#F5F7FF"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))
        ))}
      </group>
      
      {/* Building base */}
      <mesh position={[0, -1.7, 0]}>
        <boxGeometry args={[3, 0.3, 3]} />
        <meshStandardMaterial color="#050A1A" />
      </mesh>
    </mesh>
  );
};

const PropertyModel: React.FC = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 2, 5]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#F5F7FF"
        castShadow
      />
      <pointLight position={[-10, -10, -5]} color="#0766FF" intensity={3} />
      
      <Building />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default PropertyModel;
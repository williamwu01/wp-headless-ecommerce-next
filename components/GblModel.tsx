'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

function EnchantedCrystal() {
  const { scene } = useGLTF('/models/enchanted_crystal.glb'); // Make sure the file is inside /public
  const groupRef = useRef<Group>(null);

  // Rotate the group every frame
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={50} />
    </group>
  );
}

export default function CrystalScene() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <EnchantedCrystal />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
}
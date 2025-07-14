'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';
import Loading from '../app/loading';

function EnchantedCrystal() {
  const { scene } = useGLTF('/models/Amethyst.glb'); // Make sure the file is inside /public
  const groupRef = useRef<Group>(null);

  // Rotate the group every frame
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={3} />
    </group>
  );
}

export default function CrystalScene() {
  return (
		<Suspense fallback={<Loading />}>
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <EnchantedCrystal />

      <OrbitControls enableZoom={false}/>
    </Canvas>
		</Suspense>
  );
}
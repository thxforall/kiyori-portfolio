'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Object3D } from 'three';

export default function Model() {
  const modelRef = useRef<Object3D>(null);
  const { scene } = useGLTF('/models/platypus.glb');

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (modelRef.current) {
      modelRef.current.rotation.y = mouseX * 0.5;
      modelRef.current.rotation.x = mouseY * 0.5;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.7} />;
}

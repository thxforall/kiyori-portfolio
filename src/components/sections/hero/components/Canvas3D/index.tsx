'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import Model from './Model';
import TextGrid from './TextGrid';

interface Canvas3DProps {
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}

export default function Canvas3D({ setIsDragging }: Canvas3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0">
      <TextGrid mousePosition={mousePosition} />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.3} />
        <directionalLight
          position={[mousePosition.x * 3, mousePosition.y * 3, 2]}
          intensity={1.5}
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          reverseOrbit={true}
          minPolarAngle={Math.PI / 2 - 0.3}
          maxPolarAngle={Math.PI / 2 + 0.3}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>
    </div>
  );
}

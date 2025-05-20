'use client';

import { useState } from 'react';
import Canvas3D from './components/Canvas3D';

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-2rem)] w-full overflow-hidden">
      <Canvas3D isDragging={isDragging} setIsDragging={setIsDragging} />
    </section>
  );
}

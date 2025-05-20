'use client';

import Canvas3D from './components/Canvas3D';
import TextAnimation from './components/TextAnimation';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full  overflow-hidden">
      <Canvas3D />
      <TextAnimation />
    </section>
  );
}
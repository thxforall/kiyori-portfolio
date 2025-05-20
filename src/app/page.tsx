'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('@/components/sections/hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/about'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/projects'), { ssr: false });

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Projects />
      </Suspense>
    </>
  );
}
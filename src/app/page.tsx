'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('@/app/components/sections/hero'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </main>
  );
}
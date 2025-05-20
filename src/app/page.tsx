'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('@/components/sections/hero'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-scree">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </main>
  );
}
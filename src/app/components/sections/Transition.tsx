'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export function SectionTransition() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.section-transition', {
      scaleY: 1,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    .to('.section-transition', {
      scaleY: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      transformOrigin: 'top'
    });
  }, []);

  return (
    <div className="section-transition fixed inset-0 bg-black scale-y-0 transform-origin-bottom" />
  );
}

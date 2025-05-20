import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Logo() {
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eye = eyeRef.current;
    if (!eye) return;

    const blinkTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 2
    });

    blinkTimeline
      .call(() => {
        eye.style.backgroundImage = "url('/images/platypus-eyes-closed-transparent.png')";
      })
      .to({}, { duration: 0.2 })
      .call(() => {
        eye.style.backgroundImage = "url('/images/platypus-eyes-open-transparent.png')";
      });

    return () => {
      blinkTimeline.kill();
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }}>
      <div
        ref={eyeRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundImage: "url('/images/platypus-eyes-open-transparent.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

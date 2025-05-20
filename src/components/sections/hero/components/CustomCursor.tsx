'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  isHovering: boolean;
  isDragging: boolean;
}

export default function CustomCursor({ isHovering, isDragging }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isDragging ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isDragging ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isDragging ? 1.5 : isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  );
} 
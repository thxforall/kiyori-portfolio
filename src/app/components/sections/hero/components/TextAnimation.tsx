'use client';

import { motion } from 'framer-motion';

export default function TextAnimation() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold mb-4"
      >
        Kiyori
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl"
      >
        Frontend Developer
      </motion.p>
    </div>
  );
}

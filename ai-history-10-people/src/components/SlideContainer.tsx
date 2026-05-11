import { motion } from 'motion/react';
import React from 'react';

export function SlideContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full flex flex-col relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

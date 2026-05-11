import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function SlideContainer({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full flex flex-col p-8 md:p-16 lg:p-24 box-border absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}

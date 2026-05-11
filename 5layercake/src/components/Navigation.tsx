import { motion } from "motion/react";

export function Navigation({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4 text-[#1A1A1A] opacity-60 font-mono text-sm">
      <div className="flex items-center gap-2">
        <span className="font-bold">{String(current + 1).padStart(2, '0')}</span>
        <span className="opacity-50">/</span>
        <span className="opacity-50">{String(total).padStart(2, '0')}</span>
      </div>
      <div className="w-32 h-[2px] bg-black/10 overflow-hidden rounded-full">
        <motion.div 
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

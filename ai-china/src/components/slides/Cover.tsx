import { SlideContainer } from '../ui/SlideContainer';
import { motion } from 'motion/react';

export default function Cover({ subIndex }: { subIndex?: number }) {
  return (
    <SlideContainer className="justify-center items-center text-center bg-brand-ink text-brand-bg">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-5xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-8">
          中国 AI：<br />
          <span className="text-brand-accent italic">一场你根本看不见的战争</span>
        </h1>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="font-sans text-xl md:text-2xl text-brand-bg/80 font-light tracking-widest uppercase">
          中美 AI 竞赛，到底是什么的较量？<br />
          技术、人才、资金，一场看不见的战争。
        </p>
      </motion.div>
    </SlideContainer>
  );
}

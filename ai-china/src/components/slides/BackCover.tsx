import { SlideContainer } from '../ui/SlideContainer';
import { motion } from 'motion/react';

export default function BackCover({ subIndex }: { subIndex?: number }) {
  return (
    <SlideContainer className="justify-center items-center text-center bg-brand-ink text-brand-bg">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <div className="font-sans text-2xl md:text-4xl text-brand-bg/90 font-light leading-loose text-left mx-auto inline-block">
          <p>中美 AI 竞赛，比的不是谁的参数多。</p>
          <p>而是谁能控制另一方看不见的基础设施。</p>
          <p>芯片、光刻机、数据协议。</p>
          <p>中国正在一层层替换这些零件。</p>
          <p>这不是一年两年的事。</p>
          <p className="font-bold text-white mt-8 text-3xl">但方向已定，唯有向前。</p>
        </div>
      </motion.div>
    </SlideContainer>
  );
}

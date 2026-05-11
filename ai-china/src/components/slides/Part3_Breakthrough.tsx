import { SlideContainer } from '../ui/SlideContainer';
import { motion } from 'motion/react';
import React from 'react';

export default function Part3_Breakthrough({ subIndex }: { subIndex: number }) {
  if (subIndex === 0) {
    return (
      <SlideContainer className="justify-center bg-brand-accent text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-8xl font-black text-white mb-4">03</h2>
            <h3 className="font-sans text-3xl font-bold tracking-widest text-brand-ink uppercase mb-8">突围逻辑：换道、降本与升维</h3>
            <div className="w-full h-px bg-white/30 mb-8"></div>
            <p className="font-serif text-2xl italic text-white/80 mb-4">关键词：突围</p>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="border-l border-white/30 pl-12"
          >
            <p className="font-sans text-lg leading-relaxed text-white">
              <strong className="font-bold">底层逻辑：</strong>突围不是在别人的跑道上跑得更快，而是利用“软件定义算力”和“离散算力整合”建立一套全新的非对称竞争优势。
            </p>
          </motion.div>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 1) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">技术优化与算力突围</h2>
          <p className="font-sans text-xl text-brand-muted">软件的厚度，可以弥补芯片的薄度。</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <BreakCard title="存量芯片战争" num="19" delay={0.1}>
              这是一场“虚拟化”与“调度”的战争。利用先进技术将碎片化的存量算力整合为逻辑上的统一资源池。
            </BreakCard>
            <BreakCard title="国产芯片赛跑" num="20" delay={0.2}>
              本土厂商正转向“专用 AI 芯片”路线，试图在特定领域实现对通用 GPU 的单点超越。
            </BreakCard>
            <BreakCard title="软件定义算力" num="21" delay={0.3}>
              通过底层算子重构，使得在同等硬件条件下，中国 AI 任务的实际执行效率提升 30%-50%。
            </BreakCard>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 bg-brand-ink text-brand-bg p-8 rounded-2xl flex flex-col justify-center"
          >
            <div className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">公司卡片</div>
            <h3 className="font-serif text-3xl font-bold mb-4">寒武纪</h3>
            <p className="font-sans text-sm opacity-80 leading-relaxed">
              国产 AI 芯片先驱。核心价值在于对“稀疏化计算”等新型算力的前瞻布局，试图在下一代计算范式中抢占先机。
            </p>
          </motion.div>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 2) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">终局布局与自主可控</h2>
          <p className="font-sans text-xl text-brand-muted">推理侧的成本控制，决定了 AI 商业化的最终厚度。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <BreakCard title="推理优化" num="22" delay={0.1}>
            未来 90% 的算力消耗在推理侧。中国公司在“推理侧降本”上的投入，将决定 AI 能否真正渗透到千行百业。
          </BreakCard>
          <BreakCard title="私有化部署" num="23" delay={0.2}>
            这是中国 AI 的独特护城河。通过极强的数据主权意识，形成了一套全球最成熟的“私有化 AI 交付方案”。
          </BreakCard>
          <BreakCard title="自主可控" num="24" delay={0.3}>
            不仅是硬件替换，更是“标准定义权”。中国正试图建立一套独立的技术标准体系，实现全链路战略安全。
          </BreakCard>
        </div>
      </SlideContainer>
    );
  }

  return null;
}

function BreakCard({ title, num, children, delay = 0 }: { title: string, num: string, children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-white border border-brand-ink/10 rounded-2xl flex flex-col"
    >
      <div className="font-sans text-sm font-bold tracking-widest text-brand-accent mb-4">卡片 {num}</div>
      <h3 className="font-serif text-2xl font-bold mb-4 text-brand-ink">{title}</h3>
      <p className="font-sans text-brand-muted leading-relaxed text-sm">{children}</p>
    </motion.div>
  );
}

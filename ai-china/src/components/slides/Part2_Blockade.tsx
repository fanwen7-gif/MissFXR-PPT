import { SlideContainer } from '../ui/SlideContainer';
import { motion } from 'motion/react';
import React from 'react';

export default function Part2_Blockade({ subIndex }: { subIndex: number }) {
  if (subIndex === 0) {
    return (
      <SlideContainer className="justify-center bg-brand-ink text-brand-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-8xl font-black text-white mb-4">02</h2>
            <h3 className="font-sans text-3xl font-bold tracking-widest text-brand-accent uppercase mb-8">封锁本质：算力平权与生态霸权</h3>
            <div className="w-full h-px bg-white/20 mb-8"></div>
            <p className="font-serif text-2xl italic text-white/60 mb-4">关键词：困境</p>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="border-l border-white/20 pl-12"
          >
            <p className="font-sans text-lg leading-relaxed text-white/90">
              <strong className="font-bold text-white">底层逻辑：</strong>美国的制裁不仅是芯片，更是 CUDA 生态的垄断。中国 AI 面临的是从半导体物理制程到软件开发范式的全方位压制。
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
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">硬核封锁与算力缺口</h2>
          <p className="font-sans text-xl text-brand-muted">摩尔定律的停滞与地缘政治的干预，形成了“制程孤岛”。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <BlockCard title="芯片制裁" num="08" delay={0.1}>
            限制高端 GPU 的本质是限制“算力集中度”。在模型参数爆发时代，单卡性能的差距会被万卡集群的线性效率无限放大。
          </BlockCard>
          <BlockCard title="光刻机封锁" num="09" delay={0.2}>
            不仅是制造设备，更是半导体工艺的迭代权。中国被迫在成熟制程上进行架构微创新，试图绕过物理限制。
          </BlockCard>
          <BlockCard title="算力缺口" num="10" delay={0.3}>
            美中算力存在可见差距。这意味着中国模型在“原始暴力训练”上已无胜算，必须转向精细化训练。
          </BlockCard>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 2) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">互联瓶颈与规则博弈</h2>
          <p className="font-sans text-xl text-brand-muted">算力不是芯片的累加，而是互联效率的乘积。</p>
        </header>
        <div className="flex flex-col gap-6 flex-1 justify-center">
          <RowCard title="算力集群" num="11" delay={0.1}>
            面临“万卡互联”的通信带宽瓶颈。InfiniBand 等技术的禁运，使得国产算力集群在处理超大规模并行计算时效能损耗严重。
          </RowCard>
          <RowCard title="代工封锁" num="12" delay={0.2}>
            失去了全球最优代工厂。国产芯片被迫回归本土产线，面临良率与制程成本的双重倒挂。
          </RowCard>
          <RowCard title="实体清单" num="13" delay={0.3}>
            精准打击。旨在通过切断核心企业的供应链，阻断中国 AI 在硬件底座和底层软件上的自主进化。
          </RowCard>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 3) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">生存博弈的底座支撑</h2>
          <p className="font-sans text-xl text-brand-muted">华为不是在造一块芯片，而是在造一个平行的宇宙。</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          <div className="flex flex-col gap-8">
            <BlockCard title="囤卡潮" num="14" bg="bg-white" delay={0.1}>
              在禁令彻底封死前的大规模采购。这部分“存量算力”成了目前支撑中国 AI 发展的最后弹药。
            </BlockCard>
            <BlockCard title="华为替代路" num="15" bg="bg-white" delay={0.2}>
              通过芯片、框架（MindSpore）、算子库的协同，实现“软硬一体化”补偿，是应对禁运的最强防御体系。
            </BlockCard>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-ink text-brand-bg p-12 rounded-2xl flex flex-col justify-center"
          >
            <div className="font-sans text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">公司卡片</div>
            <h3 className="font-serif text-5xl font-bold mb-6">华为（昇腾）</h3>
            <p className="font-sans text-xl opacity-90 leading-relaxed">
              它是中国唯一的“全栈自研”希望。其最大的挑战不在硬件性能，而在于如何打破 CUDA 形成的开发者粘性。
            </p>
          </motion.div>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 4) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">隐形壁垒与规则较量</h2>
          <p className="font-sans text-xl text-brand-muted">规则层面的摩擦，比硬件层面的封锁更具长远影响。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <BlockCard title="数据合规墙" num="16" border delay={0.1}>
            数据安全法规要求本地存储，保障了安全但也增加了 AI 模型在跨境场景下的训练与合规成本。
          </BlockCard>
          <BlockCard title="跨境数据禁令" num="17" border delay={0.2}>
            关键领域数据禁止出境。这影响了中国 AI 在全球开发者生态中的通用性，以及跨国科研协作。
          </BlockCard>
          <BlockCard title="模型蒸馏争议" num="18" border delay={0.3}>
            通过法律手段质疑中国模型的合法性。这本质是规则层面的较量，旨在掌握 AI 训练的正当性定义权。
          </BlockCard>
        </div>
      </SlideContainer>
    );
  }

  return null;
}

function BlockCard({ title, num, children, bg = 'bg-transparent', border = false, delay = 0 }: { title: string, num: string, children: React.ReactNode, bg?: string, border?: boolean, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`p-8 flex flex-col ${bg} ${border ? 'border-t-4 border-brand-ink bg-white' : 'border border-brand-ink/10 rounded-2xl'}`}
    >
      <div className="font-sans text-sm font-bold tracking-widest text-brand-accent mb-4">卡片 {num}</div>
      <h3 className="font-serif text-3xl font-bold mb-4 text-brand-ink">{title}</h3>
      <p className="font-sans text-brand-muted leading-relaxed">{children}</p>
    </motion.div>
  );
}

function RowCard({ title, num, children, delay = 0 }: { title: string, num: string, children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-brand-ink/5 items-start md:items-center"
    >
      <div className="w-32 shrink-0">
        <div className="font-sans text-xs font-bold tracking-widest text-brand-accent mb-1">卡片 {num}</div>
        <h3 className="font-serif text-2xl font-bold text-brand-ink">{title}</h3>
      </div>
      <div className="w-px h-12 bg-brand-ink/10 hidden md:block"></div>
      <p className="font-sans text-brand-muted leading-relaxed flex-1">{children}</p>
    </motion.div>
  );
}

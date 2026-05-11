import { SlideContainer } from '../ui/SlideContainer';
import { motion } from 'motion/react';
import React from 'react';

export default function Part1_Intro({ subIndex }: { subIndex: number }) {
  if (subIndex === 0) {
    return (
      <SlideContainer className="justify-center bg-brand-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-8xl font-black text-brand-ink mb-4">01</h2>
            <h3 className="font-sans text-3xl font-bold tracking-widest text-brand-accent uppercase mb-8">生态韧性：中国 AI 内生驱力</h3>
            <div className="w-full h-px bg-brand-ink/20 mb-8"></div>
            <p className="font-serif text-2xl italic text-brand-muted mb-4">关键词：荣光</p>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="border-l border-brand-ink/20 pl-12"
          >
            <p className="font-sans text-lg leading-relaxed text-brand-ink">
              <strong className="font-bold">底层逻辑：</strong>算法、算力、数据是 AI 的三要素，但其权重正发生结构性变化。当算力红利边际递减，中国的优势正在从“应用领先”向“效率领先”发生范式偏移。
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
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">要素禀赋的深度拆解</h2>
          <p className="font-sans text-xl text-brand-muted">在高维应用场景中，倒逼底层算法的工程化极限。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <Card title="数据红利" num="01" delay={0.1}>
            不仅是“量”，更在于中国拥有全球最复杂的长尾场景数据（Edge Cases），这是训练垂直领域专家模型（Expert Models）的核心护城河。
          </Card>
          <Card title="工程师红利" num="02" delay={0.2}>
            不仅是规模，更是“算法工程化”的高效闭环。中国工程师擅长将前沿论文快速转化为高并发、低延迟的商业代码。
          </Card>
          <Card title="百模大战" num="03" delay={0.3}>
            这是中国特有的“算力资源预演”。通过极度内卷的存量竞争，筛选出了最具备商业闭环能力和推理成本控制力的头部玩家。
          </Card>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 2) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">效率奇迹与战略入场</h2>
          <p className="font-sans text-xl text-brand-muted">算力堆不动的时候，算法就开始发光。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <Card title="国家队入场" num="04" border delay={0.1}>
            其本质是“国家级算力调度网”。通过行政与资本手段解决算力碎片化问题，实现社会总算力成本的结构性下行。
          </Card>
          <Card title="DeepSeek 逆袭" num="05" border delay={0.2}>
            打破了“Scaling Law = 堆显卡”的迷信。通过 MoE 架构极致优化，证明了在同等算力下，中国算法具有更高的智能密度。
          </Card>
          <Card title="开源反攻" num="06" border delay={0.3}>
            对 OpenAI 封闭路线的“侧翼包抄”。通过做大开源权重，利用全球开发者进行分布式迭代，变相消解了技术封锁。
          </Card>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 3) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">落地层面的商业闭环</h2>
          <p className="font-sans text-xl text-brand-muted">AI 的终局不是通过图灵测试，而是通过利润测试。</p>
        </header>
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 bg-brand-ink text-brand-bg p-8 rounded-2xl flex flex-col justify-center"
          >
            <h3 className="font-sans text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">卡片 07</h3>
            <h4 className="font-serif text-4xl mb-4">应用层爆发</h4>
            <p className="font-sans text-lg opacity-80 leading-relaxed">中国 AI 在场景落地上的速度全球领先。AI 正在从实验室产物转化为电商、医疗、制造的实际生产力。</p>
          </motion.div>
          <div className="flex-1 flex flex-col gap-8">
            <CompanyCard name="字节跳动（豆包）" delay={0.2}>
              依托全球最强算法分发引擎，将 AI 转化为高频、低门槛的信息消费品。它是国内唯一拥有海量原生用户反馈闭环（RLHF）的超级入口。
            </CompanyCard>
            <CompanyCard name="阿里巴巴（通义）" delay={0.3}>
              阿里云通过“算力即服务（MaaS）”策略，将大模型转化为通用的基础设施，大幅降低了企业接入 AI 的门槛。
            </CompanyCard>
          </div>
        </div>
      </SlideContainer>
    );
  }

  if (subIndex === 4) {
    return (
      <SlideContainer>
        <header className="mb-12">
          <h2 className="font-serif text-5xl font-black text-brand-ink mb-2">垂直先锋的技术硬核</h2>
          <p className="font-sans text-xl text-brand-muted">在极致的产品力与底层架构中寻找突围路径。</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          <CompanyCard name="月之暗面（Kimi）" vertical delay={0.1}>
            重新定义了 AI 的“记忆长度”。通过突破超长上下文（Long Context）技术，解决了复杂任务中的信息断层，是国产 AI 的技术黑马。
          </CompanyCard>
          <CompanyCard name="智谱 AI" vertical delay={0.2}>
            清华技术团队背景，继承了 GLM 架构的稀疏化基因。在双语对齐和复杂逻辑推理上，是目前国产模型中唯一能正面硬抗 GPT-4 的存在。
          </CompanyCard>
          <CompanyCard name="DeepSeek（深度求索）" vertical delay={0.3}>
            AI 界的“成本杀手”。通过算法优化将推理成本降低了两个数量级，彻底撕掉了 AI“极度烧钱”的固有标签。
          </CompanyCard>
        </div>
      </SlideContainer>
    );
  }

  return null;
}

function Card({ title, num, children, border = false, delay = 0 }: { title: string, num: string, children: React.ReactNode, border?: boolean, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`p-8 flex flex-col ${border ? 'border border-brand-ink/10 rounded-2xl' : 'bg-white shadow-sm rounded-2xl'}`}
    >
      <div className="font-sans text-sm font-bold tracking-widest text-brand-accent mb-4">卡片 {num}</div>
      <h3 className="font-serif text-3xl font-bold mb-4">{title}</h3>
      <p className="font-sans text-brand-muted leading-relaxed">{children}</p>
    </motion.div>
  );
}

function CompanyCard({ name, children, vertical = false, delay = 0 }: { name: string, children: React.ReactNode, vertical?: boolean, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`p-8 bg-white border border-brand-ink/5 rounded-2xl flex ${vertical ? 'flex-col' : 'flex-col justify-center'} flex-1`}
    >
      <div className="font-sans text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Company</div>
      <h3 className="font-serif text-2xl font-bold mb-4 text-brand-ink">{name}</h3>
      <p className="font-sans text-brand-muted leading-relaxed">{children}</p>
    </motion.div>
  );
}

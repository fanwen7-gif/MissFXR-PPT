import { motion } from "motion/react";
import { KeywordCard } from "../KeywordCard";
import { LayerTransition } from "../LayerTransition";

export const energyLayerSlides = [
  function SlideTransition() {
    return <LayerTransition fromLayer="芯片层" toLayer="能源层" activeLayerIndex={4} />;
  },

  function SlideCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5E7EB] text-[#1A1A1A] p-6 md:p-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-gray-500 mb-8 block">PART 05</span>
          <h1 className="text-6xl md:text-[120px] font-serif font-black mb-12 tracking-tighter text-[#1A1A1A]">能源层</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-2xl md:text-4xl font-light text-gray-700">
            <p>天花板</p>
            <p className="text-xl md:text-2xl text-gray-500">AI的尽头是能源，决定了算力扩张的物理极限</p>
          </div>
        </motion.div>
      </div>
    );
  },

  function SlideKeywords1() {
    return (
      <div className="w-full h-full bg-[#E5E7EB] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="36" title="算力成本" desc={`训练和运行AI模型的费用（芯片、电费、运维）。
决定了谁能参与顶级竞争，以及应用定价空间。
算力成本在下降，但需求增长更快。`} delay={0.1} />
          <KeywordCard num="37" title="电力消耗" desc={`训练和运行大模型需要消耗极其庞大的电力。
AI的尽头是能源，数据中心消耗的电量相当于一个小城市的用电量。`} delay={0.2} />
          <KeywordCard num="38" title="清洁能源与核电" desc={`为了保障算力中心的持续运行并降低碳排放，科技巨头开始大规模投资核电、太阳能等清洁能源。
它是AI发展的终极后盾。`} delay={0.3} />
        </div>
      </div>
    );
  }
];

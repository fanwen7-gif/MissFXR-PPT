import { motion } from "motion/react";
import { KeywordCard } from "../KeywordCard";
import { CompanyRow } from "../CompanyRow";
import { LayerTransition } from "../LayerTransition";

export const chipLayerSlides = [
  function SlideTransition() {
    return <LayerTransition fromLayer="基础设施层" toLayer="芯片层" activeLayerIndex={3} />;
  },

  function SlideCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#FFF1E6] text-[#1A1A1A] p-6 md:p-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-gray-500 mb-8 block">PART 04</span>
          <h1 className="text-6xl md:text-[120px] font-serif font-black mb-12 tracking-tighter text-[#1A1A1A]">芯片层</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-2xl md:text-4xl font-light text-gray-700">
            <p>发动机</p>
            <p className="text-xl md:text-2xl text-gray-500">所有硬件的心脏，AI的终极动力</p>
          </div>
        </motion.div>
      </div>
    );
  },

  function SlideCompanies() {
    const products = [
      { name: "英伟达 (NVIDIA)", desc: "全球AI算力霸主，提供GPU和CUDA生态", domain: "nvidia.com" },
      { name: "台积电 (TSMC)", desc: "全球最先进芯片的唯一制造商", domain: "tsmc.com" },
    ];

    return (
      <div className="w-full h-full bg-[#FFF1E6] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-mono tracking-widest uppercase mb-8 md:mb-12 text-gray-400 max-w-6xl mx-auto w-full"
        >
          代表公司 / Companies
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto w-full">
          {products.map((p, i) => (
            <div key={p.name}>
              <CompanyRow name={p.name} desc={p.desc} domain={p.domain} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    );
  },

  function SlideKeywords1() {
    return (
      <div className="w-full h-full bg-[#FFF1E6] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="31" title="算力 (Computing Power)" desc={`AI的“燃料”，有多少算力，就能烧出多强的AI。
算力的稀缺程度，直接决定了一家公司能不能在AI赛道上跑起来。`} delay={0.1} />
          <KeywordCard num="32" title="GPU（图形处理器）" desc={`原本是给游戏做的显卡，阴差阳错成了AI时代最核心的硬件。
它擅长同时处理大量简单计算，并行处理海量数据。`} delay={0.2} />
          <KeywordCard num="33" title="芯片 (Chip)" desc={`所有硬件的心脏，AI能不能跑起来，最终取决于这块指甲盖大小的东西。
除了GPU，AI还需要各种专用芯片（如TPU、NPU）。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords2() {
    return (
      <div className="w-full h-full bg-[#FFF1E6] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="34" title="CUDA" desc={`英伟达真正的护城河——不是硬件，是让全世界开发者都离不开它的那套软件。
整个AI开发生态都绑在它身上了。`} delay={0.1} />
          <KeywordCard num="35" title="芯片出口管制" desc={`限制高端AI芯片出口，实际上是在卡AI发展的核心资源。
它是目前科技竞争最直接的交锋点，直接影响算力获取。`} delay={0.2} />
        </div>
      </div>
    );
  }
];

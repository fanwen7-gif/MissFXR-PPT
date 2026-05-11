import { motion } from "motion/react";
import { KeywordCard } from "../KeywordCard";
import { CompanyRow } from "../CompanyRow";
import { LayerTransition } from "../LayerTransition";

export const infraLayerSlides = [
  function SlideTransition() {
    return <LayerTransition fromLayer="模型层" toLayer="基础设施层" activeLayerIndex={2} />;
  },

  function SlideCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#E0F2F1] text-[#1A1A1A] p-6 md:p-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-gray-500 mb-8 block">PART 03</span>
          <h1 className="text-6xl md:text-[120px] font-serif font-black mb-12 tracking-tighter text-[#1A1A1A]">基础设施层</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-2xl md:text-4xl font-light text-gray-700">
            <p>AI工厂</p>
            <p className="text-xl md:text-2xl text-gray-500">修路与打地基 · 越底层越重资产越难进入</p>
          </div>
        </motion.div>
      </div>
    );
  },

  function SlideCompanies() {
    const products = [
      { name: "阿里云", desc: "国内领先的云服务与算力提供商", domain: "aliyun.com" },
      { name: "AWS", desc: "全球最大的云计算服务提供商", domain: "aws.amazon.com" },
      { name: "Azure", desc: "微软云服务，OpenAI的算力后盾", domain: "azure.microsoft.com" },
    ];

    return (
      <div className="w-full h-full bg-[#E0F2F1] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
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
      <div className="w-full h-full bg-[#E0F2F1] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="26" title="数据中心 (Data Center)" desc={`算力住的地方——一栋栋厂房大小的建筑，里面全是服务器。
还需要24小时不断电、不断网、持续降温。
数据中心的规模，是判断一家公司AI实力最直观的指标之一。`} delay={0.1} />
          <KeywordCard num="27" title="Infra（基础设施）" desc={`AI行业的“地基”——看不见，但没有它，上面所有东西都会塌。
泛指支撑模型运行的底层系统：服务器、网络、存储、调度系统等。
它是最稳定的利润来源。`} delay={0.2} />
          <KeywordCard num="28" title="云服务 (Cloud Services)" desc={`AI的“水电煤”——大多数公司买不起顶级芯片，所以选择租用云厂商的算力按需付费。
把服务器、存储、算力打包，通过网络租给用户用。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords2() {
    return (
      <div className="w-full h-full bg-[#E0F2F1] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="29" title="云计算" desc={`把计算资源通过互联网提供给用户的服务。
不需要自己买服务器，直接租用，是AI时代中小公司获取算力最主要的方式。`} delay={0.1} />
          <KeywordCard num="30" title="算力集群" desc={`把成千上万张GPU连接在一起，形成超大规模的计算系统。
算力集群的规模，直接决定了一个公司能训练多强的模型。`} delay={0.2} />
        </div>
      </div>
    );
  }
];

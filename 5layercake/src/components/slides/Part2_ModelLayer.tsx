import { motion } from "motion/react";
import { KeywordCard } from "../KeywordCard";
import { CompanyRow } from "../CompanyRow";
import { LayerTransition } from "../LayerTransition";

export const modelLayerSlides = [
  function SlideTransition() {
    return <LayerTransition fromLayer="应用层" toLayer="模型层" activeLayerIndex={1} />;
  },

  function SlideCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F3E8FF] text-[#1A1A1A] p-6 md:p-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-gray-500 mb-8 block">PART 02</span>
          <h1 className="text-6xl md:text-[120px] font-serif font-black mb-12 tracking-tighter text-[#1A1A1A]">模型层</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-2xl md:text-4xl font-light text-gray-700">
            <p>背后的大脑</p>
            <p className="text-xl md:text-2xl text-gray-500">核心生产力 · 烧钱最多、技术壁垒最高的一层</p>
          </div>
        </motion.div>
      </div>
    );
  },

  function SlideCompanies() {
    const products = [
      { name: "GPT-4 (OpenAI)", desc: "全球最领先的闭源大模型", domain: "openai.com" },
      { name: "Claude (Anthropic)", desc: "以安全和长文本见长的顶级模型", domain: "anthropic.com" },
      { name: "Gemini (谷歌)", desc: "谷歌推出的原生多模态大模型", domain: "deepmind.google" },
    ];

    return (
      <div className="w-full h-full bg-[#F3E8FF] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-mono tracking-widest uppercase mb-8 md:mb-12 text-gray-400 max-w-6xl mx-auto w-full"
        >
          代表产品 / Products
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
      <div className="w-full h-full bg-[#F3E8FF] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="17" title="基座模型 (Foundation Model)" desc={`整条产业链的“大脑”，也就是大家常说的“大模型”。
用海量数据训练出来，具备通用的理解和生成能力。
谁掌握了最强的基座模型，谁就掌握了这条产业链最关键的位置。`} delay={0.1} />
          <KeywordCard num="18" title="训练 (Training)" desc={`让AI从“一无所知”变成“无所不知”的过程，也是烧钱最猛的环节。
把海量文本、图片、代码喂给模型，在反复试错中学会理解和生成。
门槛极高，需要顶级算力、数据和工程师。`} delay={0.2} />
          <KeywordCard num="19" title="推理 (Inference)" desc={`你每次问AI一个问题，它给你回答的那个过程，就叫推理。
训练是造模型，推理是用模型。
推理成本是影响盈利的关键变量，DeepSeek能震惊业界，就是因为把推理成本压到了极低。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords2() {
    return (
      <div className="w-full h-full bg-[#F3E8FF] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="20" title="参数 (Parameters)" desc={`衡量模型“体量”的数字，可以粗略理解为模型存储知识和规律的“格子数”。
参数多不等于一定更聪明，现在业界更关注同等参数下谁的效果更好，而不是单纯追求规模。`} delay={0.1} />
          <KeywordCard num="21" title="微调 (Fine-tuning)" desc={`在通用大脑的基础上，针对某个特定场景再“补课”。
拿特定领域的数据继续训练，让它在这个场景下表现更好。
比从头训练便宜得多，是很多企业落地AI的主要方式。`} delay={0.2} />
          <KeywordCard num="22" title="数据标注 (Data Labeling)" desc={`AI变聪明之前，需要大量真人来“教”它什么是对的。
告诉它这张图片是猫、这段代码是对的。
没有它，模型就无法对齐人类的价值判断，背后有一条隐形的人工流水线。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords3() {
    return (
      <div className="w-full h-full bg-[#F3E8FF] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="23" title="开源 / 闭源 (Open-source / Closed-source)" desc={`闭源是可口可乐配方，只能通过API付费调用（GPT-4）。
开源是菜谱大公开，任何人都可以下载修改（Llama、DeepSeek）。
开源让全球开发者能站在前人肩膀上迭代。`} delay={0.1} />
          <KeywordCard num="24" title="多模态 (Multimodal)" desc={`让AI同时看懂图片、听懂语音、读懂文字——而不只是一个聊天框。
模态越多，AI能解决的场景就越广，是基座模型竞争的下一个主战场。
离真正的“通用AI”更近。`} delay={0.2} />
          <KeywordCard num="25" title="幻觉 (Hallucination)" desc={`AI一本正经地胡说八道——把不存在的事情说得像真的一样。
它是预测“下一个词最可能是什么”，而不是查阅事实。
这是所有大模型都没完全解决的问题，也是落地高风险行业的最大障碍。`} delay={0.3} />
        </div>
      </div>
    );
  }
];

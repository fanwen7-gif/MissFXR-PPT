import { motion } from "motion/react";
import { KeywordCard } from "../KeywordCard";
import { CompanyRow } from "../CompanyRow";

export const appLayerSlides = [
  function SlideCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-gray-500 mb-8 block">PART 01</span>
          <h1 className="text-7xl md:text-[160px] font-serif font-black mb-12 tracking-tighter text-[#1A1A1A]">应用层</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-2xl md:text-4xl font-light text-gray-700">
            <p>你每天用的</p>
            <p className="text-xl md:text-2xl text-gray-500">直接解决具体问题的AI产品，都在这层</p>
          </div>
        </motion.div>
      </div>
    );
  },

  function SlideCompanies() {
    const products = [
      { name: "ChatGPT", desc: "全球用户最多的AI助手", domain: "openai.com" },
      { name: "Claude.ai", desc: "Anthropic推出的AI助手", domain: "anthropic.com" },
      { name: "豆包", desc: "字节跳动推出的AI对话助手", domain: "doubao.com" },
    ];

    return (
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
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
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="01" title="AI应用" desc={`把AI能力包装成产品，直接帮你解决具体问题。
你每天接触的那个对话框，就是应用层。`} delay={0.1} />
          <KeywordCard num="02" title="AIGC" desc={`AI生成内容。以前内容只能由人来创作，现在AI可以生成文字、图片、视频、音乐。
它是这一轮AI爆发的起点。`} delay={0.2} />
          <KeywordCard num="03" title="To B (Business to Business)" desc={`把AI卖给企业用——客单价高、续费稳，是目前AI行业最实在的现金流来源。
企业愿意为明确的效率提升付费。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords2() {
    return (
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="04" title="To C (Business to Consumer)" desc={`把AI卖给普通人用——用户量大、传播快，但要让人持续付费很难。
优势是能快速积累用户、形成品牌认知。`} delay={0.1} />
          <KeywordCard num="05" title="API" desc={`模型对外开放的“插座”——开发者把自己的产品插进来，就能用上AI的能力。
它大幅降低了做AI产品的门槛。`} delay={0.2} />
          <KeywordCard num="06" title="Token" desc={`AI处理文字的最小单位，也是API按量收费的计价单位。
中文里大概每个字是1-2个Token。模型越强，Token越贵。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords3() {
    return (
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="07" title="AI Native" desc={`骨子里就是AI的产品——不是给旧软件打补丁，而是从头用AI逻辑重新设计的。
它能做到传统产品做不到的体验。`} delay={0.1} />
          <KeywordCard num="08" title="Agent（智能体）" desc={`进阶版AI——如果说聊天机器人是“嘴巴”，Agent就是长了“手脚”，能自主帮你把事情做完。
它能自己拆解任务、调用工具、执行步骤。`} delay={0.2} />
          <KeywordCard num="11" title="提示词工程" desc={`学会怎么跟AI“说话”——同样的问题，问法不同，答案质量天差地别。
但随着模型越来越强，提示词的重要性在下降。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords4() {
    return (
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="12" title="多模态应用" desc={`AI从“只会说话”变成“能看能听能理解”。
同时处理文字、图片、声音、视频，更像真实的人。`} delay={0.1} />
          <KeywordCard num="13" title="具身智能" desc={`把AI装进有身体的机器里，感知物理世界、移动、操作物体。
比如人形机器人，就是AI在物理世界的化身。`} delay={0.2} />
          <KeywordCard num="14" title="自动驾驶" desc={`AI在现实世界里最复杂的应用之一。
它是从“辅助人”到“替代人完成复杂任务”的最前线。`} delay={0.3} />
        </div>
      </div>
    );
  },

  function SlideKeywords5() {
    return (
      <div className="w-full h-full bg-[#E8F0FE] text-[#1A1A1A] p-6 md:p-24 flex flex-col justify-center overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full py-12">
          <KeywordCard num="15" title="垂直场景" desc={`深入具体行业。医疗、法律、教育、金融——不做通用助手，在一个领域把AI用到极致。
它是AI落地最快的地方。`} delay={0.1} />
        </div>
      </div>
    );
  }
];

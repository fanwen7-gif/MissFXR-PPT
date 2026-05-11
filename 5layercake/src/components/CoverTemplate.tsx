import { motion } from "motion/react";

export default function CoverTemplate() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#FAFAFA] text-[#0A1128] p-6 md:p-12 relative overflow-hidden">
      {/* Theme gradients to add color */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFE5E5] via-[#FAFAFA] to-[#FAFAFA] rounded-full -translate-y-1/4 translate-x-1/4"
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E0E7FF] via-[#FAFAFA] to-[#FAFAFA] rounded-full translate-y-1/4 -translate-x-1/4"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-16"
      >
        <p className="text-xs md:text-sm font-bold text-[#E63946] tracking-widest uppercase mb-6">AI零基础术语 · 03期</p>
        <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tight text-[#0A1128]">
          你每天都在听这些词：
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-12 max-w-5xl mb-16 md:mb-24 z-10">
        {['基座模型', '算力', 'Agent', '芯片', '数据中心', 'GPU', '多模态'].map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: i * 0.1 + 0.5, duration: 0.8, type: "spring" }}
            className={`text-4xl md:text-7xl font-sans font-black tracking-tighter transition-colors duration-300 cursor-default ${
              i % 2 === 0 ? 'text-[#64748B]/30 hover:text-[#4169E1]' : 'text-[#4169E1]/80 hover:text-[#000080]'
            }`}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="text-center z-10"
      >
        <p className="text-2xl md:text-4xl font-light mb-4 text-[#475569] italic">"但它们是什么关系？"</p>
        <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A1128] to-[#3B82F6] mb-6">今天一次性搞清楚。</p>
        <p className="text-xl md:text-2xl font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-6 py-2 rounded-full inline-block">38个词，看懂AI产业链全景</p>
      </motion.div>
    </div>
  );
}

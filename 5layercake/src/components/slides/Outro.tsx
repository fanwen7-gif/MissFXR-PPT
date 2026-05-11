import { motion } from "motion/react";

export const outroSlides = [
  // P27: Summary - Interconnection
  function SlideSummary() {
    const connections = [
      { from: "应用爆发", to: "模型需求", color: "bg-blue-50" },
      { from: "模型进步", to: "基础设施投资", color: "bg-purple-50" },
      { from: "基础设施扩张", to: "芯片需求", color: "bg-teal-50" },
      { from: "芯片突破", to: "能源需求", color: "bg-orange-50" },
    ];

    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9F9F7] text-[#1A1A1A] p-6 md:p-24 relative overflow-hidden">
        <div className="z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-7xl font-serif font-black mb-6 tracking-tight">
              任何一层突破，<br/>都会拉动整块蛋糕
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">五层不是独立的，是一个紧密耦合的整体</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {connections.map((conn, i) => (
              <motion.div
                key={conn.from}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className={`${conn.color} p-8 rounded-2xl border border-black/5 flex items-center justify-between group hover:border-black/20 transition-all`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Trigger</span>
                  <span className="text-2xl md:text-3xl font-bold">{conn.from}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl text-gray-300 group-hover:text-black transition-colors">→</span>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Impact</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#4A6FA5]">{conn.to} <span className="text-xl">↑</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-4 bg-black text-white rounded-full text-xl md:text-2xl font-bold tracking-tight">
              AI 产业链：联动效应
            </div>
          </motion.div>
        </div>
      </div>
    );
  },

  // P28: Opportunities
  function SlideOpportunities() {
    const points = [
      { title: '理解底层逻辑', desc: '不再被天花乱坠的术语迷惑' },
      { title: '看清产业全景', desc: '在五层蛋糕中找准发力方向' },
      { title: '寻找生态位', desc: '普通人的机会藏在层与层的缝隙里' }
    ];

    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9F9F7] text-[#1A1A1A] p-6 md:p-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[120vh] h-[120vh] border-[100px] border-black rounded-full" />
        </motion.div>

        <div className="z-10 max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-sm font-mono text-gray-400 uppercase tracking-[0.5em] mb-6 block">Conclusion</span>
            <h3 className="text-7xl md:text-[140px] font-black leading-none tracking-tighter mb-8">
              不需要<span className="text-[#E63946]">博士</span>学位
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gray-300" />
              <p className="text-2xl md:text-4xl font-serif italic text-gray-400">"每一层都有人在押注"</p>
              <div className="h-px w-12 bg-gray-300" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col h-full"
              >
                <span className="text-4xl font-black text-gray-100 mb-6 block">0{i + 1}</span>
                <h4 className="text-2xl font-bold mb-4">{point.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed flex-grow">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              就业 · 投资 · 创业 —— 机会就在你眼前
            </p>
          </motion.div>
        </div>
      </div>
    );
  },

  // P29: Back Cover
  function SlideBackCover() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F5F3EE] text-[#1A1A1A] p-6 text-center relative overflow-hidden font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-[375px] w-full flex flex-col items-center"
        >
          {/* Avatar - Round Cat Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md"
          >
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Account Name - Serif, Blue, 28px Bold */}
          <h2 className="text-[28px] font-serif font-bold text-[#2B5FD9] mb-2 leading-tight">
            @Miss发行人
          </h2>

          {/* Slogan - 16px, Gray */}
          <p className="text-[16px] text-gray-500 mb-8 font-medium tracking-wide">
            大白话讲AI
          </p>

          {/* Separator - Thin, Light Gray */}
          <div className="w-12 h-[1px] bg-gray-200 mb-8" />

          {/* Thank You Text - 20px */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[20px] font-medium text-gray-800 mb-16"
          >
            感谢观看
          </motion.p>
          
          {/* Footer Card - Rounded Background */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full bg-white/60 backdrop-blur-sm py-6 px-4 rounded-2xl border border-black/5 shadow-sm"
          >
            <p className="text-[14px] text-gray-500 mb-1 leading-relaxed">
              本演示文稿通过 Vibe Coding（AI辅助编程）制作
            </p>
            <p className="text-[14px] font-bold text-gray-800">
              特别鸣谢：陈南 {/* 每期替换这里 */}
            </p>
          </motion.div>
        </motion.div>

        {/* Subtle background decoration to match cover style if needed */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#2B5FD9] opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2B5FD9] opacity-10" />
      </div>
    );
  }
];

import { motion } from "motion/react";

export const introSlides = [
  // P1
  function Slide1() {
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
  },

  // P2
  function Slide2() {
    return (
      <div className="w-full h-full flex flex-col justify-center bg-white text-[#0A1128] p-8 md:p-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#FFE5E5] via-white to-white"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-0 left-0 w-full h-3 md:h-4 bg-[#E63946] origin-left z-10"
        />
        
        <div className="max-w-5xl mx-auto w-full z-10">
          {/* Upper Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl font-medium text-gray-500 mb-2">过去一年，AI吃掉了全球</p>
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter text-[#0A1128] leading-none">
              3000<span className="text-3xl md:text-7xl text-gray-400 ml-2">亿美元</span>
            </h1>
          </motion.div>

          {/* Middle Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l-4 md:border-l-8 border-[#E63946] pl-6 md:pl-10 mb-12"
          >
            <div className="flex items-center gap-6 mb-2">
              <p className="text-xl md:text-3xl font-medium text-gray-500">黄仁勋说：这才是开始</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg" 
                  alt="Jensen Huang" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <p className="text-2xl md:text-5xl font-bold text-[#0A1128]">
              后面还有 <span className="text-[#E63946] italic">几十万亿</span> 等着投进去
            </p>
          </motion.div>

          {/* Separator Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gray-200 w-full mb-12"
          />

          {/* Lower Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg md:text-2xl text-gray-500 mb-4">但他同时说——参与这场变革，你不需要博士学位</p>
            <p className="text-3xl md:text-6xl font-black tracking-tight text-[#0A1128]">
              普通人的机会，藏在哪一层？
            </p>
          </motion.div>
        </div>
      </div>
    );
  },

  // P3
  function Slide3() {
    const layers = [
      { name: '应用层', desc: '你每天用的', color: '#E8F0FE' },
      { name: '模型层', desc: '背后的大脑', color: '#D2E3FC' },
      { name: '基础设施层', desc: 'AI工厂', color: '#AECBFA' },
      { name: '芯片层', desc: '发动机', color: '#8AB4F8' },
      { name: '能源层', desc: '天花板', color: '#669DF6' },
    ];

    return (
      <div className="w-full h-full flex flex-col md:flex-row bg-[#E8F0FE] text-[#0A1128] relative overflow-y-auto">
        <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center z-10 min-h-screen md:min-h-0">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-sans font-black mb-12 md:mb-16 leading-tight text-[#0A1128]"
          >
            AI是一块<br/>五层蛋糕
          </motion.h2>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {layers.map((layer, i) => (
              <motion.div 
                key={layer.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 + 0.5 }}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 group"
              >
                <span className="text-lg md:text-2xl font-mono text-[#8AB4F8]">0{i + 1}</span>
                <span className="text-3xl md:text-5xl font-bold text-[#0A1128] group-hover:text-[#E63946] transition-colors">{layer.name}</span>
                <span className="text-xl md:text-3xl text-[#2B4C7E]/60 italic">— {layer.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-0 min-h-[50vh] md:min-h-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg" 
              alt="Jensen Huang Background" 
              className="w-full h-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="relative w-full max-w-md md:w-3/4 aspect-square flex flex-col justify-center z-10">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.15 + 0.5, type: "spring" }}
                className="w-full h-16 md:h-24 border border-white/30 flex items-center justify-center relative overflow-hidden shadow-lg"
                style={{
                  backgroundColor: layer.color,
                  width: `${60 + i * 10}%`,
                  margin: '0 auto',
                  marginBottom: '-2px',
                  zIndex: 10 - i,
                  opacity: 0.95,
                  borderRadius: '8px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                <span className="font-mono text-sm md:text-xl tracking-widest uppercase text-[#0A1128] font-black drop-shadow-sm">{layer.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
];

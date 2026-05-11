import { motion } from "motion/react";

interface LayerTransitionProps {
  fromLayer: string;
  toLayer: string;
  activeLayerIndex: number;
}

export function LayerTransition({ fromLayer, toLayer, activeLayerIndex }: LayerTransitionProps) {
  const layers = [
    { name: '应用层', color: '#E8F0FE' },
    { name: '模型层', color: '#F3E8FF' },
    { name: '基础设施层', color: '#E0F2F1' },
    { name: '芯片层', color: '#FFF1E6' },
    { name: '能源层', color: '#E5E7EB' },
  ];

  const activeColor = layers[activeLayerIndex]?.color || '#FAFCFF';

  return (
    <div className="w-full h-full flex flex-col md:flex-row text-[#0A1128] relative overflow-hidden" style={{ backgroundColor: activeColor }}>
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl text-gray-400 font-light mb-4">
            讲完了 <span className="text-[#0A1128] font-bold">{fromLayer}</span>
          </p>
          <h2 className="text-5xl md:text-8xl font-sans font-black leading-tight text-[#0A1128] mb-8">
            接下来讲<br/>
            <span className="text-[#4169E1]">{toLayer}</span>
          </h2>
          <div className="h-1 w-24 bg-[#4169E1]" />
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-0">
        <div className="relative w-full max-w-md md:w-3/4 aspect-square flex flex-col justify-center z-10">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: i === activeLayerIndex ? 1.05 : 1,
                boxShadow: i === activeLayerIndex ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "none"
              }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="w-full h-16 md:h-24 border border-white/30 flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: layer.color,
                width: `${60 + i * 10}%`,
                margin: '0 auto',
                marginBottom: '-2px',
                zIndex: i === activeLayerIndex ? 20 : 10 - i,
                borderRadius: '8px',
                borderWidth: i === activeLayerIndex ? '3px' : '1px',
                borderColor: i === activeLayerIndex ? '#4169E1' : 'rgba(255,255,255,0.3)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none ${i === activeLayerIndex ? 'opacity-100' : 'opacity-50'}`} />
              <span className={`font-mono text-sm md:text-xl tracking-widest uppercase font-black ${i === activeLayerIndex ? 'text-[#4169E1]' : 'text-[#0A1128]'}`}>
                {layer.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

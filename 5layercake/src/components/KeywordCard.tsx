import { motion } from "motion/react";

export function KeywordCard({ num, title, desc, delay = 0 }: { num: string, title: string, desc: string, delay?: number }) {
  const titleParts = title.split(/(\(|\（)/);
  let mainTitle = title;
  let subTitle = "";

  if (titleParts.length > 1) {
    mainTitle = titleParts[0].trim();
    subTitle = title.substring(titleParts[0].length).trim();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
    >
      <div className="text-base md:text-lg font-mono text-gray-400 mb-3 md:mb-4 tracking-widest uppercase">No. {num}</div>
      <div className="mb-3 md:mb-4">
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight">{mainTitle}</h3>
        {subTitle && (
          <p className="text-lg md:text-xl font-sans text-gray-400 mt-1 italic">{subTitle}</p>
        )}
      </div>
      <p className="text-gray-600 leading-relaxed text-lg md:text-2xl whitespace-pre-line">{desc}</p>
    </motion.div>
  );
}

import { motion } from "motion/react";

export function CompanyRow({ name, desc, domain, delay = 0 }: { name: string, desc: string, domain: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 p-2">
        <img 
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
          alt={name} 
          className="w-full h-full object-contain rounded-lg" 
          onError={(e) => { 
            e.currentTarget.style.display = 'none'; 
            e.currentTarget.parentElement!.innerHTML = `<span class="font-serif font-bold text-xl md:text-2xl text-gray-400">${name.charAt(0)}</span>`;
          }} 
        />
      </div>
      <div>
        <h3 className="text-xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-1 md:mb-2">{name}</h3>
        <p className="text-base md:text-xl text-gray-500 leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
}

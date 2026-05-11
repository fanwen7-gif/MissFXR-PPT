import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CoverSlides } from './components/slides/00_Cover';
import { HintonSlides } from './components/slides/01_Hinton';
import { LeCunSlides } from './components/slides/02_LeCun';
import { LiSlides } from './components/slides/03_Li';
import { VaswaniSlides } from './components/slides/04_Vaswani';
import { HassabisSlides } from './components/slides/05_Hassabis';
import { SutskeverSlides } from './components/slides/06_Sutskever';
import { HuangSlides } from './components/slides/07_Huang';
import { AltmanSlides } from './components/slides/08_Altman';
import { AmodeiSlides } from './components/slides/09_Amodei';
import { KarpathySlides } from './components/slides/10_Karpathy';
import { OutroSlides } from './components/slides/11_Outro';

const allSlides = [
  ...CoverSlides,
  ...HintonSlides,
  ...LeCunSlides,
  ...LiSlides,
  ...VaswaniSlides,
  ...HassabisSlides,
  ...SutskeverSlides,
  ...HuangSlides,
  ...AltmanSlides,
  ...AmodeiSlides,
  ...KarpathySlides,
  ...OutroSlides,
];

const chapters = [
  { title: "Intro", count: CoverSlides.length },
  { title: "01 Hinton", count: HintonSlides.length },
  { title: "02 LeCun", count: LeCunSlides.length },
  { title: "03 Li", count: LiSlides.length },
  { title: "04 Vaswani", count: VaswaniSlides.length },
  { title: "05 Hassabis", count: HassabisSlides.length },
  { title: "06 Sutskever", count: SutskeverSlides.length },
  { title: "07 Huang", count: HuangSlides.length },
  { title: "08 Altman", count: AltmanSlides.length },
  { title: "09 Amodei", count: AmodeiSlides.length },
  { title: "10 Karpathy", count: KarpathySlides.length },
  { title: "Outro", count: OutroSlides.length },
];

function getChapterInfo(index: number) {
  let sum = 0;
  for (let i = 0; i < chapters.length; i++) {
    if (index < sum + chapters[i].count) {
      return chapters[i].title;
    }
    sum += chapters[i].count;
  }
  return "";
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
        setCurrentIndex((prev) => Math.min(prev + 1, allSlides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlide = allSlides[currentIndex];
  const currentChapter = getChapterInfo(currentIndex);

  return (
    <div className="w-screen h-screen bg-white text-swiss-ink overflow-hidden relative font-sans selection:bg-swiss-ink selection:text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <AnimatePresence mode="wait">
        <div className="relative z-10 w-full h-full">
          <CurrentSlide key={currentIndex} />
        </div>
      </AnimatePresence>
      
      {/* Global Nav */}
      <div className="absolute top-10 left-10 z-50 flex flex-col gap-0">
        <div className="text-[8px] font-black tracking-[0.5em] uppercase opacity-30">
          Chapter
        </div>
        <div className="text-xs font-black tracking-tighter uppercase">
          {currentChapter}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 flex items-end gap-10 z-50">
        <div className="flex flex-col gap-0">
          <div className="text-[8px] font-black tracking-[0.5em] uppercase opacity-30">
            Slide
          </div>
          <div className="text-2xl font-black tracking-tighter tabular-nums leading-none">
            {String(currentIndex + 1).padStart(2, '0')}
          </div>
        </div>
        
        <div className="w-64 h-2 bg-swiss-ink/5 relative mb-1">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-swiss-red"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / allSlides.length) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="text-[8px] font-black tracking-[0.5em] uppercase opacity-30 mb-1">
          {allSlides.length}
        </div>
      </div>
      
      {/* Invisible click areas for navigation */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-40 cursor-w-resize" onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} />
      <div className="absolute inset-y-0 right-0 w-3/4 z-40 cursor-e-resize" onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, allSlides.length - 1))} />
    </div>
  );
}

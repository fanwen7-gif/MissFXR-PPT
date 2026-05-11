import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import Cover from './components/slides/Cover';
import Part1_Intro from './components/slides/Part1_Intro';
import Part2_Blockade from './components/slides/Part2_Blockade';
import Part3_Breakthrough from './components/slides/Part3_Breakthrough';
import BackCover from './components/slides/BackCover';

const slides = [
  { id: 'cover', component: Cover },
  { id: 'p01', component: Part1_Intro, subIndex: 0, chapter: '第一部分', title: '生态韧性' },
  { id: 'p02', component: Part1_Intro, subIndex: 1, chapter: '第一部分', title: '要素禀赋' },
  { id: 'p03', component: Part1_Intro, subIndex: 2, chapter: '第一部分', title: '效率奇迹' },
  { id: 'p04', component: Part1_Intro, subIndex: 3, chapter: '第一部分', title: '商业闭环' },
  { id: 'p05', component: Part1_Intro, subIndex: 4, chapter: '第一部分', title: '技术硬核' },
  { id: 'p06', component: Part2_Blockade, subIndex: 0, chapter: '第二部分', title: '封锁本质' },
  { id: 'p07', component: Part2_Blockade, subIndex: 1, chapter: '第二部分', title: '算力缺口' },
  { id: 'p08', component: Part2_Blockade, subIndex: 2, chapter: '第二部分', title: '互联瓶颈' },
  { id: 'p09', component: Part2_Blockade, subIndex: 3, chapter: '第二部分', title: '底座支撑' },
  { id: 'p10', component: Part2_Blockade, subIndex: 4, chapter: '第二部分', title: '规则较量' },
  { id: 'p11', component: Part3_Breakthrough, subIndex: 0, chapter: '第三部分', title: '突围逻辑' },
  { id: 'p12', component: Part3_Breakthrough, subIndex: 1, chapter: '第三部分', title: '技术优化' },
  { id: 'p13', component: Part3_Breakthrough, subIndex: 2, chapter: '第三部分', title: '终局布局' },
  { id: 'backcover', component: BackCover },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentIndex].component;
  const currentSubIndex = slides[currentIndex].subIndex;
  const currentChapter = slides[currentIndex].chapter;
  const currentTitle = slides[currentIndex].title;

  return (
    <div className="w-screen h-screen bg-brand-bg overflow-hidden relative">
      {/* Click areas for navigation */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-40 cursor-w-resize" onClick={prevSlide} />
      <div className="absolute inset-y-0 right-0 w-2/3 z-40 cursor-e-resize" onClick={nextSlide} />

      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={slides[currentIndex].id} subIndex={currentSubIndex} />
      </AnimatePresence>

      {/* Global Navigation */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none z-50 mix-blend-difference text-white opacity-60">
        <div className="font-sans text-xs tracking-widest uppercase flex flex-col gap-1">
          {currentChapter && <span>{currentChapter}</span>}
          {currentTitle && <span className="opacity-60">{currentTitle}</span>}
        </div>
        <div className="font-mono text-sm tracking-widest">
          {String(currentIndex + 1).padStart(2, '0')} / {slides.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-accent/20 w-full z-50">
        <div 
          className="h-full bg-brand-accent transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

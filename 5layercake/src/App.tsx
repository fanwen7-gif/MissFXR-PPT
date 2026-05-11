import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from './components/Navigation';

import { introSlides } from './components/slides/Intro';
import { appLayerSlides } from './components/slides/Part1_AppLayer';
import { modelLayerSlides } from './components/slides/Part2_ModelLayer';
import { infraLayerSlides } from './components/slides/Part3_InfraLayer';
import { chipLayerSlides } from './components/slides/Part4_ChipLayer';
import { energyLayerSlides } from './components/slides/Part5_EnergyLayer';
import { outroSlides } from './components/slides/Outro';

const allSlides = [
  ...introSlides,
  ...appLayerSlides,
  ...modelLayerSlides,
  ...infraLayerSlides,
  ...chipLayerSlides,
  ...energyLayerSlides,
  ...outroSlides
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, allSlides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = allSlides[currentSlide];

  return (
    <div 
      className="w-screen h-screen overflow-hidden bg-[#F9F9F7] text-[#1A1A1A] relative"
      onClick={(e) => {
        // Only navigate if clicking on the background, not interactive elements
        if (e.clientX > window.innerWidth / 2) {
          nextSlide();
        } else {
          prevSlide();
        }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation current={currentSlide} total={allSlides.length} />
    </div>
  );
}

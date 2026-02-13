import React, { useEffect, useRef, useState } from 'react';
import { PROCESS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // GSAP Context handles cleanup and duplicates automatically in React Strict Mode
    let ctx = gsap.context(() => {
      if (!pathRef.current) return;
      const path = pathRef.current;
      const length = path.getTotalLength();

      // Reset CSS to avoid conflicts and ensure visibility
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 40%",
          scrub: 1,
        }
      });
    }, containerRef); // Scope to container

    return () => ctx.revert(); // Cleanup
  }, [isDesktop]);

  const MOBILE_PATH = "M -292 36 H 840 C 920 40 960 80 960 160 V 4700 C 962 4696 940 4950 1250 4954 H 4505";
  const DESKTOP_PATH = "M -292 36 H 840 C 920 40 960 80 960 160 V 2023 C 963 2148 936 2296 1158 2306 H 4500";

  return (
    <section id="process" className="overflow-hidden relative pb-32 md:pb-40 pt-4 px-6 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center relative">

        {/* 1. Heading */}
        <div className="flex items-center justify-center w-full z-20 relative">
          <h2 className="md:px-4 text-5xl md:text-7xl font-[900] mb-8 tracking-tighter text-white uppercase leading-tight text-center">
            How we cater the problem ?
          </h2>
        </div>
        <p className="text-gray-500 text-lg md:text-2xl font-light text-center mb-16 max-w-3xl z-20 relative leading-relaxed">
          Every startup has a story, but not every founder knows how to present it. We take your raw ideas, shape them into a Clear narrative, and design them into visuals that speak louder than words
        </p>


        {/* 2. Timeline Container */}
        <div ref={containerRef} className="relative w-full flex flex-col items-start md:pl-28 z-10">

          {/* Curve Container - Absolute Positioned as per User Request */}
          <div className="absolute md:left-[-13px]  left-[-47px] pointer-events-none z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="465.9 41.8285 1902 2169" className="w-full h-auto md:w-[600px]" style={{ overflow: 'visible' }}>
              <path
                ref={pathRef}
                d={isDesktop ? DESKTOP_PATH : MOBILE_PATH}
                stroke="url(#gradient)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FF4ECD" />
                  <stop offset="100%" stopColor="#7B5CFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps */}
          <div className="md:space-y-16 space-y-20 relative pt-10">
            {PROCESS.map((step, idx) => (
              <div
                key={idx}
                className="relative flex items-start group cursor-pointer select-none"
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveStep(idx);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveStep(null);
                  }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // For all devices, toggle logic
                  setActiveStep(prev => prev === idx ? null : idx);
                }}
              >

                {/* Node Icon - Fixed Height */}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-cta-gradient z-20 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="w-7 h-7 md:w-9 md:h-9 object-contain" />
                </div>


                {/* Text Content */}
                <div className="md:ml-10 ml-5 flex flex-col relative">
                  {/* Title Container - Fixed Height matching Icon to ensure center alignment */}
                  <div className="h-16 flex items-center">
                    <h3 className="text-xl md:text-3xl font-light text-white tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description - Expands below the fixed title block */}
                  <AnimatePresence>
                    {activeStep === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute md:top-14 top-16 left-0 z-50 w-[65vw] md:w-[50vw] bg-transparent"
                      >
                        <p
                          className="text-gray-400 text-xs md:text-sm font-light md:leading-relaxed text-left"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;

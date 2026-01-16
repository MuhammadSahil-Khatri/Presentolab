
import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onSeeAllClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onSeeAllClick }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.service-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-[#FF5C00] font-black tracking-[0.4em] text-[10px] uppercase mb-6 opacity-60">
            Expertise
          </p>
          <h2 className="text-5xl md:text-8xl font-[900] mb-8 tracking-tighter text-white uppercase leading-[0.9]">
            Our Expertise
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Visual Solutions That Solve Your Storytelling Challenges
          </p>
        </div>

        {/* Service List */}
        <div className="flex flex-col">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="service-item group relative py-12 md:py-16 border-b border-zinc-900/50 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-700 cursor-pointer overflow-hidden opacity-0 translate-y-12"
              style={{ transitionDelay: `${idx * 150}ms` }}
              onClick={onSeeAllClick}
            >
              <div className="relative z-10 flex-1 flex items-baseline gap-8">
                <span className="text-[12px] font-black text-zinc-800 group-hover:text-[#FF5C00] transition-colors duration-500 font-mono">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-[900] text-zinc-500 group-hover:text-white transition-all duration-500 tracking-tighter uppercase group-hover:translate-x-6">
                  {service.title}
                </h3>
              </div>
              
              <div className="relative z-10 mt-6 lg:mt-0 lg:max-w-md lg:text-right transition-transform duration-500">
                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                  {service.description}
                </p>
                
                {/* Visual Indicator - Slides in from right on hover */}
                <div className="mt-6 flex lg:justify-end items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0">
                   <div className="h-[1px] w-12 bg-line-gradient"></div>
                   <span className="text-gradient-brand font-black tracking-[0.3em] text-[11px] uppercase">
                     Explore Detail
                   </span>
                </div>
              </div>

              {/* Decorative line that expands on hover - The Signature Animation */}
              <div className="absolute bottom-0 left-0 h-[1.5px] bg-line-gradient w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-24 flex justify-center">
          <button 
            onClick={onSeeAllClick}
            className="group relative flex items-center active:scale-95 transition-transform duration-200"
          >
            {/* Main Button Body */}
            <div className="bg-cta-gradient group-hover:brightness-110 text-white h-14 px-10 rounded-full flex items-center font-bold text-lg relative z-20 transition-all duration-500 ease-spring shadow-lg">
              See All Services
            </div>
            
            {/* The Breaking Circle - Animated movement */}
            <div className="bg-cta-gradient group-hover:brightness-110 h-14 w-14 rounded-full flex items-center justify-center relative z-10 -ml-5 group-hover:ml-5 transition-all duration-500 ease-spring">
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .service-item.reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;

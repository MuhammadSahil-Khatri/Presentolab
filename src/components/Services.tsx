import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import HoverIcon from './HoverIcon';

interface ServicesProps {
  onSeeAllClick?: (index: number) => void;
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
    <section id="services" ref={sectionRef} className="flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 ">
          <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter text-white uppercase leading-[0.9]">
            What We Do ?
          </h2>
        </div>

        {/* Service List */}
        <HoverIcon
          className="border-b border-zinc-900/50"
        >
          <div className="flex flex-col">
            {SERVICES.map((service, idx) => (

              <div
                key={idx}
                className="service-item group relative py-8 px-5 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-700 overflow-hidden opacity-0 translate-y-12"
                style={{ transitionDelay: `${idx * 150}ms` }}
                onClick={() => onSeeAllClick?.(idx)}
              >
                <div className="relative z-10 flex-1 flex items-center gap-4 md:gap-8">
                  <span className="text-[40px] font-black text-zinc-800 group-hover:text-[#FF5C00] transition-colors duration-500 font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-[900] text-zinc-500 group-hover:text-white transition-all duration-500 tracking-tighter uppercase group-hover:translate-x-6">
                    {service.title}
                  </h3>
                </div>

                <div className="relative z-10 mt-6 lg:mt-0 lg:max-w-md lg:text-right transition-transform duration-500">
                  <p className="text-gray-600 text-lg md:text-lg font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex lg:justify-end items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0">
                    <div className="h-[1px] w-12 bg-line-gradient"></div>
                    <span className="text-gradient-brand font-black tracking-[0.3em] text-[11px] uppercase">
                      Explore Detail
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[1.5px] bg-line-gradient w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            ))}
          </div>
        </HoverIcon>
        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onSeeAllClick?.(0)}
            aria-label="See all services"
            className="
              group relative flex items-center
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              active:scale-[0.98] transition-transform duration-200
            "
          >
            {/* Text pill */}
            <span
              className="
                bg-cta-gradient text-white
                h-11 px-8
                rounded-full
                flex items-center justify-center
                font-semibold text-sm
                relative z-20
                shadow-lg
                transition-all duration-300
                group-hover:brightness-110
              "
            >
              See All Services
            </span>

            {/* Icon pill */}
            <span
              className="
                bg-cta-gradient
                h-11 w-11
                rounded-full
                flex items-center justify-center
                relative z-10
                ml-[-0.75rem]
                transition-all duration-300 ease-out
                group-hover:ml-2
                group-hover:brightness-110
                shadow-lg
              "
            >
              <span
                className="
                  w-7 h-7
                  rounded-full
                  bg-black/5
                  flex items-center justify-center
                  transition-colors
                  group-hover:bg-black/10
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div >

      <style>{`
        .service-item.reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section >
  );
};

export default Services;

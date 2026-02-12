
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-28">
      {/* --- SUBTLE AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-[#BE00FF]/5 rounded-full blur-[160px] opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-t from-[#FF5C00]/10 to-transparent blur-3xl"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20 pt-24 md:pt-12">


        <h1 className="text-6xl md:text-8xl lg:text-9xl font-[900] leading-tight text-center mb-8 md:mb-12 lg:mb-16 tracking-tighter">
          FROM IDEA TO IMPACT.<br />
          <span className="text-gradient-brand">WE SHAPE YOUR STORY.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          Struggling to explain complex ideas? We transform your vision into high-impact narratives
          and visuals that build trust, drive clarity, and accelerate growth.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
          <button
            onClick={onContactClick}
            aria-label="Contact us"
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
                h-11 px-6
                rounded-full
                flex items-center justify-center
                font-semibold text-sm
                relative z-20
                shadow-md
                transition-all duration-300
                group-hover:brightness-110
              "
            >
              Let’s talk
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

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-white/40 hover:text-gray-300 font-bold transition-all text-xs flex flex-col items-center gap-1 group uppercase tracking-[0.3em] px-6 py-4 rounded-full relative"
          >
            <div className="flex items-center gap-4">
              Explore Our Work
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
            {/* Sliding underline effect: Enter from left, exit to right */}
            <div className="absolute bottom-3 left-6 right-6 h-[2px] overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-cta-gradient transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left" />
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;


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
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black pb-0">
      {/* --- MINIMALIST LIGHT BEAMS ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-[#BE00FF]/5 rounded-full blur-[160px] opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-t from-[#FF5C00]/10 to-transparent blur-3xl"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* Vertical Light Beams Container */}
          <div className="relative w-[300px] md:w-[600px] h-full flex justify-center items-end opacity-60">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-[1px] md:w-[2px] h-[80%] bg-beam-gradient blur-[1px] animate-beam-rise"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                  opacity: 0.1 + (Math.random() * 0.4),
                  marginLeft: `${(Math.random() - 0.5) * 40}px`,
                }}
              />
            ))}

            {/* Soft Central Column of Light */}
            <div className="absolute bottom-0 w-32 h-full bg-gradient-to-t from-[#FF007F]/10 via-transparent to-transparent blur-[100px]"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1.5px] h-[1.5px] rounded-full bg-white opacity-20 animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${-Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-10"></div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20 pt-36">


        <h1 className="text-5xl md:text-9xl font-[900] leading-[0.85] mb-12 tracking-tighter">
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
            className="group relative flex items-center active:scale-95 transition-transform duration-200"
          >
            {/* Main Button Body - 56px height (h-14) is excellent for fingers/mouse */}
            <div className="bg-cta-gradient group-hover:brightness-110 text-white h-14 px-10 rounded-full flex items-center font-bold text-lg relative z-20 transition-all duration-500 ease-spring shadow-lg">
              Let's Talk
            </div>
            {/* The Breaking Circle */}
            <div className="bg-cta-gradient group-hover:brightness-110 h-14 w-14 rounded-full flex items-center justify-center relative z-10 -ml-5 group-hover:ml-5 transition-all duration-500 ease-spring">
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </button>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-white/40 hover:text-white font-bold transition-all text-xs flex items-center gap-4 group uppercase tracking-[0.3em] px-6 py-4 rounded-full hover:bg-white/5"
          >
            Explore Our Work
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .bg-beam-gradient {
          background: linear-gradient(to top, transparent, #FF5C00, #FF007F, #BE00FF, transparent);
          background-size: 100% 300%;
        }

        @keyframes beam-rise {
          0% { transform: translateY(20%) scaleY(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100%) scaleY(1.5); opacity: 0; }
        }
        .animate-beam-rise {
          animation: beam-rise linear infinite;
        }

        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.3; }
          85% { opacity: 0.3; }
          100% { transform: translateY(-400px) scale(0); opacity: 0; }
        }
        .animate-particle {
          animation: particle linear infinite;
        }

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

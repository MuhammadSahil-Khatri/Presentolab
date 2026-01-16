
import React from 'react';

interface AboutProps {
  onMeetTeamClick: () => void;
}

const About: React.FC<AboutProps> = ({ onMeetTeamClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const logoItems = (
    <>
      <div className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">SELFRIDGES&CO</div>
      <div className="text-lg md:text-2xl font-serif text-white italic tracking-tighter uppercase font-black whitespace-nowrap">20th Century Fox</div>
      <div className="text-xl md:text-3xl font-black text-white uppercase whitespace-nowrap">SACHA LORD</div>
      <div className="flex flex-col items-center justify-center text-center flex-shrink-0">
        <div className="text-[10px] font-bold text-white uppercase leading-none mb-1">University of</div>
        <div className="text-lg font-black text-white uppercase leading-none">Salford</div>
        <div className="text-[10px] font-bold text-white uppercase leading-none">Manchester</div>
      </div>
      <div className="text-xl md:text-3xl font-serif font-black text-white uppercase italic tracking-widest whitespace-nowrap">ROSEBUD</div>
      <div className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">ARK7</div>
      <div className="text-xl md:text-3xl font-black text-[#FF006B] uppercase whitespace-nowrap">SOUNDMINT</div>
      <div className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">FINANCIO</div>
    </>
  );

  return (
    <section id="about" className="bg-black pt-0 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Scrolling Logo Bar */}
        <div className="py-10 relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-scroll whitespace-nowrap gap-24 items-center w-max opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
            <div className="flex gap-24 items-center">
              {logoItems}
            </div>
            <div className="flex gap-24 items-center">
              {logoItems}
            </div>
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center mt-16 mb-16">
          <h2 className="text-5xl md:text-8xl font-[900] mb-8 tracking-tighter">About Presento</h2>
          <p className="text-gray-500 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            We transform communication challenges into opportunities through presentations, pitch decks, and brand identities that engage, build trust, and drive growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Action Buttons - Centered */}
          <div className="flex flex-wrap items-center justify-center">
            <button 
              onClick={onMeetTeamClick}
              className="group relative flex items-center active:scale-95 transition-transform duration-200"
            >
              <div className="bg-cta-gradient group-hover:brightness-110 text-white h-11 px-6 rounded-full flex items-center font-bold text-sm relative z-20 transition-all duration-500 ease-spring">
                Meet the Team
              </div>
              <div className="bg-cta-gradient group-hover:brightness-110 h-11 w-11 rounded-full flex items-center justify-center relative z-10 -ml-4 group-hover:ml-2 transition-all duration-500 ease-spring">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

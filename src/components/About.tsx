import React from 'react';

interface AboutProps {
  onMeetTeamClick: () => void;
}

const About: React.FC<AboutProps> = ({ onMeetTeamClick }) => {
  return (
    <section id="about" className="bg-black overflow-hidden px-4 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-10 w-full">
          <h2 className="text-3xl md:text-6xl font-[900] tracking-tighter text-white uppercase leading-[0.9] text-center">
            Who We Are ?
          </h2>
        </div>

        {/* Content Block - Centered */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl">
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Struggling to explain complex ideas? We transform your vision into high-impact narratives and visuals that build trust, drive clarity, and accelerate growth.
          </p>

          {/* Button */}
          <div className="mb-10">

            <button
              onClick={onMeetTeamClick}
              className="group relative flex items-center active:scale-95 transition-transform duration-200"
            >
              <div className="bg-cta-gradient group-hover:brightness-110 text-white h-12 px-8 rounded-full flex items-center font-bold text-md relative z-20 transition-all duration-500">
                Meet the team
              </div>
              <div className="bg-cta-gradient group-hover:brightness-110 h-12 w-12 rounded-full flex items-center justify-center relative z-10 -ml-5 group-hover:ml-5 transition-all duration-500 ease-spring">
                <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-8 md:gap-32 w-full overflow-x-auto no-scrollbar px-4 pb-4">
          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer transition-all">
            <div className="relative flex items-center justify-center w-20 h-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-2xl group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] transition-all duration-500"></div>
              <div className="rounded-lg overflow-hidden">
                <svg
                  className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

              </div>
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
          </div>

          {/* Upwork */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer transition-all">
            <div className="relative flex items-center justify-center w-20 h-20">
              <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Upwork</span>
          </div>

          {/* Dribbble */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer transition-all">
            <div className="relative flex items-center justify-center w-20 h-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-2xl group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] transition-all duration-500"></div>
              <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Dribbble</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

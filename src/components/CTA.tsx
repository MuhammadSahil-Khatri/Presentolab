
import React from 'react';

interface CTAProps {
  onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section id="contact" className="px-6">
      <div className="max-w-7xl mx-auto md:pt-32 pb-6 md:pb-12 text-center relative overflow-hidden">
        {/* Subtle Background Glows instead of solid box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#BE00FF]/5 rounded-full blur-[120px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-9xl font-[900] mb-8 md:mb-12 leading-[1] tracking-tighter">
            Ready To Transform Your Idea Into <span className="text-gradient-brand">Impact?</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-3xl max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            Share your project. Our experts will reach out quickly to discuss how we can shape your story.
          </p>

          <button
            onClick={onContactClick}
            className="group relative flex items-center active:scale-95 transition-transform duration-200"
          >
            {/* Main Button Body - Larger and more prominent for CTA */}
            <div className="bg-cta-gradient group-hover:brightness-110 text-white h-14 px-10 rounded-full flex items-center font-bold text-lg relative z-20 transition-all duration-500 ease-spring shadow-[0_0_50px_rgba(255,92,0,0.2)]">
              Let's Talk
            </div>

            {/* The Breaking Circle */}
            <div className="bg-cta-gradient group-hover:brightness-110 h-14 w-14 rounded-full flex items-center justify-center relative z-10 -ml-5 group-hover:ml-5 transition-all duration-500 ease-spring">
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

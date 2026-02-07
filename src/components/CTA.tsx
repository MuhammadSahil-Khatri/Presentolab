
import React from 'react';

interface CTAProps {
  onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section id="contact" className="px-6">
      <div className="max-w-5xl mx-auto pb-6 md:pb-12 text-center relative overflow-hidden">
        {/* Subtle Background Glows instead of solid box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#BE00FF]/5 rounded-full blur-[120px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-9xl font-[900] mb-8 md:mb-12 leading-tight tracking-tighter">
            Ready To Transform Your Idea Into <span className="text-gradient-brand">Impact?</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-3xl max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            Share your project. Our experts will reach out quickly to discuss how we can shape your story.
          </p>

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
                shadow-lg shadow-[#FF5C00]/20
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
                shadow-lg shadow-[#FF5C00]/20
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
      </div>
    </section>
  );
};

export default CTA;

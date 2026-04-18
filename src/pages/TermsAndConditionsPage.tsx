import React, { useEffect } from 'react';
import SEO from '../seo/SEO';
import { TERMS_AND_CONDITIONS } from '../constants';

const TermsAndConditionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent text-white min-h-screen md:pt-48 pb-10 overflow-hidden relative flex items-center justify-center pt-28">
      <SEO pageKey="terms-and-conditions" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full pt-20 md:pt-12">
        <div className="text-center mb-12 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-[900] tracking-tighter leading-tight mb-12 md:mb-6 uppercase">
            Terms <span className="text-gradient-brand">&amp; Conditions</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-lg max-w-2xl mx-auto font-light leading-relaxed text-left md:text-center mt-4">
            <span className="font-semibold text-white/80">Effective Date: November 2025</span><br /><br />
            Welcome to PresentoLab. By accessing our website or using our services, you agree to the following Terms &amp; Conditions. Please read them carefully before using our services.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16 text-gray-300 font-light leading-relaxed text-sm md:text-base break-words">
          {TERMS_AND_CONDITIONS.map((section, index) => (
            <section key={index} className="scroll-mt-32">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                {section.title}
              </h2>
              <div className="text-white/70 space-y-3 md:space-y-4">
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className={paragraph.trim().startsWith('*') ? "pl-6 relative before:content-['•'] before:absolute before:left-2 before:text-white/40" : ""}>
                    {paragraph.replace(/^\*\s*/, '')}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;

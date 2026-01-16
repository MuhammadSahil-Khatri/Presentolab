
import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <p className="text-[#FF5C00] font-black uppercase tracking-[0.3em] text-xs mb-6">How we cater the problem</p>
          <h2 className="text-5xl md:text-8xl font-[900] mb-10 leading-[0.95] tracking-tighter">
            Every Startup Has A Story We Shape Ideas.
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg mb-12">
            Our structured approach ensures that your message is not just heard, but resonates and converts.
          </p>
          {/* Horizontal decorative line with brand gradient */}
          <div className="h-1 w-24 bg-line-gradient"></div>
        </div>

        <div className="relative pl-16 md:pl-0">
          {/* Vertical Line with brand gradient */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-line-gradient-v opacity-20 hidden md:block"></div>

          <div className="space-y-20">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-12 group">
                {/* Circle Icon with brand colors */}
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-[32px] border-2 border-zinc-800 bg-black flex items-center justify-center text-white z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-[#FF006B] group-hover:bg-[#FF006B]/5">
                  <span className="font-black text-3xl md:text-4xl">{idx + 1}</span>
                </div>
                
                <div className="pt-4 md:pt-8">
                  <h3 className="text-2xl md:text-4xl font-[900] mb-4 group-hover:text-gradient-brand transition-all tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">
                    {step.description}
                  </p>
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


import React, { useEffect, useState } from 'react';
import { SERVICES } from '../constants';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
  initialIndex?: number;
}

const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose, onGetStarted, initialIndex = 0 }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setExpandedIndex(initialIndex);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimating(false);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content - White Mode as requested */}
      <div className={`relative bg-white text-black max-w-[1100px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 transform ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'} flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]`}>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-11 h-11 flex items-center justify-center rounded-full hover:bg-black/5 text-black/40 hover:text-black transition-colors z-50"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Right Content: Main List */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-14 pb-0 scroll-smooth custom-scrollbar w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-10">Our Services</h2>

          <div className="space-y-0">
            {SERVICES.map((service, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className={`border-t border-gray-100 first:border-t-0 py-10 transition-all duration-500`}>
                  <div
                    className="flex flex-col lg:flex-row lg:items-start gap-8 cursor-pointer group"
                    onClick={() => toggleAccordion(idx)}
                  >
                    {/* Index */}
                    <div className="text-lg font-black text-gray-300 pt-2">
                      0{idx + 1}
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h3>

                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-500 text-lg md:text-xl font-medium leading-snug max-w-xl mb-12">
                          {service.description}
                        </p>

                        {/* Categories Pills */}
                        <div className="flex flex-col gap-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Categories</p>
                          <div className="flex flex-wrap gap-2">
                            {service.categories?.map((cat, cidx) => (
                              <span
                                key={cidx}
                                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-800 shadow-sm whitespace-nowrap"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-black group-hover:text-black transition-all">
                        {isExpanded ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ServicesModal;

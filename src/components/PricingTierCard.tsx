
import React from 'react';
import { PricingTier, calculateFinalPrice } from '../constants/pricing';

interface PricingTierCardProps {
    tier: PricingTier;
    onctaClick: () => void;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({ tier, onctaClick }) => {
    const finalPrice = calculateFinalPrice(tier.basePrice, tier.discountPercent);

    return (
        <div className="relative cursor-pointer bg-white/5 backdrop-blur-2xl rounded-3xl p-8 flex flex-col h-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 transition-all duration-500 group">
            {/* Ribbon */}
            {tier.ribbon && (
                <div className="absolute top-0 right-0 overflow-hidden w-40 h-40 rounded-tr-3xl">
                    <div className="absolute top-10 -right-10 w-48 py-2 bg-gradient-to-r from-[#FF5C00] to-[#FF007F] text-white text-[12px] font-black tracking-widest text-center rotate-45 shadow-lg uppercase">
                        {tier.ribbon}
                    </div>
                </div>
            )}

            {/* Tier Header */}
            <div className="mb-6">
                <h3 className="text-[#FF5C00] font-bold text-lg mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-black text-white">${finalPrice}</span>
                    <span className="text-xl text-white/30 line-through font-medium">${tier.basePrice}</span>
                </div>
                <div className="inline-flex">
                    <div className="bg-[#002B5B] text-white px-4 py-1.5 rounded-sm text-sm font-black tracking-tight flex items-center gap-2 relative overflow-hidden">
                        <span className="relative z-10">{tier.discountPercent}% OFF</span>
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-white transform translate-x-2 -rotate-12"></div>
                    </div>
                </div>
            </div>

            {/* Features List */}
            <div className="flex-1 space-y-4 mb-10 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-white/70 font-medium text-[15px] leading-tight">{feature}</span>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-auto space-y-6">
                <div className="flex justify-center">
                    <button
                        onClick={onctaClick}
                        aria-label="Contact us"
                        className="
                            group/btn relative flex items-center
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
                                group-hover/btn:brightness-110
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
                                group-hover/btn:ml-2
                                group-hover/btn:brightness-110
                            "
                        >
                            <span
                                className="
                                    w-7 h-7
                                    rounded-full
                                    bg-black/5
                                    flex items-center justify-center
                                    transition-colors
                                    group-hover/btn:bg-black/10
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

                <div className="flex items-center justify-center gap-2 text-white/40 font-bold group-hover:text-[#FF5C00] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+923472818480" className="cursor-pointer font-bold">+92 347 2818480</a>
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
};

export default PricingTierCard;

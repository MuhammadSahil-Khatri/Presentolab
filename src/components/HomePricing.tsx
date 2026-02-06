import React from 'react';
import PricingTabs from './PricingTabs';

interface HomePricingProps {
    onContactClick: () => void;
}

const HomePricing: React.FC<HomePricingProps> = ({ onContactClick }) => {
    return (
        <section id="pricing" className="py-20 bg-black overflow-hidden px-4 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center mb-16 w-full px-4">
                    <h2 className="text-3xl md:text-7xl font-[900] tracking-tighter text-white uppercase leading-[0.9] text-center mb-8">
                        OUR PACKAGES
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-center">
                        We specialize in presentation design, storytelling, and brand clarity.
                        Our pricing is designed to provide maximum value for businesses at every stage of growth.
                    </p>
                </div>

                {/* Pricing Tabs Content */}
                <div className="w-full">
                    <PricingTabs onContactClick={onContactClick} />
                </div>
            </div>
        </section>
    );
};

export default HomePricing;

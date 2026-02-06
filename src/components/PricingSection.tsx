
import React from 'react';
import { PricingCategory } from '../constants/pricing';
import PricingTierCard from './PricingTierCard';

interface PricingSectionProps {
    category: PricingCategory;
    onContactClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ category, onContactClick }) => {
    return (
        <section className="my-20">
            <div className="max-w-6xl mx-auto">
                {/* Intro Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-7xl font-[900] tracking-tighter uppercase leading-[0.9] mb-8 text-gradient-brand">
                            {category.title}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
                            {category.description}
                        </p>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {category.tiers.map((tier, idx) => (
                        <div key={idx} className="h-full">
                            <PricingTierCard
                                tier={tier}
                                onctaClick={onContactClick}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

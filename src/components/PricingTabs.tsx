
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PRICING_DATA } from '../constants/pricing';
import PricingTierCard from './PricingTierCard';

interface PricingTabsProps {
    onContactClick: () => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ onContactClick }) => {
    const [activeTab, setActiveTab] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const controls = useAnimation();
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            setScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
        // Reset scroll position when tab changes
        x.set(0);
        controls.start({ x: 0 });
    }, [activeTab, x, controls]);

    const slideLeft = () => {
        const currentX = x.get();
        const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.85 : 400; // rough estimate
        const newX = Math.min(currentX + cardWidth, 0);
        controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } });
    };

    const slideRight = () => {
        const currentX = x.get();
        const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
        const newX = Math.max(currentX - cardWidth, -scrollWidth);
        controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } });
    };

    return (
        <div className="max-w-6xl mx-auto px-6">
            {/* Header Area with Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-8 border-b border-gray-100/10">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {PRICING_DATA.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`relative pb-4 text-sm font-bold uppercase tracking-wider transition-colors hover:text-white ${activeTab === idx ? 'text-gray-300' : 'text-gray-500'
                                }`}
                        >
                            {category.title}
                            {activeTab === idx && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-[-1px] right-[-1px] h-[2px] bg-cta-gradient z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Slider Controls - Following Testimonials style: show on desktop, swipe on mobile */}
                {/* <div className="hidden md:flex gap-4">
                    <button
                        onClick={slideLeft}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#FF5C00] hover:border-[#FF5C00] text-white transition-all duration-300 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={slideRight}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#7000FF] hover:border-[#7000FF] text-white transition-all duration-300 group"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div> */}
            </div>

            {/* Pricing Tiers Grid / Slider */}
            <div className="relative min-h-[550px] overflow-hidden -mx-6 px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full"
                    >
                        <motion.div
                            ref={carouselRef}
                            drag="x"
                            dragConstraints={{ right: 0, left: -scrollWidth }}
                            animate={controls}
                            style={{ x }}
                            whileTap={{ cursor: "grabbing" }}
                            className="flex md:grid md:grid-cols-3 gap-6 md:gap-12"
                        >
                            {/* Inner flex/grid wrapper */}
                            {PRICING_DATA[activeTab].tiers.map((tier, idx) => (
                                <div key={idx} className="min-w-[85vw] md:min-w-0 h-full flex-shrink-0">
                                    <PricingTierCard
                                        tier={tier}
                                        onctaClick={onContactClick}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PricingTabs;

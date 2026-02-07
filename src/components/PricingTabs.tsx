
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
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
        const updateWidth = () => {
            if (carouselRef.current) {
                // Calculate scrollable width
                const newScrollWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
                setScrollWidth(newScrollWidth);
            }
        };

        // Update width after a short delay to ensure DOM is ready
        const timer = setTimeout(updateWidth, 100);
        window.addEventListener('resize', updateWidth);

        // Reset scroll position when tab changes
        x.set(0);
        controls.start({ x: 0 });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateWidth);
        };
    }, [activeTab, x, controls]);

    return (
        <div className="max-w-6xl mx-auto px-6">
            {/* Header Area with Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-8 border-b border-gray-100/10">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap flex-col items-center md:flex-row justify-center mb-16 gap-x-5 gap-y-4">
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
                                    layoutId="activePricingTab"
                                    className="absolute bottom-0 inset-x-0 h-[2px] bg-cta-gradient z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pricing Tiers Carousel */}
            <div className="relative min-h-[550px] overflow-hidden -mx-6 px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full overflow-hidden"
                    >
                        <motion.div
                            ref={carouselRef}
                            className="cursor-grab active:cursor-grabbing"
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 0, left: -scrollWidth }}
                                animate={controls}
                                style={{ x }}
                                className="flex md:grid md:grid-cols-3 gap-6 md:gap-12"
                            >
                                {PRICING_DATA[activeTab].tiers.map((tier, idx) => (
                                    <div key={idx} className="w-[85vw] md:w-full flex-shrink-0">
                                        <PricingTierCard
                                            tier={tier}
                                            onctaClick={onContactClick}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PricingTabs;

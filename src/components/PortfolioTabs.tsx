
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, PortfolioItem } from '../constants/portfolio';
import HoverIcon from './HoverIcon';

interface PortfolioTabsProps {
    onImageClick: (imageUrl: string) => void;
}

const PortfolioCard: React.FC<{
    item: PortfolioItem;
    onClick: (imageUrl: string) => void;
}> = ({ item, onClick }) => {
    return (
        <div
            onClick={() => onClick(item.imageUrl)}
            className="group relative overflow-hidden rounded-[14px] bg-transparent border border-white/10 transition-all duration-500 hover:border-white/30 w-[280px] md:w-[380px] h-[220px] md:h-[280px]"
        >
            <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white text-lg font-black tracking-tight">{item.title}</h4>
            </div>
        </div>
    );
};

const PortfolioRow: React.FC<{
    items: PortfolioItem[];
    onImageClick: (imageUrl: string) => void;
    direction?: 'left' | 'right';
    duration?: number;
}> = ({ items, onImageClick, direction = 'left', duration = 30 }) => {
    if (items.length === 0) return null;

    // Double duplication for smooth infinite scroll
    const displayItems = [...items, ...items];
    const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex w-max gap-4"
                style={{ willChange: 'transform' }}
                animate={{ x: animateX }}
                transition={{
                    ease: 'linear',
                    duration,
                    repeat: Infinity,
                }}
            >
                {displayItems.map((item, idx) => (
                    <PortfolioCard
                        key={`${item.id}-${idx}`}
                        item={item}
                        onClick={onImageClick}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const PortfolioTabs: React.FC<PortfolioTabsProps> = ({ onImageClick }) => {
    const [activeTab, setActiveTab] = useState(3);

    const activeCategory = PORTFOLIO_DATA[activeTab];

    // Split active items into rows
    const itemsPerRow = Math.ceil(activeCategory.items.length / 3);
    const row1 = activeCategory.items.slice(0, Math.max(itemsPerRow, 1));
    const row2 = activeCategory.items.slice(itemsPerRow, itemsPerRow * 2);
    const row3 = activeCategory.items.slice(itemsPerRow * 2);

    return (
        <div className="max-w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center border-b border-gray-100/10 mb-16 gap-x-5 gap-y-4">
                    {PORTFOLIO_DATA.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`relative pb-4 text-sm font-bold uppercase tracking-wider transition-colors hover:text-white ${activeTab === idx ? 'text-gray-300' : 'text-gray-500'
                                }`}
                        >
                            {category.title}
                            {activeTab === idx && (
                                <>
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-[-1px] right-[-1px] h-[2px] bg-cta-gradient z-10"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                </>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sliding Portfolio Rows */}
            <HoverIcon
                size={90}
                className="flex-shrink-0"
            >
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-4"
                        >
                            {activeCategory.items.length > 0 ? (
                                <>
                                    <PortfolioRow items={row1.length > 0 ? row1 : activeCategory.items} onImageClick={onImageClick} direction="left" duration={35} />
                                    <PortfolioRow items={row2.length > 0 ? row2 : activeCategory.items} onImageClick={onImageClick} direction="right" duration={45} />
                                    <PortfolioRow items={row3.length > 0 ? row3 : activeCategory.items} onImageClick={onImageClick} direction="left" duration={40} />
                                </>
                            ) : (
                                <div className="flex items-center justify-center p-20 text-gray-600 font-bold uppercase tracking-widest border border-white/5 mx-6 rounded-[2rem]">
                                    Coming Soon
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </HoverIcon>
        </div>
    );
};

export default PortfolioTabs;

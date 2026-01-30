import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import HoverIcon from './HoverIcon';

const PortfolioCard: React.FC<{
  item: typeof PORTFOLIO[0];
  onClick: (imageUrl: string) => void;
}> = ({ item, onClick }) => {
  return (
    <HoverIcon
      size={90}
      className="flex-shrink-0"
    >
      <div
        onClick={() => onClick(item.imageUrl)}
        className="group relative overflow-hidden rounded-[14px] bg-transparent border border-white/10 transition-all duration-500 hover:border-white/30 w-[280px] md:w-[380px] h-[220px] md:h-[280px]"
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
      </div>
    </HoverIcon>
  );
};

const PortfolioRow: React.FC<{
  items: typeof PORTFOLIO;
  onImageClick: (imageUrl: string) => void;
  direction?: 'left' | 'right';
  duration?: number;
}> = ({ items, onImageClick, direction = 'left', duration = 30 }) => {
  const animateX =
    direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: animateX }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, idx) => (
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

interface PortfolioProps {
  onImageClick?: (imageUrl: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const row1 = PORTFOLIO.slice(0, 4);
  const row2 = PORTFOLIO.slice(4, 8);
  const row3 = PORTFOLIO.slice(8, 12);

  const handleImageClick = (url: string) => {
    onImageClick?.(url);
  };

  return (
    <section id="work" className="overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-6xl font-[900] mb-8 tracking-tighter text-white uppercase leading-[0.9]">
          Work We're Proud of
        </h2>
        <p className="text-gray-500 text-xl font-light">
          Explore how our creative work transforms concepts into engaging and
          influences action.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <PortfolioRow items={row1} onImageClick={handleImageClick} direction="left" duration={35} />
        <PortfolioRow items={row2} onImageClick={handleImageClick} direction="right" duration={45} />
        <PortfolioRow items={row3} onImageClick={handleImageClick} direction="left" duration={40} />
      </div>
    </section>
  );
};

export default Portfolio;

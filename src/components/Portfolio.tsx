
import React from 'react';
import { PORTFOLIO } from '../constants';

const PortfolioCard: React.FC<{ item: typeof PORTFOLIO[0] }> = ({ item }) => {
  return (
    <div 
      className="group cursor-pointer relative overflow-hidden rounded-[24px] bg-transparent border border-white/10 transition-all duration-500 hover:border-white/30"
      style={{ width: '380px', height: '280px', flexShrink: 0 }}
    >
      <img 
        src={item.imageUrl} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
        <p className="text-[11px] font-black text-gradient-brand uppercase tracking-[0.4em] mb-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {item.category}
        </p>
        <h4 className="text-2xl font-black text-white leading-tight translate-y-3 group-hover:translate-y-0 transition-all duration-500 tracking-tighter">
          {item.title}
        </h4>
      </div>
    </div>
  );
};

const PortfolioRow: React.FC<{ items: typeof PORTFOLIO, direction: 'left' | 'right' }> = ({ items, direction }) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  return (
    <div className="flex overflow-hidden py-4 -my-4 relative group">
      <div className={`flex gap-8 whitespace-nowrap ${animationClass}`}>
        <div className="flex gap-8">
          {items.map((item, idx) => (
            <PortfolioCard key={`${item.id}-${idx}`} item={item} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8">
          {items.map((item, idx) => (
            <PortfolioCard key={`${item.id}-dup-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const row1 = [...PORTFOLIO].slice(0, 4);
  const row2 = [...PORTFOLIO].slice(4, 8);
  const row3 = [...PORTFOLIO].slice(8, 12);

  return (
    <section id="work" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-5xl md:text-8xl font-[900] mb-8 tracking-tighter uppercase">Our Work</h2>
        <p className="text-gray-500 text-xl font-light">Explore Our Portfolio Of Impactful Designs</p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <PortfolioRow items={row1} direction="left" />
        <PortfolioRow items={row2} direction="right" />
        <PortfolioRow items={row3} direction="left" />
      </div>
    </section>
  );
};

export default Portfolio;

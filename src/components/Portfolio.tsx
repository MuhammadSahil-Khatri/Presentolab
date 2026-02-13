
import React from 'react';
import PortfolioTabs from './PortfolioTabs';

interface PortfolioProps {
  onImageClick?: (imageUrl: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const handleImageClick = (url: string) => {
    onImageClick?.(url);
  };

  return (
    <section id="work" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-[900] mb-8 tracking-tighter text-white uppercase leading-tight">
          Work We're Proud of
        </h2>
        <p className="text-gray-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          Explore how our creative work transforms concepts into engaging visuals and
          influences stakeholder action across industries.
        </p>
      </div>

      {/* Reusing the dynamic categorized tabs from the Work page */}
      <PortfolioTabs onImageClick={handleImageClick} />
    </section>
  );
};

export default Portfolio;

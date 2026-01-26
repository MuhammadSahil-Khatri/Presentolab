
import React from 'react';

interface LogoProps {
  scale?: number;
}

const Logo: React.FC<LogoProps> = ({ scale = 1 }) => {
  return (
    <div
      className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:opacity-90"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'left center'
      }}
    >
      {/* Brand Icon: The Stripes Image */}
      <div className="flex-shrink-0">
        <img
          src="logo.png"
          alt="PresentoLab Icon"
          className="h-[3rem] w-auto block object-contain"
          onError={(e) => {
            // Minimal fallback if logo.png is missing - now using brand gradient
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'w-4 h-[3rem] bg-line-gradient-v';
            target.parentNode?.insertBefore(fallback, target);
          }}
        />
      </div>

      {/* Brand Name: Stacked typography */}
      <div className="flex flex-col leading-[0.85] font-[100] text-[1.6rem] tracking-[-0.04em] text-white uppercase select-none">
        <span className="block">PRES</span>
        <span className="block">ENTO</span>
        <div className="flex items-baseline">
          <span>LAB</span>
          <span className="ml-1 w-1.5 h-1.5 bg-white inline-block mb-[0.15em]"></span>
        </div>
      </div>
    </div>
  );
};

export default Logo;

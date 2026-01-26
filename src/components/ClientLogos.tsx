import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const ClientLogos: React.FC = () => {
    return (
        <section className="bg-black mt-10 md:mb-20 mb-16 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden group">
                {/* Container for the sliding items - Seamless Loop Fix */}
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {/* First Set */}
                    <div className="flex flex-shrink-0 items-center gap-16 md:gap-32 pr-16 md:pr-32">
                        {CLIENT_LOGOS.map((logo, idx) => (
                            <div key={`a-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="w-28 md:w-36 object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate Set */}
                    <div className="flex flex-shrink-0 items-center gap-16 md:gap-32 pr-16 md:pr-32">
                        {CLIENT_LOGOS.map((logo, idx) => (
                            <div key={`b-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="w-28 md:w-36 object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second container for seamless infinite scroll (if needed for very wide screens, but standard marquee usually just needs enough duplicates in one flex container. Let's stick to the standard 'double set in one moving track' method, but if the track isn't wide enough it breaks.
        Actually, the standard CSS marquee technique usually involves TWO identical containers moving side-by-side, or one giant container moving -50%.
        Let's use the 'two copies' mapping inside ONE container that translates -50%. */}
            </div>

            <style>{`
        @keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 5s linear infinite;
    min-width: 100%;
    /* Ensure it takes up space */
    display: flex;
}

@media (min-width: 768px) {
    .animate-marquee {
        animation: marquee 15s linear infinite;
    }
}

/* Pause on hover if desired, usually expected */
/* .group:hover .animate-marquee { animation-play-state: paused; } */
      `}</style>
        </section>
    );
};

export default ClientLogos;

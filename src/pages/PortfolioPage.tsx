
import React, { useEffect } from 'react';
import PortfolioTabs from '../components/PortfolioTabs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

interface PortfolioPageProps {
    onContactClick: () => void;
    onImageClick: (imageUrl: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onContactClick, onImageClick }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="">
            {/* Intro / Hero Section */}
            <section className="relative overflow-hidden max-w-6xl mx-auto px-6 text-center z-20 pt-56">
                {/* Ambient background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-[#BE00FF]/5 rounded-full blur-[160px] opacity-70"></div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5C00]/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <h1 className="text-5xl md:text-9xl font-[900] tracking-tighter leading-tight mb-8 md:mb-12 uppercase">
                        Our Work.<br />
                        <span className="text-gradient-brand">Real Impact.</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                        We transform complex ideas into high-impact narratives and visuals.
                        Explore our portfolio to see how we help startups and global brands accelerate growth.
                    </p>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={onContactClick}
                            aria-label="Contact us"
                            className="
              group relative flex items-center
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              active:scale-[0.98] transition-transform duration-200
            "
                        >
                            {/* Text pill */}
                            <span
                                className="
                bg-cta-gradient text-white
                h-11 px-6
                rounded-full
                flex items-center justify-center
                font-semibold text-sm
                relative z-20
                shadow-md
                transition-all duration-300
                group-hover:brightness-110
              "
                            >
                                Let’s talk
                            </span>

                            {/* Icon pill */}
                            <span
                                className="
                bg-cta-gradient
                h-11 w-11
                rounded-full
                flex items-center justify-center
                relative z-10
                ml-[-0.75rem]
                transition-all duration-300 ease-out
                group-hover:ml-2
                group-hover:brightness-110
              "
                            >
                                <span
                                    className="
                  w-7 h-7
                  rounded-full
                  bg-black/5
                  flex items-center justify-center
                  transition-colors
                  group-hover:bg-black/10
                "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <div className="md:py-20 py-16 relative">
                <PortfolioTabs onImageClick={onImageClick} />
            </div>

            {/* Testimonials Section (Client Stories) */}
            <Testimonials />

            {/* CTA Section */}
            <div className="pt-20">
                <CTA onContactClick={onContactClick} />
            </div>
        </div>
    );
};

export default PortfolioPage;

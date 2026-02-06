
import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import HomePricing from '../components/HomePricing';
import CTA from '../components/CTA';

interface HomeProps {
    openModal: () => void;
    openTeamModal: () => void;
    openServicesModal: (index?: number) => void;
    openPortfolioModal: (imageUrl: string) => void;
}

const Home: React.FC<HomeProps> = ({
    openModal,
    openTeamModal,
    openServicesModal,
    openPortfolioModal
}) => {
    return (
        <>
            <Hero onContactClick={openModal} />
            <div className="my-10">
                <ClientLogos />
            </div>
            <div className="py-10">
                <About onMeetTeamClick={openTeamModal} />
            </div>
            <div className="py-10">
                <Services onSeeAllClick={openServicesModal} />
            </div>
            <div className="py-10">
                <Portfolio onImageClick={openPortfolioModal} />
            </div>
            <div className="py-10">
                <Testimonials />
            </div>
            <div className="">
                <Process />
            </div>
            <HomePricing onContactClick={openModal} />
            <CTA onContactClick={openModal} />
        </>
    );
};

export default Home;

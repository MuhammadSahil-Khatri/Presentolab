
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import TeamModal from './components/TeamModal';
import ServicesModal from './components/ServicesModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openTeamModal = () => setIsTeamModalOpen(true);
  const closeTeamModal = () => setIsTeamModalOpen(false);

  const openServicesModal = () => setIsServicesModalOpen(true);
  const closeServicesModal = () => setIsServicesModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header onContactClick={openModal} />
      <main>
        <Hero onContactClick={openModal} />
        <About onMeetTeamClick={openTeamModal} />
        <Services onSeeAllClick={openServicesModal} />
        <Portfolio />
        <Testimonials />
        <Process />
        <CTA onContactClick={openModal} />
      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <TeamModal isOpen={isTeamModalOpen} onClose={closeTeamModal} />
      <ServicesModal isOpen={isServicesModalOpen} onClose={closeServicesModal} onGetStarted={openModal} />
    </div>
  );
};

export default App;

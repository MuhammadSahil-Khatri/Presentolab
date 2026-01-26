
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
import ClientLogos from './components/ClientLogos';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openTeamModal = () => setIsTeamModalOpen(true);
  const closeTeamModal = () => setIsTeamModalOpen(false);

  const openServicesModal = (index: number = 0) => {
    setActiveServiceIndex(index);
    setIsServicesModalOpen(true);
  };
  const closeServicesModal = () => setIsServicesModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header onContactClick={openModal} />
      <main>
        <Hero onContactClick={openModal} />
        <ClientLogos />
        <About onMeetTeamClick={openTeamModal} />
        <Services onSeeAllClick={openServicesModal} />
        <Portfolio />
        <Testimonials />
        <Process />
        <CTA onContactClick={openModal} />
      </main>
      <Footer onServiceClick={openServicesModal} />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <TeamModal isOpen={isTeamModalOpen} onClose={closeTeamModal} />
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={closeServicesModal}
        onGetStarted={openModal}
        initialIndex={activeServiceIndex}
      />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#09090b',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            fontSize: '14px',
            padding: '16px 24px',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
};

export default App;

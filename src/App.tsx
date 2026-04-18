
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import TeamModal from './components/TeamModal';
import ServicesModal from './components/ServicesModal';
import PortfolioModal from './components/PortfolioModal';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import Loader from './components/Loader';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutCancel from './pages/CheckoutCancel';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds to experience the loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openTeamModal = () => setIsTeamModalOpen(true);
  const closeTeamModal = () => setIsTeamModalOpen(false);

  const openServicesModal = (index: number = 0) => {
    setActiveServiceIndex(index);
    setIsServicesModalOpen(true);
  };
  const closeServicesModal = () => setIsServicesModalOpen(false);

  const openPortfolioModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsPortfolioModalOpen(true);
  };
  const closePortfolioModal = () => setIsPortfolioModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-l from-black/60 via-black/50 to-black/60 text-white selection:bg-purple-500/30">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-md ">
          <Loader size={100} spacing={8} duration={1.2} />
        </div>
      )}
      {!isLoading && (
        <>
          <Header onContactClick={openModal} />
          <main>
            <Routes>
              <Route path="/" element={
                <Home
                  openModal={openModal}
                  openTeamModal={openTeamModal}
                  openServicesModal={openServicesModal}
                  openPortfolioModal={openPortfolioModal}
                />
              } />
              <Route path="/pricing" element={<PricingPage onContactClick={openModal} />} />
              <Route path="/work" element={<PortfolioPage onContactClick={openModal} onImageClick={openPortfolioModal} />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/cancel" element={<CheckoutCancel />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage onContactClick={openModal} />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer onServiceClick={openServicesModal} />
        </>
      )}

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <TeamModal isOpen={isTeamModalOpen} onClose={closeTeamModal} />
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={closeServicesModal}
        onGetStarted={openModal}
        initialIndex={activeServiceIndex}
      />
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={closePortfolioModal}
        imageUrl={selectedImageUrl}
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

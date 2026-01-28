'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/common/Header';
import WelcomePopup from './WelcomePopup';
import HeroSection from './HeroSection';
import KeyMetrics from './KeyMetrics';

// Lazy load des composants non critiques (below the fold)
const BrandMessages = dynamic(() => import('./BrandMessages'), {
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />,
});
const FeaturedProjects = dynamic(() => import('./FeaturedProjects'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
});
const ClientLogos = dynamic(() => import('./ClientLogos'), {
  loading: () => <div className="h-48 bg-muted animate-pulse rounded-lg" />,
});
const CTASection = dynamic(() => import('./CTASection'), {
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-32 bg-muted animate-pulse rounded-lg" />,
});

const HomepageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const hasVisited = localStorage.getItem('vitrine_visited');
    if (!hasVisited) {
      setShowWelcomePopup(true);
      localStorage.setItem('vitrine_visited', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShowWelcomePopup(false);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-foreground font-body">Chargement de VITRINE CONSULTING...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {showWelcomePopup && <WelcomePopup onClose={handleClosePopup} />}
      
      <main className="pt-16">
        <HeroSection />
        <KeyMetrics />
        <BrandMessages />
        <FeaturedProjects />
        <ClientLogos />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomepageInteractive;
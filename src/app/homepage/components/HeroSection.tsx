'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  };

  useEffect(() => {
    if (!isHydrated) return;
    playVideo();
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className="relative min-h-[70vh] bg-secondary flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section className="relative min-h-[70vh] h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Vidéo de fond */}
      <video
        ref={videoRef}
        src="/assets/videos/marie.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        loading="lazy"
        onLoadedData={playVideo}
        onCanPlay={playVideo}
      />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />

      {/* Contenu hero */}
      <div className="relative z-10 text-center space-y-8 max-w-5xl px-6 py-24 animate-fadeInUp text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
          {lang === 'fr' && (
            <>
              Transformons votre communication en <span className="text-brand-green">impact culturel</span>
            </>
          )}
          {lang === 'en' && (
            <>
              Let’s turn your communication into <span className="text-brand-green">cultural impact</span>
            </>
          )}
          {lang === 'de' && (
            <>
              Wir verwandeln Ihre Kommunikation in <span className="text-brand-green">kulturelle Wirkung</span>
            </>
          )}
        </h1>

        <p className="text-xl md:text-2xl text-white/95 font-body max-w-3xl mx-auto leading-relaxed">
          {lang === 'fr' &&
            "Où la stratégie rencontre la créativité. Votre vision, amplifiée par notre expertise dans le paysage médiatique camerounais."}
          {lang === 'en' &&
            'Where strategy meets creativity. Your vision, amplified by our expertise in the Cameroonian media landscape.'}
          {lang === 'de' &&
            'Wo Strategie auf Kreativität trifft. Ihre Vision, verstärkt durch unsere Expertise in der kamerunischen Medienlandschaft.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/contact"
            className="px-10 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-brand hover:shadow-elevated transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>
              {lang === 'fr' && 'Consultation Gratuite'}
              {lang === 'en' && 'Free Consultation'}
              {lang === 'de' && 'Kostenlose Beratung'}
            </span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
          <Link
            href="/projects"
            className="px-10 py-4 border-2 border-white text-white rounded-lg text-lg font-cta font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="PlayIcon" size={20} />
            <span>
              {lang === 'fr' && 'Voir nos réalisations'}
              {lang === 'en' && 'See our work'}
              {lang === 'de' && 'Unsere Projekte ansehen'}
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Icon name="ChevronDownIcon" size={32} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

const IntroVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((p) => !p);
  };

  return (
    <section className="relative w-full aspect-video md:aspect-[21/9] bg-secondary overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlay}
      >
        <source
          src="/assets/videos/intro-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

      <button
        onClick={togglePlay}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-elevated hover:bg-conversion-accent transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Pause' : 'Lecture'}
      >
        {isPlaying ? (
          <Icon name="PauseIcon" size={28} />
        ) : (
          <Icon name="PlayIcon" size={28} className="ml-1" />
        )}
      </button>

      <p className="absolute bottom-6 left-6 text-sm text-primary-foreground/80 font-body">
        {lang === 'en' && "Presentation of the agency and our projects"}
        {lang === 'de' && 'Präsentation der Agentur und unserer Projekte'}
        {lang === 'fr' && "Présentation de l'agence et de nos projets"}
      </p>
    </section>
  );
};

export default IntroVideoSection;

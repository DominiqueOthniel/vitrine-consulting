'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ServicesVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.play().catch(() => {});
    else v.pause();
  }, [isPlaying]);

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-secondary aspect-video relative">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          onClick={() => setIsPlaying((p) => !p)}
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
        >
          <source src="https://cdn.pixabay.com/video/2023/05/15/162345-826844506_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated hover:bg-conversion-accent transition-all flex items-center justify-center"
          aria-label={isPlaying ? 'Pause' : 'Lecture'}
        >
          {isPlaying ? <Icon name="PauseIcon" size={24} /> : <Icon name="PlayIcon" size={24} className="ml-1" />}
        </button>
        <p className="absolute bottom-6 left-6 text-sm text-primary-foreground/90 font-body">
          Équipe, méthodologie & coulisses
        </p>
      </div>
    </section>
  );
}

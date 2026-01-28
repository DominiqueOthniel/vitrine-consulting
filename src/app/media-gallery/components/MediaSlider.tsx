'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  title: string;
  project: string;
  thumbnail: string;
  alt: string;
  description: string;
}

interface MediaSliderProps {
  items: MediaItem[];
  onItemClick?: (item: MediaItem) => void;
}

export default function MediaSlider({ items, onItemClick }: MediaSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;

  const current = items[index % items.length];
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-headline font-bold text-foreground mb-4">Slider — à la une</h2>
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated bg-muted aspect-[21/9]">
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center hover:bg-primary transition-all"
          aria-label="Précédent"
        >
          <Icon name="ChevronLeftIcon" size={24} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center hover:bg-primary transition-all"
          aria-label="Suivant"
        >
          <Icon name="ChevronRightIcon" size={24} />
        </button>
        <button
          type="button"
          onClick={() => onItemClick?.(current)}
          className="absolute inset-0 z-0 block w-full h-full"
        >
          <img
            src={current.thumbnail}
            alt={current.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-cta font-semibold mb-2">
              {current.project} · {current.type === 'video' ? 'Vidéo' : 'Photo'}
            </span>
            <p className="text-lg md:text-xl font-headline font-bold text-white">{current.title}</p>
            <p className="text-sm text-white/80 font-body mt-1 line-clamp-2">{current.description}</p>
          </div>
        </button>
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          {items.slice(0, 8).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === index % items.length ? 'bg-primary scale-125' : 'bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

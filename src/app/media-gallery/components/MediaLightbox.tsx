'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  title: string;
  category: string;
  project: string;
  thumbnail: string;
  alt: string;
  fullImage?: string;
  videoUrl?: string;
  date: string;
  views: number;
  likes: number;
  description: string;
}

interface MediaLightboxProps {
  item: MediaItem | null;
  allItems: MediaItem[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const MediaLightbox = ({ item, allItems, onClose, onNavigate }: MediaLightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = allItems.findIndex(i => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allItems.length - 1;

  const handleShare = (platform: string) => {
    const shareUrl = window.location.href;
    const shareText = `Découvrez ${item.title} - VITRINE CONSULTING`;
    
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
    setIsSharing(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = item.fullImage || item.thumbnail;
    link.download = `${item.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-foreground/80 to-transparent">
        <div className="flex items-center justify-between p-4 lg:p-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-colors duration-200"
              aria-label="Fermer"
            >
              <Icon name="XMarkIcon" size={24} />
            </button>
            <div className="hidden lg:block">
              <h2 className="text-lg font-cta font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-sm text-white/70 font-body">
                {item.project} • {item.date}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Zoom Toggle */}
            {item.type === 'photo' && (
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-colors duration-200"
                aria-label={isZoomed ? 'Dézoomer' : 'Zoomer'}
              >
                <Icon name={isZoomed ? 'MagnifyingGlassMinusIcon' : 'MagnifyingGlassPlusIcon'} size={20} />
              </button>
            )}

            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setIsSharing(!isSharing)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-colors duration-200"
                aria-label="Partager"
              >
                <Icon name="ShareIcon" size={20} />
              </button>

              {isSharing && (
                <div className="absolute top-12 right-0 w-48 bg-card rounded-lg shadow-elevated p-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full px-4 py-2 text-left text-sm font-body text-foreground hover:bg-primary/5 rounded-md transition-colors duration-200"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full px-4 py-2 text-left text-sm font-body text-foreground hover:bg-primary/5 rounded-md transition-colors duration-200"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full px-4 py-2 text-left text-sm font-body text-foreground hover:bg-primary/5 rounded-md transition-colors duration-200"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="w-full px-4 py-2 text-left text-sm font-body text-foreground hover:bg-primary/5 rounded-md transition-colors duration-200"
                  >
                    Email
                  </button>
                </div>
              )}
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-colors duration-200"
              aria-label="Télécharger"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {hasPrev && (
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-all duration-200 z-10"
          aria-label="Média précédent"
        >
          <Icon name="ChevronLeftIcon" size={28} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 text-white transition-all duration-200 z-10"
          aria-label="Média suivant"
        >
          <Icon name="ChevronRightIcon" size={28} />
        </button>
      )}

      {/* Media Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-20">
        {item.type === 'photo' ? (
          <div className={`relative max-w-full max-h-full transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}>
            <AppImage
              src={item.fullImage || item.thumbnail}
              alt={item.alt}
              className="max-w-full max-h-[calc(100vh-8rem)] object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              src={item.videoUrl}
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={item.title}
            />
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent">
        <div className="p-4 lg:p-6">
          <div className="max-w-3xl mx-auto">
            <div className="lg:hidden mb-3">
              <h2 className="text-lg font-cta font-semibold text-white mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-white/70 font-body">
                {item.project} • {item.date}
              </p>
            </div>
            
            <p className="text-white/90 font-body text-sm lg:text-base mb-4">
              {item.description}
            </p>
            
            <div className="flex items-center space-x-6 text-white/80 text-sm font-body">
              <span className="flex items-center space-x-2">
                <Icon name="EyeIcon" size={18} />
                <span>{item.views.toLocaleString('fr-FR')} vues</span>
              </span>
              <span className="flex items-center space-x-2">
                <Icon name="HeartIcon" size={18} />
                <span>{item.likes.toLocaleString('fr-FR')} j'aime</span>
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-cta font-semibold">
                {item.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLightbox;
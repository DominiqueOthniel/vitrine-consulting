'use client';

import { useState } from 'react';
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

interface MediaGridProps {
  items: MediaItem[];
  onItemClick: (item: MediaItem) => void;
}

const MediaGrid = ({ items, onItemClick }: MediaGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="PhotoIcon" size={48} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-headline font-bold text-foreground mb-2">
          Aucun média trouvé
        </h3>
        <p className="text-muted-foreground text-center max-w-md font-body">
          Essayez de modifier vos filtres pour voir plus de contenu
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative bg-card rounded-lg overflow-hidden shadow-subtle hover:shadow-brand transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onItemClick(item)}
        >
          {/* Media Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <AppImage
              src={item.thumbnail}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Media Type Badge */}
            <div className="absolute top-3 right-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full flex items-center space-x-1.5">
              <Icon 
                name={item.type === 'video' ? 'PlayCircleIcon' : 'PhotoIcon'} 
                size={16} 
                className="text-primary"
              />
              <span className="text-xs font-cta font-semibold text-foreground uppercase">
                {item.type === 'video' ? 'Vidéo' : 'Photo'}
              </span>
            </div>

            {/* Hover Overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-opacity duration-300 ${
                hoveredId === item.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center space-x-4 text-sm font-body mb-2">
                  <span className="flex items-center space-x-1">
                    <Icon name="EyeIcon" size={16} />
                    <span>{item.views.toLocaleString('fr-FR')}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="HeartIcon" size={16} />
                    <span>{item.likes.toLocaleString('fr-FR')}</span>
                  </span>
                </div>
                <p className="text-xs opacity-90 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>

          {/* Media Info */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-cta font-semibold text-foreground line-clamp-1 flex-1">
                {item.title}
              </h3>
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground font-body">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                {item.project}
              </span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
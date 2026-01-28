'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  thumbnailAlt: string;
  duration: string;
  views: string;
}

interface CultureVideoGalleryProps {
  videos: Video[];
  categories: string[];
}

export default function CultureVideoGallery({ videos, categories }: CultureVideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === 'Tous'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Culture & Coulisses
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Plongez dans l'univers VITRINE CONSULTING à travers nos vidéos exclusives qui capturent l'essence de notre culture d'entreprise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-cta font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 bg-card border border-border">
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={video.thumbnail}
                    alt={video.thumbnailAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/60 transition-colors duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Icon name="PlayIcon" size={28} className="text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 backdrop-blur-sm rounded text-xs text-white font-body">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-cta font-medium rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-body flex items-center space-x-1">
                      <Icon name="EyeIcon" size={14} />
                      <span>{video.views}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-headline font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-foreground/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative bg-card rounded-2xl max-w-4xl w-full overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-foreground/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-foreground transition-colors duration-200"
                aria-label="Fermer la vidéo"
              >
                <Icon name="XMarkIcon" size={24} className="text-white" />
              </button>

              <div className="aspect-video bg-foreground">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="PlayCircleIcon" size={80} className="text-primary" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-cta font-medium rounded-full">
                    {selectedVideo.category}
                  </span>
                  <span className="text-sm text-muted-foreground font-body flex items-center space-x-2">
                    <Icon name="EyeIcon" size={16} />
                    <span>{selectedVideo.views}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
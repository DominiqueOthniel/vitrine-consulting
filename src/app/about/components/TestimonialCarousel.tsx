'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  imageAlt: string;
  videoThumbnail?: string;
  videoThumbnailAlt?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              Des témoignages authentiques qui reflètent notre engagement envers l'excellence et la satisfaction client.
            </p>
          </div>
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Chargement...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Des témoignages authentiques qui reflètent notre engagement envers l'excellence et la satisfaction client.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-auto">
                {currentTestimonial.videoThumbnail ? (
                  <div className="relative w-full h-full group cursor-pointer">
                    <AppImage
                      src={currentTestimonial.videoThumbnail}
                      alt={currentTestimonial.videoThumbnailAlt || `Témoignage vidéo de ${currentTestimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/60 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Icon name="PlayIcon" size={36} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.imageAlt}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      name="StarIcon"
                      variant={index < currentTestimonial.rating ? 'solid' : 'outline'}
                      size={20}
                      className={index < currentTestimonial.rating ? 'text-warning' : 'text-muted-foreground'}
                    />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-foreground font-body leading-relaxed mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-semibold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {currentTestimonial.role} • {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-border"
            aria-label="Témoignage précédent"
          >
            <Icon name="ChevronLeftIcon" size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-border"
            aria-label="Témoignage suivant"
          >
            <Icon name="ChevronRightIcon" size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
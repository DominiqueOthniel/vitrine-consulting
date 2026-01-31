'use client';

import React, { useState, useEffect, useMemo } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
  videoUrl?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!isHydrated) {
    return (
      <section className="bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              {t.clientsPartners.testimonialsTitle}
            </h2>
            <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              {t.clientsPartners.testimonialsSubtitle}
            </p>
          </div>
          <div className="bg-background rounded-2xl shadow-elevated p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                  <AppImage
                    src={testimonials[0].image}
                    alt={testimonials[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      variant="solid"
                      size={20}
                      className={i < testimonials[0].rating ? 'text-warning' : 'text-muted'}
                    />
                  ))}
                </div>
                <p className="text-lg lg:text-xl font-body text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[0].quote}"
                </p>
                <div>
                  <p className="text-base font-cta font-semibold text-foreground">
                    {testimonials[0].name}
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    {testimonials[0].position}, {testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            {t.clientsPartners.testimonialsTitle}
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            {t.clientsPartners.testimonialsSubtitle}
          </p>
        </div>

        <div className="relative">
          <div className="bg-background rounded-2xl shadow-elevated p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      variant="solid"
                      size={20}
                      className={i < currentTestimonial.rating ? 'text-warning' : 'text-muted'}
                    />
                  ))}
                </div>

                <p className="text-lg lg:text-xl font-body text-foreground leading-relaxed mb-6 italic">
                  "{currentTestimonial.quote}"
                </p>

                <div>
                  <p className="text-base font-cta font-semibold text-foreground">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </p>
                </div>

                {currentTestimonial.videoUrl && (
                  <div className="mt-6">
                    <a
                      href={currentTestimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-conversion-accent transition-colors font-cta font-semibold"
                    >
                      <Icon name="PlayCircleIcon" size={24} variant="solid" />
                      <span>{t.clientsPartners.viewTestimonialVideo}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-primary text-white rounded-full shadow-brand hover:bg-conversion-accent transition-all duration-300 flex items-center justify-center"
            aria-label={(t.clientsPartners as { prevTestimonialAria?: string }).prevTestimonialAria ?? 'Témoignage précédent'}
          >
            <Icon name="ChevronLeftIcon" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-primary text-white rounded-full shadow-brand hover:bg-conversion-accent transition-all duration-300 flex items-center justify-center"
            aria-label={(t.clientsPartners as { nextTestimonialAria?: string }).nextTestimonialAria ?? 'Témoignage suivant'}
          >
            <Icon name="ChevronRightIcon" size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
              }`}
              aria-label={((t.clientsPartners as { goToTestimonialAria?: string }).goToTestimonialAria ?? 'Aller au témoignage {n}').replace('{n}', String(index + 1))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
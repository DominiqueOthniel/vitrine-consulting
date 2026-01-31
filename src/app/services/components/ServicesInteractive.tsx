'use client';

import React, { useMemo } from 'react';
import ServiceCard from './ServiceCard';
import MethodologyInfographic from './MethodologyInfographic';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
  methodology: string[];
  caseStudy: {
    client: string;
    result: string;
    metric: string;
  };
}

interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

const CARD_CONFIG = [
  { icon: 'ChartBarIcon', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_183be303d-1766470449787.png' },
  { icon: 'MegaphoneIcon', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12681ab67-1764666699439.png' },
  { icon: 'VideoCameraIcon', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cbf2955b-1764705968076.png' },
  { icon: 'ComputerDesktopIcon', image: 'https://images.unsplash.com/photo-1690237571133-0e1ac3024155' },
  { icon: 'CalendarDaysIcon', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16fb3ceb8-1769245706130.png' },
  { icon: 'RocketLaunchIcon', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692' },
] as const;

const METHODOLOGY_ICONS = ['MagnifyingGlassIcon', 'LightBulbIcon', 'PaintBrushIcon', 'RocketLaunchIcon'] as const;

const ServicesInteractive: React.FC = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);

  const services: Service[] = useMemo(() => {
    const cards = (t.services as { cards?: typeof translations.fr.services.cards }).cards ?? translations.fr.services.cards;
    return cards.map((card, i) => ({
      id: i + 1,
      title: card.title,
      description: card.description,
      icon: CARD_CONFIG[i]?.icon ?? 'SparklesIcon',
      image: CARD_CONFIG[i]?.image ?? '',
      alt: card.title,
      features: [...card.features],
      methodology: [...card.methodology],
      caseStudy: card.caseStudy,
    }));
  }, [t]);

  const methodologySteps: MethodologyStep[] = useMemo(() => {
    const steps = (t.services as { methodologySteps?: typeof translations.fr.services.methodologySteps }).methodologySteps ?? translations.fr.services.methodologySteps;
    return steps.map((step, i) => ({
      number: i + 1,
      title: step.title,
      description: step.description,
      icon: METHODOLOGY_ICONS[i] ?? 'ChartBarIcon',
      duration: step.duration,
    }));
  }, [t]);

  return (
    <div className="space-y-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            {t.services.sectionPillars}
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            {t.services.sectionPillarsDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) =>
            <ServiceCard
              key={service.id}
              service={service}
              onConsultation={() => {}}
            />
          )}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MethodologyInfographic
            steps={methodologySteps}
            title={t.services.methodologyTitle}
            subtitle={t.services.methodologySubtitle}
            downloadLabel={t.services.downloadGuide}
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesInteractive;

'use client';

import React, { useMemo } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

interface SuccessMetric {
  label: string;
  value: string;
}

interface SuccessStory {
  id: number;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  alt: string;
  metrics: SuccessMetric[];
}

interface SuccessStoriesSectionProps {
  stories: SuccessStory[];
}

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ stories }) => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            {t.clientsPartners.successStoriesTitle}
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            {t.clientsPartners.successStoriesSubtitle}
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated h-80 lg:h-96">
                  <AppImage
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-cta font-semibold mb-4">
                    {story.industry}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4">
                    {story.clientName}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                      <h4 className="text-sm font-cta font-semibold text-muted-foreground uppercase tracking-wide">
                        {t.clientsPartners.challengeLabel}
                      </h4>
                    </div>
                    <p className="text-base font-body text-foreground leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="LightBulbIcon" size={20} className="text-accent" />
                      <h4 className="text-sm font-cta font-semibold text-muted-foreground uppercase tracking-wide">
                        {t.clientsPartners.solutionLabel}
                      </h4>
                    </div>
                    <p className="text-base font-body text-foreground leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-success" />
                      <h4 className="text-sm font-cta font-semibold text-muted-foreground uppercase tracking-wide">
                        {t.clientsPartners.resultsLabel}
                      </h4>
                    </div>
                    <p className="text-base font-body text-foreground leading-relaxed mb-4">
                      {story.results}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                          <div className="text-2xl font-headline font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm font-body text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

const CTASection: React.FC = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-brand-blue py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6">
          {t.projects.ctaTitle}
        </h2>
        <p className="text-lg lg:text-xl font-body text-white/90 mb-8 leading-relaxed">
          {t.clientsPartners.ctaText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg text-base font-cta font-semibold hover:bg-background transition-all duration-300 shadow-brand transform hover:scale-105"
          >
            <span>{t.projects.freeConsultation}</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-base font-cta font-semibold hover:bg-white hover:text-primary transition-all duration-300"
          >
            <span>{t.clientsPartners.seeOurProjects}</span>
            <Icon name="RocketLaunchIcon" size={20} />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">{t.clientsPartners.ctaFreeConsultation}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">{t.clientsPartners.ctaResponse24h}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">{t.clientsPartners.ctaNoCommitment}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
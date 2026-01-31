'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

export default function CTASection() {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-conversion-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-headline font-bold text-white mb-6">
            {t.projects.ctaTitle}
          </h2>
          <p className="text-lg lg:text-xl text-white/90 font-body leading-relaxed mb-10">
            {t.projects.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-lg text-lg font-cta font-semibold hover:bg-background transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>{t.projects.freeConsultation}</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg text-lg font-cta font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{t.about.seeOurProjects}</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">200+</div>
              <p className="text-sm text-white/80 font-body">Projets Réussis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">98%</div>
              <p className="text-sm text-white/80 font-body">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">15+</div>
              <p className="text-sm text-white/80 font-body">Années d'Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ProjectsPageShell({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary via-conversion-accent to-brand-green text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="SparklesIcon" size={20} />
              <span className="text-sm font-cta font-semibold">{t.projects.badge}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 leading-tight">
              {t.projects.heroTitle}
            </h1>
            <p className="text-xl font-body opacity-90 mb-8 leading-relaxed">
              {t.projects.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-primary rounded-md text-base font-cta font-semibold hover:bg-gray-100 transition-all duration-300 shadow-brand hover:scale-105 flex items-center gap-2">
                <span>{t.projects.exploreProjects}</span>
                <Icon name="ArrowDownIcon" size={20} />
              </a>
              <a href="#stats" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md text-base font-cta font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <span>{t.projects.seeStats}</span>
                <Icon name="ChartBarIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="py-20 bg-gradient-to-br from-secondary via-brand-dark to-secondary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="RocketLaunchIcon" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">{t.projects.ctaTitle}</h2>
            <p className="text-xl font-body opacity-90 mb-8 leading-relaxed">
              {t.projects.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-md text-base font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-brand hover:scale-105 flex items-center gap-2">
                <span>{t.projects.freeConsultation}</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md text-base font-cta font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <span>{t.projects.discoverServices}</span>
                <Icon name="SparklesIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-muted-foreground text-center md:text-left">
              {t.common.copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                {t.common.privacy}
              </Link>
              <Link href="/" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                {t.common.legal}
              </Link>
              <Link href="/contact" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                {t.common.contact}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

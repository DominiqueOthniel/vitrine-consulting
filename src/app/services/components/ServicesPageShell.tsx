'use client';

import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export default function ServicesPageShell({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary via-accent to-brand-blue text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-cta font-semibold uppercase tracking-wider text-white/90 mb-4">
              {t.services.badge}
            </p>
            <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
              {t.services.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl font-body text-white/90 leading-relaxed max-w-3xl">
              {t.services.heroSubtitle}
            </p>
          </div>
        </div>
      </section>
      {children}
      <section className="bg-gradient-to-r from-primary to-accent py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6">
            {t.services.ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-cta font-semibold hover:bg-background"
            >
              {t.common.takeContact}
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-cta font-semibold hover:bg-white hover:text-primary"
            >
              {t.common.seeProjects}
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.common.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              {t.common.legal}
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              {t.common.privacy}
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              {t.common.contact}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

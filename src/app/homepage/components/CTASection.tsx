'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

const CTASection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="h-64 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-conversion-accent to-brand-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-4">
            <Icon name="RocketLaunchIcon" size={40} className="text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground leading-tight">
            {lang === 'fr' && 'Contactez-nous pour booster votre visibilité'}
            {lang === 'en' && 'Contact us to boost your visibility'}
            {lang === 'de' && 'Kontaktieren Sie uns, um Ihre Sichtbarkeit zu steigern'}
          </h2>

          <p className="text-xl text-primary-foreground/90 font-body max-w-2xl mx-auto leading-relaxed">
            {lang === 'fr' &&
              "Bénéficiez d'une consultation gratuite. Réponse sous 24h, sans engagement."}
            {lang === 'en' &&
              'Get a free consultation. Response within 24 hours, no obligation.'}
            {lang === 'de' &&
              'Profitieren Sie von einer kostenlosen Beratung. Antwort innerhalb von 24 Stunden, ohne Verpflichtung.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary-foreground text-primary rounded-lg text-lg font-cta font-semibold hover:bg-background transition-all duration-300 shadow-elevated hover:shadow-brand transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Icon name="CalendarIcon" size={24} />
              <span>
                {lang === 'fr' && 'Prenez rendez-vous avec notre équipe'}
                {lang === 'en' && 'Book a meeting with our team'}
                {lang === 'de' && 'Vereinbaren Sie einen Termin mit unserem Team'}
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg text-lg font-cta font-semibold hover:bg-primary-foreground/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>
                {lang === 'fr' && 'Nous contacter'}
                {lang === 'en' && 'Contact us'}
                {lang === 'de' && 'Kontakt aufnehmen'}
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-headline font-bold text-primary-foreground mb-2">24h</div>
              <p className="text-sm text-primary-foreground/80 font-body">
                {lang === 'fr' && 'Réponse garantie'}
                {lang === 'en' && 'Guaranteed response'}
                {lang === 'de' && 'Garantierte Antwort'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-headline font-bold text-primary-foreground mb-2">100%</div>
              <p className="text-sm text-primary-foreground/80 font-body">
                {lang === 'fr' && 'Sans engagement'}
                {lang === 'en' && 'No obligation'}
                {lang === 'de' && 'Ohne Verpflichtung'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-headline font-bold text-primary-foreground mb-2">Expert</div>
              <p className="text-sm text-primary-foreground/80 font-body">
                {lang === 'fr' && 'Dédié à votre projet'}
                {lang === 'en' && 'Dedicated to your project'}
                {lang === 'de' && 'Für Ihr Projekt dedicated'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
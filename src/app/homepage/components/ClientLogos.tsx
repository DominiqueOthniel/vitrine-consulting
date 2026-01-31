'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';
import AppImage from '@/components/ui/AppImage';

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

const ClientLogos = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const [isHydrated, setIsHydrated] = useState(false);

  const clients: Client[] = [
  {
    id: 1,
    name: 'Ça bouge où ?',
    logo: '/assets/images/logo-ca-bouge-ou.png',
    alt: 'Logo Ça bouge où ? — projet média'
  },
  {
    id: 2,
    name: 'Ici la bouf',
    logo: '/assets/images/logo-ici-la-bouf.png',
    alt: 'Logo Ici la bouf'
  },
  {
    id: 3,
    name: 'AfterBac',
    logo: '/assets/images/logo-afterbac.png',
    alt: 'Logo Projet AfterBac'
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) =>
            <div key={i} className="h-24 bg-muted rounded-lg"></div>
            )}
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            {t.homepage.clientLogos.title}
          </h2>
          <p className="text-base text-muted-foreground font-body">
            {t.homepage.clientLogos.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client) =>
          <div
            key={client.id}
            className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-brand transition-all duration-300 transform hover:scale-105 group">

              <div className="relative w-full h-20 overflow-hidden rounded">
                <AppImage
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300" />

              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ClientLogos;
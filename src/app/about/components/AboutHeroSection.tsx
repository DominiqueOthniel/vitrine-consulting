'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';
import HeroSection from './HeroSection';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
}

export default function AboutHeroSection({ heroData }: { heroData: HeroData }) {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);

  return (
    <HeroSection
      title={t.about.heroTitle}
      subtitle={t.about.badge}
      description={heroData.description}
      heroImage={heroData.heroImage}
      heroImageAlt={heroData.heroImageAlt}
    />
  );
}

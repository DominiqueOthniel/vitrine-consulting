'use client';

import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

export default function ProjectsSectionHeader() {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-headline font-bold text-foreground mb-4">{t.projects.badge}</h2>
      <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
        {t.projects.sectionSubtitle}
      </p>
    </div>
  );
}

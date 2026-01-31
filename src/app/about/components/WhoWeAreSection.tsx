'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

export default function WhoWeAreSection() {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const about = t.about as {
    whoWeAreTitle?: string;
    intro1?: string;
    intro2?: string;
    intro3?: string;
    visionTitle?: string;
    vision?: string;
    missionTitle?: string;
    mission?: string[];
  };

  const whoWeAreTitle = about.whoWeAreTitle ?? 'Qui sommes-nous ?';
  const intro1 = about.intro1 ?? '';
  const intro2 = about.intro2 ?? '';
  const intro3 = about.intro3 ?? '';
  const visionTitle = about.visionTitle ?? 'Notre vision';
  const vision = about.vision ?? '';
  const missionTitle = about.missionTitle ?? 'Notre mission';
  const mission = about.mission ?? [];

  return (
    <section className="py-16 lg:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-10 text-center">
          {whoWeAreTitle}
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>{intro1}</p>
          <p>{intro2}</p>
          <p>{intro3}</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-background rounded-xl p-8 border border-border shadow-subtle">
            <h3 className="text-xl font-headline font-bold text-primary mb-4">{visionTitle}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{vision}</p>
          </div>
          <div className="bg-background rounded-xl p-8 border border-border shadow-subtle">
            <h3 className="text-xl font-headline font-bold text-primary mb-4">{missionTitle}</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              {mission.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

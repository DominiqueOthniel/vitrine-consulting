'use client';

import React, { useMemo } from 'react';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

export default function TargetClientsWhyChooseEcosystemSection() {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const hp = t.homepage as {
    targetClientsTitle?: string;
    targetClients?: string[];
    whyChooseTitle?: string;
    whyChoose?: string[];
    ecosystemTitle?: string;
    ecosystem?: Array<{ name: string; description: string }>;
  };

  const targetClientsTitle = hp.targetClientsTitle ?? 'Nos clients cibles';
  const targetClients = hp.targetClients ?? [];
  const whyChooseTitle = hp.whyChooseTitle ?? 'Pourquoi choisir Vitrine Consulting ?';
  const whyChoose = hp.whyChoose ?? [];
  const ecosystemTitle = hp.ecosystemTitle ?? 'Notre écosystème';
  const ecosystem = hp.ecosystem ?? [];

  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              {targetClientsTitle}
            </h2>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              {targetClients.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              {whyChooseTitle}
            </h2>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              {ecosystemTitle}
            </h2>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              {ecosystem.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold text-foreground">{item.name}</span>
                  <span className="text-muted-foreground"> — {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

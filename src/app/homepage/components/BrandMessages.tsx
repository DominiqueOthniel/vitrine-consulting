'use client';

import { useState, useEffect, useMemo } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

const PROMISE_ICONS = ['MegaphoneIcon', 'ShareIcon', 'RocketLaunchIcon'] as const;
const PROMISE_COLORS = ['primary', 'accent', 'brand-green'] as const;

const BrandMessages = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const hp = t.homepage as unknown as { promise?: readonly string[]; promiseTitle?: string; promiseSubtitle?: string };
  const promise = hp.promise ? [...hp.promise] : [...translations.fr.homepage.promise];
  const promiseTitle = hp.promiseTitle ?? translations.fr.homepage.promiseTitle;
  const promiseSubtitle = hp.promiseSubtitle ?? translations.fr.homepage.promiseSubtitle;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-background rounded-xl">
                <div className="w-16 h-16 bg-muted rounded-full mb-6"></div>
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            {promiseTitle}
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            {promiseSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promise.map((text, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredId(i + 1)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-8 bg-background rounded-xl shadow-subtle hover:shadow-brand transition-all duration-300 transform ${
                hoveredId === i + 1 ? 'scale-105 -translate-y-2' : ''
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                  hoveredId === i + 1
                    ? `bg-${PROMISE_COLORS[i]} shadow-brand`
                    : `bg-${PROMISE_COLORS[i]}/10`
                }`}
              >
                <Icon
                  name={PROMISE_ICONS[i] ?? 'SparklesIcon'}
                  size={32}
                  className={`transition-colors duration-300 ${
                    hoveredId === i + 1
                      ? 'text-primary-foreground'
                      : `text-${PROMISE_COLORS[i]}`
                  }`}
                />
              </div>

              <h3 className="text-2xl font-headline font-bold text-foreground">
                {text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMessages;
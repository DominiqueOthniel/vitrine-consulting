'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup = ({ onClose }: WelcomePopupProps) => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/90 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-card rounded-2xl shadow-elevated max-w-2xl w-full mx-4 p-8 md:p-12 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
          aria-label={t.homepage.closePopup}
        >
          <Icon name="XMarkIcon" size={24} className="text-foreground" />
        </button>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Icon name="SparklesIcon" size={40} className="text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            {t.homepage.welcomeTitle}
          </h2>

          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
            {t.homepage.welcomeMessage}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/projects"
              onClick={onClose}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>{t.homepage.discoverOurProjects}</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <button
              onClick={onClose}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-cta font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              {t.common.seeProjects}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
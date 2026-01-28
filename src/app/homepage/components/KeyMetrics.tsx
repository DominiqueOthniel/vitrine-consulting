'use client';

import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

interface Metric {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

const KeyMetrics = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Record<number, number>>({});

  const { lang } = useLanguage();

  const metrics: Metric[] = [
    { id: 1, icon: 'EyeIcon', value: 2.5, suffix: 'M+', label: lang === 'en' ? 'Visits' : lang === 'de' ? 'Besuche' : 'Visites', duration: 2000 },
    { id: 2, icon: 'UserGroupIcon', value: 850, suffix: 'K+', label: lang === 'en' ? 'Audience' : lang === 'de' ? 'Publikum' : 'Audience', duration: 2200 },
    { id: 3, icon: 'RocketLaunchIcon', value: 1200, suffix: '+', label: lang === 'en' ? 'Projects' : lang === 'de' ? 'Projekte' : 'Projets', duration: 2400 },
    { id: 4, icon: 'BriefcaseIcon', value: 180, suffix: '+', label: lang === 'en' ? 'Partners' : lang === 'de' ? 'Partner' : 'Partenaires', duration: 1800 },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isHydrated, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    metrics.forEach((metric) => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = metric.value;
      const duration = metric.duration;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easeOutCubic;

        setAnimatedValues((prev) => ({
          ...prev,
          [metric.id]: currentValue,
        }));

        if (progress < 1) {
          animationRefs.current[metric.id] = requestAnimationFrame(animate);
        }
      };

      animationRefs.current[metric.id] = requestAnimationFrame(animate);
    });

    return () => {
      Object.values(animationRefs.current).forEach((id) => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [isVisible]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center p-8 bg-card rounded-xl">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
                <div className="h-12 bg-muted rounded mb-2"></div>
                <div className="h-6 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            {lang === 'fr' && 'Chiffres clés'}
            {lang === 'en' && 'Key figures'}
            {lang === 'de' && 'Kennzahlen'}
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            {lang === 'fr' &&
              'Visites, audience, projets et partenaires au cœur de notre impact'}
            {lang === 'en' &&
              'Visits, audience, projects and partners at the heart of our impact'}
            {lang === 'de' &&
              'Besuche, Publikum, Projekte und Partner im Zentrum unserer Wirkung'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const animatedValue = animatedValues[metric.id] ?? 0;
            const displayValue = (() => {
              if (metric.suffix === 'M+') {
                return animatedValue.toFixed(1);
              } else if (metric.suffix === 'K+') {
                return Math.floor(animatedValue).toLocaleString('fr-FR');
              } else {
                return Math.floor(animatedValue).toLocaleString('fr-FR');
              }
            })();

            return (
              <div
                key={metric.id}
                className={`relative text-center p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl shadow-subtle transition-all duration-700 transform border border-border/50 overflow-hidden group ${
                  isVisible
                    ? 'translate-y-0 opacity-100 scale-100 animate-constantPulse'
                    : 'translate-y-12 opacity-0 scale-95'
                } hover:scale-105 hover:shadow-brand hover:border-primary/50 hover:animate-hoverGlow`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:from-primary/30 group-hover:to-accent/30 ${
                    isVisible ? 'scale-100 rotate-0 animate-iconFloat' : 'scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <Icon
                    name={metric.icon as any}
                    size={36}
                    className="text-primary drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  />
                </div>
                <div
                  className={`text-6xl md:text-7xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-brand-blue bg-clip-text text-transparent mb-3 transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-2xl ${
                    isVisible ? 'scale-100' : 'scale-50'
                  }`}
                  style={{
                    transitionDelay: `${index * 150 + 300}ms`,
                  }}
                >
                  {displayValue}
                  <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">{metric.suffix}</span>
                </div>
                <p
                  className={`text-lg font-body font-semibold text-muted-foreground transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  {metric.label}
                </p>
                {isVisible && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-brand-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10 group-hover:scale-110" />
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-30 animate-shimmer pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(52, 152, 219, 0.1) 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
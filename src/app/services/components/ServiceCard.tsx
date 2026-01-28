'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    alt: string;
    features: string[];
    methodology: string[];
    caseStudy: {
      client: string;
      result: string;
      metric: string;
    };
  };
  onConsultation: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onConsultation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-subtle overflow-hidden border border-border">
        <div className="relative h-64 bg-muted"></div>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 bg-primary/10 rounded-lg"></div>
            <div className="h-8 bg-muted rounded w-48"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-subtle hover:shadow-brand transition-all duration-300 overflow-hidden border border-border group">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={service.icon as any} size={28} className="text-primary" />
          </div>
          <h3 className="text-2xl font-headline font-bold text-foreground">{service.title}</h3>
        </div>

        <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-cta font-semibold text-foreground uppercase tracking-wider">
            Caractéristiques Clés
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-primary hover:text-conversion-accent transition-colors duration-200 mb-6"
        >
          <span className="text-sm font-cta font-semibold">
            {isExpanded ? 'Voir Moins' : 'Voir Méthodologie'}
          </span>
          <Icon
            name="ChevronDownIcon"
            size={20}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {isExpanded && (
          <div className="space-y-6 mb-6 animate-fadeIn">
            <div>
              <h4 className="text-sm font-cta font-semibold text-foreground uppercase tracking-wider mb-3">
                Notre Méthodologie
              </h4>
              <ol className="space-y-2">
                {service.methodology.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm font-body text-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h4 className="text-sm font-cta font-semibold text-foreground uppercase tracking-wider mb-3">
                Étude de Cas
              </h4>
              <div className="space-y-2">
                <p className="text-sm font-body text-foreground">
                  <span className="font-semibold">Client:</span> {service.caseStudy.client}
                </p>
                <p className="text-sm font-body text-foreground">
                  <span className="font-semibold">Résultat:</span> {service.caseStudy.result}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-2xl font-headline font-bold text-primary">
                    {service.caseStudy.metric}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onConsultation}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand transform hover:scale-105"
        >
          Demander une Consultation
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
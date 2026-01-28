'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  name: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
}

interface ServiceComparisonProps {
  features: ComparisonFeature[];
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ features }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-subtle p-8">
        <div className="h-8 bg-muted rounded w-64 mb-8"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-subtle overflow-hidden border border-border">
      <div className="bg-gradient-to-r from-primary to-accent p-8">
        <h3 className="text-2xl font-headline font-bold text-white mb-2">
          Comparaison des Offres
        </h3>
        <p className="text-white/90 font-body">
          Choisissez la formule adaptée à vos besoins
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-6 font-cta font-semibold text-foreground">
                Fonctionnalités
              </th>
              <th className="text-center p-6 font-cta font-semibold text-foreground">
                Basique
              </th>
              <th className="text-center p-6 font-cta font-semibold text-foreground bg-primary/5">
                Professionnel
              </th>
              <th className="text-center p-6 font-cta font-semibold text-foreground">
                Entreprise
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors duration-200">
                <td className="p-6 font-body text-foreground">{feature.name}</td>
                <td className="p-6 text-center">
                  {feature.basic ? (
                    <Icon name="CheckIcon" size={24} className="text-brand-green mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={24} className="text-muted-foreground mx-auto" />
                  )}
                </td>
                <td className="p-6 text-center bg-primary/5">
                  {feature.professional ? (
                    <Icon name="CheckIcon" size={24} className="text-brand-green mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={24} className="text-muted-foreground mx-auto" />
                  )}
                </td>
                <td className="p-6 text-center">
                  {feature.enterprise ? (
                    <Icon name="CheckIcon" size={24} className="text-brand-green mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={24} className="text-muted-foreground mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceComparison;
'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  serviceName: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ serviceName }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [budget, setBudget] = useState<string>('10000');
  const [duration, setDuration] = useState<string>('6');
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateROI = () => {
    const budgetNum = parseFloat(budget) || 0;
    const durationNum = parseInt(duration) || 1;
    
    const estimatedReturn = budgetNum * 2.5;
    const monthlyROI = ((estimatedReturn - budgetNum) / budgetNum) * 100;
    const totalROI = monthlyROI * (durationNum / 6);

    return {
      investment: budgetNum,
      estimatedReturn: estimatedReturn,
      roi: totalROI,
      monthlyGain: (estimatedReturn - budgetNum) / durationNum
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-subtle p-8">
        <div className="h-8 bg-muted rounded w-48 mb-6"></div>
        <div className="space-y-4">
          <div className="h-20 bg-muted rounded"></div>
          <div className="h-20 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const results = calculateROI();

  return (
    <div className="bg-gradient-to-br from-card to-muted rounded-xl shadow-brand p-8 border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-foreground">
            Calculateur ROI
          </h3>
          <p className="text-sm font-body text-muted-foreground">
            Estimez votre retour sur investissement
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Budget Marketing (€)
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
            placeholder="10000"
          />
        </div>

        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Durée de la Campagne (mois)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
          >
            <option value="3">3 mois</option>
            <option value="6">6 mois</option>
            <option value="12">12 mois</option>
            <option value="24">24 mois</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand transform hover:scale-105"
        >
          Calculer le ROI
        </button>

        {showResults && (
          <div className="mt-6 p-6 bg-background rounded-lg border border-border space-y-4 animate-fadeIn">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-body text-muted-foreground">Investissement</span>
              <span className="text-lg font-headline font-bold text-foreground">
                {results.investment.toLocaleString('fr-FR')} €
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-body text-muted-foreground">Retour Estimé</span>
              <span className="text-lg font-headline font-bold text-brand-green">
                {results.estimatedReturn.toLocaleString('fr-FR')} €
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-body text-muted-foreground">ROI Total</span>
              <span className="text-lg font-headline font-bold text-primary">
                +{results.roi.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-body text-muted-foreground">Gain Mensuel Moyen</span>
              <span className="text-lg font-headline font-bold text-accent">
                {results.monthlyGain.toLocaleString('fr-FR')} €
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
        <p className="text-xs font-body text-muted-foreground text-center">
          * Estimation basée sur les performances moyennes de nos clients dans le secteur {serviceName}
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;
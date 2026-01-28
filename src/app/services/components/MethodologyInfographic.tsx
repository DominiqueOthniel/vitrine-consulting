import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface MethodologyInfographicProps {
  steps: MethodologyStep[];
}

const MethodologyInfographic: React.FC<MethodologyInfographicProps> = ({ steps }) => {
  return (
    <div className="bg-card rounded-xl shadow-subtle p-8 border border-border">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-headline font-bold text-foreground mb-3">
          Notre Méthodologie Éprouvée
        </h3>
        <p className="text-base font-body text-muted-foreground max-w-2xl mx-auto">
          Un processus structuré en 4 étapes pour garantir des résultats mesurables
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-brand-blue transform -translate-y-1/2" />

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 relative ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'}`}>
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-background rounded-xl p-6 shadow-subtle hover:shadow-brand transition-all duration-300 border border-border h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-brand">
                      <Icon name={step.icon as any} size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-subtle">
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border w-full">
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Icon name="ClockIcon" size={16} />
                      <span className="text-xs font-cta font-semibold">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <Icon name="ChevronRightIcon" size={24} className="text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-cta font-semibold hover:shadow-brand transition-all duration-300 transform hover:scale-105">
          Télécharger le Guide Complet (PDF)
        </button>
      </div>
    </div>
  );
};

export default MethodologyInfographic;
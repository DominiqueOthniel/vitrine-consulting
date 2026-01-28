import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface MethodologySectionProps {
  steps: MethodologyStep[];
}

export default function MethodologySection({ steps }: MethodologySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Notre Méthodologie
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Un processus éprouvé qui combine créativité stratégique et excellence opérationnelle pour garantir des résultats mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-xl p-8 h-full shadow-subtle hover:shadow-brand transition-all duration-300 border border-border hover:border-primary">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.color}`}>
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                
                <div className="absolute top-4 right-4 text-5xl font-headline font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </div>

                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <Icon name="ChevronRightIcon" size={24} className="text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
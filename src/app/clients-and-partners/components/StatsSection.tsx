import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="bg-card py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-background rounded-xl p-8 text-center shadow-subtle hover:shadow-brand transition-all duration-300 transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat.icon as any} size={32} className="text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base font-body text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
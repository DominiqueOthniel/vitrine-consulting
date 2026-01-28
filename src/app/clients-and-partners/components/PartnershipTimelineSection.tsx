import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  clientCount: number;
  icon: string;
}

interface PartnershipTimelineSectionProps {
  timeline: TimelineEvent[];
}

const PartnershipTimelineSection: React.FC<PartnershipTimelineSectionProps> = ({ timeline }) => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Notre Parcours de Croissance
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Une décennie de partenariats durables et de croissance continue
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-brand-green hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={event.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-brand transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-headline font-bold text-primary">
                        {event.year}
                      </span>
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-cta font-semibold">
                        {event.clientCount}+ clients
                      </div>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-base font-body text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-brand border-4 border-background">
                    <Icon name={event.icon as any} size={32} className="text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTimelineSection;
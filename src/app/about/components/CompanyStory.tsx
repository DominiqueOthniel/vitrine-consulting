import Icon from '@/components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface CompanyStoryProps {
  milestones: Milestone[];
}

export default function CompanyStory({ milestones }: CompanyStoryProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            De nos débuts modestes à notre position actuelle de leader dans le secteur, découvrez le parcours qui a façonné VITRINE CONSULTING.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-brand-green hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="bg-card rounded-xl p-8 shadow-subtle hover:shadow-brand transition-all duration-300 border border-border">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={milestone.icon as any} size={24} className="text-primary" />
                      </div>
                      <span className="text-2xl font-headline font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
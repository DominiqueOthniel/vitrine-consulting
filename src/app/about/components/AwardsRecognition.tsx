import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
  category: string;
  logo: string;
  logoAlt: string;
}

interface AwardsRecognitionProps {
  awards: Award[];
}

export default function AwardsRecognition({ awards }: AwardsRecognitionProps) {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Récompenses & Reconnaissance
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Notre excellence reconnue par l'industrie à travers des distinctions prestigieuses qui témoignent de notre engagement envers l'innovation et la qualité.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-brand-green"></div>

          <div className="space-y-12">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'} pl-8 lg:pl-0`}>
                  <div className="bg-background rounded-xl p-8 shadow-subtle hover:shadow-brand transition-all duration-300 border border-border">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-card rounded-lg p-3 border border-border">
                        <AppImage
                          src={award.logo}
                          alt={award.logoAlt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl font-headline font-bold text-primary">
                            {award.year}
                          </span>
                          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-medium rounded-full">
                            {award.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                          {award.title}
                        </h3>
                        <p className="text-muted-foreground font-body flex items-center space-x-2">
                          <Icon name="BuildingOfficeIcon" size={16} />
                          <span>{award.organization}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-card shadow-lg flex items-center justify-center">
                    <Icon name="TrophyIcon" size={12} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrophyIcon" size={32} className="text-primary" />
            </div>
            <div className="text-4xl font-headline font-bold text-foreground mb-2">15+</div>
            <p className="text-muted-foreground font-body">Prix Remportés</p>
          </div>

          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="StarIcon" size={32} className="text-accent" />
            </div>
            <div className="text-4xl font-headline font-bold text-foreground mb-2">98%</div>
            <p className="text-muted-foreground font-body">Satisfaction Client</p>
          </div>

          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ChartBarIcon" size={32} className="text-brand-green" />
            </div>
            <div className="text-4xl font-headline font-bold text-foreground mb-2">200+</div>
            <p className="text-muted-foreground font-body">Projets Réussis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
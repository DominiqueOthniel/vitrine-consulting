import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface IndustryRecognitionSectionProps {
  awards: Award[];
}

const IndustryRecognitionSection: React.FC<IndustryRecognitionSectionProps> = ({ awards }) => {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Reconnaissances & Certifications
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Notre excellence reconnue par les leaders de l'industrie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-brand transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <AppImage
                    src={award.image}
                    alt={award.alt}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-cta font-semibold">
                      {award.year}
                    </span>
                    <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                  </div>
                  <h3 className="text-lg font-headline font-bold text-foreground mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mb-1">
                    {award.organization}
                  </p>
                  <p className="text-xs font-body text-muted-foreground">
                    Catégorie: {award.category}
                  </p>
                </div>

                <a
                  href={award.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-conversion-accent transition-colors text-sm font-cta font-semibold"
                >
                  <span>Vérifier la certification</span>
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-background rounded-xl p-8 border-2 border-primary/20">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="DocumentCheckIcon" size={40} className="text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                Certifications Professionnelles
              </h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                VITRINE CONSULTING respecte toutes les normes camerounaises et internationales de protection des données. Nos processus sont conformes aux standards ISO 9001 pour la gestion de la qualité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognitionSection;
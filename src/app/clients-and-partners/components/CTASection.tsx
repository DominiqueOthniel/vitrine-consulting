import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-brand-blue py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6">
          Prêt à Rejoindre Nos Partenaires de Confiance?
        </h2>
        <p className="text-lg lg:text-xl font-body text-white/90 mb-8 leading-relaxed">
          Transformons ensemble vos défis en succès mesurables. Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons propulser votre marque.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/homepage"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg text-base font-cta font-semibold hover:bg-background transition-all duration-300 shadow-brand transform hover:scale-105"
          >
            <span>Consultation Gratuite</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-base font-cta font-semibold hover:bg-white hover:text-primary transition-all duration-300"
          >
            <span>Voir Nos Projets</span>
            <Icon name="RocketLaunchIcon" size={20} />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">Consultation gratuite</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">Réponse sous 24h</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm font-body">Sans engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
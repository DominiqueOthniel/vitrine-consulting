'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import MethodologyInfographic from './MethodologyInfographic';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
  methodology: string[];
  caseStudy: {
    client: string;
    result: string;
    metric: string;
  };
}


interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

const ServicesInteractive: React.FC = () => {

  const services: Service[] = [
    {
      id: 1,
      title: 'Branding & design premium',
      description: 'Identité de marque, charte graphique, packaging et direction artistique. Une image premium qui vous démarque.',
      icon: 'PaintBrushIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_183be303d-1766470449787.png',
      alt: 'Branding et design premium',
      features: ['Identité visuelle et charte graphique', 'Logo et déclinaisons', 'Packaging et print', 'Direction artistique', 'Design systèmes'],
      methodology: ['Audit de marque', 'Concept créatif', 'Déclinaisons', 'Livraison et guidelines'],
      caseStudy: { client: 'Marque premium', result: 'Identité repositionnée, +40% notoriété', metric: '+40% Notoriété' },
    },
    {
      id: 2,
      title: 'Web & mobile (sites, apps, e-commerce)',
      description: 'Sites vitrine, applications mobiles, plateformes e-commerce. Expérience utilisateur et performance.',
      icon: 'ComputerDesktopIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12681ab67-1764666699439.png',
      alt: 'Web et mobile',
      features: ['Sites vitrine et landing', 'Applications mobiles', 'E-commerce sur-mesure', 'UX/UI design', 'Hébergement et maintenance'],
      methodology: ['Discovery et specs', 'Maquettes et prototypage', 'Développement', 'Mise en ligne et SEO'],
      caseStudy: { client: 'E-commerce', result: '+120% conversions, 50K users', metric: '+120% Conversions' },
    },
    {
      id: 3,
      title: 'Communication multicanal (réseaux, pubs, contenus sponsorisés)',
      description: 'Réseaux sociaux, publicité, contenus sponsorisés. Une présence cohérente et performante sur tous les canaux.',
      icon: 'MegaphoneIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cbf2955b-1764705968076.png',
      alt: 'Communication multicanal',
      features: ['Stratégie réseaux sociaux', 'Création de contenus', 'Publicité (Meta, Google, LinkedIn)', 'Contenus sponsorisés', 'Community management'],
      methodology: ['Stratégie éditoriale', 'Calendrier et production', 'Campagnes paid', 'Optimisation et reporting'],
      caseStudy: { client: 'Marque B2B', result: '2M impressions, 15% engagement', metric: '2M Impressions' },
    },
    {
      id: 4,
      title: 'Marketing stratégique & analytics',
      description: 'Data-driven : stratégie, KPIs, tableaux de bord, attribution. Pilotez votre croissance avec des décisions éclairées.',
      icon: 'ChartBarIcon',
      image: 'https://images.unsplash.com/photo-1690237571133-0e1ac3024155',
      alt: 'Marketing stratégique et analytics',
      features: ['Stratégie marketing et positionnement', 'Définition KPIs et objectifs', 'Tableaux de bord et reporting', 'Attribution et ROI', 'Tests A/B et optimisation'],
      methodology: ['Audit et benchmarks', 'Stratégie et roadmap', 'Mise en place tracking', 'Reporting et recommandations'],
      caseStudy: { client: 'SaaS', result: 'ROI x3, -30% CAC', metric: 'ROI x3' },
    },
    {
      id: 5,
      title: 'Accompagnement sur-mesure (activation de marque, RSE)',
      description: 'Activation de marque, événementiel, RSE. Des programmes sur-mesure qui génèrent impact et engagement.',
      icon: 'UserGroupIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16fb3ceb8-1769245706130.png',
      alt: 'Accompagnement sur-mesure',
      features: ['Activation de marque et événementiel', 'Stratégie RSE et impact', 'Partenariats et collaborations', 'Formation et workshops', 'Suivi et déploiement'],
      methodology: ['Diagnostic et objectifs', 'Conception du programme', 'Déploiement terrain', 'Mesure d’impact'],
      caseStudy: { client: 'Grand groupe', result: '20 actions RSE, 5K bénéficiaires', metric: '5K Bénéficiaires' },
    },
  ];




  const methodologySteps: MethodologyStep[] = [
    { number: 1, title: 'Découverte', description: 'Analyse de vos besoins, objectifs et contexte marché', icon: 'MagnifyingGlassIcon', duration: '1-2 semaines' },
    { number: 2, title: 'Stratégie', description: 'Élaboration de la stratégie et plan d\'action détaillé', icon: 'LightBulbIcon', duration: '2-3 semaines' },
    { number: 3, title: 'Création', description: 'Production des contenus et mise en place des outils', icon: 'PaintBrushIcon', duration: '3-4 semaines' },
    { number: 4, title: 'Déploiement', description: 'Lancement coordonné et activation des canaux', icon: 'RocketLaunchIcon', duration: '1-2 semaines' },
  ];



  return (
    <div className="space-y-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Nos cinq piliers
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Branding, web & mobile, communication multicanal, marketing stratégique et accompagnement sur-mesure.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) =>
          <ServiceCard
            key={service.id}
            service={service}
            onConsultation={() => {}} />

          )}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MethodologyInfographic steps={methodologySteps} />
        </div>
      </section>


    </div>);

};

export default ServicesInteractive;
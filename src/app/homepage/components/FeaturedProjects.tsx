'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  stats: {
    reach: string;
    engagement: string;
  };
}

const FeaturedProjects = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projects: Project[] = [
  {
    id: 1,
    title: 'ICILABOUF',
    category: 'Média Jeunesse',
    description:
    "Plateforme média innovante ciblant les jeunes camerounais avec du contenu culturel engageant et des événements immersifs qui créent des connexions authentiques.",
    image: "https://images.unsplash.com/photo-1732371481436-c4510ceea581",
    alt: 'Groupe de jeunes adultes souriants lors d\'un événement culturel avec éclairage coloré et ambiance festive',
    stats: {
      reach: '500K+',
      engagement: '85%'
    }
  },
  {
    id: 2,
    title: 'Afterbac',
    category: 'Éducation & Orientation',
    description:
    "Solution complète d'orientation post-bac aidant les étudiants camerounais à naviguer leurs choix académiques avec confiance et clarté.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16fb3ceb8-1769245706130.png",
    alt: 'Étudiants universitaires diversifiés travaillant ensemble sur des ordinateurs portables dans une bibliothèque moderne lumineuse',
    stats: {
      reach: '200K+',
      engagement: '92%'
    }
  },
  {
    id: 3,
    title: 'Campagne Stratégique PME',
    category: 'Communication Corporate',
    description:
    "Transformation digitale complète pour une PME camerounaise, incluant stratégie de contenu, présence sociale et événements de lancement.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6d75657-1766483971279.png",
    alt: 'Équipe professionnelle en réunion stratégique autour d\'une table avec graphiques et présentations sur écran',
    stats: {
      reach: '150K+',
      engagement: '78%'
    }
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, projects.length]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="h-96 bg-muted rounded-2xl"></div>
        </div>
      </section>);

  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Projets Phares
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Découvrez comment nous transformons les visions en succès mesurables
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-elevated">
            <AppImage
              src={projects[activeProject].image}
              alt={projects[activeProject].alt}
              className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-cta font-semibold mb-4">
                  {projects[activeProject].category}
                </span>

                <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground mb-4">
                  {projects[activeProject].title}
                </h3>

                <p className="text-lg text-primary-foreground/90 font-body mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="UserGroupIcon" size={24} className="text-brand-green" />
                    <div>
                      <div className="text-2xl font-headline font-bold text-primary-foreground">
                        {projects[activeProject].stats.reach}
                      </div>
                      <div className="text-sm text-primary-foreground/80 font-body">
                        Portée
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="ChartBarIcon" size={24} className="text-brand-green" />
                    <div>
                      <div className="text-2xl font-headline font-bold text-primary-foreground">
                        {projects[activeProject].stats.engagement}
                      </div>
                      <div className="text-sm text-primary-foreground/80 font-body">
                        Engagement
                      </div>
                    </div>
                  </div>
                </div>

                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-brand hover:shadow-elevated transform hover:scale-105 flex items-center space-x-2">
                  <span>Voir le projet complet</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((project, index) =>
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeProject === index ?
              'bg-primary w-12' : 'bg-muted hover:bg-primary/50'}`
              }
              aria-label={`Voir le projet ${project.title}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;
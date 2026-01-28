'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    alt: string;
    stats: {
      reach: string;
      engagement: string;
      conversion: string;
    };
    tags: string[];
    featured: boolean;
  };
  onInquire: (projectId: number) => void;
}

const ProjectCard = ({ project, onInquire }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-subtle hover:shadow-brand transition-all duration-500 transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-cta font-semibold">
          Projet Phare
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-cta font-semibold">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-2">{project.title}</h3>
          <p className={`text-sm font-body text-white/90 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="UsersIcon" size={20} className="text-primary" />
            </div>
            <p className="text-2xl font-headline font-bold text-primary">{project.stats.reach}</p>
            <p className="text-xs font-body text-muted-foreground">Portée</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="HeartIcon" size={20} className="text-accent" />
            </div>
            <p className="text-2xl font-headline font-bold text-accent">{project.stats.engagement}</p>
            <p className="text-xs font-body text-muted-foreground">Engagement</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="ChartBarIcon" size={20} className="text-brand-green" />
            </div>
            <p className="text-2xl font-headline font-bold text-brand-green">{project.stats.conversion}</p>
            <p className="text-xs font-body text-muted-foreground">Conversion</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onInquire(project.id)}
            className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Réservez un espace publicitaire</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
          <Link
            href={`/contact?project=${encodeURIComponent(project.title)}`}
            className="flex-1 px-4 py-3 border-2 border-primary text-primary rounded-md text-sm font-cta font-semibold hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Découvrez ce projet</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
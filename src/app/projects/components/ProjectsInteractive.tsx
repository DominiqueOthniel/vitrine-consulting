'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import InquiryModal from './InquiryModal';

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
    conversion: string;
  };
  tags: string[];
  featured: boolean;
}

interface ProjectsInteractiveProps {
  projects: Project[];
}

const ProjectsInteractive = ({ projects }: ProjectsInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous les Projets');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-8">
        <div className="bg-card rounded-lg shadow-subtle p-6 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="h-12 bg-muted rounded-md" />
            <div className="h-12 bg-muted rounded-md" />
            <div className="h-12 bg-muted rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-subtle animate-pulse">
              <div className="h-64 bg-muted" />
              <div className="p-6 space-y-4">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const categories = ['Tous les Projets', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'Tous les Projets' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.stats.engagement.localeCompare(a.stats.engagement);
      case 'reach':
        return b.stats.reach.localeCompare(a.stats.reach);
      case 'engagement':
        return b.stats.engagement.localeCompare(a.stats.engagement);
      default:
        return b.id - a.id;
    }
  });

  const handleInquire = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project.title);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {sortedProjects.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
            Aucun Projet Trouvé
          </h3>
          <p className="text-sm font-body text-muted-foreground mb-6">
            Essayez de modifier vos critères de recherche ou de filtrage.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Tous les Projets');
              setSearchQuery('');
              setSortBy('recent');
            }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300"
          >
            Réinitialiser les Filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInquire={handleInquire}
            />
          ))}
        </div>
      )}

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle={selectedProject}
      />
    </>
  );
};

export default ProjectsInteractive;
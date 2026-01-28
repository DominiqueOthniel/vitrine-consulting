'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MediaFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  mediaType: string;
  project: string;
  sortBy: string;
}

const MediaFilters = ({ onFilterChange }: MediaFiltersProps) => {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    category: 'all',
    mediaType: 'all',
    project: 'all',
    sortBy: 'recent'
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'events', label: 'Événements' },
    { value: 'campaigns', label: 'Campagnes' },
    { value: 'behind-scenes', label: 'Coulisses' },
    { value: 'team', label: 'Équipe' },
    { value: 'clients', label: 'Clients' }
  ];

  const mediaTypes = [
    { value: 'all', label: 'Tous les médias' },
    { value: 'photo', label: 'Photos' },
    { value: 'video', label: 'Vidéos' }
  ];

  const projects = [
    { value: 'all', label: 'Tous les projets' },
    { value: 'icilabouf', label: 'ICILABOUF' },
    { value: 'afterbac', label: 'Afterbac' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'social', label: 'Social Media' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Plus récents' },
    { value: 'oldest', label: 'Plus anciens' },
    { value: 'popular', label: 'Populaires' },
    { value: 'name', label: 'Nom A-Z' }
  ];

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      category: 'all',
      mediaType: 'all',
      project: 'all',
      sortBy: 'recent'
    };
    setActiveFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const activeFilterCount = Object.values(activeFilters).filter(v => v !== 'all' && v !== 'recent').length;

  return (
    <div className="bg-card rounded-lg shadow-subtle border border-border">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden p-4 border-b border-border">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between text-foreground font-cta font-semibold"
        >
          <span className="flex items-center space-x-2">
            <Icon name="AdjustmentsHorizontalIcon" size={20} />
            <span>Filtres</span>
            {activeFilterCount > 0 && (
              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </span>
          <Icon 
            name="ChevronDownIcon" 
            size={20} 
            className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block p-6 space-y-6`}>
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-3">
            Catégorie
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleFilterChange('category', category.value)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-body transition-all duration-200 ${
                  activeFilters.category === category.value
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Media Type Filter */}
        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-cta font-semibold text-foreground mb-3">
            Type de média
          </label>
          <div className="space-y-2">
            {mediaTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleFilterChange('mediaType', type.value)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-body transition-all duration-200 ${
                  activeFilters.mediaType === type.value
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-cta font-semibold text-foreground mb-3">
            Projet
          </label>
          <div className="space-y-2">
            {projects.map((project) => (
              <button
                key={project.value}
                onClick={() => handleFilterChange('project', project.value)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-body transition-all duration-200 ${
                  activeFilters.project === project.value
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {project.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-cta font-semibold text-foreground mb-3">
            Trier par
          </label>
          <select
            value={activeFilters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Filters */}
        {activeFilterCount > 0 && (
          <div className="pt-6 border-t border-border">
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2.5 bg-muted text-foreground rounded-md text-sm font-cta font-semibold hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Icon name="XMarkIcon" size={16} />
              <span>Réinitialiser les filtres</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaFilters;
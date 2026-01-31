'use client';

import { useMemo } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: FilterBarProps) => {
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  return (
    <div className="bg-card rounded-lg shadow-subtle p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            {t.projects.search}
          </label>
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            {t.projects.category}
          </label>
          <div className="relative">
            <Icon
              name="FunnelIcon"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-background border border-border rounded-md text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            {t.projects.sortBy}
          </label>
          <div className="relative">
            <Icon
              name="ArrowsUpDownIcon"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-background border border-border rounded-md text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="recent">{t.projects.sortRecent}</option>
              <option value="popular">{t.projects.sortPopular}</option>
              <option value="reach">{t.projects.sortReach}</option>
              <option value="engagement">{t.projects.sortEngagement}</option>
            </select>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
import Icon from '@/components/ui/AppIcon';

interface StatsOverviewProps {
  stats: {
    totalProjects: number;
    totalReach: string;
    avgEngagement: string;
    activePartners: number;
  };
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div className="bg-gradient-to-br from-primary to-conversion-accent rounded-lg p-6 text-white shadow-brand">
        <div className="flex items-center justify-between mb-4">
          <Icon name="RectangleStackIcon" size={32} className="opacity-80" />
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="SparklesIcon" size={24} />
          </div>
        </div>
        <p className="text-4xl font-headline font-bold mb-2">{stats.totalProjects}</p>
        <p className="text-sm font-body opacity-90">Projets Réalisés</p>
      </div>

      <div className="bg-gradient-to-br from-accent to-brand-blue rounded-lg p-6 text-white shadow-brand">
        <div className="flex items-center justify-between mb-4">
          <Icon name="UsersIcon" size={32} className="opacity-80" />
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="ArrowTrendingUpIcon" size={24} />
          </div>
        </div>
        <p className="text-4xl font-headline font-bold mb-2">{stats.totalReach}</p>
        <p className="text-sm font-body opacity-90">Portée Totale</p>
      </div>

      <div className="bg-gradient-to-br from-brand-green to-primary rounded-lg p-6 text-white shadow-brand">
        <div className="flex items-center justify-between mb-4">
          <Icon name="HeartIcon" size={32} className="opacity-80" />
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="FireIcon" size={24} />
          </div>
        </div>
        <p className="text-4xl font-headline font-bold mb-2">{stats.avgEngagement}</p>
        <p className="text-sm font-body opacity-90">Engagement Moyen</p>
      </div>

      <div className="bg-gradient-to-br from-secondary to-brand-dark rounded-lg p-6 text-white shadow-brand">
        <div className="flex items-center justify-between mb-4">
          <Icon name="BuildingOfficeIcon" size={32} className="opacity-80" />
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="CheckBadgeIcon" size={24} />
          </div>
        </div>
        <p className="text-4xl font-headline font-bold mb-2">{stats.activePartners}</p>
        <p className="text-sm font-body opacity-90">Partenaires Actifs</p>
      </div>
    </div>
  );
};

export default StatsOverview;
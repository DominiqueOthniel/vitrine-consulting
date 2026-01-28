import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import StatsOverview from './components/StatsOverview';
import ProjectsInteractive from './components/ProjectsInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Projets - VITRINE CONSULTING',
  description: 'Découvrez notre portfolio de projets phares. Présentation interactive avec images, vidéos, statistiques clés et bénéfices pour annonceurs. Réservez un espace publicitaire.',
};

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  stats: { reach: string; engagement: string; conversion: string };
  tags: string[];
  featured: boolean;
}

const mockProjects: Project[] = [
  { id: 1, title: 'ICILABOUF', category: 'Média Jeunesse', description: "Plateforme média dédiée à la culture urbaine et à l'engagement des jeunes, touchant plus de 500K personnes mensuellement.", image: 'https://images.unsplash.com/photo-1724690683788-eefe35a551ff', alt: 'Événement urbain ICILABOUF', stats: { reach: '500K+', engagement: '12.5%', conversion: '8.2%' }, tags: ['Culture Urbaine', 'Engagement Jeunesse', 'Contenu Viral'], featured: true },
  { id: 2, title: 'Afterbac', category: 'Éducation', description: "Initiative d'orientation post-bac avec outils interactifs et témoignages authentiques.", image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10de2abdc-1767754767187.png', alt: 'Afterbac orientation', stats: { reach: '350K+', engagement: '15.8%', conversion: '11.3%' }, tags: ['Orientation', 'Éducation', 'Jeunes Talents'], featured: true },
  { id: 3, title: 'Festival Urbain 2025', category: 'Événementiel', description: 'Festival multi-sites réunissant 15 000 participants : musique, art de rue, entrepreneuriat créatif.', image: 'https://images.unsplash.com/photo-1695134270253-5cf5c23323f6', alt: 'Festival urbain', stats: { reach: '200K+', engagement: '18.4%', conversion: '9.7%' }, tags: ['Festival', 'Culture', 'Expérience Live'], featured: false },
  { id: 4, title: 'Campagne #JeunesEntrepreneurs', category: 'Communication Digitale', description: 'Campagne virale : 50 jeunes entrepreneurs, 2M d\'impressions, communauté d\'entraide.', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10bf947c4-1766237633907.png', alt: 'Jeunes entrepreneurs', stats: { reach: '2M+', engagement: '9.2%', conversion: '6.8%' }, tags: ['Entrepreneuriat', 'Social Media'], featured: false },
  { id: 5, title: 'Série Documentaire: Voix de Banlieue', category: 'Production Audiovisuelle', description: '8 épisodes, talents des quartiers, 1.5M de vues sur YouTube.', image: 'https://images.unsplash.com/photo-1701058661872-3ee9bdc9d28e', alt: 'Documentaire Voix de Banlieue', stats: { reach: '1.5M+', engagement: '14.6%', conversion: '7.9%' }, tags: ['Documentaire', 'Storytelling', 'Impact Social'], featured: false },
  { id: 6, title: 'Hackathon Innovation Sociale', category: 'Événementiel', description: 'Hackathon 48h, 200 participants, 15 projets incubés.', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_125e9e08e-1769274785639.png', alt: 'Hackathon', stats: { reach: '180K+', engagement: '22.1%', conversion: '13.5%' }, tags: ['Innovation', 'Tech for Good'], featured: false },
  { id: 7, title: 'Plateforme Talents Émergents', category: 'Digital', description: 'Plateforme connectant talents créatifs et marques, 500+ collaborations en 12 mois.', image: 'https://images.unsplash.com/photo-1594732832278-abd644401426', alt: 'Plateforme talents', stats: { reach: '400K+', engagement: '11.7%', conversion: '10.2%' }, tags: ['Plateforme', 'Networking'], featured: false },
  { id: 8, title: 'Tournée Campus 2025', category: 'Activation de Marque', description: '20 campus, 50 000 étudiants, 3M d\'impressions sociales.', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11282d908-1766994352668.png', alt: 'Tournée campus', stats: { reach: '3M+', engagement: '16.3%', conversion: '8.9%' }, tags: ['Campus', 'Activation'], featured: false },
  { id: 9, title: 'Podcast: Génération Impact', category: 'Contenu Audio', description: 'Podcast hebdo, 100K écoutes/mois, communauté 25K membres.', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1baabf2db-1768415916308.png', alt: 'Podcast Génération Impact', stats: { reach: '100K+', engagement: '19.8%', conversion: '12.4%' }, tags: ['Podcast', 'Interviews'], featured: false },
];

const overallStats = { totalProjects: 45, totalReach: '8M+', avgEngagement: '14.2%', activePartners: 32 };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-primary via-conversion-accent to-brand-green text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Icon name="SparklesIcon" size={20} />
                <span className="text-sm font-cta font-semibold">Portfolio de Projets</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 leading-tight">
                Nos Réalisations Qui Transforment
              </h1>
              <p className="text-xl font-body opacity-90 mb-8 leading-relaxed">
                Présentation interactive : images, vidéos, statistiques clés et bénéfices pour annonceurs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#projects" className="px-8 py-4 bg-white text-primary rounded-md text-base font-cta font-semibold hover:bg-gray-100 transition-all duration-300 shadow-brand hover:scale-105 flex items-center gap-2">
                  <span>Explorer les Projets</span>
                  <Icon name="ArrowDownIcon" size={20} />
                </a>
                <a href="#stats" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md text-base font-cta font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <span>Voir les Statistiques</span>
                  <Icon name="ChartBarIcon" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="py-16 bg-muted">
          <div className="container mx-auto px-6 lg:px-8">
            <StatsOverview stats={overallStats} />
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-bold text-foreground mb-4">Portfolio de Projets</h2>
              <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
                Statistiques clés et bénéfices pour annonceurs. Réservez un espace publicitaire ou découvrez chaque projet.
              </p>
            </div>
            <ProjectsInteractive projects={mockProjects} />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-secondary via-brand-dark to-secondary text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="RocketLaunchIcon" size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Prêt à Créer Votre Projet Phare ?</h2>
              <p className="text-xl font-body opacity-90 mb-8 leading-relaxed">
                Rejoignez les marques qui nous font confiance. Discutons de votre prochain projet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-md text-base font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-brand hover:scale-105 flex items-center gap-2">
                  <span>Consultation Gratuite</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md text-base font-cta font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <span>Découvrir Nos Services</span>
                  <Icon name="SparklesIcon" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-card border-t border-border py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm font-body text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} VITRINE CONSULTING. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a href="/homepage" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</a>
                <a href="/homepage" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Mentions Légales</a>
                <a href="/contact" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

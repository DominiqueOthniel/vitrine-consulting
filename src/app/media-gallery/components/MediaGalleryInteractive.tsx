'use client';

import { useState, useEffect } from 'react';
import MediaFilters from './MediaFilters';
import MediaGrid from './MediaGrid';
import MediaLightbox from './MediaLightbox';
import MediaSlider from './MediaSlider';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  title: string;
  category: string;
  project: string;
  thumbnail: string;
  alt: string;
  fullImage?: string;
  videoUrl?: string;
  date: string;
  views: number;
  likes: number;
  description: string;
}

interface FilterState {
  category: string;
  mediaType: string;
  project: string;
  sortBy: string;
}

const MediaGalleryInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([]);
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
    category: 'all',
    mediaType: 'all',
    project: 'all',
    sortBy: 'recent'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockMediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'photo',
    title: 'ICILABOUF Festival 2025 - Scène Principale',
    category: 'events',
    project: 'ICILABOUF',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1fd5a4b-1766487207711.png",
    alt: 'Large outdoor music festival stage with colorful lights and crowd of young people dancing at sunset',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17fae1729-1769465196705.png",
    date: '15 Jan 2026',
    views: 12450,
    likes: 892,
    description: 'Ambiance électrique lors de la soirée d\'ouverture du festival ICILABOUF avec plus de 5000 participants'
  },
  {
    id: 2,
    type: 'video',
    title: 'Afterbac - Témoignages Étudiants',
    category: 'campaigns',
    project: 'Afterbac',
    thumbnail: "https://images.unsplash.com/photo-1707467337118-9b08b78a0c8c",
    alt: 'Diverse group of university students smiling and holding graduation caps in modern campus courtyard',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '10 Jan 2026',
    views: 8920,
    likes: 654,
    description: 'Découvrez les parcours inspirants de nos étudiants ambassadeurs Afterbac'
  },
  {
    id: 3,
    type: 'photo',
    title: 'Coulisses - Préparation Événement Corporate',
    category: 'behind-scenes',
    project: 'Corporate',
    thumbnail: "https://images.unsplash.com/photo-1633105337193-2e6b4d04477d",
    alt: 'Professional event team setting up modern conference stage with green and blue lighting equipment',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_128e27827-1769465197032.png",
    date: '08 Jan 2026',
    views: 5670,
    likes: 423,
    description: 'Notre équipe en action lors de la mise en place d\'un événement corporate pour un client majeur'
  },
  {
    id: 4,
    type: 'photo',
    title: 'Équipe VITRINE - Brainstorming Créatif',
    category: 'team',
    project: 'Corporate',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc4d0199-1767647317910.png",
    alt: 'Young creative team collaborating around whiteboard with colorful sticky notes in bright modern office',
    fullImage: "https://images.unsplash.com/photo-1580203784503-d5d125edfba9",
    date: '05 Jan 2026',
    views: 4320,
    likes: 567,
    description: 'Session de brainstorming pour le lancement d\'une nouvelle campagne innovante'
  },
  {
    id: 5,
    type: 'video',
    title: 'ICILABOUF - Aftermovie 2025',
    category: 'events',
    project: 'ICILABOUF',
    thumbnail: "https://images.unsplash.com/photo-1560766956-b1c338d7df1f",
    alt: 'Energetic crowd at night concert with hands raised and stage lights creating dramatic atmosphere',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '20 Déc 2025',
    views: 25680,
    likes: 1892,
    description: 'Revivez les meilleurs moments du festival ICILABOUF 2025 en 3 minutes'
  },
  {
    id: 6,
    type: 'photo',
    title: 'Campagne Social Media - Lancement Produit',
    category: 'campaigns',
    project: 'Social',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3b18250-1764762767996.png",
    alt: 'Smartphone displaying colorful social media feed with engagement metrics on wooden desk with coffee',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1851a1432-1768487527873.png",
    date: '18 Déc 2025',
    views: 7890,
    likes: 645,
    description: 'Stratégie social media multi-plateforme pour le lancement d\'un nouveau produit tech'
  },
  {
    id: 7,
    type: 'photo',
    title: 'Client Success Story - Startup Tech',
    category: 'clients',
    project: 'Corporate',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1599a0ffc-1764795742046.png",
    alt: 'Successful business team celebrating achievement in modern startup office with glass walls',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e56d4e44-1769465195074.png",
    date: '15 Déc 2025',
    views: 6540,
    likes: 789,
    description: 'Collaboration réussie avec une startup tech doualaise pour leur stratégie de communication'
  },
  {
    id: 8,
    type: 'video',
    title: 'Afterbac - Salon de l\'Orientation 2025',
    category: 'events',
    project: 'Afterbac',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe7be72-1765081588000.png",
    alt: 'Large education fair with students visiting colorful university booths in convention center',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '12 Déc 2025',
    views: 11230,
    likes: 923,
    description: 'Couverture complète du Salon de l\'Orientation avec interviews et témoignages'
  },
  {
    id: 9,
    type: 'photo',
    title: 'Shooting Photo - Nouvelle Identité Visuelle',
    category: 'behind-scenes',
    project: 'Corporate',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8de4b61-1766473476800.png",
    alt: 'Professional photographer with camera on tripod shooting in studio with green backdrop and lighting',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18704dde4-1769465196309.png",
    date: '08 Déc 2025',
    views: 5430,
    likes: 456,
    description: 'Séance photo pour le rebranding complet d\'un client dans le secteur de la mode'
  },
  {
    id: 10,
    type: 'photo',
    title: 'ICILABOUF - Zone VIP Backstage',
    category: 'events',
    project: 'ICILABOUF',
    thumbnail: "https://images.unsplash.com/photo-1675063715178-7b7795b6e025",
    alt: 'Exclusive backstage VIP lounge with modern furniture and ambient lighting at music festival',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_111279afa-1769465196082.png",
    date: '05 Déc 2025',
    views: 9870,
    likes: 1234,
    description: 'Espace VIP exclusif avec rencontres artistes et expériences premium'
  },
  {
    id: 11,
    type: 'video',
    title: 'Making Of - Campagne Publicitaire TV',
    category: 'behind-scenes',
    project: 'Corporate',
    thumbnail: "https://images.unsplash.com/photo-1690237571133-0e1ac3024155",
    alt: 'Film crew with professional camera equipment shooting commercial in modern studio with director',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '01 Déc 2025',
    views: 13450,
    likes: 1567,
    description: 'Les coulisses du tournage d\'une campagne TV nationale pour une marque premium'
  },
  {
    id: 12,
    type: 'photo',
    title: 'Partenariat - Collaboration Marque Lifestyle',
    category: 'clients',
    project: 'Social',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14ceebae3-1766513023985.png",
    alt: 'Business handshake between partners in modern office with city skyline view through windows',
    fullImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1940feb94-1769465193898.png",
    date: '28 Nov 2025',
    views: 7650,
    likes: 892,
    description: 'Signature d\'un partenariat stratégique avec une marque lifestyle internationale'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    let filtered = [...mockMediaItems];

    if (currentFilters.category !== 'all') {
      filtered = filtered.filter((item) => item.category === currentFilters.category);
    }

    if (currentFilters.mediaType !== 'all') {
      filtered = filtered.filter((item) => item.type === currentFilters.mediaType);
    }

    if (currentFilters.project !== 'all') {
      filtered = filtered.filter((item) => item.project.toLowerCase() === currentFilters.project.toLowerCase());
    }

    switch (currentFilters.sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'recent':
      default:
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setFilteredItems(filtered);
  }, [currentFilters, isHydrated]);

  const handleFilterChange = (filters: FilterState) => {
    setCurrentFilters(filters);
  };

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedItem(filteredItems[newIndex]);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-muted rounded w-2/3 mb-12"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="h-96 bg-muted rounded"></div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) =>
                  <div key={i} className="h-64 bg-muted rounded"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              Galerie Média
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl">
              Galerie photos et vidéos haute qualité. Slider interactif avec filtres par projet et type de média. L&apos;énergie et l&apos;impact de l&apos;agence et de ses projets.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-headline font-bold text-primary mb-1">
                {mockMediaItems.length}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Médias au total
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-headline font-bold text-primary mb-1">
                {mockMediaItems.filter((i) => i.type === 'photo').length}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Photos
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-headline font-bold text-primary mb-1">
                {mockMediaItems.filter((i) => i.type === 'video').length}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Vidéos
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-headline font-bold text-primary mb-1">
                {Math.round(mockMediaItems.reduce((sum, item) => sum + item.views, 0) / 1000)}K
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Vues totales
              </div>
            </div>
          </div>

          {/* Slider interactif */}
          <MediaSlider items={filteredItems} onItemClick={handleItemClick} />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <MediaFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Media Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground font-body">
                  {filteredItems.length} {filteredItems.length === 1 ? 'résultat' : 'résultats'}
                </p>
              </div>
              <MediaGrid items={filteredItems} onItemClick={handleItemClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <MediaLightbox
        item={selectedItem}
        allItems={filteredItems}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate} />

    </>);

};

export default MediaGalleryInteractive;
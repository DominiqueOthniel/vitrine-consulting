import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MediaGalleryInteractive from './components/MediaGalleryInteractive';

export const metadata: Metadata = {
  title: 'Galerie Média - VITRINE CONSULTING',
  description: 'Galerie photos et vidéos haute qualité. Slider interactif avec filtres par projet et type de média. L\'énergie et l\'impact de l\'agence.',
};

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <MediaGalleryInteractive />
      </main>
    </div>
  );
}

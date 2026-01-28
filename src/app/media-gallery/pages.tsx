import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MediaGalleryInteractive from './components/MediaGalleryInteractive';

export const metadata: Metadata = {
  title: 'Galerie Média - VITRINE CONSULTING',
  description: 'Explorez notre collection de photos et vidéos haute qualité capturant l\'essence de nos projets, événements et collaborations. Découvrez l\'excellence créative de VITRINE CONSULTING à travers notre galerie média interactive.',
};

export default function MediaGalleryPage() {
  return (
    <>
      <Header />
      <MediaGalleryInteractive />
    </>
  );
}
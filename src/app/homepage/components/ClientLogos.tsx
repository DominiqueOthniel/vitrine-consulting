'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

const ClientLogos = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  const clients: Client[] = [
  {
    id: 1,
    name: 'TechCorp Cameroun',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_133cfeca4-1764679326814.png",
    alt: 'Logo moderne TechCorp Cameroun avec design minimaliste bleu et blanc'
  },
  {
    id: 2,
    name: 'Innovate Douala',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_157d7231b-1769465194917.png",
    alt: 'Logo élégant Innovate Douala avec typographie contemporaine et symbole innovation'
  },
  {
    id: 3,
    name: 'Digital Solutions',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ccc1abba-1768077265154.png",
    alt: 'Logo Digital Solutions avec icône technologique abstraite en dégradé vert'
  },
  {
    id: 4,
    name: 'Creative Studio',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19f21f18b-1767473508338.png",
    alt: 'Logo artistique Creative Studio avec palette de couleurs vibrantes et forme géométrique'
  },
  {
    id: 5,
    name: 'Media Group',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_112487b2a-1769465193162.png",
    alt: 'Logo professionnel Media Group avec typographie bold et symbole communication'
  },
  {
    id: 6,
    name: 'Event Masters',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bbab80a7-1769465196069.png",
    alt: 'Logo dynamique Event Masters avec éléments festifs et couleurs énergiques'
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-24 bg-muted rounded-lg"></div>
            )}
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-base text-muted-foreground font-body">
            Des partenaires prestigieux qui témoignent de notre excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) =>
          <div
            key={client.id}
            className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-brand transition-all duration-300 transform hover:scale-105 group">

              <div className="relative w-full h-16 overflow-hidden rounded">
                <AppImage
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />

              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ClientLogos;
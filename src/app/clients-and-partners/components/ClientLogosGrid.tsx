'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
  industry: string;
  partnership: string;
  description: string;
}

interface ClientLogosGridProps {
  clients: Client[];
}

const ClientLogosGrid: React.FC<ClientLogosGridProps> = ({ clients }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Nos Clients de Confiance
            </h2>
            <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Des partenariats stratégiques avec des marques leaders qui nous font confiance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-card rounded-lg p-6 flex items-center justify-center hover:shadow-brand transition-all duration-300 cursor-pointer border border-border"
              >
                <div className="relative w-full h-20">
                  <AppImage
                    src={client.logo}
                    alt={client.alt}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Nos Clients de Confiance
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Des partenariats stratégiques avec des marques leaders qui nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="bg-card rounded-lg p-6 flex items-center justify-center hover:shadow-brand transition-all duration-300 cursor-pointer border border-border group"
            >
              <div className="relative w-full h-20">
                <AppImage
                  src={client.logo}
                  alt={client.alt}
                  className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {selectedClient && (
          <div
            className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClient(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-2xl w-full p-8 shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                    {selectedClient.name}
                  </h3>
                  <p className="text-sm font-body text-primary font-semibold">
                    {selectedClient.industry}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fermer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-background rounded-lg p-4 flex items-center justify-center h-32">
                  <AppImage
                    src={selectedClient.logo}
                    alt={selectedClient.alt}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-cta font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Type de Partenariat
                  </h4>
                  <p className="text-base font-body text-foreground">
                    {selectedClient.partnership}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-cta font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Description
                  </h4>
                  <p className="text-base font-body text-foreground leading-relaxed">
                    {selectedClient.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientLogosGrid;
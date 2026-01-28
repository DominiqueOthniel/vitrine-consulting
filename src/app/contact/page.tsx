import type { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/common/Header';
import ContactForm from './components/ContactForm';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Contact - VITRINE CONSULTING',
  description:
    "Prenez rendez-vous avec l'équipe VITRINE CONSULTING. Formulaire de contact, email, téléphone, réseaux sociaux et carte.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="py-16 lg:py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Prenez rendez-vous avec notre équipe. Nous répondons sous 24h.
            </p>
          </div>
        </section>

        <section id="form" className="py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
                  Formulaire de contact
                </h2>
                <Suspense fallback={<div className="animate-pulse h-80 bg-muted rounded-lg" />}>
                  <ContactForm />
                </Suspense>
              </div>

              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
                    Coordonnées
                  </h2>
                  <ul className="space-y-4 font-body text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Email :</strong>{' '}
                      <a
                        href="mailto:contact@vitrine-consulting.fr"
                        className="text-primary hover:underline"
                      >
                        contact@vitrine-consulting.fr
                      </a>
                    </li>
                    <li>
                      <strong className="text-foreground">Téléphone :</strong>{' '}
                      <a
                        href="tel:+237670123456"
                        className="text-primary hover:underline"
                      >
                        +237 6 70 12 34 56
                      </a>
                    </li>
                    <li>
                      <strong className="text-foreground">Réseaux :</strong>{' '}
                      <span className="inline-flex gap-3 mt-2">
                        <a
                          href="#"
                          className="text-primary hover:underline"
                          aria-label="LinkedIn"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="#"
                          className="text-primary hover:underline"
                          aria-label="Twitter"
                        >
                          Twitter
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
                    Carte
                  </h2>
                  <div className="rounded-xl overflow-hidden border border-border shadow-subtle aspect-video bg-muted">
                    <iframe
                      src="https://www.google.com/maps?q=Douala,+Cameroun&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Carte Google Maps - VITRINE CONSULTING Douala"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground mb-4">
              Prenez rendez-vous avec notre équipe
            </h2>
            <p className="text-lg text-primary-foreground/90 font-body mb-8">
              Remplissez le formulaire ou appelez-nous pour un échange personnalisé.
            </p>
            <a
              href="#form"
              className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-lg font-cta font-semibold hover:bg-background transition-all duration-300 shadow-elevated"
            >
              Accéder au formulaire
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesClient from './components/ServicesClient';

export const metadata: Metadata = {
  title: 'Agence & Services - VITRINE CONSULTING',
  description: 'Branding, Web & mobile, Communication multicanal, Marketing & analytics, Accompagnement sur-mesure. Méthodologie en 4 étapes.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-primary via-accent to-brand-blue text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-cta font-semibold uppercase tracking-wider text-white/90 mb-4">Expertise & Innovation</p>
              <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 leading-tight">Agence & Services</h1>
              <p className="text-lg lg:text-xl font-body text-white/90 leading-relaxed max-w-3xl">
                Présentation condensée de l&apos;agence. Cinq piliers : branding, web & mobile, communication multicanal, marketing stratégique, accompagnement sur-mesure.
              </p>
            </div>
          </div>
        </section>
        <ServicesClient />
        <section className="bg-gradient-to-r from-primary to-accent py-16 mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6">
              Découvrez comment nous pouvons transformer votre communication
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-primary rounded-lg font-cta font-semibold hover:bg-background">
                Prendre contact
              </a>
              <a href="/projects" className="px-8 py-4 border-2 border-white text-white rounded-lg font-cta font-semibold hover:bg-white hover:text-primary">
                Voir nos projets
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} VITRINE CONSULTING</p>
            <div className="flex gap-6">
              <a href="/homepage" className="text-sm text-muted-foreground hover:text-primary">Mentions Légales</a>
              <a href="/homepage" className="text-sm text-muted-foreground hover:text-primary">Politique de Confidentialité</a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

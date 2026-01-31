import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesClient from './components/ServicesClient';
import ServicesPageShell from './components/ServicesPageShell';

export const metadata: Metadata = {
  title: 'Agence & Services - VITRINE CONSULTING',
  description: 'Branding, Web & mobile, Communication multicanal, Marketing & analytics, Accompagnement sur-mesure. Méthodologie en 4 étapes.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ServicesPageShell>
          <ServicesClient />
        </ServicesPageShell>
      </main>
    </div>
  );
}

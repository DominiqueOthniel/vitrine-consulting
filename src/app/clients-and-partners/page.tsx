import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ClientsPartnersInteractive from './components/ClientsPartnersInteractive';

export const metadata: Metadata = {
  title: 'Clients & Partenaires - VITRINE CONSULTING',
  description: 'Découvrez nos clients satisfaits, partenaires stratégiques et histoires de réussite. VITRINE CONSULTING accompagne 150+ marques camerounaises et africaines dans leur transformation communication avec des résultats mesurables et un taux de satisfaction de 98%.',
};

export default function ClientsPartnersPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ClientsPartnersInteractive />
      </main>
    </>
  );
}
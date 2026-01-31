import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactPageContent from './components/ContactPageContent';
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
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}

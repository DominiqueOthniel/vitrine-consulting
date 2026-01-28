import type { Metadata } from 'next';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Accueil - VITRINE CONSULTING',
  description:
    'Transformons votre communication en impact culturel. VITRINE CONSULTING, votre partenaire stratégique dans le paysage médiatique camerounais pour amplifier votre vision avec créativité et expertise.',
};

export default function Home() {
  return <HomepageInteractive />;
}


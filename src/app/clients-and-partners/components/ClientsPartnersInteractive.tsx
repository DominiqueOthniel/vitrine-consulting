'use client';

import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ClientLogosGrid from './ClientLogosGrid';
import TestimonialsCarousel from './TestimonialsCarousel';
import SuccessStoriesSection from './SuccessStoriesSection';
import IndustryRecognitionSection from './IndustryRecognitionSection';
import PartnershipTimelineSection from './PartnershipTimelineSection';
import CTASection from './CTASection';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
  industry: string;
  partnership: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
  videoUrl?: string;
}

interface SuccessMetric {
  label: string;
  value: string;
}

interface SuccessStory {
  id: number;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  alt: string;
  metrics: SuccessMetric[];
}

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  clientCount: number;
  icon: string;
}

const ClientsPartnersInteractive: React.FC = () => {
  const heroData = {
    title: "Nos Clients & Partenaires",
    subtitle: "Des collaborations stratégiques qui transforment les défis en succès. Logos, témoignages et moments clés d'activation."
  };

  const stats: Stat[] = [
  {
    id: 1,
    value: "150+",
    label: "Clients Satisfaits",
    icon: "UserGroupIcon"
  },
  {
    id: 2,
    value: "98%",
    label: "Taux de Satisfaction",
    icon: "HeartIcon"
  },
  {
    id: 3,
    value: "250+",
    label: "Projets Réalisés",
    icon: "RocketLaunchIcon"
  },
  {
    id: 4,
    value: "10+",
    label: "Années d'Expérience",
    icon: "TrophyIcon"
  }];


  const clients: Client[] = [
  {
    id: 1,
    name: "TechVision Cameroun",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e118cd76-1764655048794.png",
    alt: "TechVision Cameroun logo with blue and white geometric design on modern office background",
    industry: "Technologie & Innovation",
    partnership: "Partenariat Stratégique Long Terme",
    description: "Collaboration depuis 2020 pour le développement de leur stratégie de communication digitale et l'organisation d'événements tech majeurs au Cameroun et en Afrique centrale."
  },
  {
    id: 2,
    name: "Éco Solutions",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10e7f45a9-1766476082479.png",
    alt: "Éco Solutions logo featuring green leaf symbol with sustainable design elements",
    industry: "Développement Durable",
    partnership: "Conseil en Communication RSE",
    description: "Accompagnement dans la création de campagnes de sensibilisation environnementale et organisation d'événements éco-responsables au Cameroun."
  },
  {
    id: 3,
    name: "Mode & Style Douala",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1048c2bfe-1769465193884.png",
    alt: "Mode & Style Douala logo with elegant fashion-forward typography and modern aesthetic",
    industry: "Mode & Luxe",
    partnership: "Gestion d'Événements Fashion",
    description: "Organisation de défilés de mode, lancements de collections et stratégie de communication pour le marché du luxe camerounais et africain."
  },
  {
    id: 4,
    name: "StartUp Hub",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_189a4362f-1767125479940.png",
    alt: "StartUp Hub logo with dynamic rocket icon and modern tech startup branding",
    industry: "Incubateur Startups",
    partnership: "Partenaire Média & Événements",
    description: "Création de contenu média pour startups émergentes au Cameroun et organisation de pitch competitions et networking events dans les grandes villes camerounaises."
  },
  {
    id: 5,
    name: "Santé Plus",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9f538c9-1767962464710.png",
    alt: "Santé Plus logo with medical cross symbol in vibrant health-focused colors",
    industry: "Santé & Bien-être",
    partnership: "Communication Santé Publique",
    description: "Développement de campagnes de prévention santé et organisation de forums médicaux et conférences bien-être au Cameroun."
  },
  {
    id: 6,
    name: "Éducation Nouvelle",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1510a7be4-1766800846725.png",
    alt: "Éducation Nouvelle logo with graduation cap and book symbols in educational blue tones",
    industry: "Éducation & Formation",
    partnership: "Stratégie de Communication Éducative",
    description: "Accompagnement dans la transformation digitale de l'éducation au Cameroun et organisation de salons étudiants et forums d'orientation dans les grandes villes."
  },
  {
    id: 7,
    name: "Gastronomie Camerounaise",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1c78302-1769465195086.png",
    alt: "Gastronomie Camerounaise logo with chef's hat and Cameroonian culinary heritage design",
    industry: "Restauration & Gastronomie",
    partnership: "Marketing Culinaire",
    description: "Création de contenu gastronomique, organisation d'événements culinaires et stratégie de communication pour restaurants premium au Cameroun."
  },
  {
    id: 8,
    name: "Sport & Performance",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7d35828-1769465195029.png",
    alt: "Sport & Performance logo with dynamic athlete silhouette and performance metrics design",
    industry: "Sport & Fitness",
    partnership: "Communication Sportive",
    description: "Gestion de la communication pour événements sportifs majeurs au Cameroun et développement de stratégies d'engagement pour clubs sportifs locaux."
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aminata Diallo",
    position: "Directrice Marketing",
    company: "TechVision Cameroun",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104169822-1763294946041.png",
    alt: "Professional headshot of Aminata Diallo, woman in navy blazer smiling confidently",
    quote: "VITRINE CONSULTING a transformé notre approche de la communication digitale. Leur expertise et leur créativité ont permis d'augmenter notre visibilité de 300% en seulement 6 mois. Une équipe exceptionnelle qui comprend vraiment les enjeux du marché camerounais.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    name: "Marc Nkeng",
    position: "Fondateur & CEO",
    company: "Éco Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9c20dd1-1763296910707.png",
    alt: "Professional portrait of Marc Nkeng, man with short brown hair in gray suit with warm smile",
    quote: "Leur approche stratégique et leur sensibilité aux enjeux environnementaux ont fait toute la différence. Les événements organisés par VITRINE ont généré un engagement communautaire exceptionnel et renforcé notre positionnement de leader en développement durable au Cameroun.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabelle Mvondo",
    position: "Directrice Créative",
    company: "Mode & Style Douala",
    image: "https://images.unsplash.com/photo-1690571398068-bf728d870ea2",
    alt: "Elegant portrait of Isabelle Mvondo, woman with dark hair in black turtleneck with artistic background",
    quote: "VITRINE CONSULTING comprend l'univers du luxe et de la mode comme personne. Leur capacité à créer des événements mémorables et à raconter notre histoire de marque a dépassé toutes nos attentes. Un partenaire indispensable pour notre croissance.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 4,
    name: "Thomas Bernard",
    position: "Directeur Général",
    company: "StartUp Hub",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1752f228f-1763294014332.png",
    alt: "Casual professional photo of Thomas Bernard, man with beard in blue shirt in modern office setting",
    quote: "Grâce à VITRINE, nos startups bénéficient d'une visibilité exceptionnelle. Leur réseau, leur expertise en communication et leur capacité à créer des événements impactants ont contribué au succès de plus de 50 startups de notre écosystème camerounais.",
    rating: 5
  }];


  const successStories: SuccessStory[] = [
  {
    id: 1,
    clientName: "TechVision Cameroun",
    industry: "Technologie",
    challenge: "TechVision Cameroun cherchait à se positionner comme leader d'opinion dans l'innovation technologique camerounaise et africaine tout en augmentant sa visibilité auprès des jeunes talents et des investisseurs.",
    solution: "Nous avons développé une stratégie de communication 360° incluant la création de contenu thought leadership, l'organisation d'événements tech exclusifs, et une campagne digitale ciblée sur les plateformes préférées de leur audience.",
    results: "En 12 mois, TechVision a multiplié par 4 sa présence média, attiré 150+ candidatures qualifiées, et levé 3 milliards FCFA grâce à la visibilité générée par nos événements.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1141dc8c2-1768842226128.png",
    alt: "Modern tech office with diverse team collaborating around large screens showing data analytics",
    metrics: [
    { label: "Visibilité Média", value: "+400%" },
    { label: "Candidatures", value: "150+" },
    { label: "Levée de Fonds", value: "3 milliards FCFA" },
    { label: "Engagement Social", value: "+250%" }]

  },
  {
    id: 2,
    clientName: "Éco Solutions",
    industry: "Développement Durable",
    challenge: "Éco Solutions avait besoin de sensibiliser un public plus large aux enjeux environnementaux tout en positionnant leur marque comme acteur majeur de la transition écologique au Cameroun.",
    solution: "Création d'une campagne de communication RSE multi-canal, organisation d'événements éco-responsables à fort impact, et développement d'un programme d'ambassadeurs pour amplifier le message.",
    results: "La campagne a touché 2 millions de personnes, généré 500+ partenariats avec des entreprises engagées, et positionné Éco Solutions comme référence en développement durable au Cameroun.",
    image: "https://images.unsplash.com/photo-1668689219576-10cc5efaca06",
    alt: "Outdoor sustainability event with people planting trees in urban green space with solar panels visible",
    metrics: [
    { label: "Portée Campagne", value: "2M+" },
    { label: "Partenariats", value: "500+" },
    { label: "Taux d'Engagement", value: "85%" },
    { label: "Impact Médiatique", value: "50+ articles" }]

  },
  {
    id: 3,
    clientName: "Mode & Style Douala",
    industry: "Mode & Luxe",
    challenge: "Mode & Style Douala souhaitait lancer une nouvelle collection tout en renforçant son positionnement premium et en attirant une clientèle régionale et internationale plus jeune sans perdre son ADN luxe.",
    solution: "Organisation d'un défilé de mode exclusif combinant tradition et innovation, création de contenu vidéo premium pour les réseaux sociaux, et partenariats stratégiques avec des influenceurs mode de renom.",
    results: "Le lancement a généré 6 milliards FCFA de ventes en 3 mois, augmenté la notoriété de marque de 180%, et attiré 5000+ nouveaux clients régionaux et internationaux.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab547b11-1768406620099.png",
    alt: "Elegant fashion runway show with models in haute couture designs and sophisticated lighting",
    metrics: [
    { label: "Ventes Générées", value: "6 milliards FCFA" },
    { label: "Notoriété", value: "+180%" },
    { label: "Nouveaux Clients", value: "5000+" },
    { label: "Couverture Presse", value: "30+ médias" }]

  }];


  const awards: Award[] = [
  {
    id: 1,
    title: "Meilleure Agence Communication 2025",
    organization: "Prix Marketing Cameroun",
    year: "2025",
    category: "Communication Digitale",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_160e6ebaf-1764652764896.png",
    alt: "Gold trophy award with Prix Marketing Cameroun branding on elegant display stand",
    verificationUrl: "#"
  },
  {
    id: 2,
    title: "Excellence en Événementiel",
    organization: "Event Management Cameroun",
    year: "2024",
    category: "Événements Corporate",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17689a3e5-1769465196082.png",
    alt: "Silver award plaque with Event Management Cameroun seal and excellence ribbon",
    verificationUrl: "#"
  },
  {
    id: 3,
    title: "Innovation Communication 2024",
    organization: "Conseil Innovation Cameroun",
    year: "2024",
    category: "Stratégie Digitale",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17740afe1-1766990358541.png",
    alt: "Modern crystal award trophy with innovation symbol and Conseil Innovation Cameroun logo",
    verificationUrl: "#"
  },
  {
    id: 4,
    title: "Certification Protection des Données",
    organization: "Autorité de Protection des Données Cameroun",
    year: "2023",
    category: "Protection des Données",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1028b76bd-1769465194878.png",
    alt: "Official certification badge with security shield and data protection symbols",
    verificationUrl: "#"
  },
  {
    id: 5,
    title: "Top Agence Jeunesse 2023",
    organization: "Institut Marketing Jeunesse Cameroun",
    year: "2023",
    category: "Marketing Jeunes",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fac0b7d0-1769465196093.png",
    alt: "Colorful youth marketing award with dynamic design and Institut Marketing Jeunesse Cameroun branding",
    verificationUrl: "#"
  },
  {
    id: 6,
    title: "Certification ISO 9001",
    organization: "Organisme Camerounais de Certification",
    year: "2022",
    category: "Qualité & Management",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_166ccd0e5-1769465194667.png",
    alt: "ISO 9001 certification seal with Organisme Camerounais de Certification logo and quality management symbols",
    verificationUrl: "#"
  }];


  const timeline: TimelineEvent[] = [
  {
    id: 1,
    year: "2015",
    title: "Fondation de VITRINE CONSULTING",
    description: "Création de l'agence avec une vision claire: transformer la communication en impact culturel mesurable. Premiers clients dans le secteur tech et startup.",
    clientCount: 15,
    icon: "RocketLaunchIcon"
  },
  {
    id: 2,
    year: "2017",
    title: "Expansion Services Événementiels",
    description: "Lancement de notre division événementielle avec l'organisation de notre premier grand événement tech réunissant 500+ participants.",
    clientCount: 35,
    icon: "CalendarDaysIcon"
  },
  {
    id: 3,
    year: "2019",
    title: "Lancement ICILABOUF",
    description: "Création de notre média phare dédié à la jeunesse camerounaise, devenant rapidement une référence dans le paysage médiatique jeune au Cameroun et en Afrique centrale.",
    clientCount: 60,
    icon: "NewspaperIcon"
  },
  {
    id: 4,
    year: "2021",
    title: "Certification RGPD & ISO 9001",
    description: "Obtention de certifications majeures renforçant notre crédibilité et notre engagement envers la qualité et la protection des données.",
    clientCount: 95,
    icon: "ShieldCheckIcon"
  },
  {
    id: 5,
    year: "2023",
    title: "100+ Clients & Reconnaissance Nationale",
    description: "Franchissement du cap des 100 clients satisfaits et réception de multiples prix nationaux pour notre excellence en communication.",
    clientCount: 120,
    icon: "TrophyIcon"
  },
  {
    id: 6,
    year: "2025",
    title: "Leadership Marché & Innovation",
    description: "Positionnement comme leader du marché camerounais et africain de la communication jeunesse avec 150+ clients et lancement de nouvelles solutions innovantes.",
    clientCount: 150,
    icon: "SparklesIcon"
  }];


  return (
    <div className="min-h-screen bg-background">
      <HeroSection title={heroData.title} subtitle={heroData.subtitle} />
      <section className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-headline font-bold text-primary-foreground">
            Ils nous font confiance pour générer de l&apos;impact
          </p>
        </div>
      </section>
      <StatsSection stats={stats} />
      <ClientLogosGrid clients={clients} />
      <TestimonialsCarousel testimonials={testimonials} />
      <SuccessStoriesSection stories={successStories} />
      <IndustryRecognitionSection awards={awards} />
      <PartnershipTimelineSection timeline={timeline} />
      <CTASection />
    </div>);

};

export default ClientsPartnersInteractive;
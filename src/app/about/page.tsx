import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutHeroSection from './components/AboutHeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import CompanyStory from './components/CompanyStory';
import TeamSection from './components/TeamSection';
import MethodologySection from './components/MethodologySection';
import CultureVideoGallery from './components/CultureVideoGallery';
import AwardsRecognition from './components/AwardsRecognition';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'À Propos - VITRINE CONSULTING',
  description: "Découvrez l'histoire, l'équipe et la méthodologie de VITRINE CONSULTING, votre partenaire stratégique en communication et événementiel au Cameroun et en Afrique centrale."
};

export default function AboutPage() {
  const heroData = {
    title: "L\'Excellence en Communication & Événementiel",
    subtitle: "Notre Agence",
    description: "VITRINE CONSULTING incarne l'essence de la vitrine - une présentation premium de l'excellence en communication et événements. Nous sommes le pont entre les agences traditionnelles et les expériences numériques modernes, avec une expertise approfondie dans l'engagement des jeunes à travers des projets comme ICILABOUF et Afterbac.",
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_171170bd3-1764687877901.png",
    heroImageAlt: "Équipe professionnelle diverse collaborant autour d'une table moderne avec ordinateurs portables et documents stratégiques"
  };

  const milestones = [
  {
    year: "2009",
    title: "Fondation de VITRINE",
    description: "Création de l'agence avec une vision claire : transformer la communication en impact culturel mesurable pour les marques au Cameroun.",
    icon: "RocketLaunchIcon"
  },
  {
    year: "2013",
    title: "Expansion Régionale",
    description: "Déploiement de projets dans plusieurs grandes villes du Cameroun (Douala, Yaoundé, Bafoussam) et d'Afrique centrale, établissant notre présence comme acteur clé de la communication jeunesse.",
    icon: "MapPinIcon"
  },
  {
    year: "2017",
    title: "Lancement ICILABOUF",
    description: "Création de notre projet phare ICILABOUF, révolutionnant l'engagement des jeunes dans le secteur de la restauration et de l'événementiel.",
    icon: "SparklesIcon"
  },
  {
    year: "2020",
    title: "Innovation Digitale",
    description: "Pivot stratégique vers les expériences hybrides, combinant événements physiques et engagement numérique pour une portée maximale.",
    icon: "ComputerDesktopIcon"
  },
  {
    year: "2023",
    title: "Leadership Reconnu",
    description: "Reconnaissance comme agence de communication de l'année, avec plus de 200 projets réussis et 98% de satisfaction client.",
    icon: "TrophyIcon"
  }];


  const teamMembers = [
  {
    id: 1,
    name: "Aminata Diallo",
    role: "Directrice Générale & Fondatrice",
    bio: "Visionnaire passionnée avec 15 ans d'expérience en stratégie de communication et engagement jeunesse au Cameroun et en Afrique centrale.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0007e95-1763295050768.png",
    imageAlt: "Femme professionnelle aux cheveux bruns courts en blazer bleu marine souriant avec confiance dans un bureau moderne",
    expertise: ["Stratégie", "Leadership", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Marc Nkeng",
    role: "Directeur Créatif",
    bio: "Expert en storytelling visuel et création de campagnes qui captivent et convertissent les audiences cibles camerounaises et africaines.",
    image: "https://images.unsplash.com/photo-1687976474679-d2c1c26497c9",
    imageAlt: "Homme créatif aux cheveux noirs en chemise blanche tenant un carnet de croquis dans un studio lumineux",
    expertise: ["Design", "Branding", "Créativité"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Isabelle Mvondo",
    role: "Directrice Stratégie Digitale",
    bio: "Spécialiste en transformation digitale et engagement des jeunes générations à travers les plateformes innovantes au Cameroun.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14040587e-1763300444140.png",
    imageAlt: "Femme professionnelle aux cheveux blonds en pull gris travaillant sur un ordinateur portable dans un espace de coworking moderne",
    expertise: ["Digital", "Analytics", "Social Media"],
    social: {
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Thomas Nkengue",
    role: "Directeur Événementiel",
    bio: "Orchestrateur d'expériences mémorables avec une expertise en production d'événements de grande envergure au Cameroun.",
    image: "https://images.unsplash.com/photo-1693463651833-8c3a322dd212",
    imageAlt: "Homme professionnel aux cheveux bruns en costume gris tenant un micro lors d'un événement d'entreprise",
    expertise: ["Production", "Logistique", "Expérience"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "Léa Tchoupa",
    role: "Responsable Relations Clients",
    bio: "Experte en gestion de comptes et satisfaction client, garantissant des partenariats durables et fructueux avec les entreprises camerounaises.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e851457-1763299656780.png",
    imageAlt: "Femme souriante aux cheveux châtains en blazer vert émeraude lors d'une réunion client dans un bureau lumineux",
    expertise: ["Relations", "Communication", "Satisfaction"],
    social: {
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Alexandre Mvondo",
    role: "Chef de Projet Senior",
    bio: "Gestionnaire de projets aguerri avec un talent pour transformer les visions complexes en réalités exécutables dans le contexte camerounais.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_125809ed7-1763299658253.png",
    imageAlt: "Homme professionnel aux lunettes et chemise bleue analysant des documents de projet sur un tableau blanc",
    expertise: ["Gestion", "Coordination", "Livraison"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }];


  const methodologySteps = [
  {
    number: "01",
    title: "Découverte & Analyse",
    description: "Immersion profonde dans votre marque, vos objectifs et votre audience pour établir une stratégie sur mesure.",
    icon: "MagnifyingGlassIcon",
    color: "bg-primary"
  },
  {
    number: "02",
    title: "Stratégie Créative",
    description: "Développement d\'une approche innovante qui allie créativité artistique et intelligence data-driven.",
    icon: "LightBulbIcon",
    color: "bg-accent"
  },
  {
    number: "03",
    title: "Exécution Excellence",
    description: "Mise en œuvre méticuleuse avec attention aux détails et coordination parfaite de tous les éléments.",
    icon: "RocketLaunchIcon",
    color: "bg-brand-green"
  },
  {
    number: "04",
    title: "Mesure & Optimisation",
    description: "Analyse des résultats et optimisation continue pour maximiser l\'impact et le retour sur investissement.",
    icon: "ChartBarIcon",
    color: "bg-conversion-accent"
  }];


  const videos = [
  {
    id: 1,
    title: "Coulisses d\'un Événement ICILABOUF",
    category: "Événements",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_100bc98f9-1768171945495.png",
    thumbnailAlt: "Équipe préparant un événement avec décoration colorée et éclairage professionnel dans une salle moderne",
    duration: "3:45",
    views: "12.5K"
  },
  {
    id: 2,
    title: "Notre Culture d\'Entreprise",
    category: "Culture",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1a44a6e2d-1767640916003.png",
    thumbnailAlt: "Équipe diverse riant ensemble lors d\'une réunion créative dans un bureau lumineux avec plantes vertes",
    duration: "2:30",
    views: "8.2K"
  },
  {
    id: 3,
    title: "Processus de Création de Campagne",
    category: "Méthodologie",
    thumbnail: "https://images.unsplash.com/photo-1571573680328-f20cbb17e7ba",
    thumbnailAlt: "Équipe créative travaillant sur des moodboards et croquis lors d\'une session de brainstorming",
    duration: "4:15",
    views: "15.7K"
  },
  {
    id: 4,
    title: "Témoignage Client - Projet Afterbac",
    category: "Témoignages",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14bdf029c-1767966443078.png",
    thumbnailAlt: "Client satisfait en costume gris parlant face caméra dans un bureau professionnel avec vue urbaine",
    duration: "2:50",
    views: "6.9K"
  },
  {
    id: 5,
    title: "Innovation Digitale chez VITRINE",
    category: "Innovation",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_16073ccd5-1766925322121.png",
    thumbnailAlt: "Développeurs travaillant sur des écrans multiples avec code et interfaces utilisateur modernes",
    duration: "3:20",
    views: "10.3K"
  },
  {
    id: 6,
    title: "Journée Type d\'un Chef de Projet",
    category: "Culture",
    thumbnail: "https://images.unsplash.com/photo-1585393246110-8ba80704dab4",
    thumbnailAlt: "Chef de projet organisant des post-its colorés sur un tableau blanc lors d'une planification stratégique",
    duration: "4:00",
    views: "7.8K"
  }];


  const videoCategories = ["Tous", "Événements", "Culture", "Méthodologie", "Témoignages", "Innovation"];

  const awards = [
  {
    id: 1,
    year: "2024",
    title: "Agence de Communication de l'Année",
    organization: "Prix de l'Excellence Marketing Cameroun",
    category: "Communication",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1024f81af-1769465193831.png",
    logoAlt: "Logo doré du Prix de l'Excellence Marketing Cameroun avec couronne de lauriers"
  },
  {
    id: 2,
    year: "2023",
    title: "Meilleure Campagne Jeunesse",
    organization: "Festival de la Créativité Camerounaise",
    category: "Créativité",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17215efba-1769465195078.png",
    logoAlt: "Logo coloré du Festival de la Créativité Camerounaise avec palette artistique"
  },
  {
    id: 3,
    year: "2023",
    title: "Innovation Digitale",
    organization: "Digital Awards Douala",
    category: "Innovation",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1586d50a4-1769465196514.png",
    logoAlt: "Logo moderne des Digital Awards Douala avec icône technologique"
  },
  {
    id: 4,
    year: "2022",
    title: "Excellence en Événementiel",
    organization: "Trophées de l\'Événement",
    category: "Événementiel",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13511fa86-1769465195863.png",
    logoAlt: "Logo élégant des Trophées de l'Événement avec étoile dorée"
  }];


  const testimonials = [
  {
    id: 1,
    name: "Jean-Baptiste Nkeng",
    role: "Directeur Marketing",
    company: "TechStart Cameroun",
    content: "VITRINE CONSULTING a transformé notre approche de communication. Leur expertise en engagement jeunesse et leur créativité stratégique ont généré des résultats exceptionnels pour notre marque.",
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1963b3c92-1765307673976.png",
    imageAlt: "Homme d'affaires souriant en costume bleu marine dans un bureau moderne avec vue urbaine",
    videoThumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_151f66f81-1765500472061.png",
    videoThumbnailAlt: "Homme professionnel enregistrant un témoignage vidéo dans un studio avec éclairage professionnel"
  },
  {
    id: 2,
    name: "Marie-Claire Tchoupa",
    role: "CEO",
    company: "Innovate Solutions",
    content: "L'équipe de VITRINE a dépassé toutes nos attentes. Leur méthodologie structurée et leur passion pour l'excellence ont fait de notre campagne un succès retentissant.",
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeb36939-1763296764391.png",
    imageAlt: "Femme CEO confiante en blazer gris dans un bureau exécutif avec bibliothèque en arrière-plan",
    videoThumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2982c32-1764656358558.png",
    videoThumbnailAlt: "Femme professionnelle parlant face caméra lors d'un enregistrement de témoignage client"
  },
  {
    id: 3,
    name: "Paul Mvondo",
    role: "Fondateur",
    company: "Startup Académie",
    content: "Travailler avec VITRINE a été une révélation. Leur compréhension profonde du marché camerounais et leur capacité à créer des connexions authentiques avec notre audience ont été déterminantes.",
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140c910a6-1763294037408.png",
    imageAlt: "Entrepreneur souriant en chemise blanche dans un espace de coworking moderne avec tableau blanc"
  }];


  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHeroSection heroData={heroData} />
      <WhoWeAreSection />
      <CompanyStory milestones={milestones} />
      <TeamSection teamMembers={teamMembers} />
      <MethodologySection steps={methodologySteps} />
      <CultureVideoGallery videos={videos} categories={videoCategories} />
      <AwardsRecognition awards={awards} />
      <TestimonialCarousel testimonials={testimonials} />
      <CTASection />
    </main>);

}
'use client';

import React, { useMemo } from 'react';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import TargetClientsWhyChooseEcosystemSection from './TargetClientsWhyChooseEcosystemSection';
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
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const heroData = {
    title: t.clientsPartners.heroTitle,
    subtitle: t.clientsPartners.heroSubtitle,
  };

  const stats: Stat[] = useMemo(() => {
    const labels = t.clientsPartners.statsLabels ?? translations.fr.clientsPartners.statsLabels;
    return [
      { id: 1, value: '150+', label: labels[0], icon: 'UserGroupIcon' },
      { id: 2, value: '98%', label: labels[1], icon: 'HeartIcon' },
      { id: 3, value: '250+', label: labels[2], icon: 'RocketLaunchIcon' },
      { id: 4, value: '10+', label: labels[3], icon: 'TrophyIcon' },
    ];
  }, [t]);


  const clients: Client[] = [
  {
    id: 1,
    name: "Ça bouge où ?",
    logo: "/assets/images/logo-ca-bouge-ou.png",
    alt: "Logo Ça bouge où ?",
    industry: "Média & Événementiel",
    partnership: "Partenariat Média",
    description: "Plateforme média et événementielle dédiée à la jeunesse camerounaise."
  },
  {
    id: 2,
    name: "Ici la bouf",
    logo: "/assets/images/logo-ici-la-bouf.png",
    alt: "Logo Ici la bouf",
    industry: "Restauration & Gastronomie",
    partnership: "Communication & Branding",
    description: "Marque gastronomique alliant lieu et restauration avec une identité forte."
  },
  {
    id: 3,
    name: "Projet AfterBac",
    logo: "/assets/images/logo-afterbac.png",
    alt: "Logo Projet AfterBac",
    industry: "Éducation & Orientation",
    partnership: "Stratégie de Communication Éducative",
    description: "Solution d'orientation post-bac pour les étudiants camerounais."
  }];


  const TESTIMONIALS_CONFIG = [
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_104169822-1763294946041.png', alt: 'Aminata Diallo, Directrice Marketing', videoUrl: 'https://www.youtube.com/watch?v=example1' as string | undefined },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e9c20dd1-1763296910707.png', alt: 'Marc Nkeng, Fondateur & CEO', videoUrl: undefined },
    { image: 'https://images.unsplash.com/photo-1690571398068-bf728d870ea2', alt: 'Isabelle Mvondo, Directrice Créative', videoUrl: 'https://www.youtube.com/watch?v=example2' as string | undefined },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1752f228f-1763294014332.png', alt: 'Thomas Bernard, Directeur Général', videoUrl: undefined },
  ] as const;

  const testimonials: Testimonial[] = useMemo(() => {
    const cp = t.clientsPartners as unknown as { testimonials?: Array<{ name: string; position: string; company: string; quote: string }> };
    const list = cp.testimonials ?? (translations.fr.clientsPartners as unknown as typeof cp).testimonials;
    return (list ?? []).map((item, i) => ({
      id: i + 1,
      name: item.name,
      position: item.position,
      company: item.company,
      quote: item.quote,
      image: TESTIMONIALS_CONFIG[i]?.image ?? '',
      alt: TESTIMONIALS_CONFIG[i]?.alt ?? item.name,
      rating: 5,
      videoUrl: TESTIMONIALS_CONFIG[i]?.videoUrl,
    }));
  }, [t]);


  const SUCCESS_STORIES_CONFIG = [
    { image: '/assets/images/bureau.jpg', alt: 'Bureau VITRINE CONSULTING - espace de travail moderne avec branding, écrans et postes dédiés' },
    { image: 'https://images.unsplash.com/photo-1668689219576-10cc5efaca06', alt: 'Outdoor sustainability event with people planting trees in urban green space with solar panels visible' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ab547b11-1768406620099.png', alt: 'Elegant fashion runway show with models in haute couture designs and sophisticated lighting' },
  ] as const;

  const successStories: SuccessStory[] = useMemo(() => {
    const cp = t.clientsPartners as unknown as { successStories?: Array<{ clientName: string; industry: string; challenge: string; solution: string; results: string; metrics: Array<{ label: string; value: string }> }> };
    const stories = cp.successStories ?? (translations.fr.clientsPartners as unknown as typeof cp).successStories;
    return (stories ?? []).map((s, i) => ({
      id: i + 1,
      clientName: s.clientName,
      industry: s.industry,
      challenge: s.challenge,
      solution: s.solution,
      results: s.results,
      image: SUCCESS_STORIES_CONFIG[i]?.image ?? '',
      alt: SUCCESS_STORIES_CONFIG[i]?.alt ?? s.clientName,
      metrics: [...(s.metrics ?? [])],
    }));
  }, [t]);


  const AWARDS_CONFIG = [
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_160e6ebaf-1764652764896.png', alt: 'Gold trophy award with Prix Marketing Cameroun branding on elegant display stand' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17689a3e5-1769465196082.png', alt: 'Silver award plaque with Event Management Cameroun seal and excellence ribbon' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17740afe1-1766990358541.png', alt: 'Modern crystal award trophy with innovation symbol and Conseil Innovation Cameroun logo' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1028b76bd-1769465194878.png', alt: 'Official certification badge with security shield and data protection symbols' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fac0b7d0-1769465196093.png', alt: 'Colorful youth marketing award with dynamic design and Institut Marketing Jeunesse Cameroun branding' },
    { image: 'https://img.rocket.new/generatedImages/rocket_gen_img_166ccd0e5-1769465194667.png', alt: 'ISO 9001 certification seal with Organisme Camerounais de Certification logo and quality management symbols' },
  ] as const;

  const awards: Award[] = useMemo(() => {
    const cp = t.clientsPartners as unknown as { awards?: Array<{ title: string; organization: string; year: string; category: string }> };
    const list = cp.awards ?? (translations.fr.clientsPartners as unknown as typeof cp).awards;
    return (list ?? []).map((a, i) => ({
      id: i + 1,
      title: a.title,
      organization: a.organization,
      year: a.year,
      category: a.category,
      image: AWARDS_CONFIG[i]?.image ?? '',
      alt: AWARDS_CONFIG[i]?.alt ?? a.title,
      verificationUrl: '#',
    }));
  }, [t]);


  const TIMELINE_ICONS = ['RocketLaunchIcon', 'CalendarDaysIcon', 'NewspaperIcon', 'ShieldCheckIcon', 'TrophyIcon', 'SparklesIcon'] as const;

  const timeline: TimelineEvent[] = useMemo(() => {
    const cp = t.clientsPartners as unknown as { timeline?: Array<{ year: string; title: string; description: string; clientCount: number }> };
    const events = cp.timeline ?? (translations.fr.clientsPartners as unknown as typeof cp).timeline;
    return (events ?? []).map((e, i) => ({
      id: i + 1,
      year: e.year,
      title: e.title,
      description: e.description,
      clientCount: e.clientCount,
      icon: TIMELINE_ICONS[i] ?? 'ChartBarIcon',
    }));
  }, [t]);


  return (
    <div className="min-h-screen bg-background">
      <HeroSection title={heroData.title} subtitle={heroData.subtitle} />
      <section className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-headline font-bold text-primary-foreground">
            {t.clientsPartners.statsHero}
          </p>
        </div>
      </section>
      <StatsSection stats={stats} />
      <TargetClientsWhyChooseEcosystemSection />
      <ClientLogosGrid clients={clients} />
      <TestimonialsCarousel testimonials={testimonials} />
      <SuccessStoriesSection stories={successStories} />
      <IndustryRecognitionSection awards={awards} />
      <PartnershipTimelineSection timeline={timeline} />
      <CTASection />
    </div>);

};

export default ClientsPartnersInteractive;
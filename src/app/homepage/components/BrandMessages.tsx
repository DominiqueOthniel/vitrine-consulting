'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

interface Message {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const BrandMessages = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { lang } = useLanguage();

  const messages: Message[] = [
    {
      id: 1,
      icon: 'LightBulbIcon',
      title:
        lang === 'en'
          ? 'Transforming communication into cultural impact'
          : lang === 'de'
          ? 'Kommunikation in kulturelle Wirkung verwandeln'
          : 'Transformer la communication en impact culturel',
      description:
        lang === 'en'
          ? 'We create communication experiences that resonate deeply with Cameroonian and African audiences, turning every message into a cultural movement.'
          : lang === 'de'
          ? 'Wir schaffen Kommunikationserlebnisse, die bei kamerunischen und afrikanischen Zielgruppen tief anklingen und jede Botschaft in eine kulturelle Bewegung verwandeln.'
          : 'Nous créons des expériences de communication qui résonnent profondément avec les audiences camerounaises et africaines, transformant chaque message en mouvement culturel.',
      color: 'primary',
    },
    {
      id: 2,
      icon: 'BeakerIcon',
      title:
        lang === 'en'
          ? 'Where strategy meets creativity'
          : lang === 'de'
          ? 'Wo Strategie auf Kreativität trifft'
          : 'Là où la stratégie rencontre la créativité',
      description:
        lang === 'en'
          ? 'The perfect balance between rigorous data analysis and bold creativity for campaigns that captivate and convert.'
          : lang === 'de'
          ? 'Die perfekte Balance zwischen rigoroser Datenanalyse und mutiger Kreativität für Kampagnen, die fesseln und konvertieren.'
          : "L'alliance parfaite entre analyse de données rigoureuse et créativité audacieuse pour des campagnes qui captivent et convertissent.",
      color: 'accent',
    },
    {
      id: 3,
      icon: 'MegaphoneIcon',
      title:
        lang === 'en'
          ? 'Your vision, amplified'
          : lang === 'de'
          ? 'Ihre Vision, verstärkt'
          : 'Votre vision, amplifiée',
      description:
        lang === 'en'
          ? 'We amplify your unique message with our expertise of the Cameroonian and African market and our established network in media and events.'
          : lang === 'de'
          ? 'Wir verstärken Ihre einzigartige Botschaft mit unserer Expertise des kamerunischen und afrikanischen Marktes und unserem etablierten Netzwerk in Medien und Events.'
          : 'Nous amplifions votre message unique avec notre expertise du marché camerounais et africain et notre réseau établi dans les médias et événements.',
      color: 'brand-green',
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-background rounded-xl">
                <div className="w-16 h-16 bg-muted rounded-full mb-6"></div>
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            {lang === 'fr' && 'Notre Promesse'}
            {lang === 'en' && 'Our Promise'}
            {lang === 'de' && 'Unser Versprechen'}
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            {lang === 'fr' &&
              'Trois piliers qui définissent notre approche unique de la communication stratégique'}
            {lang === 'en' &&
              'Three pillars that define our unique approach to strategic communication'}
            {lang === 'de' &&
              'Drei Säulen, die unseren einzigartigen Ansatz für strategische Kommunikation definieren'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messages.map((message) => (
            <div
              key={message.id}
              onMouseEnter={() => setHoveredId(message.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-8 bg-background rounded-xl shadow-subtle hover:shadow-brand transition-all duration-300 transform ${
                hoveredId === message.id ? 'scale-105 -translate-y-2' : ''
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                  hoveredId === message.id
                    ? `bg-${message.color} shadow-brand`
                    : `bg-${message.color}/10`
                }`}
              >
                <Icon
                  name={message.icon as any}
                  size={32}
                  className={`transition-colors duration-300 ${
                    hoveredId === message.id
                      ? 'text-primary-foreground'
                      : `text-${message.color}`
                  }`}
                />
              </div>

              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                {message.title}
              </h3>

              <p className="text-base text-muted-foreground font-body leading-relaxed">
                {message.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMessages;
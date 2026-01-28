'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { lang } = useLanguage();

  const footerSections: FooterSection[] = [
    {
      title: lang === 'en' ? 'Navigation' : lang === 'de' ? 'Navigation' : 'Navigation',
      links: [
        { label: lang === 'en' ? 'Home' : lang === 'de' ? 'Startseite' : 'Accueil', href: '/' },
        {
          label:
            lang === 'en'
              ? 'Agency / Services'
              : lang === 'de'
              ? 'Agentur / Leistungen'
              : 'Agence / Services',
          href: '/services',
        },
        { label: lang === 'en' ? 'Projects' : lang === 'de' ? 'Projekte' : 'Projets', href: '/projects' },
        { label: lang === 'en' ? 'Gallery' : lang === 'de' ? 'Galerie' : 'Galerie', href: '/media-gallery' },
        {
          label:
            lang === 'en'
              ? 'Clients & Partners'
              : lang === 'de'
              ? 'Kunden & Partner'
              : 'Clients & Partenaires',
          href: '/clients-and-partners',
        },
        { label: lang === 'en' ? 'Contact' : lang === 'de' ? 'Kontakt' : 'Contact', href: '/contact' },
      ],
    },
    {
      title: lang === 'en' ? 'Legal' : lang === 'de' ? 'Rechtliches' : 'Légal',
      links: [
        {
          label: lang === 'en' ? 'Legal Notice' : lang === 'de' ? 'Impressum' : 'Mentions Légales',
          href: '/homepage',
        },
        {
          label:
            lang === 'en'
              ? 'Privacy Policy'
              : lang === 'de'
              ? 'Datenschutzrichtlinie'
              : 'Politique de Confidentialité',
          href: '/homepage',
        },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' },
  ];

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!isHydrated) {
    return (
      <footer className="bg-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="h-64 bg-secondary/50 rounded-lg"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="inline-block mb-6">
              <Image
                src="/assets/images/logo.JPG.jpeg"
                alt="VITRINE CONSULTING"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-primary-foreground/80 font-body mb-6 leading-relaxed">
              {lang === 'fr' &&
                'Transformons ensemble votre communication en impact culturel. Expertise stratégique et créative au service de votre vision.'}
              {lang === 'en' &&
                'Let’s transform your communication into cultural impact. Strategic and creative expertise at the service of your vision.'}
              {lang === 'de' &&
                'Lassen Sie uns Ihre Kommunikation in kulturelle Wirkung verwandeln. Strategische und kreative Expertise im Dienst Ihrer Vision.'}
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-headline font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground font-body transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <Icon
                        name="ChevronRightIcon"
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 font-body text-sm">
              {lang === 'fr' && `© ${currentYear} VITRINE CONSULTING. Tous droits réservés.`}
              {lang === 'en' && `© ${currentYear} VITRINE CONSULTING. All rights reserved.`}
              {lang === 'de' && `© ${currentYear} VITRINE CONSULTING. Alle Rechte vorbehalten.`}
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/homepage"
                className="text-primary-foreground/60 hover:text-primary-foreground font-body text-sm transition-colors duration-200"
              >
                {lang === 'fr' && 'Plan du site'}
                {lang === 'en' && 'Sitemap'}
                {lang === 'de' && 'Seitenübersicht'}
              </Link>
              <Link
                href="/homepage"
                className="text-primary-foreground/60 hover:text-primary-foreground font-body text-sm transition-colors duration-200"
              >
                {lang === 'fr' && 'Accessibilité'}
                {lang === 'en' && 'Accessibility'}
                {lang === 'de' && 'Barrierefreiheit'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
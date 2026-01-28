'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from './LanguageContext';

interface NavigationItem {
  label: string;
  href: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const navigationItems: NavigationItem[] = [
    { label: 'Accueil', href: '/' },
    { label: 'Agence', href: '/services' },
    { label: 'Projets', href: '/projects' },
    { label: 'Galerie', href: '/media-gallery' },
    { label: 'Clients & Partenaires', href: '/clients-and-partners' },
    { label: 'Contact', href: '/contact' },
  ];

  const moreItems: NavigationItem[] = [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/homepage';
    }
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLangChange = (newLang: 'fr' | 'en' | 'de') => {
    setLang(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-card'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 h-16 px-6 lg:px-8">
          <Link href="/homepage" className="flex items-center group">
            <Image
              src="/assets/images/logo.JPG.jpeg"
              alt="VITRINE CONSULTING"
              width={160}
              height={48}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-cta font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {moreItems.length > 0 && (
              <div className="relative group">
                <button className="px-4 py-2 rounded-md text-sm font-cta font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center space-x-1">
                  <span>Plus</span>
                  <Icon name="ChevronDownIcon" size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-popover rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm font-body transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-1 rounded-full bg-muted/40 px-1.5 py-0.5 border border-border/60">
              {(['fr', 'en', 'de'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => handleLangChange(code)}
                  className={`min-w-[38px] px-2 py-1 rounded-full text-[11px] font-cta font-semibold tracking-[0.16em] uppercase transition-all ${
                    lang === code
                      ? 'bg-primary text-primary-foreground shadow-subtle'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/60'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-primary/5 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40">
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 px-6 py-8 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-cta font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {moreItems.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <p className="px-4 py-2 text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
                    Plus
                  </p>
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md text-base font-body transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-6 py-6 border-t border-border bg-card">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-md text-center text-base font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle"
              >
                Prenez rendez-vous
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-accent to-brand-blue text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg lg:text-xl font-body text-white/90 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-accent to-brand-blue text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-cta font-semibold uppercase tracking-wider text-white/90 mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-xl font-body text-white/90 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConsultationWidgetProps {
  serviceName: string;
}

const ConsultationWidget: React.FC<ConsultationWidgetProps> = ({ serviceName }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-subtle p-8">
        <div className="h-8 bg-muted rounded w-64 mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-brand-green to-primary rounded-xl shadow-brand p-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircleIcon" size={32} className="text-brand-green" />
        </div>
        <h3 className="text-2xl font-headline font-bold text-white mb-2">
          Demande Envoyée !
        </h3>
        <p className="text-white/90 font-body">
          Notre équipe vous contactera dans les 24 heures
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl shadow-subtle p-8 border border-primary/20">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="CalendarIcon" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-foreground">
            Consultation Gratuite
          </h3>
          <p className="text-sm font-body text-muted-foreground">
            Service: {serviceName}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Nom Complet *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Email Professionnel *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
            placeholder="jean.dupont@entreprise.fr"
          />
        </div>

        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
            placeholder="+237 6 70 12 34 56"
          />
        </div>

        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Entreprise
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body"
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label className="block text-sm font-cta font-semibold text-foreground mb-2">
            Décrivez Votre Projet
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground font-body resize-none"
            placeholder="Parlez-nous de vos objectifs et défis..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand transform hover:scale-105"
        >
          Réserver ma Consultation Gratuite
        </button>

        <p className="text-xs font-body text-muted-foreground text-center">
          Réponse garantie sous 24h • Sans engagement
        </p>
      </form>
    </div>
  );
};

export default ConsultationWidget;
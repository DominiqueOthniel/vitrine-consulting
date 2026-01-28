'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-card to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Des experts passionnés qui transforment vos visions en réalité. Chaque membre apporte une expertise unique pour créer des solutions innovantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300 ${
                  hoveredMember === member.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <p className="text-sm text-white font-body leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <button
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Icon name="UserIcon" size={20} className="text-white" />
                      </button>
                    )}
                    {member.social.twitter && (
                      <button
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        aria-label={`Twitter de ${member.name}`}
                      >
                        <Icon name="ChatBubbleLeftIcon" size={20} className="text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-cta font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
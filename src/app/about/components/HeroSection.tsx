import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
}

export default function HeroSection({ title, subtitle, description, heroImage, heroImageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-cta font-semibold text-primary uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <div className="aspect-[4/3] relative">
                <AppImage
                  src={heroImage}
                  alt={heroImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
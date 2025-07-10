
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselPanel {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SectionCarouselProps {
  panels: CarouselPanel[];
  className?: string;
}

const SectionCarousel: React.FC<SectionCarouselProps> = ({ panels, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {panels.map((panel) => {
            const IconComponent = panel.icon;
            return (
              <CarouselItem key={panel.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-slate-800/95 border border-slate-700 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-emerald-400" />}
                    <div>
                      <h3 className="text-white font-bold text-lg">{panel.title}</h3>
                      {panel.subtitle && (
                        <p className="text-slate-400 text-sm">{panel.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-slate-300">
                    {panel.content}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-800/90 border-slate-600 text-white hover:bg-slate-700" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-slate-800/90 border-slate-600 text-white hover:bg-slate-700" />
      </Carousel>
    </div>
  );
};

export default SectionCarousel;

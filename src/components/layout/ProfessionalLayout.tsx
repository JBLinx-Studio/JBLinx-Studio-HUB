
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'gradient' | 'dark' | 'darker';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({
  children,
  className,
  containerClassName,
  background = 'default',
  padding = 'lg'
}) => {
  const backgroundClasses = {
    default: 'bg-background/95 backdrop-blur-xl',
    gradient: 'bg-gradient-to-br from-background/90 via-muted/85 to-background/90 backdrop-blur-xl',
    dark: 'bg-muted/90 backdrop-blur-xl',
    darker: 'bg-muted/95 backdrop-blur-2xl'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  return (
    <section className={cn(
      'relative min-h-screen overflow-hidden',
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      {/* Enhanced professional background effects with better visibility */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Main ambient lighting - reduced opacity for better readability */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-orange-500/10 to-amber-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-emerald-500/10 to-teal-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Secondary lighting layers */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-amber-400/8 to-orange-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Enhanced premium grid overlay with better contrast */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Sophisticated geometric accents with reduced opacity */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-orange-400/20 transform rotate-45 animate-pulse border border-orange-400/15"></div>
        <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-pulse border border-emerald-400/15" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-amber-400/15 animate-pulse border border-amber-400/10" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-teal-400/15 transform rotate-12 animate-pulse border border-teal-400/10" style={{animationDelay: '6s'}}></div>

        {/* Premium accent lines with better contrast */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/15 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent"></div>
      </div>

      <div className={cn(
        'container mx-auto px-4 relative z-10',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default ProfessionalLayout;

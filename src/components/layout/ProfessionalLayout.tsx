
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'gradient' | 'dark';
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
    default: 'bg-zinc-950/80',
    gradient: 'bg-gradient-to-br from-zinc-950/80 via-zinc-900/80 to-black/80',
    dark: 'bg-black/80'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section className={cn(
      'relative min-h-screen overflow-hidden',
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      {/* Enhanced professional background effects with improved colors */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/4 to-amber-500/3 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/4 to-cyan-500/3 blur-3xl rounded-full"></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
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


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
    default: 'bg-slate-950',
    gradient: 'bg-gradient-to-br from-slate-950 via-slate-900 to-black',
    dark: 'bg-black'
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
      'relative min-h-screen overflow-hidden text-white',
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      {/* Professional background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
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

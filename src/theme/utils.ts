
import { theme } from './index';

// Utility functions for theme manipulation
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Generate gradient backgrounds
export const getGradient = (direction: string = '135deg', colors: string[]) => {
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

// Get responsive font size
export const getResponsiveFontSize = (base: string, lg: string = base) => {
  return `text-${base} lg:text-${lg}`;
};

// Get themed shadow
export const getThemedShadow = (intensity: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md') => {
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  };
  return shadows[intensity];
};

// Generate theme-aware spacing
export const getSpacing = (size: number) => {
  const spacingMap: Record<number, string> = {
    1: 'p-1',
    2: 'p-2',
    3: 'p-3',
    4: 'p-4',
    5: 'p-5',
    6: 'p-6',
    8: 'p-8',
    10: 'p-10',
    12: 'p-12',
    16: 'p-16',
    20: 'p-20',
    24: 'p-24',
  };
  return spacingMap[size] || 'p-4';
};

// Component style generators
export const buttonStyles = {
  primary: 'theme-button-primary',
  secondary: 'theme-button-secondary',
  ghost: 'px-6 py-3 font-semibold text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50',
  link: 'font-semibold text-blue-600 hover:text-blue-700 transition-colors underline-offset-4 hover:underline'
};

export const cardStyles = {
  default: 'theme-card',
  dark: 'theme-card-dark',
  glass: 'theme-glassmorphism rounded-2xl p-6',
  minimal: 'bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow'
};

export const textStyles = {
  heading1: 'theme-heading-primary',
  heading2: 'theme-heading-secondary',
  heading3: 'text-2xl lg:text-3xl font-bold',
  body: 'theme-body-text',
  caption: 'text-sm text-gray-500',
  gradient: 'theme-text-gradient'
};

export const layoutStyles = {
  section: 'theme-section',
  container: 'theme-container',
  grid: 'theme-grid-auto',
  flexCenter: 'theme-flex-center',
  flexBetween: 'theme-flex-between'
};

export const animationStyles = {
  fadeIn: 'theme-animate-fade-in',
  slideUp: 'theme-animate-slide-up',
  scaleIn: 'theme-animate-scale-in'
};

// Color utilities
export const getColorClass = (color: string, shade: number = 500) => {
  return `text-${color}-${shade}`;
};

export const getBgColorClass = (color: string, shade: number = 500) => {
  return `bg-${color}-${shade}`;
};

export const getBorderColorClass = (color: string, shade: number = 500) => {
  return `border-${color}-${shade}`;
};


import React, { createContext, useContext, useEffect, useState } from 'react';
import { theme } from './index';

type ThemeMode = 'light' | 'dark';
type ThemeVariant = 'corporate' | 'creative' | 'minimal';

interface ThemeContextType {
  mode: ThemeMode;
  variant: ThemeVariant;
  toggleMode: () => void;
  setVariant: (variant: ThemeVariant) => void;
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [variant, setVariant] = useState<ThemeVariant>('corporate');

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Apply theme classes to document
    document.documentElement.className = `theme-${mode} theme-${variant}`;
    
    // Update CSS custom properties based on mode
    if (mode === 'dark') {
      document.documentElement.style.setProperty('--color-neutral-50', '15 23 42');
      document.documentElement.style.setProperty('--color-neutral-100', '30 41 59');
      document.documentElement.style.setProperty('--color-neutral-900', '248 250 252');
    } else {
      document.documentElement.style.setProperty('--color-neutral-50', '248 250 252');
      document.documentElement.style.setProperty('--color-neutral-100', '241 245 249');
      document.documentElement.style.setProperty('--color-neutral-900', '15 23 42');
    }
  }, [mode, variant]);

  const value = {
    mode,
    variant,
    toggleMode,
    setVariant,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};


import React, { createContext, useContext, useEffect, useState } from 'react';
import { soundManager } from '../../utils/soundManager';

interface ThemeContextType {
  playSound: (sound: string, volume?: number) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  glitchMode: boolean;
  toggleGlitch: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within EnhancedThemeProvider');
  }
  return context;
};

interface EnhancedThemeProviderProps {
  children: React.ReactNode;
}

export const EnhancedThemeProvider: React.FC<EnhancedThemeProviderProps> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [glitchMode, setGlitchMode] = useState(false);

  useEffect(() => {
    // Add global click sound
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        playSound('buttonClick', 0.2);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const playSound = (sound: string, volume: number = 0.3) => {
    if (soundEnabled) {
      soundManager.play(sound, volume);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    soundManager.toggle();
    playSound(soundEnabled ? 'holoDenied' : 'holoPopup');
  };

  const toggleGlitch = () => {
    setGlitchMode(!glitchMode);
    playSound('staticSwitch', 0.4);
  };

  return (
    <ThemeContext.Provider value={{
      playSound,
      soundEnabled,
      toggleSound,
      glitchMode,
      toggleGlitch
    }}>
      <div className={glitchMode ? 'glitch-mode' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

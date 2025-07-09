// Professional Terminal Sound Effects System with Real Audio Files
class TerminalSounds {
  constructor() {
    this.sounds = {};
    this.isEnabled = true;
    this.volume = 0.3; // Lower default volume
    this.isInitialized = false;
    this.pendingActions = [];
    this.audioContext = null;
    this.initializeSounds();
  }

  // Sound mappings with the provided URLs
  getSoundUrls() {
    return {
      hover: 'https://sounds.pond5.com/futuristic-button-click-09-sound-effect-168489137_nw_prev.m4a',
      click: 'https://sounds.pond5.com/combination-8-sound-effect-296116064_nw_prev.m4a',
      buttonPress: 'https://sounds.pond5.com/holo-popup-3-sound-effect-152796047_nw_prev.m4a',
      select: 'https://sounds.pond5.com/monitor-02-samsung-syncmaster-763mb-sound-effect-076121079_nw_prev.m4a',
      error: 'https://sounds.pond5.com/holo-denied-3-sound-effect-152796038_nw_prev.m4a',
      success: 'https://sounds.pond5.com/combination-10-sound-effect-296116086_nw_prev.m4a',
      type: 'https://sounds.pond5.com/loud-static-switch-02-sound-effect-060366462_nw_prev.m4a',
      navigation: 'https://sounds.pond5.com/monitor-05-samsung-syncmaster-765mb-sound-effect-076121073_nw_prev.m4a',
      focus: 'https://sounds.pond5.com/monitor-08-daewoo-cmc-1427x-sound-effect-076120985_nw_prev.m4a',
      power: 'https://sounds.pond5.com/household-plug-socket-electric-socket-sound-effect-267839074_nw_prev.m4a'
    };
  }

  async initializeAudioContext() {
    try {
      // Create AudioContext for better browser compatibility
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log('✓ Audio context initialized');
    } catch (e) {
      console.warn('Failed to initialize audio context:', e);
    }
  }

  async initializeSounds() {
    try {
      await this.initializeAudioContext();
      const soundUrls = this.getSoundUrls();
      
      // Preload all audio files with better error handling
      const loadPromises = Object.entries(soundUrls).map(([name, url]) => {
        return new Promise((resolve) => {
          const audio = new Audio();
          audio.crossOrigin = 'anonymous';
          audio.volume = this.volume;
          audio.preload = 'auto';
          
          audio.addEventListener('canplaythrough', () => {
            console.log(`✓ Loaded sound: ${name}`);
            this.sounds[name] = audio;
            resolve();
          });
          
          audio.addEventListener('error', (e) => {
            console.warn(`Failed to load sound: ${name}`, e);
            resolve(); // Don't block other sounds
          });
          
          // Set source after event listeners
          audio.src = url;
        });
      });
      
      await Promise.all(loadPromises);
      this.isInitialized = true;
      console.log('Terminal sounds system initialized with', Object.keys(this.sounds).length, 'sounds');
      
      // Process any pending actions
      this.pendingActions.forEach(action => action());
      this.pendingActions = [];
      
    } catch (e) {
      console.warn('Failed to initialize terminal sounds:', e);
      this.isEnabled = false;
    }
  }

  async playSound(soundName) {
    if (!this.isEnabled) return;
    
    if (!this.isInitialized) {
      this.pendingActions.push(() => this.playSound(soundName));
      return;
    }

    const audio = this.sounds[soundName];
    if (audio) {
      try {
        // Resume audio context if suspended
        if (this.audioContext && this.audioContext.state === 'suspended') {
          await this.audioContext.resume();
        }
        
        // Clone audio for overlapping sounds
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        
        const playPromise = audioClone.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Try original audio if clone fails
            audio.currentTime = 0;
            audio.volume = this.volume;
            return audio.play().catch(e => {
              console.warn(`Error playing sound ${soundName}:`, e);
            });
          });
        }
      } catch (error) {
        console.warn(`Error playing sound ${soundName}:`, error);
      }
    } else {
      console.warn(`Sound not found: ${soundName}`);
    }
  }

  // Visual effects
  createScanlineEffect(element) {
    if (!element) return;
    
    const scanline = document.createElement('div');
    scanline.className = 'terminal-scanline';
    scanline.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #10b981, transparent);
      pointer-events: none;
      z-index: 1000;
      animation: scanline 0.4s ease-out;
    `;
    
    const parent = element.closest('div, span, a, button') || element;
    const originalPosition = parent.style.position;
    parent.style.position = 'relative';
    parent.appendChild(scanline);
    
    setTimeout(() => {
      if (scanline.parentNode) {
        scanline.parentNode.removeChild(scanline);
        if (!originalPosition) {
          parent.style.position = '';
        }
      }
    }, 400);
  }

  createGlitchEffect(element) {
    if (!element) return;
    
    const originalText = element.textContent;
    const originalColor = element.style.color;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let glitchInterval;
    let iterations = 0;
    
    element.style.color = '#10b981';
    element.style.textShadow = '0 0 5px #10b981';
    
    glitchInterval = setInterval(() => {
      let glitchedText = '';
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.15) {
          glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitchedText += originalText[i];
        }
      }
      
      element.textContent = glitchedText;
      iterations++;
      
      if (iterations > 6) {
        clearInterval(glitchInterval);
        element.textContent = originalText;
        setTimeout(() => {
          element.style.color = originalColor;
          element.style.textShadow = '';
        }, 100);
      }
    }, 40);
  }

  createGlowEffect(element) {
    if (!element) return;
    
    const originalColor = element.style.color;
    const originalShadow = element.style.textShadow;
    
    element.style.textShadow = '0 0 10px #10b981, 0 0 20px #10b981';
    element.style.color = '#10b981';
    
    setTimeout(() => {
      element.style.textShadow = originalShadow;
      element.style.color = originalColor;
    }, 300);
  }

  setupEventListeners() {
    // Initialize audio context on first user interaction
    const initAudio = async () => {
      if (this.audioContext && this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
      console.log('Audio context activated by user interaction');
    };

    // Initialize on first interaction
    document.addEventListener('click', initAudio, { once: true });
    document.addEventListener('keydown', initAudio, { once: true });
    document.addEventListener('touchstart', initAudio, { once: true });

    // Enhanced hover effects for all interactive elements
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, [role="button"], .nav-item, [role="menuitem"], nav a, .navigation-item');
      if (interactive && !interactive.hasAttribute('data-sound-disabled')) {
        this.playSound('hover');
        this.createScanlineEffect(interactive);
      }
    });

    // Enhanced click effects
    document.addEventListener('click', (e) => {
      const button = e.target.closest('button, [role="button"]');
      const link = e.target.closest('a');
      
      if (button && !button.hasAttribute('data-sound-disabled')) {
        this.playSound('buttonPress');
        this.createGlitchEffect(button);
      } else if (link && !link.hasAttribute('data-sound-disabled')) {
        this.playSound('click');
        this.createGlowEffect(link);
      }
    });

    // Form interactions
    document.addEventListener('focus', (e) => {
      if ((e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && 
          !e.target.hasAttribute('data-sound-disabled')) {
        this.playSound('focus');
      }
    });

    // Typing sounds with better throttling
    let lastInputTime = 0;
    document.addEventListener('input', (e) => {
      if ((e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && 
          !e.target.hasAttribute('data-sound-disabled')) {
        const now = Date.now();
        if (now - lastInputTime > 150) {
          this.playSound('type');
          lastInputTime = now;
        }
      }
    });

    // Form submission sounds
    document.addEventListener('submit', (e) => {
      if (!e.target.hasAttribute('data-sound-disabled')) {
        this.playSound('success');
      }
    });

    // Error sounds
    document.addEventListener('invalid', (e) => {
      if (!e.target.hasAttribute('data-sound-disabled')) {
        this.playSound('error');
      }
    });

    console.log('Terminal sound event listeners set up');
  }

  // Volume control
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(audio => {
      if (audio instanceof Audio) {
        audio.volume = this.volume;
      }
    });
  }

  // Enable/disable sounds
  toggle() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  // Test function
  testSound(soundName) {
    console.log('Testing sound:', soundName);
    this.playSound(soundName);
  }
}

// Enhanced CSS animations
const terminalStyles = `
  @keyframes scanline {
    0% { 
      transform: translateY(0) scaleX(0); 
      opacity: 1; 
    }
    50% { 
      transform: translateY(20px) scaleX(1); 
      opacity: 0.8; 
    }
    100% { 
      transform: translateY(40px) scaleX(0); 
      opacity: 0; 
    }
  }
  
  @keyframes terminal-glow {
    0%, 100% { 
      text-shadow: 0 0 5px #10b981, 0 0 10px #10b981; 
    }
    50% { 
      text-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981; 
    }
  }
  
  .terminal-hover {
    animation: terminal-glow 0.6s ease-in-out;
  }
  
  .terminal-click {
    animation: terminal-glow 0.3s ease-in-out;
  }
  
  .terminal-scanline {
    box-shadow: 0 0 10px #10b981;
  }

  /* Disable selection on terminal effects */
  .terminal-scanline {
    user-select: none;
    pointer-events: none;
  }
`;

// Inject styles
if (!document.querySelector('#terminal-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'terminal-styles';
  styleSheet.textContent = terminalStyles;
  document.head.appendChild(styleSheet);
}

// Initialize terminal sounds when DOM is ready
const initializeTerminalSounds = () => {
  if (typeof window !== 'undefined') {
    const terminalSounds = new TerminalSounds();
    
    // Set up event listeners immediately
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        terminalSounds.setupEventListeners();
      });
    } else {
      terminalSounds.setupEventListeners();
    }

    // Export for global use
    window.terminalSounds = terminalSounds;
    window.testTerminalSound = (soundName) => {
      console.log('Testing sound:', soundName);
      terminalSounds.playSound(soundName);
    };

    console.log('Terminal sounds system ready!');
    console.log('Available sounds:', Object.keys(terminalSounds.getSoundUrls()));
    console.log('Test with: window.testTerminalSound("hover")');
  }
};

// Initialize immediately
initializeTerminalSounds();

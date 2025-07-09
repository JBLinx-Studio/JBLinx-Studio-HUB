
// Professional Terminal Sound Effects System
class TerminalSounds {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.isEnabled = true;
    this.volume = 0.4;
    this.isInitialized = false;
    this.pendingActions = [];
    this.initializeAudioContext();
  }

  async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Handle suspended context
      if (this.audioContext.state === 'suspended') {
        await this.resumeAudioContext();
      }
      
      this.createSounds();
      this.isInitialized = true;
      
      // Process any pending actions
      this.pendingActions.forEach(action => action());
      this.pendingActions = [];
      
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
      this.isEnabled = false;
    }
  }

  async resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume();
      } catch (e) {
        console.warn('Failed to resume audio context:', e);
      }
    }
  }

  // Create professional terminal sounds
  createSounds() {
    if (!this.audioContext) return;

    // Hover sound - subtle electronic beep
    this.sounds.hover = () => this.createBeep(1000, 0.08, 'sine', 0.3);
    
    // Click sound - satisfying confirmation
    this.sounds.click = () => this.createBeep(1400, 0.12, 'square', 0.4);
    
    // Button press - deeper, more substantial
    this.sounds.buttonPress = () => this.createMultiBeep([800, 1200], 0.15, 'sawtooth', 0.5);
    
    // Select sound - ascending tone
    this.sounds.select = () => this.createSweep(600, 1000, 0.2, 'sine', 0.4);
    
    // Error sound - harsh warning
    this.sounds.error = () => this.createBuzz(300, 0.3, 'sawtooth', 0.6);
    
    // Success sound - pleasant chime
    this.sounds.success = () => this.createChime([800, 1000, 1200], 0.15, 'sine', 0.4);
    
    // Typing sound - mechanical keyboard
    this.sounds.type = () => this.createBeep(1200 + Math.random() * 200, 0.05, 'square', 0.2);
  }

  async playSound(soundName) {
    if (!this.isEnabled) return;
    
    if (!this.isInitialized) {
      this.pendingActions.push(() => this.playSound(soundName));
      return;
    }

    await this.resumeAudioContext();
    
    if (this.sounds[soundName]) {
      this.sounds[soundName]();
    }
  }

  createBeep(frequency, duration, waveType = 'sine', volume = 0.3) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = waveType;
    
    const startTime = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(this.volume * volume, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }

  createMultiBeep(frequencies, duration, waveType = 'sine', volume = 0.3) {
    if (!this.audioContext) return;
    
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        this.createBeep(freq, duration * 0.6, waveType, volume * 0.8);
      }, index * 30);
    });
  }

  createSweep(startFreq, endFreq, duration, waveType = 'sine', volume = 0.3) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = waveType;
    
    const startTime = this.audioContext.currentTime;
    oscillator.frequency.setValueAtTime(startFreq, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(this.volume * volume, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }

  createBuzz(frequency, duration, waveType = 'sawtooth', volume = 0.3) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = waveType;
    filter.type = 'lowpass';
    filter.frequency.value = frequency * 2;
    
    const startTime = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(this.volume * volume, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }

  createChime(frequencies, duration, waveType = 'sine', volume = 0.3) {
    if (!this.audioContext) return;
    
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        this.createBeep(freq, duration, waveType, volume * (1 - index * 0.1));
      }, index * 80);
    });
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
    parent.style.position = 'relative';
    parent.appendChild(scanline);
    
    setTimeout(() => {
      if (scanline.parentNode) {
        scanline.parentNode.removeChild(scanline);
      }
    }, 400);
  }

  createGlitchEffect(element) {
    if (!element) return;
    
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let glitchInterval;
    let iterations = 0;
    
    element.style.color = '#10b981';
    
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
          element.style.color = '';
        }, 100);
      }
    }, 40);
  }

  createGlowEffect(element) {
    if (!element) return;
    
    element.style.textShadow = '0 0 10px #10b981, 0 0 20px #10b981';
    element.style.color = '#10b981';
    
    setTimeout(() => {
      element.style.textShadow = '';
      element.style.color = '';
    }, 300);
  }

  attachEventListeners() {
    // Initialize audio context on first user interaction
    const initAudio = async () => {
      if (!this.isInitialized) {
        await this.initializeAudioContext();
      }
      await this.resumeAudioContext();
    };

    // Set up event listeners when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
    } else {
      this.setupEventListeners();
    }

    // Initialize on first interaction
    document.addEventListener('click', initAudio, { once: true });
    document.addEventListener('keydown', initAudio, { once: true });
  }

  setupEventListeners() {
    // Hyperlink hover effects
    document.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        this.playSound('hover');
        this.createScanlineEffect(e.target.closest('a') || e.target);
      }
    });

    // Button interactions
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        this.playSound('buttonPress');
        this.createGlitchEffect(e.target.closest('button') || e.target);
      } else if (e.target.tagName === 'A' || e.target.closest('a')) {
        this.playSound('click');
        this.createGlowEffect(e.target.closest('a') || e.target);
      }
    });

    // Form input focus
    document.addEventListener('focus', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        this.playSound('select');
      }
    });

    // Navigation items
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.nav-item') || 
          e.target.closest('[role="menuitem"]') || 
          e.target.closest('nav a')) {
        this.playSound('hover');
      }
    });

    // Typing simulation for inputs
    document.addEventListener('input', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        this.playSound('type');
      }
    });
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
`;

// Inject styles
if (!document.querySelector('#terminal-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'terminal-styles';
  styleSheet.textContent = terminalStyles;
  document.head.appendChild(styleSheet);
}

// Initialize terminal sounds
const terminalSounds = new TerminalSounds();
terminalSounds.attachEventListeners();

// Export for global use
window.terminalSounds = terminalSounds;

// Test sound function for debugging
window.testTerminalSound = (soundName) => {
  console.log('Testing sound:', soundName);
  terminalSounds.playSound(soundName);
};

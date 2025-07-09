
// Terminal Sound Effects System - Fallout Style
class TerminalSounds {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.isEnabled = true;
    this.volume = 0.3;
    this.initializeAudioContext();
    this.createSounds();
    this.attachEventListeners();
  }

  initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      this.isEnabled = false;
    }
  }

  // Create synthetic terminal sounds
  createSounds() {
    if (!this.audioContext) return;

    // Hover sound - subtle beep
    this.sounds.hover = this.createBeep(800, 0.05, 'sine');
    
    // Click sound - confirmation beep
    this.sounds.click = this.createBeep(1200, 0.1, 'square');
    
    // Button press - deeper click
    this.sounds.buttonPress = this.createBeep(600, 0.15, 'sawtooth');
    
    // Select sound - multi-tone
    this.sounds.select = this.createMultiTone([400, 600, 800], 0.12);
    
    // Error sound - harsh buzz
    this.sounds.error = this.createBuzz(200, 0.2);
    
    // Success sound - ascending tones
    this.sounds.success = this.createAscendingTones([600, 800, 1000], 0.08);
  }

  createBeep(frequency, duration, waveType = 'sine') {
    return () => {
      if (!this.audioContext || !this.isEnabled) return;
      
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = waveType;
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    };
  }

  createMultiTone(frequencies, duration) {
    return () => {
      if (!this.audioContext || !this.isEnabled) return;
      
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = this.audioContext.createOscillator();
          const gainNode = this.audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(this.audioContext.destination);
          
          oscillator.frequency.value = freq;
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(this.volume * 0.7, this.audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
          
          oscillator.start(this.audioContext.currentTime);
          oscillator.stop(this.audioContext.currentTime + duration);
        }, index * 30);
      });
    };
  }

  createBuzz(frequency, duration) {
    return () => {
      if (!this.audioContext || !this.isEnabled) return;
      
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sawtooth';
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    };
  }

  createAscendingTones(frequencies, duration) {
    return () => {
      if (!this.audioContext || !this.isEnabled) return;
      
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = this.audioContext.createOscillator();
          const gainNode = this.audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(this.audioContext.destination);
          
          oscillator.frequency.value = freq;
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(this.volume * 0.8, this.audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
          
          oscillator.start(this.audioContext.currentTime);
          oscillator.stop(this.audioContext.currentTime + duration);
        }, index * 50);
      });
    };
  }

  // Visual effects
  createScanlineEffect(element) {
    const scanline = document.createElement('div');
    scanline.className = 'terminal-scanline';
    scanline.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #00ff00, transparent);
      pointer-events: none;
      z-index: 1000;
      animation: scanline 0.3s ease-out;
    `;
    
    element.style.position = 'relative';
    element.appendChild(scanline);
    
    setTimeout(() => {
      if (scanline.parentNode) {
        scanline.parentNode.removeChild(scanline);
      }
    }, 300);
  }

  createGlitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let glitchInterval;
    let iterations = 0;
    
    glitchInterval = setInterval(() => {
      let glitchedText = '';
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitchedText += originalText[i];
        }
      }
      
      element.textContent = glitchedText;
      iterations++;
      
      if (iterations > 5) {
        clearInterval(glitchInterval);
        element.textContent = originalText;
      }
    }, 50);
  }

  attachEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      // Resume audio context on first user interaction
      document.addEventListener('click', () => {
        if (this.audioContext && this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
      }, { once: true });

      // Add hover effects to hyperlinks
      document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          this.sounds.hover();
          this.createScanlineEffect(e.target.closest('a') || e.target);
        }
      });

      // Add click effects to buttons
      document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
          this.sounds.buttonPress();
          this.createGlitchEffect(e.target.closest('button') || e.target);
        } else if (e.target.tagName === 'A' || e.target.closest('a')) {
          this.sounds.click();
        }
      });

      // Add effects to form inputs
      document.addEventListener('focus', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          this.sounds.select();
        }
      });

      // Add effects to navigation items
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.nav-item') || e.target.closest('[role="menuitem"]')) {
          this.sounds.hover();
        }
      });
    });
  }
}

// CSS animations for terminal effects
const terminalStyles = `
  @keyframes scanline {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100px); opacity: 0; }
  }
  
  @keyframes terminal-glow {
    0%, 100% { text-shadow: 0 0 5px #00ff00; }
    50% { text-shadow: 0 0 10px #00ff00, 0 0 15px #00ff00; }
  }
  
  .terminal-hover {
    animation: terminal-glow 0.5s ease-in-out;
  }
  
  .terminal-click {
    animation: terminal-glow 0.2s ease-in-out;
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = terminalStyles;
document.head.appendChild(styleSheet);

// Initialize terminal sounds
const terminalSounds = new TerminalSounds();

// Export for global use
window.terminalSounds = terminalSounds;

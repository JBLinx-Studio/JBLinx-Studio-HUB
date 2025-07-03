
class AudioManager {
  private audioContext: AudioContext | null = null;
  private isInitialized = false;
  private soundCache = new Map<string, AudioBuffer>();

  private async initializeContext() {
    if (this.isInitialized) return;
    
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.isInitialized = true;
    } catch (error) {
      console.warn('Web Audio API not supported');
    }
  }

  private createBeep(frequency: number, duration: number, volume: number = 0.1) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  async playTypewriterSound() {
    await this.initializeContext();
    this.createBeep(800 + Math.random() * 200, 0.05, 0.03);
  }

  async playButtonClick() {
    await this.initializeContext();
    this.createBeep(1200, 0.08, 0.05);
  }

  async playHoverSound() {
    await this.initializeContext();
    this.createBeep(600, 0.04, 0.02);
  }

  async playSuccessSound() {
    await this.initializeContext();
    // Play a chord
    this.createBeep(523, 0.15, 0.04); // C
    setTimeout(() => this.createBeep(659, 0.15, 0.04), 50); // E
    setTimeout(() => this.createBeep(784, 0.15, 0.04), 100); // G
  }
}

export const audioManager = new AudioManager();

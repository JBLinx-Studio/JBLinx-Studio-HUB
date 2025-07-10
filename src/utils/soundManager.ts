
class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private isEnabled: boolean = true;

  constructor() {
    this.initializeSounds();
  }

  private initializeSounds() {
    const soundMap = {
      combination8: 'https://sounds.pond5.com/combination-8-sound-effect-296116064_nw_prev.m4a',
      buttonClick: 'https://sounds.pond5.com/futuristic-button-click-09-sound-effect-168489137_nw_prev.m4a',
      holoPopup: 'https://sounds.pond5.com/holo-popup-3-sound-effect-152796047_nw_prev.m4a',
      holoDenied: 'https://sounds.pond5.com/holo-denied-3-sound-effect-152796038_nw_prev.m4a',
      monitor02: 'https://sounds.pond5.com/monitor-02-samsung-syncmaster-763mb-sound-effect-076121079_nw_prev.m4a',
      combination10: 'https://sounds.pond5.com/combination-10-sound-effect-296116086_nw_prev.m4a',
      staticSwitch: 'https://sounds.pond5.com/loud-static-switch-02-sound-effect-060366462_nw_prev.m4a',
      monitor05: 'https://sounds.pond5.com/monitor-05-samsung-syncmaster-765mb-sound-effect-076121073_nw_prev.m4a',
      monitor08: 'https://sounds.pond5.com/monitor-08-daewoo-cmc-1427x-sound-effect-076120985_nw_prev.m4a',
      plugSocket: 'https://sounds.pond5.com/household-plug-socket-electric-socket-sound-effect-267839074_nw_prev.m4a'
    };

    Object.entries(soundMap).forEach(([key, url]) => {
      const audio = new Audio(url);
      audio.preload = 'auto';
      audio.volume = 0.3;
      this.sounds[key] = audio;
    });
  }

  play(soundKey: string, volume: number = 0.3) {
    if (!this.isEnabled || !this.sounds[soundKey]) return;
    
    const sound = this.sounds[soundKey];
    sound.volume = volume;
    sound.currentTime = 0;
    sound.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
  }

  get enabled() {
    return this.isEnabled;
  }
}

export const soundManager = new SoundManager();

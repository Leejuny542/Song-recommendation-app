// Audio Engine disabled per user requirement: links only, no audio output
class SoundEngine {
  public setVolume(_volume: number) {}
  public setTempo(_bpm: number) {}
  public playTrack(_toneType: string = 'acoustic') {}
  public stop() {}
}

export const soundEngine = new SoundEngine();

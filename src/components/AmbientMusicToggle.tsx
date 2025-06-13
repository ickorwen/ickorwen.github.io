import { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa';

export function AmbientMusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    // Initialize Web Audio API
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    gainNodeRef.current = audioContextRef.current.createGain();
    gainNodeRef.current.connect(audioContextRef.current.destination);
    gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const createAmbientSound = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return;

    // Stop existing oscillators
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    oscillatorsRef.current = [];

    // Create ambient drone sounds
    const frequencies = [110, 165, 220, 330]; // Low, atmospheric frequencies
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContextRef.current!.createOscillator();
      const oscGain = audioContextRef.current!.createGain();
      
      oscillator.connect(oscGain);
      oscGain.connect(gainNodeRef.current!);
      
      oscillator.frequency.setValueAtTime(freq, audioContextRef.current!.currentTime);
      oscillator.type = 'sine';
      
      // Set individual oscillator volume
      oscGain.gain.setValueAtTime(0.1 + index * 0.05, audioContextRef.current!.currentTime);
      
      // Add subtle frequency modulation for movement
      const lfo = audioContextRef.current!.createOscillator();
      const lfoGain = audioContextRef.current!.createGain();
      
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      
      lfo.frequency.setValueAtTime(0.1 + index * 0.05, audioContextRef.current!.currentTime);
      lfo.type = 'sine';
      lfoGain.gain.setValueAtTime(2, audioContextRef.current!.currentTime);
      
      oscillator.start();
      lfo.start();
      
      oscillatorsRef.current.push(oscillator);
    });

    // Fade in
    gainNodeRef.current.gain.linearRampToValueAtTime(volume, audioContextRef.current.currentTime + 2);
  };

  const stopAmbientSound = () => {
    if (!gainNodeRef.current || !audioContextRef.current) return;

    // Fade out
    gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 1);
    
    // Stop oscillators after fade out
    setTimeout(() => {
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch (e) {
          // Oscillator might already be stopped
        }
      });
      oscillatorsRef.current = [];
    }, 1000);
  };

  const toggleMusic = async () => {
    if (!audioContextRef.current) return;

    // Resume audio context if needed (browser security requirement)
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    if (isPlaying) {
      stopAmbientSound();
    } else {
      createAmbientSound();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (gainNodeRef.current && isPlaying) {
      gainNodeRef.current.gain.setValueAtTime(newVolume, audioContextRef.current!.currentTime);
    }
  };

  return (
    <div className="ambient-music-toggle">
      <button
        onClick={toggleMusic}
        className={`music-button ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      >
        <FaMusic />
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      
      {isPlaying && (
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.05"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="volume-slider"
          />
        </div>
      )}
    </div>
  );
}

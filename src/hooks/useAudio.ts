import { useState, useEffect, useRef } from 'react';

interface AudioOptions {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
}

interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
}

export const useAudio = (audioPath: string, options: AudioOptions = {}) => {
  const {
    volume = 1,
    loop = false,
    autoplay = false
  } = options;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isMuted: false,
    volume,
    currentTime: 0,
    duration: 0
  });

  useEffect(() => {
    audioRef.current = new Audio(audioPath);
    audioRef.current.volume = volume;
    audioRef.current.loop = loop;

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setState(prev => ({
        ...prev,
        currentTime: audio.currentTime
      }));
    };

    const handleLoadedMetadata = () => {
      setState(prev => ({
        ...prev,
        duration: audio.duration
      }));
    };

    const handleEnded = () => {
      setState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    if (autoplay) {
      play();
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audioPath, volume, loop, autoplay]);

  const play = () => {
    if (!audioRef.current) return;

    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error);
    });

    setState(prev => ({
      ...prev,
      isPlaying: true
    }));
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setState(prev => ({
      ...prev,
      isPlaying: false
    }));
  };

  const togglePlay = () => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const setVolume = (newVolume: number) => {
    if (!audioRef.current) return;

    const volume = Math.max(0, Math.min(1, newVolume));
    audioRef.current.volume = volume;

    setState(prev => ({
      ...prev,
      volume,
      isMuted: volume === 0
    }));
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !state.isMuted;
    audioRef.current.volume = newMutedState ? 0 : state.volume;

    setState(prev => ({
      ...prev,
      isMuted: newMutedState
    }));
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;

    const newTime = Math.max(0, Math.min(time, state.duration));
    audioRef.current.currentTime = newTime;

    setState(prev => ({
      ...prev,
      currentTime: newTime
    }));
  };

  const restart = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    play();
  };

  return {
    ...state,
    play,
    pause,
    togglePlay,
    setVolume,
    toggleMute,
    seek,
    restart
  };
}; 
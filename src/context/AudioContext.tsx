'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

export interface AudioTrack {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

// =============================================================================
// 🎵 3 PLEASANT BACKGROUND MUSIC SCORES
// =============================================================================
// You can customize these 3 background scores anytime:
// 1. Drop your own audio files into the "public" folder (e.g. public/song1.mp3)
// 2. Change the "src" paths below to: '/song1.mp3'
// =============================================================================
export const BACKGROUND_TRACKS: AudioTrack[] = [
  {
    id: 1,
    title: 'Lofi Study Chill',
    subtitle: 'Peaceful Ambient Lofi Beat',
    src: '/audio/score1.mp3',
  },
  {
    id: 2,
    title: 'Ambient Classical Rhythm',
    subtitle: 'Melodic Piano & Chill Drums',
    src: '/audio/score2.mp3',
  },
  {
    id: 3,
    title: 'Dreamscape Dreamlight',
    subtitle: 'Atmospheric Chillout Groove',
    src: '/audio/score3.mp3',
  },
];

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  currentTrack: AudioTrack;
  currentTrackIndex: number;
  nextTrack: () => void;
  prevTrack: () => void;
  selectTrack: (index: number) => void;
  tracks: AudioTrack[];
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Start with Score 3 (index 2) by default
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(2);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef<boolean>(false);

  const currentTrack = BACKGROUND_TRACKS[currentTrackIndex];

  // Play audio safely
  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked until interaction
      });
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const selectTrack = useCallback((index: number) => {
    const nextIdx = (index + BACKGROUND_TRACKS.length) % BACKGROUND_TRACKS.length;
    setCurrentTrackIndex(nextIdx);
    if (audioRef.current) {
      audioRef.current.src = BACKGROUND_TRACKS[nextIdx].src;
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  }, []);

  const nextTrack = useCallback(() => {
    selectTrack(currentTrackIndex + 1);
  }, [currentTrackIndex, selectTrack]);

  const prevTrack = useCallback(() => {
    selectTrack(currentTrackIndex - 1);
  }, [currentTrackIndex, selectTrack]);

  // Auto-start Score 3 by default on mount + fallback on first interaction/scroll
  useEffect(() => {
    // 1. Attempt immediate playback by default at higher volume
    if (audioRef.current) {
      audioRef.current.volume = 0.55;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            hasInteractedRef.current = true;
          })
          .catch(() => {
            // Browser autoplay policy restricted; starts on first gesture
          });
      }
    }

    // 2. Fallback: trigger on first user gesture / scroll
    const events = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'click', 'keydown'];

    const startOnInteraction = () => {
      if (!hasInteractedRef.current && audioRef.current) {
        hasInteractedRef.current = true;
        audioRef.current.volume = 0.55;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
      events.forEach((evt) => window.removeEventListener(evt, startOnInteraction));
    };

    events.forEach((evt) => {
      window.addEventListener(evt, startOnInteraction, { passive: true, once: true });
    });

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, startOnInteraction));
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        play,
        pause,
        currentTrack,
        currentTrackIndex,
        nextTrack,
        prevTrack,
        selectTrack,
        tracks: BACKGROUND_TRACKS,
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
        loop
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

'use client';

import { useState } from 'react';
import { useAudio } from '@/context/AudioContext';

export default function MusicWidget() {
  const { isPlaying, togglePlay, currentTrack, currentTrackIndex, nextTrack, selectTrack, tracks } = useAudio();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="relative flex items-center">
      {/* Splendid Glassmorphic Music Controller Bar */}
      <div className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 backdrop-blur-md shadow-sm">
        
        {/* Animated Sound Wave Equalizer (Dancing while playing, Still flat when paused) */}
        <button
          type="button"
          onClick={togglePlay}
          className="flex items-end gap-[3px] h-5 px-1 py-0.5 cursor-pointer group"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
          aria-label={isPlaying ? 'Pause background score' : 'Play background score'}
        >
          <span
            className={`w-[3px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-[#2d5a3c] dark:bg-emerald-400 animate-wave-1'
                : 'bg-neutral-400 dark:bg-neutral-500 wave-paused'
            }`}
          />
          <span
            className={`w-[3px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-[#2d5a3c] dark:bg-emerald-400 animate-wave-2'
                : 'bg-neutral-400 dark:bg-neutral-500 wave-paused'
            }`}
          />
          <span
            className={`w-[3px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-[#2d5a3c] dark:bg-emerald-400 animate-wave-3'
                : 'bg-neutral-400 dark:bg-neutral-500 wave-paused'
            }`}
          />
          <span
            className={`w-[3px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-[#2d5a3c] dark:bg-emerald-400 animate-wave-4'
                : 'bg-neutral-400 dark:bg-neutral-500 wave-paused'
            }`}
          />
        </button>

        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="w-7 h-7 rounded-full bg-white dark:bg-neutral-800 text-[#111111] dark:text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm border border-black/5 dark:border-white/10"
          title={isPlaying ? 'Pause' : 'Play'}
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? (
            // Pause Icon
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play Icon
            <svg className="w-3 h-3 ml-0.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Track Title Pill & Menu Trigger */}
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors"
          title="Choose Background Score"
          aria-label="Choose background score"
        >
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-[#333333] dark:text-neutral-300 max-w-[95px] truncate font-medium">
            Score {currentTrack.id}
          </span>
          <svg className={`w-3 h-3 text-neutral-500 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Quick Next Track Switcher */}
        <button
          type="button"
          onClick={nextTrack}
          className="p-1 rounded-md text-neutral-500 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors"
          title="Switch to next pleasant score"
          aria-label="Next background score"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>

      {/* Track Selector Dropdown Popover */}
      {showDropdown && (
        <div
          className="absolute right-0 top-12 w-64 p-2 bg-white/95 dark:bg-[#12151c]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200"
          role="menu"
          aria-label="Background Scores Menu"
        >
          <div className="px-3 py-1.5 border-b border-black/5 dark:border-white/10 mb-1 flex items-center justify-between">
            <span className="text-[0.68rem] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Ambient Backgrounds
            </span>
            <span className="w-2 h-2 rounded-full bg-[#2d5a3c] animate-pulse" />
          </div>

          <div className="space-y-1">
            {tracks.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => {
                    selectTrack(idx);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-200 ${
                    isSelected
                      ? 'bg-black/[0.06] dark:bg-white/10 font-semibold text-[#111111] dark:text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-black/[0.03] dark:hover:bg-white/5'
                  }`}
                  role="menuitem"
                >
                  <div className="flex flex-col">
                    <span className="leading-tight">{track.title}</span>
                    <span className="text-[0.65rem] text-neutral-400 dark:text-neutral-500 font-mono">
                      {track.subtitle}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-[#2d5a3c] dark:text-emerald-400 font-mono text-xs">
                      {isPlaying ? '● Playing' : '○ Selected'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

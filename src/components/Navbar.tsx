'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import MusicWidget from './MusicWidget';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header id="site-navbar" className="fixed top-3.5 sm:top-5 inset-x-0 mx-auto max-w-[1240px] w-[94%] sm:w-[90%] z-50 transition-all duration-500">
      {/* ✦ Galaxy Black Glassmorphism Floating Island ✦ */}
      <div
        className="galaxy-nav relative h-16 px-4 sm:px-7 rounded-full flex items-center justify-between overflow-hidden"
      >
        {/* Cosmic starfield micro-specks inside the bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          {/* Tiny star speckles */}
          <span className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-3 left-[18%]" style={{ animation: 'doodleTwinkle 3.1s ease-in-out infinite' }} />
          <span className="absolute w-[1.5px] h-[1.5px] rounded-full bg-cyan-300/50 top-5 left-[42%]" style={{ animation: 'doodleTwinkle 2.4s ease-in-out infinite 0.8s' }} />
          <span className="absolute w-[2px] h-[2px] rounded-full bg-violet-300/40 bottom-3 left-[60%]" style={{ animation: 'doodleTwinkle 3.8s ease-in-out infinite 1.5s' }} />
          <span className="absolute w-[1.5px] h-[1.5px] rounded-full bg-emerald-300/45 bottom-4 left-[78%]" style={{ animation: 'doodleTwinkle 2.9s ease-in-out infinite 2.2s' }} />
          <span className="absolute w-[1px] h-[1px] rounded-full bg-white/50 top-4 right-[28%]" style={{ animation: 'doodleTwinkle 4.2s ease-in-out infinite 0.4s' }} />
          <span className="absolute w-[2px] h-[2px] rounded-full bg-sky-300/35 top-3 right-[15%]" style={{ animation: 'doodleTwinkle 3.5s ease-in-out infinite 1.1s' }} />
          {/* Nebula aurora glow blobs */}
          <div className="absolute -top-8 left-[20%] w-32 h-16 rounded-full bg-violet-600/10 blur-2xl" />
          <div className="absolute -bottom-8 right-[25%] w-28 h-14 rounded-full bg-cyan-500/08 blur-2xl" />
          <div className="absolute top-0 left-[50%] -translate-x-1/2 w-40 h-8 rounded-full bg-emerald-500/06 blur-xl" />
        </div>

        {/* Left: Brand Logo Pill */}
        <Link
          href="/"
          className="relative flex items-center gap-2.5 group py-1 z-10"
          aria-label="Home"
        >
          {/* Pulsar star dot */}
          <span className="pulsar-dot w-2.5 h-2.5 rounded-full bg-emerald-400 block flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-white/90 group-hover:text-white transition-colors font-mono">
            JOY VISWAS
          </span>
          {/* Cosmic underline trail on hover */}
          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 xl:gap-9 z-10">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[0.73rem] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300 py-1 font-medium group"
            >
              {link.label}
              {/* Galaxy shimmer underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] rounded-full bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Right: Music Widget */}
        <div className="relative flex items-center gap-2 sm:gap-3 z-10">
          <MusicWidget />

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Galaxy Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="galaxy-drawer lg:hidden mt-2 p-5 rounded-3xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden relative">
          {/* Nebula glow inside drawer */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full bg-violet-600/10 blur-2xl" />
            <div className="absolute bottom-0 right-8 w-32 h-10 rounded-full bg-cyan-500/08 blur-xl" />
          </div>

          <nav className="relative flex flex-col gap-1">
            {siteConfig.navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group text-sm uppercase tracking-wider font-medium text-white/70 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/08 border border-transparent hover:border-violet-500/20 transition-all flex items-center justify-between"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-xs text-violet-400/60 group-hover:text-violet-300 transition-colors">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

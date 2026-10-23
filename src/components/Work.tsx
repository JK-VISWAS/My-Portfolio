'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Project } from '@/data/types';

interface ProjectTheme {
  accent: string;
  lightBg: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  gradient: string;
  glow: string;
  ringColor: string;
  categoryTag: string;
}

const PROJECT_THEMES: Record<string, ProjectTheme> = {
  'software-ai': {
    accent: '#10b981',
    lightBg: 'rgba(16, 185, 129, 0.08)',
    badgeBg: '#ecfdf5',
    badgeText: '#065f46',
    badgeBorder: '#a7f3d0',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glow: 'rgba(16, 185, 129, 0.4)',
    ringColor: 'ring-emerald-400',
    categoryTag: 'AI & Neural Systems',
  },
  'data-analytics': {
    accent: '#f59e0b',
    lightBg: 'rgba(245, 158, 11, 0.08)',
    badgeBg: '#fffbeb',
    badgeText: '#92400e',
    badgeBorder: '#fde68a',
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
    glow: 'rgba(245, 158, 11, 0.4)',
    ringColor: 'ring-amber-400',
    categoryTag: 'Data & Analytics',
  },
  'digital-experiences': {
    accent: '#3b82f6',
    lightBg: 'rgba(59, 130, 246, 0.08)',
    badgeBg: '#eff6ff',
    badgeText: '#1e40af',
    badgeBorder: '#bfdbfe',
    gradient: 'from-blue-600 via-indigo-600 to-cyan-400',
    glow: 'rgba(59, 130, 246, 0.4)',
    ringColor: 'ring-blue-400',
    categoryTag: 'Web & Digital Craft',
  },
  'ecotrack': {
    accent: '#2d5a3c',
    lightBg: 'rgba(45, 90, 60, 0.08)',
    badgeBg: '#eef4ef',
    badgeText: '#1e3d29',
    badgeBorder: '#bbf7d0',
    gradient: 'from-[#2d5a3c] via-emerald-600 to-teal-400',
    glow: 'rgba(45, 90, 60, 0.4)',
    ringColor: 'ring-[#2d5a3c]',
    categoryTag: 'IoT & CleanTech',
  },
  'urbanpulse': {
    accent: '#8b5cf6',
    lightBg: 'rgba(139, 92, 246, 0.08)',
    badgeBg: '#faf5ff',
    badgeText: '#581c87',
    badgeBorder: '#e9d5ff',
    gradient: 'from-purple-600 via-violet-500 to-fuchsia-500',
    glow: 'rgba(139, 92, 246, 0.4)',
    ringColor: 'ring-purple-400',
    categoryTag: 'Spatial Analytics & AI',
  },
  'loan-prediction-classification': {
    accent: '#f43f5e',
    lightBg: 'rgba(244, 63, 94, 0.08)',
    badgeBg: '#fff1f2',
    badgeText: '#9f1239',
    badgeBorder: '#fecdd3',
    gradient: 'from-rose-500 via-pink-600 to-orange-400',
    glow: 'rgba(244, 63, 94, 0.4)',
    ringColor: 'ring-rose-400',
    categoryTag: 'FinTech & ML',
  },
};

const DEFAULT_THEME: ProjectTheme = {
  accent: '#2d5a3c',
  lightBg: 'rgba(45, 90, 60, 0.08)',
  badgeBg: '#eef4ef',
  badgeText: '#1e3d29',
  badgeBorder: '#bbf7d0',
  gradient: 'from-[#2d5a3c] via-emerald-600 to-teal-400',
  glow: 'rgba(45, 90, 60, 0.4)',
  ringColor: 'ring-[#2d5a3c]',
  categoryTag: 'Engineering',
};

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Intelligence' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'web', label: 'Web & Systems' },
];

export default function Work() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // Video Preview Modal State
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Mount detection for zero hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hide the navbar when video preview modal is open, restore on close
  useEffect(() => {
    if (previewProject) {
      document.body.classList.add('preview-modal-open');
      // Also prevent body scroll while modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('preview-modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('preview-modal-open');
      document.body.style.overflow = '';
    };
  }, [previewProject]);

  // Filter projects according to category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    if (activeCategory === 'ai') {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes('ai') ||
          p.category.toLowerCase().includes('intelligence') ||
          p.category.toLowerCase().includes('machine learning')
      );
    }
    if (activeCategory === 'data') {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes('data') ||
          p.category.toLowerCase().includes('spatial') ||
          p.category.toLowerCase().includes('analytics')
      );
    }
    if (activeCategory === 'web') {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes('web') ||
          p.category.toLowerCase().includes('full stack') ||
          p.category.toLowerCase().includes('iot')
      );
    }
    return projects;
  }, [activeCategory]);

  // Adjust visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  // Safe index handler
  const goToSlide = useCallback(
    (index: number) => {
      if (filteredProjects.length === 0) return;
      if (index < 0) {
        setCurrentIndex(maxIndex);
      } else if (index > maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(index);
      }
    },
    [filteredProjects.length, maxIndex]
  );

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel' || filteredProjects.length <= visibleCount || previewProject !== null) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, viewMode, filteredProjects.length, visibleCount, maxIndex, previewProject]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Keyboard navigation for carousel & modal
  useEffect(() => {
    const handleKeyDownGlobal = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewProject) {
        setPreviewProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDownGlobal);
    return () => window.removeEventListener('keydown', handleKeyDownGlobal);
  }, [previewProject]);

  // Lock body scroll when video preview modal is open
  useEffect(() => {
    if (previewProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewProject]);

  // Touch & Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    setTouchDeltaX(currentX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    if (touchDeltaX > 50) {
      handlePrev();
    } else if (touchDeltaX < -50) {
      handleNext();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  // Switch preview to adjacent project inside modal
  const handleModalNext = () => {
    if (!previewProject) return;
    const curIdx = filteredProjects.findIndex((p) => p.slug === previewProject.slug);
    const nextIdx = (curIdx + 1) % filteredProjects.length;
    setPreviewProject(filteredProjects[nextIdx]);
  };

  const handleModalPrev = () => {
    if (!previewProject) return;
    const curIdx = filteredProjects.findIndex((p) => p.slug === previewProject.slug);
    const prevIdx = (curIdx - 1 + filteredProjects.length) % filteredProjects.length;
    setPreviewProject(filteredProjects[prevIdx]);
  };

  // Current active project for ambient dynamic backdrop aura
  const activeProject = filteredProjects[currentIndex] || filteredProjects[0] || projects[0];
  const activeTheme = PROJECT_THEMES[activeProject?.slug] || DEFAULT_THEME;

  const previewTheme = previewProject ? PROJECT_THEMES[previewProject.slug] || DEFAULT_THEME : null;

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 lg:py-36 bg-[#f8f8f5]/70 dark:bg-[#0c0e12]/60 backdrop-blur-xs border-b border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors duration-1000"
      tabIndex={0}
      aria-label="Selected Projects Carousel Section"
    >
      {/* Splendid Ambient Background Aura Glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-35 transition-all duration-1000 ease-out -z-10"
        style={{
          background: `radial-gradient(circle, ${activeTheme.accent} 0%, rgba(248, 248, 245, 0) 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 transition-all duration-1000 ease-out -z-10"
        style={{
          background: `radial-gradient(circle, #2d5a3c 0%, rgba(59, 130, 246, 0.15) 50%, rgba(248, 248, 245, 0) 75%)`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping duration-1000"
                style={{ backgroundColor: activeTheme.accent }}
              />
              <span
                className="w-2 h-2 rounded-full -ml-[19px]"
                style={{ backgroundColor: activeTheme.accent }}
              />
              <h2 className="text-[0.75rem] uppercase tracking-[0.24em] font-semibold text-[#6b6b6b] dark:text-neutral-400">
                04 / Selected Work
              </h2>
            </div>

            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111] dark:text-white">
              SELECTED
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a] dark:text-emerald-400">
                WORK.
              </span>
            </h3>

            <p className="mt-4 text-[#6b6b6b] dark:text-neutral-300 text-base max-w-lg leading-relaxed">
              Engineering architectures, artificial intelligence prototypes, and curated digital platforms. Click any card to explore case studies, or watch direct video previews.
            </p>
          </div>

          {/* Interactive Controls & View Modes */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center bg-black/[0.04] dark:bg-white/[0.08] p-1 rounded-xl border border-black/[0.06] dark:border-white/10 backdrop-blur-sm">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-white dark:bg-[#1a1f29] text-[#111111] dark:text-white shadow-sm shadow-black/[0.06] font-semibold'
                        : 'text-[#6b6b6b] dark:text-neutral-300 hover:text-[#111111] dark:hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle (Carousel vs Grid) */}
            <div className="flex items-center bg-black/[0.04] dark:bg-white/[0.08] p-1 rounded-xl border border-black/[0.06] dark:border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                title="Carousel View"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'carousel'
                    ? 'bg-white dark:bg-[#1a1f29] text-[#111111] dark:text-white shadow-sm'
                    : 'text-[#6b6b6b] dark:text-neutral-300 hover:text-[#111111] dark:hover:text-white'
                }`}
                aria-label="Switch to carousel view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-[#1a1f29] text-[#111111] dark:text-white shadow-sm'
                    : 'text-[#6b6b6b] dark:text-neutral-300 hover:text-[#111111] dark:hover:text-white'
                }`}
                aria-label="Switch to grid view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>

            {/* Auto-play toggle (visible in carousel mode) */}
            {viewMode === 'carousel' && (
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 px-3 rounded-xl border text-xs font-mono inline-flex items-center gap-1.5 transition-all duration-200 ${
                  isAutoPlaying
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/50'
                    : 'bg-white dark:bg-[#1a1f29] text-[#6b6b6b] dark:text-neutral-300 border-black/[0.08] dark:border-white/10'
                }`}
                title={isAutoPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
                aria-label={isAutoPlaying ? 'Pause auto play' : 'Resume auto play'}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isAutoPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                  }`}
                />
                {isAutoPlaying ? 'Auto' : 'Paused'}
              </button>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* CAROUSEL VIEW */}
        {/* ============================================================ */}
        {viewMode === 'carousel' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Viewport Window */}
            <div
              ref={containerRef}
              className="overflow-hidden py-4 -my-4 px-1 -mx-1"
            >
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isMounted
                    ? `translateX(-${(currentIndex * 100) / visibleCount}%)`
                    : 'translateX(0%)',
                }}
              >
                {filteredProjects.map((project, idx) => {
                  const theme = PROJECT_THEMES[project.slug] || DEFAULT_THEME;
                  const isCurrent = idx === currentIndex;

                  return (
                    <div
                      key={project.slug}
                      className="flex-shrink-0 px-3 sm:px-4"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <article
                        className={`group relative flex flex-col h-full bg-white dark:bg-[#14171f] rounded-2xl border transition-all duration-500 overflow-hidden ${
                          isCurrent
                            ? 'border-black/25 dark:border-white/30 shadow-xl shadow-black/[0.06] -translate-y-1'
                            : 'border-black/[0.08] dark:border-white/10 hover:border-black/25 dark:hover:border-white/30 hover:shadow-lg'
                        }`}
                        style={{
                          borderColor: isCurrent ? theme.accent : undefined,
                        }}
                      >
                        {/* Top Splendid Ambient Aura Bar */}
                        <div
                          className={`h-1.5 w-full bg-gradient-to-r ${theme.gradient}`}
                        />

                        {/* Project Media Container (NO nested <a>) */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                          <Link
                            href={`/work/${project.slug}`}
                            className="block w-full h-full relative"
                            aria-label={`View case study for ${project.title}`}
                          >
                            <Image
                              src={project.cover}
                              alt={`Preview banner for project ${project.title}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Hover Color Glaze */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                              style={{
                                background: `linear-gradient(135deg, ${theme.accent}, #2d5a3c)`,
                              }}
                            />
                          </Link>

                          {/* Project Number Watermark Tag */}
                          <div
                            className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border backdrop-blur-md shadow-sm pointer-events-none"
                            style={{
                              backgroundColor: theme.badgeBg,
                              color: theme.badgeText,
                              borderColor: theme.badgeBorder,
                            }}
                          >
                            {project.number || 'PRJ'}
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#1a1f29]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[0.7rem] uppercase tracking-wider font-mono text-[#111111] dark:text-white border border-black/10 dark:border-white/15 shadow-sm pointer-events-none">
                            {project.year}
                          </div>

                          {/* Prominent Floating "Watch Video Preview" Button */}
                          {project.video && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setPreviewProject(project);
                              }}
                              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-black/85 hover:bg-black text-white text-xs font-medium backdrop-blur-md shadow-lg border border-white/20 inline-flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
                              title="Watch Video Preview"
                            >
                              <span
                                className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                                style={{ backgroundColor: theme.accent }}
                              >
                                <svg className="w-2.5 h-2.5 ml-0.5 fill-current" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                              <span>Video Preview</span>
                            </button>
                          )}
                        </div>

                        {/* Project Content Body */}
                        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                          <div>
                            {/* Subtitle / Category with color dot */}
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: theme.accent }}
                              />
                              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-[#6b6b6b] dark:text-neutral-400 font-mono block">
                                {project.category}
                              </span>
                            </div>

                            {/* Title with standalone Link (NO nested anchors) */}
                            <h4 className="text-xl sm:text-2xl font-semibold mb-2.5 line-clamp-1">
                              <Link
                                href={`/work/${project.slug}`}
                                className="text-[#111111] dark:text-white hover:opacity-80 transition-opacity"
                              >
                                {project.title}
                              </Link>
                            </h4>

                            {/* Summary */}
                            <p className="text-sm text-[#555555] dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                              {project.summary}
                            </p>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {project.stack.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 text-[0.68rem] font-mono rounded-md bg-neutral-100 dark:bg-white/10 text-[#444444] dark:text-neutral-200 border border-black/[0.05] dark:border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.stack.length > 3 && (
                                <span className="px-1.5 py-0.5 text-[0.68rem] font-mono text-[#888888] dark:text-neutral-400">
                                  +{project.stack.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Card Footer Bar: Standalone Actions */}
                          <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                            <Link
                              href={`/work/${project.slug}`}
                              className="text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-1.5 transition-transform duration-300 hover:translate-x-1"
                              style={{ color: theme.accent }}
                            >
                              Explore Case Study
                              <span className="text-sm">→</span>
                            </Link>

                            {/* Quick Action Icons: Video, Demo, Code */}
                            <div className="flex items-center gap-1.5">
                              {project.video && (
                                <button
                                  type="button"
                                  onClick={() => setPreviewProject(project)}
                                  className="p-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 text-[#333333] dark:text-neutral-200 hover:text-[#111111] dark:hover:text-white text-xs font-mono inline-flex items-center gap-1 border border-black/10 dark:border-white/15 transition-colors"
                                  title="Play Video Demo"
                                >
                                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                  <span>Demo</span>
                                </button>
                              )}
                              {project.links.live && (
                                <a
                                  href={project.links.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Open Live Preview"
                                  className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 text-[#666666] dark:text-neutral-300 hover:text-[#111111] dark:hover:text-white transition-colors"
                                  aria-label={`Open live preview for ${project.title}`}
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                              {project.links.repo && (
                                <a
                                  href={project.links.repo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="View Source Code"
                                  className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 text-[#666666] dark:text-neutral-300 hover:text-[#111111] dark:hover:text-white transition-colors"
                                  aria-label={`View source code for ${project.title}`}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls Bar: Progress, Counter & Prev/Next Arrows */}
            <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Counter & Active Progress Line */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="font-mono text-sm font-semibold text-[#111111]">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>

                <div className="relative w-36 sm:w-48 h-1 bg-black/[0.08] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentIndex + 1) / filteredProjects.length) * 100}%`,
                      backgroundColor: activeTheme.accent,
                    }}
                  />
                </div>

                <span className="font-mono text-sm text-[#888888]">
                  {String(filteredProjects.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {filteredProjects.map((proj, idx) => {
                  const isActive = idx === currentIndex;
                  const dotTheme = PROJECT_THEMES[proj.slug] || DEFAULT_THEME;
                  return (
                    <button
                      key={proj.slug}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'w-8' : 'w-2 bg-black/20 hover:bg-black/40'
                      }`}
                      style={{
                        backgroundColor: isActive ? dotTheme.accent : undefined,
                      }}
                      aria-label={`Jump to slide ${idx + 1}: ${proj.title}`}
                    />
                  );
                })}
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-black/15 bg-white text-[#111111] flex items-center justify-center hover:scale-105 active:scale-95 hover:border-black/40 hover:shadow-md transition-all duration-200"
                  aria-label="Previous project"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-black/15 text-white flex items-center justify-center hover:scale-105 active:scale-95 shadow-md transition-all duration-200"
                  style={{
                    backgroundColor: activeTheme.accent,
                    boxShadow: `0 8px 20px -4px ${activeTheme.glow}`,
                  }}
                  aria-label="Next project"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* GRID VIEW */
          /* ============================================================ */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => {
              const theme = PROJECT_THEMES[project.slug] || DEFAULT_THEME;
              return (
                <article
                  key={project.slug}
                  className="group flex flex-col bg-white dark:bg-[#14171f] border border-black/[0.08] dark:border-white/10 rounded-2xl overflow-hidden hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${theme.gradient}`}
                  />
                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                      <Link
                        href={`/work/${project.slug}`}
                        className="block w-full h-full relative"
                        aria-label={`View case study for ${project.title}`}
                      >
                        <Image
                          src={project.cover}
                          alt={`Preview banner for project ${project.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </Link>

                      <div
                        className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border backdrop-blur-md pointer-events-none"
                        style={{
                          backgroundColor: theme.badgeBg,
                          color: theme.badgeText,
                          borderColor: theme.badgeBorder,
                        }}
                      >
                        {project.number || 'PRJ'}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#1a1f29]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-mono text-[#111111] dark:text-white border border-black/10 dark:border-white/15 pointer-events-none">
                        {project.year}
                      </div>

                      {project.video && (
                        <button
                          type="button"
                          onClick={() => setPreviewProject(project)}
                          className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-black/85 hover:bg-black text-white text-xs font-medium backdrop-blur-md shadow-lg border border-white/20 inline-flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                          title="Watch Video Preview"
                        >
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: theme.accent }}
                          >
                            <svg className="w-2.5 h-2.5 ml-0.5 fill-current" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>Video Preview</span>
                        </button>
                      )}
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                          />
                          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-[#6b6b6b] dark:text-neutral-400 font-mono block">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-semibold mb-2">
                          <Link
                            href={`/work/${project.slug}`}
                            className="text-[#111111] dark:text-white hover:text-[#2d5a3c] dark:hover:text-emerald-400 transition-colors"
                          >
                            {project.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-[#555555] dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[0.68rem] font-mono rounded-md bg-neutral-100 dark:bg-white/10 text-[#444444] dark:text-neutral-200 border border-black/[0.05] dark:border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                        <Link
                          href={`/work/${project.slug}`}
                          className="text-xs font-semibold uppercase tracking-[0.14em] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                          style={{ color: theme.accent }}
                        >
                          Explore Case Study →
                        </Link>

                        <div className="flex items-center gap-2">
                          {project.video && (
                            <button
                              type="button"
                              onClick={() => setPreviewProject(project)}
                              className="p-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 text-[#333333] dark:text-neutral-200 text-xs font-mono inline-flex items-center gap-1 border border-black/10 dark:border-white/15"
                            >
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              <span>Demo</span>
                            </button>
                          )}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 text-[#666666] dark:text-neutral-300"
                              aria-label="Live Demo"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* CINEMATIC VIDEO PREVIEW MODAL */}
      {/* ============================================================ */}
      {previewProject && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-start sm:justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-preview-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[94vh] my-auto bg-[#0d1017] text-white rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: previewTheme ? `0 20px 60px -10px ${previewTheme.glow}, 0 0 40px rgba(0,0,0,0.8)` : undefined,
            }}
          >
            {/* Modal Top Bar (Sticky so it stays visible while scrolling) */}
            <div className="sticky top-0 z-20 shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/10 bg-[#0d1017]/95 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold"
                  style={{
                    backgroundColor: previewTheme?.badgeBg || '#ffffff',
                    color: previewTheme?.badgeText || '#111111',
                  }}
                >
                  {previewProject.number || 'PRJ'}
                </span>
                <div>
                  <h3 id="video-preview-title" className="text-sm sm:text-base md:text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-md">
                    {previewProject.title}
                  </h3>
                  <p className="text-[0.7rem] sm:text-xs text-neutral-400 font-mono">
                    {previewProject.category} &bull; {previewProject.year}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Previous / Next Video Quick Buttons */}
                <button
                  type="button"
                  onClick={handleModalPrev}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                  title="Previous project video"
                  aria-label="Previous project video"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleModalNext}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                  title="Next project video"
                  aria-label="Next project video"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors ml-1 sm:ml-2"
                  title="Close preview (Esc)"
                  aria-label="Close preview"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content Body with smooth scrolling */}
            <div
              className="overflow-y-auto overscroll-contain flex-grow flex flex-col scroll-smooth"
              tabIndex={0}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.2) transparent',
              }}
            >
              {/* Video Player Display Area - responsive max-height so preview fits nicely on laptop screens */}
              <div
                className="relative w-full bg-black overflow-hidden flex items-center justify-center shrink-0"
                style={{ maxHeight: 'min(48vh, 420px)' }}
                onWheel={(e) => {
                  // Ensure mouse wheel over video area scrolls the parent body effortlessly
                  const scrollableParent = e.currentTarget.parentElement;
                  if (scrollableParent) {
                    scrollableParent.scrollTop += e.deltaY;
                  }
                }}
              >
                {previewProject.video ? (
                  <video
                    key={previewProject.video}
                    src={previewProject.video}
                    autoPlay
                    playsInline
                    loop
                    controls
                    muted={isVideoMuted}
                    poster={previewProject.cover}
                    className="w-full h-auto max-h-[min(48vh,420px)] object-contain"
                  />
                ) : (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={previewProject.cover}
                      alt={previewProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <p className="text-sm font-mono text-neutral-300">Video demo stream initializing...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Details & Quick Action Bar (Always visible / scrollable) */}
              <div className="p-4 sm:p-6 bg-gradient-to-b from-[#131622] to-[#0a0c10] border-t border-white/10 shrink-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-3">
                      {previewProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {previewProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[0.7rem] sm:text-xs font-mono rounded-md bg-white/10 text-neutral-200 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 md:pt-0">
                    {/* Mute/Unmute quick toggle */}
                    <button
                      type="button"
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 inline-flex items-center gap-1.5 transition-colors border border-white/10"
                    >
                      {isVideoMuted ? (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                          <span>Unmute</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                          <span>Mute</span>
                        </>
                      )}
                    </button>

                    {/* External Live Demo Link */}
                    {previewProject.links.live && (
                      <a
                        href={previewProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors border border-white/10"
                      >
                        <span>Live Site</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {/* Full Case Study Page Link */}
                    <Link
                      href={`/work/${previewProject.slug}`}
                      onClick={() => setPreviewProject(null)}
                      className="px-5 py-2 rounded-xl text-black font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                      style={{
                        backgroundColor: previewTheme?.accent || '#ffffff',
                      }}
                    >
                      <span>Full Case Study</span>
                      <span className="text-sm">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

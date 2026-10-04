import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b] mb-6">
              {siteConfig.tagline}
            </p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold tracking-tight text-[#111111] leading-[0.95] mb-8">
              <span>JOY </span>
              <span className="font-editorial italic font-normal tracking-normal text-[#1a1a1a]">
                VISWAS
              </span>
              <br />
              <span>KOLLI</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#6b6b6b] max-w-xl font-light leading-relaxed mb-12">
              Developer and AI enthusiast focused on transforming ideas into thoughtful digital
              experiences through technology, creativity and continuous learning.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#8a8a8a]">
                Scroll to explore
              </span>
              <div className="w-14 h-[1px] bg-black/20" />
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle ambient halo */}
              <div className="absolute -inset-4 rounded-3xl bg-radial from-emerald-900/10 via-transparent to-transparent blur-xl pointer-events-none" />

              {/* Portrait Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[430px] rounded-2xl overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/[0.04]">
                <Image
                  src="/joy-viswas.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              {/* Subtle status badge */}
              <div className="absolute -bottom-3 -left-3 bg-[#ffffff] border border-black/10 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2d5a3c] animate-pulse" />
                <span className="text-[0.68rem] uppercase tracking-[0.14em] text-[#111111] font-medium">
                  Available for roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Editorial Wave Divider */}
      <div className="w-full mt-16 md:mt-24 pointer-events-none overflow-hidden leading-none text-white">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M0,40 C320,110 520,10 820,70 C1120,130 1320,30 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

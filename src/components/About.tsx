import { siteConfig } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-white/70 dark:bg-black/20 backdrop-blur-xs border-b border-black/[0.08] dark:border-white/10 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b] dark:text-neutral-400">
            01 / About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Big Editorial Statement */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111] dark:text-white">
              {siteConfig.statement.line1}
              <br />
              {siteConfig.statement.line2}
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a] dark:text-emerald-400">
                {siteConfig.statement.highlight}
              </span>
            </h3>
          </div>

          {/* Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#555555] dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            {siteConfig.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

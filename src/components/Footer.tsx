import { siteConfig } from '@/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#f8f8f5]/80 dark:bg-[#0c0e12]/80 text-[#111111] dark:text-[#f4f4f5] text-xs font-mono tracking-wider transition-colors duration-300 border-t border-black/[0.06] dark:border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-semibold uppercase tracking-[0.14em]">
          {siteConfig.name}
        </div>
        <div className="text-[#6b6b6b] dark:text-neutral-400 uppercase tracking-[0.12em]">
          {siteConfig.role}
        </div>
        <div className="text-[#8a8a8a] dark:text-neutral-500">
          © {currentYear}
        </div>
      </div>
    </footer>
  );
}

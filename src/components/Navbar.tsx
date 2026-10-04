import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-colors duration-300 bg-[#f8f8f5]/85 backdrop-blur-md border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#111111] hover:opacity-75 transition-opacity"
        >
          WELCOME
        </Link>

        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.75rem] uppercase tracking-[0.16em] text-[#6b6b6b] hover:text-[#111111] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden">
          <a
            href="#contact"
            className="text-[0.7rem] uppercase tracking-[0.14em] px-4 py-1.5 border border-black/20 rounded-full hover:bg-black hover:text-[#f8f8f5] transition-colors"
          >
            Menu
          </a>
        </div>
      </div>
    </header>
  );
}

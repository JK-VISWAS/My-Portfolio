import { siteConfig } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 lg:py-44 bg-white border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b]">
            07 / Contact
          </h2>
        </div>

        <div className="max-w-4xl">
          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98] text-[#111111] mb-12 md:mb-16">
            LET&apos;S BUILD
            <br />
            <span className="font-editorial italic font-normal text-[#1a1a1a]">something</span>
            <br />
            GREAT.
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-8 border-t border-black/[0.12]">
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg sm:text-2xl md:text-3xl font-medium text-[#111111] hover:text-[#2d5a3c] transition-colors inline-flex items-center gap-2 group"
                aria-label={`Send email to ${siteConfig.email}`}
              >
                <span>{siteConfig.email}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label || `Visit ${social.name}`}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#6b6b6b] hover:text-[#111111] transition-colors relative py-1 group"
                >
                  {social.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

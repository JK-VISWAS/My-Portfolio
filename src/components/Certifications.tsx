import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b]">
            05 / Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111]">
              LEARNING
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a]">NEVER STOPS.</span>
            </h3>
            <p className="mt-6 text-[#6b6b6b] text-base max-w-sm">
              Continuous professional training, state certifications, and technical accreditations.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="py-5 sm:py-6 flex items-center justify-between group hover:pl-2 transition-all duration-300 cursor-default"
                >
                  <div className="pr-4">
                    <span className="text-base sm:text-lg font-medium text-[#111111] group-hover:text-[#2d5a3c] transition-colors block">
                      {cert.name}
                    </span>
                    {cert.issuer && (
                      <span className="text-xs text-[#8a8a8a] mt-1 block">
                        {cert.issuer}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-lg text-[#8a8a8a] group-hover:text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
                  >
                    ↗
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { educations } from '@/data/education';

export default function Education() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#f8f8f5] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b]">
            06 / Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111]">
              WHERE I&apos;M
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a]">GROWING.</span>
            </h3>
            <p className="mt-6 text-[#6b6b6b] text-base max-w-sm">
              Academic foundations in computer science theory, algorithms, and engineering systems.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] rounded-2xl p-7 sm:p-9 shadow-sm"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] block mb-3 font-mono">
                    {edu.period}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-base text-[#2d5a3c] font-medium mb-3">
                    {edu.institution} {edu.affiliation ? `· ${edu.affiliation}` : ''}
                  </p>
                  {edu.notes && (
                    <p className="text-[#555555] text-sm leading-relaxed">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

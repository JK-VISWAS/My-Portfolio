import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 lg:py-36 bg-white/70 dark:bg-black/20 backdrop-blur-xs border-b border-black/[0.08] dark:border-white/10 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b] dark:text-neutral-400">
            03 / Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111] dark:text-white">
              EXPERIENCE
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a] dark:text-emerald-400">THAT SHAPED ME.</span>
            </h3>
            <p className="mt-6 text-[#6b6b6b] dark:text-neutral-300 text-base max-w-sm">
              Roles, leadership initiatives, and collaborative milestones in engineering and student engagement.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-black/15 dark:border-white/20 ml-3 sm:ml-4 space-y-12">
              {experiences.map((item) => (
                <li key={item.id} className="pl-6 sm:pl-8 relative group">
                  {/* Timeline marker */}
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#111111] dark:bg-white ring-4 ring-white dark:ring-[#0c0e12]" />

                  <span className="text-[0.75rem] uppercase tracking-[0.16em] text-[#8a8a8a] dark:text-neutral-400 block mb-2 font-mono">
                    {item.period}
                  </span>

                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-white mb-1">
                    {item.role}
                  </h4>

                  <p className="text-sm font-medium text-[#2d5a3c] dark:text-emerald-400 mb-4">
                    {item.company}
                  </p>

                  <p className="text-[#555555] dark:text-neutral-300 text-base leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.skills && (
                    <ul className="flex flex-wrap gap-2">
                      {item.skills.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs px-2.5 py-1 bg-[#f4f4f0] dark:bg-neutral-800 text-[#555555] dark:text-neutral-200 rounded-full border border-black/5 dark:border-white/10"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

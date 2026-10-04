import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 lg:py-36 bg-[#f8f8f5] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b]">
            02 / Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111]">
              TOOLS I
              <br />
              <span className="font-editorial italic font-normal text-[#1a1a1a]">WORK WITH.</span>
            </h3>
            <p className="mt-6 text-[#6b6b6b] text-base max-w-sm">
              Technologies, programming languages, and engineering concepts applied in production and academic systems.
            </p>
          </div>

          {/* Semantic List of Skills */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="bg-white border border-black/[0.08] rounded-xl px-5 py-4 text-sm font-medium text-[#222222] hover:border-black/30 hover:bg-[#ffffff] hover:shadow-sm transition-all duration-200 flex items-center justify-between group"
                >
                  <span>{skill.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-[#2d5a3c] transition-colors" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

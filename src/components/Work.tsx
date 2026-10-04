import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 lg:py-36 bg-[#f8f8f5] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
          <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b]">
            04 / Selected Work
          </h2>
        </div>

        <div className="mb-14 md:mb-20">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[#111111]">
            SELECTED
            <br />
            <span className="font-editorial italic font-normal text-[#1a1a1a]">WORK.</span>
          </h3>
          <p className="mt-4 text-[#6b6b6b] text-base max-w-lg">
            Engineering architectures, artificial intelligence prototypes, and curated digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col bg-white border border-black/[0.08] rounded-2xl overflow-hidden hover:border-black/30 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
            >
              <Link href={`/work/${project.slug}`} className="flex flex-col h-full">
                {/* Project Image Frame */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.cover}
                    alt={`Preview banner for project ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-mono text-[#111111] border border-black/10">
                    {project.number || 'PRJ'}
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[0.7rem] uppercase tracking-[0.16em] text-[#6b6b6b] block mb-2 font-mono">
                      {project.category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-semibold text-[#111111] group-hover:text-[#2d5a3c] transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-[#555555] line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8a8a8a]">{project.year}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

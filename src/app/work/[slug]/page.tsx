import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { siteConfig } from '@/data/site';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow pt-32 pb-24 md:pt-40 md:pb-36 bg-[#f8f8f5]">
        <article className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Back link */}
          <div className="mb-8 md:mb-12">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6b6b6b] hover:text-[#111111] transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
            <span className="text-[0.75rem] uppercase tracking-[0.22em] text-[#6b6b6b] font-mono">
              {project.number || 'PRJ'} · {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#111111] leading-[0.98] mb-8">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#555555] max-w-3xl font-light leading-relaxed mb-14 md:mb-16">
            {project.summary}
          </p>

          {/* Key Facts Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-black/[0.1] mb-12 md:mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] block mb-1 font-mono">
                Year
              </span>
              <span className="text-base sm:text-lg font-medium text-[#111111]">
                {project.year}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] block mb-1 font-mono">
                Role
              </span>
              <span className="text-base sm:text-lg font-medium text-[#111111]">
                {project.role}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] block mb-1 font-mono">
                Category
              </span>
              <span className="text-base sm:text-lg font-medium text-[#111111]">
                {project.category.split('/')[0].trim()}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] block mb-1 font-mono">
                Links
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] hover:text-[#2d5a3c] underline underline-offset-4"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] hover:text-[#2d5a3c] underline underline-offset-4"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Cover Feature */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-200 border border-black/10 shadow-lg mb-14 md:mb-20">
            <Image
              src={project.cover}
              alt={`Full presentation banner for ${project.title}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Case Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#111111] leading-tight mb-6">
                Architecture &amp;
                <br />
                <span className="font-editorial italic font-normal text-[#1a1a1a]">Engineering Approach.</span>
              </h2>
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] block font-mono">
                  Technologies Utilized
                </span>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 bg-white border border-black/10 rounded-full text-[#333333]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg leading-relaxed">
              <p>{project.description}</p>
              <p>
                Engineered with modular maintainability, strict typing guarantees, and responsive
                layouts adhering to modern web performance standards.
              </p>
            </div>
          </div>

          {/* Next Project Footer Bar */}
          {nextProject && (
            <div className="pt-12 border-t border-black/[0.1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] block mb-1 font-mono">
                  Next Project
                </span>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="text-2xl sm:text-3xl font-semibold text-[#111111] hover:text-[#2d5a3c] transition-colors"
                >
                  {nextProject.title} →
                </Link>
              </div>

              <Link
                href="/#work"
                className="px-6 py-3 rounded-full border border-black/20 text-[#111111] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-black hover:text-white transition-colors"
              >
                All Projects
              </Link>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  links: ProjectLinks;
  cover: string;
  description: string;
  number?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category?: 'programming' | 'core' | 'tools' | 'web' | 'ai';
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  skills?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  url?: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  notes?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  statement: {
    line1: string;
    line2: string;
    highlight: string;
  };
  aboutParagraphs: string[];
  socials: SocialLink[];
  navLinks: NavLink[];
  metadata: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
  };
}

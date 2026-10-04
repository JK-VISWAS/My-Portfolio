import { Project } from './types';

export const projects: Project[] = [
  // Legacy selected cards (placeholders to preserve legacy look & URLs)
  {
    slug: 'software-ai',
    number: '01',
    title: 'Software & AI',
    summary: 'Next-generation intelligent systems exploring machine intelligence and computational reasoning.',
    category: 'Development / Artificial Intelligence',
    year: '2025',
    role: 'Lead Developer & Architect',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    links: {
      // TODO: Replace placeholder repo URL with your actual repository
      repo: 'https://github.com/JK-VISWAS',
      // TODO: Add live URL if deployed
      live: 'https://theviswasarchives.com/work/software-ai',
    },
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85',
    description:
      'An exploratory initiative designing neural workflows and autonomous agents that augment digital task execution. Built with clean modular microservices, resilient data processing pipelines, and responsive real-time interfaces.',
    featured: true,
  },
  {
    slug: 'data-analytics',
    number: '02',
    title: 'Data & Analytics',
    summary: 'High-throughput algorithmic pipelines translating high-dimensional datasets into actionable intelligence.',
    category: 'Data / Technology',
    year: '2025',
    role: 'Data Engineer & Analyst',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Apache Spark'],
    links: {
      // TODO: Replace with project repository
      repo: 'https://github.com/JK-VISWAS',
    },
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    description:
      'Robust analytics framework engineered for predictive modeling, statistical exploration, and interactive business intelligence dashboards. Features scalable ETL transformations, anomaly detection, and automated data validation.',
    featured: true,
  },
  {
    slug: 'digital-experiences',
    number: '03',
    title: 'Digital Experiences',
    summary: 'Editorial, performance-first web platforms built with tactile micro-interactions and typographic precision.',
    category: 'Web / Full Stack',
    year: '2026',
    role: 'Frontend Architect',
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'WebGL', 'GSAP'],
    links: {
      // TODO: Replace with portfolio repository
      repo: 'https://github.com/JK-VISWAS',
      live: 'https://theviswasarchives.com',
    },
    cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85',
    description:
      'A study in ultra-modern digital craftsmanship. Demonstrates fluid layout transitions, strict typographic rhythm, accessible navigation systems, and sub-second rendering across all modern mobile and desktop viewports.',
    featured: true,
  },

  // Concrete Portfolio Projects (Ready to customize)
  {
    slug: 'ecotrack',
    number: '04',
    title: 'EcoTrack',
    summary: 'Environmental monitoring and personal carbon footprint tracking application with real-time feedback loops.',
    category: 'Full Stack / IoT & Green Tech',
    year: '2025',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    links: {
      // TODO: Add your EcoTrack repository URL here
      repo: 'https://github.com/JK-VISWAS/ecotrack',
      // TODO: Add your live demo link if available
      live: 'https://ecotrack.theviswasarchives.com',
    },
    cover: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85',
    description:
      'EcoTrack empowers users to track, analyze, and offset everyday emissions through automated metric calculations, smart notifications, and interactive environmental impact visualizations. Built with an event-driven architecture and accessible interface.',
    featured: false,
  },
  {
    slug: 'urbanpulse',
    number: '05',
    title: 'UrbanPulse',
    summary: 'Smart city crowd intelligence and urban mobility analytics engine with interactive heatmaps.',
    category: 'AI & Spatial Analytics',
    year: '2025',
    role: 'Lead Developer',
    stack: ['Python', 'FastAPI', 'React', 'Mapbox GL', 'GeoPandas'],
    links: {
      // TODO: Add UrbanPulse repository link
      repo: 'https://github.com/JK-VISWAS/urbanpulse',
    },
    cover: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1400&q=85',
    description:
      'UrbanPulse processes spatial telemetry and transit feeds to generate predictive traffic congestion models and public resource allocation recommendations for modern municipalities.',
    featured: false,
  },
  {
    slug: 'loan-prediction-classification',
    number: '06',
    title: 'Loan Prediction Classification',
    summary: 'Machine learning classification pipeline evaluating credit risk and automated loan approval likelihood.',
    category: 'Machine Learning / FinTech',
    year: '2025',
    role: 'ML Engineer',
    stack: ['Python', 'Scikit-Learn', 'XGBoost', 'Streamlit', 'Pandas'],
    links: {
      // TODO: Add Loan Prediction repository link
      repo: 'https://github.com/JK-VISWAS/loan-prediction-classification',
    },
    cover: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85',
    description:
      'A predictive creditworthiness system utilizing supervised ensemble classification algorithms (Random Forest, XGBoost, Logistic Regression) with automated hyperparameter tuning and bias evaluation.',
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export type AudienceMode = 'recruiter' | 'client';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Mobile & Realtime' | 'Fintech' | 'Enterprise / SaaS';
  description: string;
  longDescription: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architecturePoints: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    highlight?: boolean;
    description: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface LocalBusinessOffer {
  id: string;
  title: string;
  tagline: string;
  idealFor: string;
  deliveryTime: string;
  startingPricePKR: string;
  startingPriceUSD: string;
  features: string[];
  badge?: string;
}

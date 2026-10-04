import type { StaticImageData } from 'next/image';

export type ProjectCategory = "academic" | "personal";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type SkillDomain =
  | "programming"
  | "full-stack"
  | "frontend"
  | "data"
  | "cloud-devops"
  | "ai-automation"
  | "dsa"
  | "cybersecurity"
  | "os-scripts"
  | "architecture"
  | "languages"
  | "certifications";

export interface ContactLink {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "instagram" | "facebook" | "portfolio" | "external";
}

export interface Profile {
  name: string;
  location: string;
  headline: string;
  summary: string;
  contacts: ContactLink[];
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  mode?: "onsite" | "remote" | "hybrid";
  startDate: string;
  endDate: string;
  logoUrl: StaticImageData | null;
  summary: string;
  highlights: string[];
  source: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  logoUrl: StaticImageData | null;
  focusAreas: string[];
}

export interface Project {
  slug?: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  path: string;
  dateRange?: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  portfolioAngle?: string;
  featured?: boolean;
}

export type ProjectCaseKind = "case-study" | "repository" | "content";

export interface ProjectModule {
  name: string;
  role: string;
  repositoryUrl: string;
  localPath: string;
  summary: string;
  technologies: string[];
  evidence: string[];
}

export interface ProjectCase {
  slug: string;
  title: string;
  category: ProjectCategory;
  kind: ProjectCaseKind;
  actionLabel: string;
  dateRange?: string;
  thumbnail?: StaticImageData;
  summary: string;
  narrative: string[];
  technologies: string[];
  highlights: string[];
  modules: ProjectModule[];
  sourceSignals: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  image: StaticImageData | string;
}

export interface SkillGroup {
  domain: SkillDomain;
  title: string;
  items: SkillItem[];
}

export interface AuxiliaryRepository {
  title: string;
  source: string;
  summary: string;
  domains: SkillDomain[];
  technologies: string[];
}

export interface Certification {
  name: string;
  authority: string;
  issuedOn: string;
  url?: string;
}

export interface DesignTokenGuide {
  designLanguage: string[];
  layoutPrinciples: string[];
  colors: Record<string, string>;
  typography: {
    sans: string;
    mono: string;
  };
}

export interface CertificateMedia {
  type: "image" | "pdf" | "link";
  url: string;
  title: string;
  description: string;
}

export interface Certificate {
  id?: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  logoUrl: StaticImageData | null;
  licenseNumber?: string;
  media?: CertificateMedia[];
}

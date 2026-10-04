import type { ProjectCase } from "@/src/types";

export interface ProjectViewProps {
  project: ProjectCase;
}

export interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
  captionTone?: "default" | "legacy" | "rework";
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  github?: string;
  linkedin?: string;
  icon?: string;
}

export interface VideoDemo {
  id: string;
  label: string;
  icon?: string;
  title: string;
  description?: string;
  src?: string;
  poster?: string;
  mimeType?: string;
}

export interface ArtifactLink {
  title: string;
  description: string;
  href: string;
  icon?: string;
  actionLabel?: string;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  icon?: string;
  group?: string;
}

export interface TechCard {
  title: string;
  items: string[];
  tags: string[];
}

export interface Contributor {
  name: string;
  role: string;
  href: string;
  avatarSrc?: string;
}

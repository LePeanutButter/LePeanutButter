"use client";

import { useState } from "react";
import type { ProjectCase } from "@/src/types";
import ProjectCard from "@/src/components/ui/ProjectCard";

interface ProjectGridProps {
  projects: ProjectCase[];
  title: string;
  initialLimit?: number;
}

export default function ProjectGrid({
  projects,
  title,
  initialLimit = 6,
}: ProjectGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper function to parse date range (e.g., "August 2025 - December 2025")
  const getEndDate = (dateRange?: string) => {
    if (!dateRange) return new Date(0);
    const parts = dateRange.split("-");
    const endStr = parts[parts.length - 1].trim();
    const date = new Date(endStr);
    return isNaN(date.getTime()) ? new Date(0) : date;
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = getEndDate(a.dateRange);
    const dateB = getEndDate(b.dateRange);
    if (dateA.getTime() !== dateB.getTime()) {
      return dateB.getTime() - dateA.getTime(); // Most recent first
    }
    // Alphabetical fallback
    return a.title.localeCompare(b.title);
  });

  const hasMoreProjects = sortedProjects.length > initialLimit;
  const visibleProjects = isExpanded ? sortedProjects : sortedProjects.slice(0, initialLimit);
  const hiddenCount = sortedProjects.length - initialLimit;

  return (
    <div>
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <span className="rounded border border-border-subtle bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted">
          {projects.length} items
        </span>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {hasMoreProjects ? (
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full border border-border-subtle bg-transparent px-6 py-3 text-sm font-semibold text-ink-secondary transition-all duration-500 ease-premium hover:border-black/30 hover:bg-black/[0.01] hover:text-ink"
            onClick={() => setIsExpanded((currentState) => !currentState)}
            type="button"
          >
            <span>
              {isExpanded ? "Show fewer" : `Show ${hiddenCount} more`}
            </span>
            <span aria-hidden="true">{isExpanded ? "^" : "v"}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

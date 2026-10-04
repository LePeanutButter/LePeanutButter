"use client";

import type { ProjectCategory } from "@/src/types";

export type FilterCategory = "all" | ProjectCategory;

interface ProjectTabsProps {
  activeCategory: FilterCategory;
  onTabChange: (category: FilterCategory) => void;
}

export default function ProjectTabs({ activeCategory, onTabChange }: ProjectTabsProps) {
  const tabs: FilterCategory[] = ["all", "academic", "personal"];

  return (
    <div
      aria-label="Project category tabs"
      className="flex w-fit rounded-control border border-border-subtle bg-surface p-1 shadow-premium"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={
            activeCategory === tab
              ? "rounded-[6px] bg-ink px-4 py-2 text-sm font-medium capitalize text-canvas"
              : "px-4 py-2 text-sm font-medium capitalize text-ink-secondary hover:text-ink transition-colors"
          }
          aria-pressed={activeCategory === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

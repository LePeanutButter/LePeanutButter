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
      role="group"
      aria-label="Filter projects by category"
      className="flex w-fit rounded-full border border-border-subtle bg-white/70 p-1 shadow-premium backdrop-blur-sm"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={
            activeCategory === tab
              ? "min-h-11 rounded-full bg-ink px-4 py-2 text-sm font-medium capitalize text-canvas"
              : "min-h-11 px-4 py-2 text-sm font-medium capitalize text-ink-secondary transition-colors hover:text-ink"
          }
          aria-pressed={activeCategory === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

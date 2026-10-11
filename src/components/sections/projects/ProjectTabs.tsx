"use client";

import type { ProjectCategory } from "@/src/types";
import { usePreferences } from "@/src/context/PreferencesContext";

export type FilterCategory = "all" | ProjectCategory;

interface ProjectTabsProps {
  activeCategory: FilterCategory;
  onTabChange: (category: FilterCategory) => void;
}

export default function ProjectTabs({ activeCategory, onTabChange }: ProjectTabsProps) {
  const tabs: FilterCategory[] = ["all", "academic", "personal"];
  const { t } = usePreferences();

  return (
    <div
      role="group"
      aria-label={t("projects.filter")}
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
          {t(`projects.${tab}`)}
        </button>
      ))}
    </div>
  );
}

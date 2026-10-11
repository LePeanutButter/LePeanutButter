"use client";

import type { ProjectCategory } from "@/src/types";
import { usePreferences } from "@/src/context/PreferencesContext";
import SegmentedFilter from "@/src/components/ui/SegmentedFilter";

export type FilterCategory = "all" | ProjectCategory;

interface ProjectTabsProps {
  activeCategory: FilterCategory;
  onTabChange: (category: FilterCategory) => void;
}

export default function ProjectTabs({ activeCategory, onTabChange }: ProjectTabsProps) {
  const tabs: FilterCategory[] = ["all", "academic", "personal"];
  const { t } = usePreferences();

  return (
    <SegmentedFilter
      ariaLabel={t("projects.filter")}
      options={tabs.map((tab) => ({ value: tab, label: t(`projects.${tab}`) }))}
      value={activeCategory}
      onChange={(value) => onTabChange(value as FilterCategory)}
    />
  );
}

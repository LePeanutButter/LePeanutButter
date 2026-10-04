"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { SidebarNavItem } from "@/src/types/projectViews";
import { projectUi } from "./projectUi";

interface ProjectSidebarLayoutProps {
  brand: ReactNode;
  navItems: SidebarNavItem[];
  children: ReactNode;
  activeAccentClass?: string;
}

export default function ProjectSidebarLayout({
  brand,
  navItems,
  children,
  activeAccentClass = "border-l-2 border-ink bg-canvas text-ink",
}: ProjectSidebarLayoutProps) {
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  let lastGroup: string | undefined;

  return (
    <div className="flex min-h-[50vh] flex-col lg:flex-row">
      <aside className="border-b border-border-subtle bg-surface lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-72 lg:shrink-0 lg:border-b-0">
        <div className="p-6">{brand}</div>
        <nav className="px-3 pb-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const showGroup = item.group && item.group !== lastGroup;
              if (item.group) lastGroup = item.group;
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  {showGroup ? (
                    <p className={projectUi.sectionEyebrow + " px-3 pb-1 pt-4"}>
                      {item.group}
                    </p>
                  ) : null}
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveId(item.id)}
                    className={`flex items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium transition duration-500 ease-premium ${
                      isActive ? activeAccentClass : "text-ink-secondary hover:bg-canvas hover:text-ink"
                    }`}
                  >
                    {item.icon ? (
                      <span className="w-5 text-center opacity-60">{item.icon}</span>
                    ) : null}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <div className="min-w-0 flex-1 p-6 lg:p-8">{children}</div>
    </div>
  );
}

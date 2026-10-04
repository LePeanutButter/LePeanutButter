"use client";

import { useState } from "react";
import AcademicProjects from "@/src/components/sections/projects/AcademicProjects";
import PersonalProjects from "@/src/components/sections/projects/PersonalProjects";
import ProjectTabs, { FilterCategory } from "@/src/components/sections/projects/ProjectTabs";
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("academic");

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Selected work" title="Featured Projects" />
        <ProjectTabs activeCategory={activeCategory} onTabChange={setActiveCategory} />
      </div>
      <div className="mt-12 grid gap-14">
        {(activeCategory === "all" || activeCategory === "academic") && <AcademicProjects />}
        {(activeCategory === "all" || activeCategory === "personal") && <PersonalProjects />}
      </div>
    </section>
  );
}

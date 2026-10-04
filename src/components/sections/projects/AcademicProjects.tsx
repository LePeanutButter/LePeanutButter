import ProjectGrid from "@/src/components/ui/ProjectGrid";
import { academicProjectCases } from "@/src/data/portfolio";

export default function AcademicProjects() {
  return <ProjectGrid projects={academicProjectCases} title="Academic Projects" />;
}

import ProjectGrid from "@/src/components/ui/ProjectGrid";
import { personalProjectCases } from "@/src/data/portfolio";

export default function PersonalProjects() {
  return <ProjectGrid projects={personalProjectCases} title="Personal Projects" />;
}

import type { ProjectViewProps } from "@/src/types/projectViews";
import type { ComponentType } from "react";
import AiGradingAutomation from "./custom/AiGradingAutomation";
import Elysium from "./custom/Elysium";
import Ezflix from "./custom/Ezflix";
import PoobVsZombies from "./custom/PoobVsZombies";
import PowerGarden from "./custom/PowerGarden";
import Prometeo from "./custom/Prometeo";
import Qify from "./custom/Qify";
import Smartrip from "./custom/Smartrip";
import SustainableWaterAwareness from "./custom/SustainableWaterAwareness";
import TalentMapAi from "./custom/TalentMapAi";
import AquaSense from "./custom/AquaSense";

export type ProjectViewComponent = ComponentType<ProjectViewProps>;

export const projectViewRegistry: Record<string, ProjectViewComponent> = {
  smartrip: Smartrip,
  "ai-grading-automation-workflows-backup": AiGradingAutomation,
  elysium: Elysium,
  "ezflix-relational-db": Ezflix,
  "poob-vs-zombies": PoobVsZombies,
  "power-garden": PowerGarden,
  prometeo: Prometeo,
  "talent-map-ai": TalentMapAi,
  qify: Qify,
  "sustainable-water-awareness": SustainableWaterAwareness,
  aquasense: AquaSense,
};

export function getProjectView(slug: string): ProjectViewComponent | undefined {
  return projectViewRegistry[slug];
}

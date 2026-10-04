import type { Education } from "@/src/types";
import { CompanyRegistry } from "./companyRegistry";

export const education: Education[] = [
  {
    institution: CompanyRegistry.eci.name,
    degree: "Bachelor of Systems Engineering",
    location: "Bogota, Colombia",
    startDate: "August 2022",
    endDate: "December 2026 expected",
    logoUrl: CompanyRegistry.eci.logo,
    focusAreas: [
      "Software engineering",
      "Data analysis",
      "Systems design",
      "Database management",
      "Software architecture",
      "Agile development",
    ],
  },
];

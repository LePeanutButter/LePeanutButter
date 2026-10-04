import type { Experience } from "@/src/types";
import { CompanyRegistry } from "./companyRegistry";

export const experiences: Experience[] = [
  {
    company: CompanyRegistry.eci.name,
    role: "Teaching Assistant - Object-Oriented Development",
    location: "Bogota, Colombia",
    mode: "onsite",
    startDate: "September 2025",
    endDate: "December 2025",
    logoUrl: CompanyRegistry.eci.logo,
    summary:
      "Provided academic support for the Object-Oriented Development course through grading, feedback, and student support.",
    highlights: [
      "Evaluated 23 students across pair-based laboratory assignments.",
      "Assessed code quality, UML diagrams, documentation, and OOP principles.",
      "Reviewed all third-term pair projects with structured feedback.",
    ],
    source: ["santiago-botero-resume.md", "LinkedIn Positions.csv"],
  },
  {
    company: CompanyRegistry.orbidi.name,
    role: "Ad Hoc Front-End Web Developer",
    location: "Remote",
    mode: "remote",
    startDate: "February 2025",
    endDate: "March 2025",
    logoUrl: CompanyRegistry.orbidi.logo,
    summary:
      "Implemented WordPress and Elementor pages from Figma designs for Kit Digital program client projects.",
    highlights: [
      "Contributed to 6 web projects.",
      "Collaborated with design and QA stakeholders.",
      "Delivered 1,937 minutes of scoped freelance development work.",
    ],
    source: ["santiago-botero-resume.md", "LinkedIn Positions.csv"],
  },
];

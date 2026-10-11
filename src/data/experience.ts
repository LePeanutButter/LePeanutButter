import type { Experience } from "@/src/types";
import { CompanyRegistry } from "./companyRegistry";

export const experiences: Experience[] = [
  {
    company: CompanyRegistry.bavv.name,
    role: "Information Security Governance and Architecture Intern",
    location: "Bogota, Colombia",
    mode: "onsite",
    startDate: "July 2026",
    endDate: "Present",
    logoUrl: CompanyRegistry.bavv.logo,
    summary:
      "I am part of the Information Security Governance and Architecture Department within the Security and Cybersecurity Management Division, supporting information security governance, regulatory compliance, technology risk, third-party security, vulnerability management, and security architecture activities.",
    highlights: [
      "Support information security regulatory compliance activities, including the analysis, validation, consolidation, and preparation of information required by the Colombian Financial Superintendence (SFC).",
      "Support regulatory reporting processes associated with External Circular 033 of 2020, including the collection, validation, analysis, and consolidation of information related to vulnerability management and critical third parties.",
      "Prepare and consolidate information and presentations for management and executive-level reporting on information security and regulatory compliance matters.",
      "Support the assessment and monitoring of critical third parties and suppliers, including security requirements, evidence, assessments, and treatment plans.",
      "Participate in the development and monitoring of information security controls, procedures, standards, questionnaires, and compliance instruments.",
      "Support cybersecurity regulatory assessments, including the analysis of information related to critical suppliers, subcontractors, technology services, and the Bank’s cyber environment.",
      "Participate in technology risk and security assessments for initiatives, services, assets, and solutions, documenting security requirements and recommendations.",
      "Support vulnerability management governance activities.",
    ],
    source: ["santiago-botero-resume.md", "LinkedIn Positions.csv"],
  },
  {
    company: CompanyRegistry.eci.name,
    role: "Object-Oriented Development Teaching Assistant",
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

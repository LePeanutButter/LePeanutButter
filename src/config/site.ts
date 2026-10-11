import type { ContactLink } from "@/src/types";

export const siteConfig = {
  name: "Santiago Botero Garcia",
  handle: "santiago.botero",
  title: "Santiago Botero Garcia | IT Governance, Security, Architecture & Digital Transformation",
  description:
    "Systems Engineering student focused on IT governance, information security, technology risk, enterprise architecture, infrastructure, and digital transformation.",
  url: "https://github.com/LePeanutButter",
} as const;

export const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/LePeanutButter",
    kind: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/santiago-botero-garcia-86991335b/",
    kind: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/le.peanut_/",
    kind: "instagram",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/LePeanutButter/",
    kind: "facebook",
  },
];

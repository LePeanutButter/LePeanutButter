"use client";

import { useEffect } from "react";

type QifyTheme = "qify";

interface ProjectSiteThemeProps {
  theme: QifyTheme;
}

/** Applies a document-level theme override (Qify only). Cleans up on unmount. */
export default function ProjectSiteTheme({ theme }: ProjectSiteThemeProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-project-theme", theme);
    return () => {
      root.removeAttribute("data-project-theme");
    };
  }, [theme]);

  return null;
}

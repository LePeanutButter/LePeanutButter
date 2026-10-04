"use client";

import { useEffect } from "react";

const QIFY_THEME = "qify";

interface ProjectSiteThemeProps {
  theme: typeof QIFY_THEME;
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

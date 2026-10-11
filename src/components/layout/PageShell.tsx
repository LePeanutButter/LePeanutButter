import type { ReactNode } from "react";
import AccessibilityControls from "@/src/components/layout/AccessibilityControls";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-control bg-ink px-4 py-3 text-sm font-semibold text-canvas focus:not-sr-only"
      >
        Saltar al contenido principal
      </a>
      <div className="relative z-10">{children}</div>
      <AccessibilityControls />
    </div>
  );
}

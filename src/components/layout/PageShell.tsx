import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

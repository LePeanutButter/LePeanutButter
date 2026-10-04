/** Subtle per-project accent colors from original HTML references (links, borders, badges only). */
export const projectAccents: Record<string, { primary: string; muted: string; ring: string }> = {
  smartrip: {
    primary: "text-[#007bff]",
    muted: "bg-[#007bff]/8 border-[#007bff]/25",
    ring: "border-[#007bff]",
  },
  elysium: {
    primary: "text-[#3a8279]",
    muted: "bg-[#4da99d]/10 border-[#4da99d]/30",
    ring: "border-[#4da99d]",
  },
  "ai-grading-automation-workflows-backup": {
    primary: "text-[#4ADE80]",
    muted: "bg-[#4ADE80]/8 border-[#4ADE80]/25",
    ring: "border-[#4ADE80]"
  },
  prometeo: {
    primary: "text-[#8b0000]",
    muted: "bg-[#8b0000]/6 border-[#8b0000]/20",
    ring: "border-[#8b0000]",
  },
  qify: {
    primary: "text-[#7c3aed]",
    muted: "bg-[#7c3aed]/8 border-[#7c3aed]/20",
    ring: "border-[#7c3aed]",
  },
  "power-garden": {
    primary: "text-[#8017ff]",
    muted: "bg-[#8017ff]/8 border-[#8017ff]/20",
    ring: "border-[#8017ff]",
  }
};

export function getAccent(slug: string) {
  return (
    projectAccents[slug] ?? {
      primary: "text-ink",
      muted: "bg-canvas border-border-subtle",
      ring: "border-ink",
    }
  );
}

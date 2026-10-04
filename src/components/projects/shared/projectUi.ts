/** Shared monochrome utility classes aligned with the main portfolio design system. */
export const projectUi = {
  page: "bg-canvas text-ink",
  section: "scroll-mt-28 rounded-card border border-border-subtle bg-surface p-6 shadow-premium sm:p-8",
  sectionTitle: "text-xl font-semibold text-ink sm:text-2xl",
  sectionEyebrow: "font-mono text-xs uppercase tracking-[0.14em] text-ink-muted",
  body: "text-sm leading-7 text-ink-secondary",
  bodyLg: "text-base leading-8 text-ink-secondary",
  list: "list-inside list-disc space-y-2 text-sm leading-7 text-ink-secondary",
  card: "rounded-card border border-border-subtle bg-surface p-5 shadow-premium transition duration-500 ease-premium hover:border-black/15 hover:shadow-premium-hover",
  cardMuted: "rounded-card border border-border-subtle bg-canvas p-5",
  btnPrimary:
    "inline-flex h-11 items-center justify-center rounded-control border border-ink bg-ink px-6 text-sm font-semibold text-canvas transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-transparent hover:text-ink",
  btnSecondary:
    "inline-flex h-11 items-center justify-center rounded-control border border-border-subtle bg-surface px-6 text-sm font-semibold text-ink transition-all duration-500 ease-premium hover:border-ink",
  tag: "rounded border border-border-subtle bg-canvas px-2.5 py-1 font-mono text-[11px] text-ink-muted",
  divider: "border-t border-border-subtle",
  code: "overflow-x-auto rounded-control border border-border-subtle bg-ink p-4 font-mono text-sm text-canvas",
} as const;

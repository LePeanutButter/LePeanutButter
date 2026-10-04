interface TechBadgeProps {
  label: string;
  variant?: "default" | "highlight" | "muted";
  className?: string;
}

const variantClasses: Record<NonNullable<TechBadgeProps["variant"]>, string> = {
  default:
    "border-border-subtle bg-canvas text-ink-muted",
  highlight:
    "border-ink/20 bg-ink text-canvas",
  muted:
    "border-border-subtle bg-surface text-ink-secondary",
};

export default function TechBadge({
  label,
  variant = "default",
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`rounded border px-2.5 py-1 font-mono text-[11px] ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

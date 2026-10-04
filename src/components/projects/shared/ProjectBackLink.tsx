import Link from "next/link";

export default function ProjectBackLink() {
  return (
    <Link
      className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors duration-500 ease-premium hover:text-ink"
      href="/#projects"
    >
      &lt;- Back to projects
    </Link>
  );
}

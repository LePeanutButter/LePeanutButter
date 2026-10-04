import Link from "next/link";
import Image from "next/image";
import type { ProjectCase } from "@/src/types";

interface ProjectCardProps {
  project: ProjectCase;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabel =
    project.category === "academic" ? "Academic Project" : "Personal Project";
  const kindLabel =
    project.kind === "case-study"
      ? "Case Study"
      : project.kind === "content"
        ? "Editorial Lab"
        : "GitHub Repo";

  const previewSrc = project.thumbnail
    ? project.thumbnail
      : `https://placehold.co/800x550/e5e7eb/6b7280?text=${encodeURIComponent(project.title)}`;

  return (
    <Link
      className="group flex min-h-[360px] flex-col overflow-hidden rounded-[20px] border border-border-subtle bg-surface text-inherit no-underline shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-black/15 hover:shadow-premium-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      href={`/projects/${project.slug}`}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-border-subtle bg-canvas">
        <Image
          src={previewSrc}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
          fill
          unoptimized={!project.thumbnail}
        />
      </div>

      <div className="flex flex-col flex-grow p-6 sm:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          <span
            className={
              project.category === "academic"
                ? "rounded border border-ink bg-ink px-3 py-1 font-mono text-[11px] text-canvas"
                : "rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-[11px] text-ink-muted"
            }
          >
            {categoryLabel}
          </span>
          <span className="rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-[11px] text-ink-muted">
            {kindLabel}
          </span>
          {project.modules.length > 1 ? (
            <span className="rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-[11px] text-ink-muted">
              {project.modules.length} repos
            </span>
          ) : null}
        </div>
        <h4 className="text-xl font-semibold leading-7 text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70">
          {project.title}
        </h4>
        {project.dateRange ? (
          <p className="mt-3 font-mono text-xs text-ink-muted">
            {project.dateRange}
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-6 text-ink-secondary line-clamp-3">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              className="rounded border border-border-subtle bg-canvas px-2.5 py-1 font-mono text-[11px] text-ink-muted"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 text-sm font-semibold text-ink transition-transform duration-500 ease-premium group-hover:translate-x-1">
          {project.actionLabel} -&gt;
        </div>
      </div>
    </Link>
  );
}

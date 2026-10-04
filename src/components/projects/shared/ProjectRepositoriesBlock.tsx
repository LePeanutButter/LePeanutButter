import type { ProjectModule } from "@/src/types";
import GitHubIcon from "./GitHubIcon";
import { projectUi } from "./projectUi";

interface ProjectRepositoriesBlockProps {
  modules: ProjectModule[];
  className?: string;
}

function repoLabel(url: string): string {
  try {
    return new URL(url).pathname.replace(/^\//, "");
  } catch {
    return url;
  }
}

export default function ProjectRepositoriesBlock({
  modules,
  className = "",
}: ProjectRepositoriesBlockProps) {
  if (modules.length === 0) return null;

  return (
    <section className={`${projectUi.section} ${className}`}>
      <p className={projectUi.sectionEyebrow}>Source code</p>
      <p className={`mt-2 ${projectUi.body}`}>
        Explore the repositories that implement this project:
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {modules.map((module) => (
          <li key={module.repositoryUrl}>
            <a
              href={module.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-card border border-border-subtle bg-canvas p-4 transition-all duration-500 ease-premium hover:border-black/15 hover:bg-surface hover:shadow-premium"
              title={module.summary}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                    {module.role}
                  </p>
                  <p className="mt-1 font-semibold text-ink transition-opacity duration-500 group-hover:opacity-70">
                    {module.name}
                  </p>
                </div>
                <GitHubIcon className="h-5 w-5 shrink-0 text-ink-muted group-hover:text-ink" />
              </div>
              <p className={`mt-3 line-clamp-2 ${projectUi.body}`}>{module.summary}</p>
              <p className="mt-3 font-mono text-[11px] text-ink-muted">
                {repoLabel(module.repositoryUrl)} →
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

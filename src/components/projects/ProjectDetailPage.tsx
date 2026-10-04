import type { ProjectCase } from "@/src/types";
import ProjectBackLink from "./shared/ProjectBackLink";
import ProjectRepositoriesBlock from "./shared/ProjectRepositoriesBlock";
import { projectUi } from "./shared/projectUi";
import { getProjectView } from "./registry";

interface ProjectDetailPageProps {
  project: ProjectCase;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const CustomView = getProjectView(project.slug);

  if (CustomView) {
    return (
      <article className={projectUi.page}>
        <div className="mx-auto max-w-content px-6 pt-28 sm:px-8">
          <ProjectBackLink />
          <CustomView project={project} />
        </div>
      </article>
    );
  }

  const categoryLabel =
    project.category === "academic" ? "Academic Project" : "Personal Project";

  return (
    <main className={`mx-auto max-w-content px-6 pb-24 pt-28 sm:px-8 ${projectUi.page}`}>
      <ProjectBackLink />

      <section className="mt-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-ink bg-ink px-3 py-1 font-mono text-xs text-canvas">
            {categoryLabel}
          </span>
          <span className={projectUi.tag}>
            {project.kind === "case-study" ? "Case Study" : "Repository"}
          </span>
          {project.dateRange ? <span className={projectUi.tag}>{project.dateRange}</span> : null}
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
          {project.title}
        </h1>
        <p className={`mt-8 max-w-3xl ${projectUi.bodyLg}`}>{project.summary}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span className={projectUi.tag} key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>

      <ProjectRepositoriesBlock modules={project.modules} className="mt-12" />

      <section className="grid gap-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={projectUi.section}>
          <p className={projectUi.sectionEyebrow}>Product narrative</p>
          <div className="mt-6 grid gap-5">
            {project.narrative.map((paragraph) => (
              <p className={projectUi.body} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={projectUi.section}>
          <p className={projectUi.sectionEyebrow}>Source signals</p>
          <ul className="mt-6 grid gap-3">
            {project.sourceSignals.map((signal) => (
              <li className={`border-l border-border-subtle pl-4 ${projectUi.body}`} key={signal}>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

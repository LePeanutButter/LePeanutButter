import { experiences } from "@/src/data/portfolio";
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <div className="mb-16 text-center md:text-left">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Professional timeline
        </span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          Experience
        </h2>
      </div>

      <div className="relative ml-4 space-y-12 border-l-2 border-border-subtle md:ml-32">
        {experiences.map((experience) => (
          <article
            className="group relative pl-8"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="absolute -left-[9px] top-1.5 size-4 rounded-full border-2 border-ink bg-canvas transition-colors duration-500 ease-premium group-hover:bg-ink" />

            <div className="md:absolute md:-left-36 md:top-1 md:w-28 md:text-right">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface p-6 shadow-premium transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:shadow-premium-hover md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={ experience.logoUrl || `https://placehold.co/100x100/e5e7eb/6b7280?text=${encodeURIComponent(experience.company.charAt(0))}`}
                    alt={`${experience.company} logo`}
                    className="size-12 rounded bg-canvas object-fill shrink-0"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-secondary">
                      {experience.company}
                      {experience.location ? (
                        <>
                          <span className="mx-1.5 text-border-subtle">&bull;</span>
                          {experience.location}
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>

                {experience.mode ? (
                  <span className="w-fit rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:self-start">
                    {experience.mode}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {experience.summary}
              </p>

              <div className="mt-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Key Achievements
                </h4>
                <ul className="grid gap-3 text-sm text-ink-secondary sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li className="flex items-start gap-2.5" key={highlight}>
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-ink-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <span className="leading-tight">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

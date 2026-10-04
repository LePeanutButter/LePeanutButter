import { education } from "@/src/data/portfolio";
import Image from 'next/image';

export default function Education() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <div className="mb-16 text-center md:text-left">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Academic base
        </span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          Education
        </h2>
      </div>

      <div className="relative ml-4 space-y-12 border-l-2 border-border-subtle md:ml-32">
        {education.map((item) => (
          <article
            className="group relative pl-8"
            key={`${item.institution}-${item.degree}`}
          >
            <div className="absolute -left-[9px] top-1.5 size-4 rounded-full border-2 border-ink bg-canvas transition-colors duration-500 ease-premium group-hover:bg-ink" />

            <div className="md:absolute md:-left-36 md:top-1 md:w-28 md:text-right">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {item.startDate} - {item.endDate}
              </p>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface p-6 shadow-premium transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:shadow-premium-hover md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={ item.logoUrl|| `https://placehold.co/100x100/e5e7eb/6b7280?text=${encodeURIComponent(item.institution.charAt(0))}`}
                    alt={`${item.institution} logo`}
                    className="size-12 rounded bg-canvas object-fill shrink-0"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-secondary">
                      {item.institution}
                      {item.location ? (
                        <>
                          <span className="mx-1.5 text-border-subtle">&bull;</span>
                          {item.location}
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.focusAreas.map((area) => (
                  <span
                    className="rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-[11px] font-semibold text-ink-muted"
                    key={area}
                  >
                    {area}
                  </span>
                ))}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

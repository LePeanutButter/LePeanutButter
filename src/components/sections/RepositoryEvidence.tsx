"use client";

import { useState } from "react";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { auxiliaryRepositories } from "@/src/data/portfolio";

const INITIAL_REPOSITORY_LIMIT = 4;

const getActionLabel = (title: string) => {
  const lowercaseTitle = title.toLowerCase();
  if (lowercaseTitle.includes("digital transformation")) return "Explore Enterprise Code";
  if (lowercaseTitle.includes("computer science")) return "View Low-Level Code";
  if (lowercaseTitle.includes("sysadmin")) return "View Configurations";
  if (lowercaseTitle.includes("infosec")) return "Review Security Labs";
  if (lowercaseTitle.includes("dsa") || lowercaseTitle.includes("structured data")) return "Examine Algorithms";
  if (lowercaseTitle.includes("quantum")) return "Review Quantum Notebooks";
  if (lowercaseTitle.includes("ecostream")) return "View Analytics Code";
  if (lowercaseTitle.includes("n8n")) return "Examine Workflows";
  return "Explore Repository";
};

export default function RepositoryEvidence() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreRepositories =
    auxiliaryRepositories.length > INITIAL_REPOSITORY_LIMIT;
  const visibleRepositories = isExpanded
    ? auxiliaryRepositories
    : auxiliaryRepositories.slice(0, INITIAL_REPOSITORY_LIMIT);
  const hiddenCount = auxiliaryRepositories.length - INITIAL_REPOSITORY_LIMIT;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Specialized repositories"
        title="Auxiliary Technical Evidence"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {visibleRepositories.map((repository) => (
          <a
            href={repository.source}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-card border border-dashed border-border-subtle bg-transparent p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:bg-surface hover:shadow-premium"
            key={repository.source}
          >
            <p className="font-mono text-xs text-ink-muted">
              {new URL(repository.source).pathname.substring(1)}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70">
              {repository.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-secondary">
              {repository.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {repository.technologies.map((technology) => (
                <span
                  className="rounded border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-ink-muted"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm font-semibold text-ink transition-transform duration-500 ease-premium group-hover:translate-x-1">
              {getActionLabel(repository.title)} -&gt;
            </div>
          </a>
        ))}
      </div>
      {hasMoreRepositories ? (
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full border border-border-subtle bg-transparent px-6 py-3 text-sm font-semibold text-ink-secondary transition-all duration-500 ease-premium hover:border-black/30 hover:bg-black/[0.01] hover:text-ink"
            onClick={() => setIsExpanded((currentState) => !currentState)}
            type="button"
          >
            <span>
              {isExpanded
                ? "Show fewer repositories"
                : `Show ${hiddenCount} more repositories`}
            </span>
            <span aria-hidden="true">{isExpanded ? "^" : "v"}</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}

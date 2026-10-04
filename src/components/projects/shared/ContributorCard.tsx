"use client";

import Image from "next/image";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import { projectUi } from "./projectUi";
import { githubAvatarFromUrl } from "@/src/lib/github";

export interface ContributorCardProps {
  name: string;
  role?: string;
  description?: string;
  github?: string;
  linkedin?: string;
  href?: string;
  avatarSrc?: string;
  className?: string;
}

export default function ContributorCard({
  name,
  role,
  description,
  github,
  linkedin,
  href,
  avatarSrc,
  className = "",
}: ContributorCardProps) {
  const avatar = avatarSrc ?? (github ? githubAvatarFromUrl(github) : undefined);
  const primaryHref = href ?? github ?? linkedin;

  const inner = (
    <>
      {avatar ? (
        <Image src={avatar} alt={name} width={36} height={36} className="rounded-full shrink-0" unoptimized />
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-canvas text-xs font-bold">
          {name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 flex-1 text-left">
        <p className="text-sm font-semibold text-ink">{name}</p>
        {role ? <p className="text-xs text-ink-muted">{role}</p> : null}
        {description ? <p className={`mt-2 ${projectUi.body}`}>{description}</p> : null}
      </div>
      {(github || linkedin) && (
        <div className="flex shrink-0 items-center gap-2">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on GitHub`}
              className="text-ink-muted transition-opacity duration-500 ease-premium hover:text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="text-ink-muted transition-opacity duration-500 ease-premium hover:text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      )}
    </>
  );

  if (primaryHref && !github && !linkedin) {
    return (
      <a
        href={primaryHref}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center gap-3 ${projectUi.card} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <article className={`flex items-start gap-3 ${projectUi.card} ${className}`}>
      {inner}
    </article>
  );
}

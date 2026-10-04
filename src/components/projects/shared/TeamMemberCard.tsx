import Image from "next/image";
import type { TeamMember } from "@/src/types/projectViews";
import { githubAvatarFromUrl } from "@/src/lib/github";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import { projectUi } from "./projectUi";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const avatar = member.github ? githubAvatarFromUrl(member.github) : undefined;

  return (
    <article className={`${projectUi.card} text-center`}>
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-canvas">
        {avatar ? (
          <Image src={avatar} alt={member.name} width={56} height={56} className="h-full w-full object-cover" unoptimized />
        ) : (
          <span className="text-lg font-bold text-ink-muted">{member.name.charAt(0)}</span>
        )}
      </div>
      <h4 className="font-semibold text-ink">{member.name}</h4>
      <p className="mt-1 text-sm font-medium text-ink-secondary">{member.role}</p>
      {member.description ? <p className={`mt-3 ${projectUi.body}`}>{member.description}</p> : null}
      <div className="mt-4 flex justify-center gap-3">
        {member.github ? (
          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on GitHub`}
            className="text-ink-muted transition-opacity duration-500 ease-premium hover:text-ink"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        ) : null}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-ink-muted transition-opacity duration-500 ease-premium hover:text-ink"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

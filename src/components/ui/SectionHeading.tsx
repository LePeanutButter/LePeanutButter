interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

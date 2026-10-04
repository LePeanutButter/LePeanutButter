import { profile } from "@/src/data/portfolio";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pb-14 pt-28 sm:px-8">
      <div className="animate-fade-in-up">
        <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
          Hello, I&apos;m {profile.name}.{" "}
          <span className="block text-ink-muted">{profile.headline}</span>
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-ink-secondary sm:text-xl">
          {profile.summary}
        </p>
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <a
            className="inline-flex h-12 items-center justify-center rounded-control border border-ink bg-ink px-7 text-sm font-medium text-canvas transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-transparent hover:text-ink"
            href="https://linkedin.com/in/santiago-botero-garcia-86991335b/"
          >
            Connect on LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-all duration-500 ease-premium hover:translate-x-1 hover:opacity-60"
            href="#projects"
          >
            View selected projects <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

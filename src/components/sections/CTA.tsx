import SectionHeading from "@/src/components/ui/SectionHeading";

export default function CTA() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 sm:px-8 border-t border-border-subtle mt-12 text-center flex flex-col items-center">
      <SectionHeading eyebrow="What's Next?" title="Let's Work Together" />
      
      <p className="mt-8 max-w-2xl text-base leading-8 text-ink-secondary">
        I am currently open to new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, my inbox is always open. Let's create something amazing together!
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/santiago-botero-garcia-86991335b/"
          className="flex h-12 items-center justify-center rounded-control bg-ink px-8 text-sm font-semibold capitalize text-canvas transition-opacity hover:opacity-90 min-w-[180px]"
        >
          Contact Me
        </a>
        <a
          href="/portfolio-website/resumes/santiago-botero-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center rounded-control border border-border-subtle bg-transparent px-8 text-sm font-semibold text-ink transition-colors hover:bg-surface hover:text-ink hover:border-black/30 min-w-[180px]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function CTA() {
  return (
    <section className="mx-auto mt-12 flex max-w-content flex-col items-center border-t border-border-subtle px-6 py-24 text-center sm:px-8">
      <SectionHeading eyebrow="What&apos;s Next?" title="Let&apos;s Work Together" />

      <p className="mt-8 max-w-2xl text-base leading-8 text-ink-secondary">
        I am currently open to new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, my inbox is always open. Let&apos;s create something amazing together!
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://www.linkedin.com/in/santiago-botero-garcia-86991335b/"
          className="flex h-12 min-w-[180px] items-center justify-center rounded-control bg-ink px-8 text-sm font-semibold capitalize text-canvas transition-opacity hover:opacity-90"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
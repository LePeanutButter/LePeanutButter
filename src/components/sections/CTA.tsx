"use client";

import SectionHeading from "@/src/components/ui/SectionHeading";
import { usePreferences } from "@/src/context/PreferencesContext";

export default function CTA() {
  const { t } = usePreferences();
  return (
    <section className="mx-auto mt-12 flex max-w-content flex-col items-center border-t border-border-subtle px-6 py-24 text-center sm:px-8">
      <SectionHeading eyebrow={t("cta.eyebrow")} title={t("cta.title")} />

      <p className="mt-8 max-w-2xl text-base leading-8 text-ink-secondary">
        {t("cta.body")}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://www.linkedin.com/in/santiago-botero-garcia-86991335b/"
          className="flex h-12 min-w-[180px] items-center justify-center rounded-control bg-ink px-8 text-sm font-semibold capitalize text-canvas transition-opacity hover:opacity-90"
        >
          {t("cta.contact")}
        </a>
        <a
          href="#about"
          className="flex h-12 min-w-[180px] items-center justify-center rounded-control border border-border-subtle px-8 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
        >
          {t("cta.secondary")}
        </a>
      </div>
    </section>
  );
}
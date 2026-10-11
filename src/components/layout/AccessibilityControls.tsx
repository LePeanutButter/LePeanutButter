"use client";

import { useState } from "react";
import { usePreferences, type Language } from "@/src/context/PreferencesContext";

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    language,
    theme,
    highContrast,
    largeText,
    reducedMotion,
    setLanguage,
    setTheme,
    setHighContrast,
    setLargeText,
    setReducedMotion,
    t,
  } = usePreferences();

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="accessibility-preferences"
        aria-label={isOpen ? t("preferences.close") : t("preferences.open")}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-12 min-w-12 items-center justify-center rounded-full border border-border-subtle bg-surface text-xl text-ink shadow-premium transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <span aria-hidden="true">◐</span>
      </button>
      {isOpen ? (
        <div
          id="accessibility-preferences"
          aria-label={t("preferences.label")}
          className="absolute bottom-16 right-0 w-72 rounded-card border border-border-subtle bg-surface p-5 text-ink shadow-premium"
        >
          <h2 className="text-base font-semibold">{t("preferences.title")}</h2>
          <fieldset className="mt-4">
            <legend className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{t("preferences.language")}</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["es", "en", "de"] as Language[]).map((option) => (
                <button
                  type="button"
                  key={option}
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className="min-h-10 rounded-control border border-border-subtle text-sm font-medium uppercase transition-colors hover:bg-canvas aria-pressed:bg-ink aria-pressed:text-canvas"
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-4">
            <legend className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{t("preferences.theme")}</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["light", "dark"] as const).map((option) => (
                <button
                  type="button"
                  key={option}
                  aria-pressed={theme === option}
                  onClick={() => setTheme(option)}
                  className="min-h-10 rounded-control border border-border-subtle text-sm transition-colors hover:bg-canvas aria-pressed:bg-ink aria-pressed:text-canvas"
                >
                  {t(`preferences.${option}`)}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-4 space-y-3 border-t border-border-subtle pt-4">
            {[
              [t("preferences.contrast"), highContrast, setHighContrast],
              [t("preferences.largeText"), largeText, setLargeText],
              [t("preferences.motion"), reducedMotion, setReducedMotion],
            ].map(([label, checked, setter]) => (
              <label key={label as string} className="flex min-h-8 cursor-pointer items-center justify-between gap-3 text-sm">
                <span>{label as string}</span>
                <input
                  type="checkbox"
                  checked={checked as boolean}
                  onChange={(event) => (setter as (value: boolean) => void)(event.target.checked)}
                  className="size-4 accent-ink"
                />
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

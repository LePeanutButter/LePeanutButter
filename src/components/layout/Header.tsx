"use client";

import { useEffect, useRef, useState } from "react";
import { navigationItems, siteConfig } from "@/src/config/site";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-[rgba(245,245,247,0.7)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-6 sm:px-8">
        <Link
          className="font-sans text-base font-extrabold tracking-[-0.04em] text-ink transition-opacity duration-500 ease-premium hover:opacity-60"
          href="/"
        >
          {siteConfig.handle}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-ink-secondary transition-colors duration-500 ease-premium hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border-subtle text-xl text-ink transition-colors hover:bg-black/5 md:hidden"
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border-subtle bg-surface-strong px-6 py-4 md:hidden">
          <ul className="mx-auto grid max-w-content gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-control px-3 text-base font-medium text-ink-secondary transition-colors hover:bg-canvas hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

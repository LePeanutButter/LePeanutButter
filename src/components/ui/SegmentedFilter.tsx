"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface SegmentedFilterOption {
  value: string;
  label: string;
}

interface SegmentedFilterProps {
  options: SegmentedFilterOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

export default function SegmentedFilter({
  options,
  value,
  onChange,
  ariaLabel,
}: SegmentedFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const button = buttonRefs.current[value];
      if (!container || !button) return;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      setActiveIndicator({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [options, value]);

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      ref={containerRef}
      className="relative flex w-fit max-w-full overflow-x-auto rounded-full border border-border-subtle bg-surface p-1 shadow-premium no-scrollbar"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-ink shadow-sm transition-[left,width] duration-500 ease-premium"
        style={{
          left: activeIndicator.left,
          width: activeIndicator.width,
        }}
      />
      {options.map((option) => (
        <button
          key={option.value}
          ref={(element) => {
            buttonRefs.current[option.value] = element;
          }}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={`relative z-10 min-h-11 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
            value === option.value
              ? "text-canvas"
              : "text-ink-secondary hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

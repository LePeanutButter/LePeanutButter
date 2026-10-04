"use client";

import { useState } from "react";
import type { VideoDemo } from "@/src/types/projectViews";
import { mediaUrl } from "@/src/lib/assets";
import { projectUi } from "./projectUi";

interface VideoSelectorProps {
  demos: VideoDemo[];
  className?: string;
  /** Active tab/button accent (e.g. SmarTrip blue #007bff). */
  activeAccentClass?: string;
}

export default function VideoSelector({
  demos,
  className = "",
  activeAccentClass = "border-ink bg-ink text-canvas",
}: VideoSelectorProps) {
  const [activeId, setActiveId] = useState(demos[0]?.id ?? "");

  const active = demos.find((d) => d.id === activeId) ?? demos[0];

  return (
    <div className={`grid gap-6 lg:grid-cols-[1fr_2fr] ${className}`}>
      <div className="flex flex-col gap-2">
        {demos.map((demo) => (
          <button
            key={demo.id}
            type="button"
            onClick={() => setActiveId(demo.id)}
            className={`flex items-center gap-3 rounded-control border px-4 py-3 text-left text-sm font-semibold transition duration-500 ease-premium ${
              activeId === demo.id
                ? activeAccentClass
                : "border-border-subtle bg-canvas text-ink-secondary hover:border-[#007bff] hover:text-[#007bff]"
            }`}
          >
            <span className="text-lg opacity-70">{demo.icon}</span>
            <span>{demo.label}</span>
          </button>
        ))}
      </div>
      <div className="flex aspect-video flex-col items-center justify-center overflow-hidden rounded-card border border-border-subtle bg-ink">
        {active?.src ? (
          <video
            key={active.src}
            controls
            poster={active.poster ? mediaUrl(active.poster) : undefined}
            className="h-full w-full object-contain"
          >
            <source src={mediaUrl(active.src)} type={active.mimeType ?? "video/mp4"} />
          </video>
        ) : (
          <div className="px-6 text-center text-canvas">
            <p className="text-4xl opacity-80">▶</p>
            <h4 className="mt-3 text-lg font-semibold">{active?.title}</h4>
            {active?.description ? (
              <p className={`mt-2 ${projectUi.body} !text-ink-muted`}>{active.description}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

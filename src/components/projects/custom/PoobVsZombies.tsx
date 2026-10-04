"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps, Contributor } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";

const collaborators: Contributor[] = [
  { name: "Laura Perilla", role: "Lanapequin — Software Eng.", href: "https://github.com/Lanapequin", avatarSrc: "https://github.com/Lanapequin.png" },
  { name: "Santiago Botero", role: "LePeanutButter — Software Eng.", href: "https://github.com/LePeanutButter", avatarSrc: "https://github.com/LePeanutButter.png" },
];

type ScreenshotItem =
  | { kind: "image"; src: string; title: string; desc: string }
  | { kind: "video"; poster: string; src: string; title: string; desc: string };

const screenshots: ScreenshotItem[] = [
  { kind: "image", src: "home-ui.webp", title: "01. Home UI", desc: "Main menu and player profile routing system." },
  { kind: "image", src: "survival-mode.webp", title: "02. Versus Mode", desc: "Local asymmetric mechanics inspired by home video game consoles." },
  { kind: "image", src: "versus-mode.webp", title: "03. Survival Mode", desc: "Traditional gameplay loop featuring horde persistence and sun resource management." },
  { kind: "video", poster: "trial-mode.webp", src: "trial-mode.webm", title: "04. Trials Mode (AI)", desc: "Real-time simulation powered by strategic autonomous agents." },
];

const architectureLayers = [
  { name: "domain", desc: "Core game logic, entity mathematical behaviors, collisions, and persistence." },
  { name: "presentation", desc: "Graphical user interface built on top of the main renderer Game Loop." },
  { name: "resources", desc: "Centralized asset bank (audio, fonts, and sprite sequences)." },
  { name: "test", desc: "Robust unit testing environment powered by JUnit 5.8.1 for domain verification." },
];

const techStack = ["Java", "OOP Design", "MVC Pattern", "JUnit 5.8.1", "Astah UML", "Swing"];

export default function PoobVsZombies({ project }: ProjectViewProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

// Click buttons can still use the built-in smooth scroll
const scroll = (dir: number) => {
  trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
};

const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
  const track = trackRef.current;
  if (!track) return;

  isDragging.current = true;
  startX.current = e.clientX;
  scrollLeft.current = track.scrollLeft;
  
  // 1. Temporarily disable smooth behavior and snapping so it tracks the mouse instantly
  track.style.scrollBehavior = "auto";
  track.style.scrollSnapType = "none";
  track.style.cursor = "grabbing";
  
  track.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    
    const walk = e.clientX - startX.current;
    
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    isDragging.current = false;
    track.style.cursor = "grab";
    
    track.style.scrollBehavior = ""; 
    track.style.scrollSnapType = "";

    try {
      track.releasePointerCapture(e.pointerId);
    } catch {
    }
  }, []);

  return (
    <div className="border-border-subtle">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
        <header className="mb-10 text-center">
          <span className={projectUi.tag}>Academic Project Showcase</span>
          <Image
            src={mediaUrl("poob-vs-zombies", "logo.webp")}
            alt="POOB vs Zombies"
            width={500}
            height={120}
            className="mx-auto my-6"
            unoptimized
          />
          <p className="text-sm text-ink-muted">Escuela Colombiana de Ingeniería Julio Garavito · 2024-02</p>
        </header>

        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-ink">Screenshots & Interface</h3>
            <div className="flex gap-2">
              <button type="button" onClick={() => scroll(-1)} className={projectUi.btnSecondary + " !h-9 !w-9 !p-0"} aria-label="Previous">‹</button>
              <button type="button" onClick={() => scroll(1)} className={projectUi.btnSecondary + " !h-9 !w-9 !p-0"} aria-label="Next">›</button>
            </div>
          </div>
          <div
            ref={trackRef}
            className="flex cursor-grab gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] select-none [&::-webkit-scrollbar]:hidden"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {screenshots.map((item) => (
              <div key={item.title} className="w-[300px] shrink-0 snap-center overflow-hidden rounded-card border border-border-subtle bg-surface shadow-premium">
                <div className="aspect-video bg-canvas">
                  {item.kind === "video" ? (
                    <video controls poster={mediaUrl("poob-vs-zombies", item.poster)} className="h-full w-full object-cover">
                      <source src={mediaUrl("poob-vs-zombies", item.src)} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={mediaUrl("poob-vs-zombies", item.src)} alt={item.title} width={400} height={225} className="h-full w-full object-cover" unoptimized draggable={false} />
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className={`mt-1 ${projectUi.body}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProjectRepositoriesBlock modules={project.modules} className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <main className="space-y-8">
            <section className={projectUi.section}>
              <h3 className={projectUi.sectionTitle}>General Description</h3>
              <p className={`mt-4 ${projectUi.body}`}>
                <strong>POOB vs. Zombies</strong> is a desktop video game developed entirely in Java that replicates and expands upon the core mechanics of PopCap Games&apos; classic strategy title. This software ecosystem was designed and implemented within a one-month timeframe as the final project for the Object-Oriented Programming course.
              </p>
              <p className={`mt-4 ${projectUi.body}`}>
                The project&apos;s architecture rigorously applies modular design patterns such as <strong>MVC (Model-View-Controller)</strong> and event-driven architecture, strictly isolating algorithmic data from the user interface.
              </p>
            </section>
            <section className={projectUi.section}>
              <h3 className={projectUi.sectionTitle}>Supported Game Modes</h3>
              <ul className={`mt-4 ${projectUi.list}`}>
                <li><strong>Versus Mode:</strong> A tactical battle where one player strategically positions defensive flora while the opponent manages the sequential deployment of zombie hordes.</li>
                <li><strong>Survival Mode:</strong> The classic endless challenge controlled by initial configuration parameters (garden layout, timers, and basic resources).</li>
                <li><strong>Trials Mode:</strong> An autonomous algorithmic simulation using predictive logic machines (Variants: Strategic and Original).</li>
              </ul>
            </section>
          </main>
          <aside className="space-y-10">
            <section>
              <h3 className={projectUi.sectionTitle}>Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </section>
            <section>
              <h3 className={projectUi.sectionTitle}>System Architecture</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {architectureLayers.map((layer) => (
                  <TechBadge key={layer.name} label={layer.name} />
                ))}
              </div>
              <ul className={`mt-4 space-y-3 ${projectUi.body}`}>
                {architectureLayers.map((layer) => (
                  <li key={layer.name}>
                    <strong className="font-mono text-ink">{layer.name}:</strong> {layer.desc}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        <footer className={`mt-12 ${projectUi.divider} pt-8`}>
          <p className={`text-center ${projectUi.sectionEyebrow}`}>Engineering, Design & Development Team</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {collaborators.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${projectUi.card}`}>
                {c.avatarSrc ? (
                  <Image src={c.avatarSrc} alt={c.name} width={36} height={36} className="rounded-full flex-shrink-0" unoptimized />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-canvas text-xs font-bold flex-shrink-0">◉</span>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink">{c.name}</p>
                  <p className="text-xs text-ink-muted">{c.role}</p>
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

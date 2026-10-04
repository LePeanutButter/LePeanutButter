"use client";

import Image from "next/image";
import { useRef } from 'react';
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps, Contributor } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";

const collaborators: Contributor[] = [
  { name: "Laura Perilla", role: "Lanapequin — Software Eng.", href: "https://github.com/Lanapequin", avatarSrc: "https://github.com/Lanapequin.png" },
  { name: "Santiago Botero", role: "LePeanutButter — Software Eng.", href: "https://github.com/LePeanutButter", avatarSrc: "https://github.com/LePeanutButter.png" },
  { name: "Jose Castillo", role: "shiro — Software Eng.", href: "https://github.com/JoseDavidCastillo", avatarSrc: "https://github.com/JoseDavidCastillo.png" },
  { name: "Juana Castillo", role: "Graphic & Visual Design", href: "https://www.behance.net/placeholder-juana" },
  { name: "Camila", role: "Sprite Illustration", href: "https://www.behance.net/placeholder-camila" },
];

const characters = [
  {
    name: "Ferxxo Papper",
    role: "Agile Skirmisher / Gangster",
    description: "Inspired by Feid's style and rocking signature shades, this green-hot gangster never stops moving. He drops explosive, spicy beats while effortlessly weaving through falling pesticide drops.",
    imageSrc: mediaUrl("power-garden", "jalapeno.webp"),
  },
  {
    name: "Flora Bichota",
    role: "Ego-Centric Zoning DPS",
    description: "With stunning blue petals that rival the finest blue hair, her ego is in the sky and her style is unmatched. She struts across the battlefield with absolute confidence, forcing rivals out of safe zones.",
    imageSrc: mediaUrl("power-garden", "flower.webp"),
  },
  {
    name: "Lord Appleby",
    role: "High-Society Tactician",
    description: "A classic rich guy who treats the arena like a weekend golf course. Dressed in pristine white clothes and sipping high-end cider, he uses his wealth and influence to claim high ground away from the toxic rain.",
    imageSrc: mediaUrl("power-garden", "apple.webp"),
  },
  {
    name: "Sunny Joy",
    role: "Unstoppable Momentum Support",
    description: "Always happy and delightfully chubby, this bubbly sunflower literally lights up the path for survival. Her positive energy keeps her moving constantly, shielding herself from the deadly pesticide rain.",
    imageSrc: mediaUrl("power-garden", "sunflower.webp"),
  }
];

export default function PowerGarden({ project }: ProjectViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
      }
    });
  };

  return (
    <div className="border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        {/* HEADER */}
        <header className="mb-10 text-center">
          <span className={projectUi.tag}>Academic Project Showcase</span>
          <Image
            src={mediaUrl("power-garden", "logo.webp")}
            alt="Power Garden: Juicy Brawl"
            width={250}
            height={120}
            className="mx-auto my-4"
            unoptimized
          />
          <p className="text-sm text-ink-muted">Escuela Colombiana de Ingeniería Julio Garavito · 2025-02</p>
        </header>

        <div className="mb-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
          
          <main className="min-w-0 h-full">
            <section className={`${projectUi.section} h-full`}>
              <h3 className={projectUi.sectionTitle}>Overview & Vision</h3>
              <p className={`mt-4 ${projectUi.body}`}>
                <strong>Power Garden: Juicy Brawl!</strong> is a cloud-native browser gaming platform decoupled into four repositories to optimize performance on low-end hardware and constrained networks. The frontend pairs a Unity WebGL client, containing the core game scripts and settings, with a SvelteKit web shell. The SvelteKit host uses its root route to render a PlayNow component that embeds the Unity client, compiling the game into lightweight WebAssembly that executes directly in the browser sandbox without requiring local installations.
              </p>
              <p className={`mt-4 ${projectUi.body}`}>
                The backend and delivery pipeline are built for low latency and high scalability. A C#-based ASP.NET Core API service handles real-time matchmaking, game state validation, and player profiles, ensuring minimal data payloads over unstable connections. This ecosystem is deployed via a Terraform infrastructure repository, whose modules programmatically provision Microsoft Azure resources—including container registries, compute instances, load balancers, and optimized networking—to allow for automated scaling.
              </p>
            </section>
          </main>

          <aside className="flex flex-col gap-6 min-w-0 h-full justify-between">
            
            <div className="space-y-6 w-full">
              <div className="overflow-hidden rounded-card border border-border-subtle w-full">
                <video
                  src={mediaUrl("power-garden", "gameplay.webm")}
                  poster={mediaUrl("power-garden", "gameplay.webp")}
                  controls
                  loop
                  preload="metadata"
                  className="w-full h-auto object-cover aspect-video block"
                >
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              
              <a href={mediaUrl("power-garden", "arquitecture.pdf")} target="_blank" rel="noreferrer" className={`flex items-center justify-between ${projectUi.card} w-full`}>
                <div>
                  <p className="font-semibold text-ink">Architecture Specification Paper</p>
                  <p className="text-xs text-ink-muted">System Design Docs · PDF</p>
                </div>
                <span className={projectUi.btnSecondary + " !h-8 !px-3 !text-xs flex-shrink-0"}>Open PDF</span>
              </a>
            </div>
            
            <div className={`${projectUi.section} w-full mt-auto`}>
              <h3 className={projectUi.sectionTitle}>Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SvelteKit", "TypeScript", "Unity 6.2 WebGL", "C# .NET 8", "MongoDB", "Terraform IaC", "Docker", "Azure Services"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>

          </aside>
        </div>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>System Architecture</h3>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-stretch">
            <div className="relative w-32 min-h-[200px] sm:h-auto flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-md">
              <Image 
                src={mediaUrl("power-garden", "apple.png")} 
                alt="Apple" 
                fill
                className="absolute inset-0 w-full h-full object-contain"
                unoptimized 
              />
            </div>
            <ul className={`${projectUi.list} flex-1`}>
              <li><strong>Cloud Infrastructure (Terraform + Azure):</strong> IaC managing multi-VM sets, load balancers, dynamic NSGs, and containerized Docker deployments.</li>
              <li><strong>Backend Core (ASP.NET Core 8 + MongoDB):</strong> Clean Architecture REST API handling JWT auth, analytics, and scalable NoSQL storage.</li>
              <li><strong>Game Client (Unity WebGL):</strong> Low-memory game layer featuring Unity Relay and automated real-time voice narration.</li>
              <li><strong>Web Client (SvelteKit):</strong> Type-safe TypeScript frontend communicating via secure iframe postMessage architecture.</li>
            </ul>
          </div>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Technical Innovations</h3>
          <ul className={`mt-4 ${projectUi.list}`}>
            <li><strong>Progressive Resource Scaling:</strong> Custom lazy-loading asset mechanics and intensive compilation optimizations to dramatically limit initial network payload delays.</li>
            <li><strong>Secure Native Sandbox:</strong> Cross-origin authorization abstraction where token transmission occurs exclusively over signed message events between SvelteKit layers and the internal WebGL instance.</li>
            <li><strong>Defensive Pipeline Verification:</strong> Automated Continuous Integration/Deployment (CI/CD) pipelines embedding Terrascan directly to validate static cloud definitions against compliance vulnerability definitions.</li>
          </ul>
        </section>

        {/* MEET THE CHARACTERS */}
        <section className={`mb-10 ${projectUi.section}`}>
          <div className="mb-6 select-none"> {/* Added select-none to headers too */}
            <p className={projectUi.sectionEyebrow}>Juicy Fighter Roster</p>
            <h3 className={projectUi.sectionTitle}>Meet the Characters</h3>
          </div>

          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`
              flex gap-5 overflow-x-auto pb-2 
              select-none
              ${isDragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory'}
              [scrollbar-width:none] 
              [&::-webkit-scrollbar]:hidden
            `}
            style={{
              // Fallback: forcefully turns off scroll snapping when dragging
              scrollSnapType: isDragging ? 'none' : 'x mandatory'
            }}
          >
            {characters.map((char) => (
              <article
                key={char.name}
                className="
                  group
                  snap-center
                  flex-shrink-0
                  w-[300px]
                  sm:w-[340px]
                  rounded-card
                  border
                  border-border-subtle
                  bg-canvas-subtle/40
                  backdrop-blur-sm
                  transition-colors
                  hover:border-border
                  select-none
                "
              >
                {/* Inner Content - block select and browser default element dragging */}
                <div className="h-full flex flex-col select-none" draggable={false}>
                  {/* Character Image */}
                  <div className="relative border-b border-border-subtle select-none" draggable={false}>
                    <div className="relative h-56 w-full overflow-hidden rounded-t-card bg-canvas select-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

                      <Image
                        src={char.imageSrc}
                        alt={char.name}
                        fill
                        className="
                          object-contain
                          p-6
                          transition-transform
                          duration-500
                          group-hover:scale-[1.03]
                        "
                        unoptimized
                        draggable={false} // <-- CRITICAL FIX: Stops native browser image drag ghosting
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 select-none" draggable={false}>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold text-ink">
                          {char.name}
                        </h4>

                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
                          {char.role}
                        </p>
                      </div>
                    </div>

                    <p className={`${projectUi.body} text-sm leading-relaxed`}>
                      {char.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-ink-muted sm:hidden">
            Swipe or drag to explore the roster ↔
          </p>
        </section>

        <ProjectRepositoriesBlock modules={project.modules} />

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
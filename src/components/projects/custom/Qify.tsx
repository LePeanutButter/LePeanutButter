"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { getAccent } from "@/src/components/projects/shared/projectAccents";
import type { CarouselSlide, ProjectViewProps } from "@/src/types/projectViews";
import { mediaUrl } from "@/src/lib/assets";

const DEFAULT_DSL = `system Ecommerce

attribute PerformanceCheckout {
  artifact: "CheckoutService",
  category: PerformanceEfficiency.TimeBehaviour,
  
  source: "external user",
  stimulus: "1000 concurrent users",
  environment: "peak hours",
  response: "response time < 2s",
  measure: "latency percentile p95"
}`;

const qifySlides: CarouselSlide[] = [
  "SmarTrip_CompatibilidadIntegracion.svg",
  "SmarTrip_DesplieguePortabilidad.svg",
  "SmarTrip_DisponibilidadContinuidadServicio.svg",
  "SmarTrip_EscalabilidadCrecimientoNegocio.svg",
  "SmarTrip_ExperienciaUsuarioMovil.svg",
  "SmarTrip_FiabilidadProcesamientoAsincrono.svg",
  "SmarTrip_IntegridadRecuperacionDatos.svg",
  "SmarTrip_MantenibilidadEvolucionSistema.svg",
  "SmarTrip_MonitoreoGestionOperativa.svg",
  "SmarTrip_RendimientoAltaDemanda.svg",
  "SmarTrip_SeguridadControlAcceso.svg",
  "SmarTrip_SeguridadDespliegue.svg",
  "SmarTrip_SeguridadInfraestructura.svg",
].map((file) => ({
  src: mediaUrl("qify", "SmarTrip_attributes", file),
  alt: file.replace(".png", ""),
  caption: `SmarTrip Platform — ${file.replace("SmarTrip_", "").replace(".png", "").replace(/([A-Z])/g, " $1").trim()}`,
}));

const features = [
  { title: "Complete ISO 25010 Support", text: "All 8 main categories with valid subcategories completely mapped out." },
  { title: "Semantic Validation", text: "Ensures required fields, structural rules, and correct category usage metrics." },
  { title: "Extensible Grammar", text: "Clean, human-readable syntax built optimized for quality architecture specifications." },
  { title: "Multiple Output Formats", text: "Support for native plain text models and automated JSON structural export options." },
  { title: "Error Reporting", text: "Detailed tracking of validation errors, inline syntactic warnings, and stack reports." },
  { title: "Visualization", text: "Canvas-based architectural rendering visualization of specified system quality attributes." },
];

export default function Qify({ project }: ProjectViewProps) {
  const accent = getAccent("qify");
  const [dsl, setDsl] = useState(DEFAULT_DSL);
  const [parsed, setParsed] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % qifySlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + qifySlides.length) % qifySlides.length);
  };

  const simulateParse = () => {
    setParsed(/system\s+\w+/i.test(dsl) && /attribute\s+\w+/i.test(dsl));
  };

  return (
    <div className="relative border-border-subtle text-slate-200">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <nav className="mb-8 flex flex-wrap gap-4 border-b border-white/10 pb-4 text-sm text-slate-400">
          {["#background", "#install", "#usage", "#api", "#gallery"].map((href) => (
            <a key={href} href={href} className="transition hover:text-white">
              {href.replace("#", "")}
            </a>
          ))}
        </nav>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Image src={mediaUrl("qify", "logo.png")} alt="Qify" width={56} height={56} className="mb-4" unoptimized />
            <TechBadge label="standard-readme compliant" className="!border-emerald-500/30 !bg-emerald-500/10 !text-emerald-400" />
            <h1 className="mt-4 text-4xl font-extrabold leading-tight">
              Quality Attribute{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                DSL
              </span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://lepeanutbutter.github.io/qify"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-control bg-gradient-to-r from-violet-600 to-cyan-500 px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Launch Live App
              </a>
              <a href="#install" className="inline-flex h-11 items-center rounded-control border border-white/15 px-6 text-sm font-semibold text-slate-200 hover:bg-white/5">
                Documentation
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">DSL Live Parser Simulator</h2>
            <p className="mt-2 text-sm text-slate-400">Write or modify the quality attribute specification to validate its syntax:</p>
            <label htmlFor="qify-dsl" className="mt-4 block text-xs text-slate-400">
              Qify DSL Specification
            </label>
            <textarea
              id="qify-dsl"
              value={dsl}
              onChange={(e) => setDsl(e.target.value)}
              rows={10}
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#070a12] p-4 font-mono text-sm text-emerald-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
            <button
              type="button"
              onClick={simulateParse}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Parse & Validate
            </button>
            <div className="mt-4 rounded-xl border border-white/10 bg-[#070a12] p-4 font-mono text-sm">
              <p className={parsed ? "font-bold text-emerald-400" : "font-bold text-red-400"}>
                {parsed ? "✓ Valid DSL!" : "✗ Invalid DSL"}
              </p>
              {parsed ? (
                <p className="mt-2 text-slate-500">
                  Program: Ecommerce · Attributes: 1 Loaded (PerformanceCheckout) · ISO 25010 Compliance: 100%
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <ProjectRepositoriesBlock
          modules={project.modules}
          className="!mt-12 !border-white/10 !bg-white/[0.03] !text-slate-200 [&_p]:!text-slate-400 [&_h3]:!text-white [&_.font-semibold]:!text-slate-200"
        />

        <section id="gallery" className="mt-12 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Generated Diagrams & Artifacts</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">
            Discover real visual examples of quality attribute models generated through Canvas from the Qify engine.
          </p>
          
          <div className="group relative mt-8 overflow-hidden rounded-xl p-4">

            <div className="relative flex h-[400px] w-full items-center justify-center">
              <Image
                src={qifySlides[currentIndex].src}
                alt={qifySlides[currentIndex].alt}
                fill
                sizes="(max-w-6xl) 100vw"
                className="object-contain transition-all duration-300"
                unoptimized
              />
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-slate-950/70 p-2.5 text-slate-400 transition hover:bg-slate-900 hover:text-white md:opacity-0 md:group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-slate-950/70 p-2.5 text-slate-400 transition hover:bg-slate-900 hover:text-white md:opacity-0 md:group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="mt-4 flex justify-center gap-1.5">
              {qifySlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-gradient-to-r from-violet-500 to-cyan-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 min-h-[1.5rem] font-mono text-xs text-cyan-400/90">
            {qifySlides[currentIndex].caption}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-400">
            Architecture note: This carousel illustrates the complex specifications of the <strong className="text-slate-200">SmarTrip</strong> travel platform. Explore the full implementation in this{" "}
            <Link href="/projects/smartrip" className={`font-semibold ${accent.primary} hover:underline`}>
              portfolio case study
            </Link>
            .
          </p>
        </section>

        <section id="background" className="mt-10 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl font-bold text-white">Background</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            This DSL allows you to define quality attributes for systems using ISO 25010 categories, specify stimulus-response scenarios for quality requirements, validate semantic correctness and ISO 25010 compliance, and generate structured representations of quality specifications.
          </p>
          <h3 className="mt-8 font-semibold text-slate-200">The system is built with TypeScript and provides:</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-violet-500/30">
                <h4 className="font-semibold text-slate-100">{f.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="install" className="mt-10 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl font-bold text-white">Install</h2>
          <p className="mt-4 text-sm text-slate-400">No external dependencies required. Just clone and run with Node.js 12+:</p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#070a12] p-4 font-mono text-sm text-cyan-300">{`$ git clone https://github.com/LePeanutButter/qify
$ cd qify`}</pre>
          <h3 className="mt-6 font-semibold text-slate-200">Development Setup</h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-400">
            <li><strong className="text-slate-200">Clone the repository</strong> as listed above</li>
            <li><strong className="text-slate-200">Install dependencies:</strong> npm install</li>
            <li><strong className="text-slate-200">Build the project:</strong> npm run build</li>
            <li><strong className="text-slate-200">Run tests:</strong> npm test</li>
            <li><strong className="text-slate-200">Start development:</strong> npm run dev</li>
          </ul>
        </section>

        <section id="usage" className="mt-10 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl font-bold text-white">Usage</h2>
          <h3 className="mt-4 font-semibold text-slate-200">Programmatic Usage</h3>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#070a12] p-4 font-mono text-xs text-slate-300">{`import { DSLParser } from "./src/core/domain/dsl/services/DSLParser";

const parser = new DSLParser();
const result = parser.parseDSL(dslText);`}</pre>
        </section>

        <section id="api" className="mt-10 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-2xl font-bold text-white">API Reference</h2>
          <h3 className="mt-4 font-semibold text-slate-200">DSLParser</h3>
          <p className="mt-2 text-sm text-slate-400">The main parser class for processing DSL text architecture layouts.</p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#070a12] p-4 font-mono text-sm text-rose-300">{`class DSLParser {
  parseDSL(dslText: string): ParseResult;
  validateProgram(program: DSLProgram): ValidationResult;
}`}</pre>
        </section>

        <footer className="mt-12 border-t border-white/10 py-10 text-center text-sm text-slate-500">
          MIT License · Personal architecture tooling project
        </footer>
      </div>
    </div>
  );
}

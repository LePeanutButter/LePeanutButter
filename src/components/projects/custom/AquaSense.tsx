import Image from "next/image";
import type { ReactNode } from "react";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps, Contributor } from "@/src/types/projectViews";
import { mediaUrl } from "@/src/lib/assets";

const collaborators: Contributor[] = [
  { name: "Santiago Botero Garcia", role: "Core Developer", href: "https://github.com/LePeanutButter", avatarSrc: "https://github.com/LePeanutButter.png" },
  { name: "Santiago Amaya Zapata", role: "Core Developer", href: "https://github.com/SantiagoAmaya21", avatarSrc: "https://github.com/SantiagoAmaya21.png" },
  { name: "Ricardo Andres Ayala G.", role: "Core Developer", href: "https://github.com/lRicardol", avatarSrc: "https://github.com/lRicardol.png" },
  { name: "Andrés Felipe Calderón R.", role: "Core Developer", href: "https://github.com/AndresFelipeCalderonRamirez", avatarSrc: "https://github.com/AndresFelipeCalderonRamirez.png" },
  { name: "Laura Natalia Perilla Q.", role: "Core Developer", href: "https://github.com/Lanapequin", avatarSrc: "https://github.com/Lanapequin.png" },
];

const technologies = [
    "n8n",
    "Supabase",
    "Azure Free Tier",
    "Grafana",
    "Google Gemini",
    "Docker"
];

const coreSkills = [
    "Process Automation",
    "Systems Engineering",
    "Cloud Deployment",
    "Data Integration",
    "Operational Analytics",
    "Sustainable Infrastructure",
];

const capabilities = [
    "Systemic analysis and causal loop modeling",
    "Digital transformation strategy for water utilities",
    "Design of automated workflows and monitoring systems",
    "Data integration architecture simulating SCADA, ERP, CRM, and GIS",
    "KPI monitoring, telemetry, governance, and risk management",
    "AI-assisted detection of leaks, anomalies, and operational inefficiencies",
];

function Panel({
    id,
    title,
    children,
}: {
    id?: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-[#1e3a8a] border-b-2 border-[#2563eb] pb-2 font-bold tracking-wide uppercase text-sm md:text-base">
                {title}
            </h3>
            <div className="mt-4 text-slate-700">{children}</div>
        </section>
    );
}

export default function AquaSense({ project }: ProjectViewProps) {
    return (
        <div className="bg-white text-slate-800 min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto rounded-lg">
            
            {/* Header Block */}
            <div className="mb-10 border-b-2 border-[#1e3a8a] pb-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="bg-blue-50 text-[#0369a1] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border border-blue-200">
                        Digital Transformation Project
                    </span>
                    <span className="text-blue-600 font-mono text-xs">Aug 2025 – Dec 2025</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-[#1e3a8a] leading-tight">
                    AquaSense - Intelligent Water Management
                </h1>
                <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
                    Associated Institution: <strong className="text-[#2563eb]">Escuela Colombiana de Ingeniería Julio Garavito</strong>
                </p>
            </div>

            <div className="flex flex-col gap-8">
                
                {/* Project Summary Block */}
                <Panel id="overview" title="Project Summary">
                    <div className="border-l-4 border-[#0284c7] pl-4 italic text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                        Developed AquaSense, a digital transformation project for the Organizational and Process Strategy (PRI2IS) course. Designed specifically for regional water and sanitation systems in low-digitalization areas, the project focused on boosting operational efficiency, sustainability, and data-driven decision-making.
                    </div>
                </Panel>

                {/* Institutional Context Callout */}
                <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 md:p-6 shadow-xs flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="text-sm md:text-base text-slate-600 leading-relaxed text-justify max-w-2xl">
                        <strong className="text-[#1e3a8a] block mb-1 font-semibold">Strategic Extension</strong>
                        This project works as a technical and architectural extension of the <span className="font-semibold text-slate-800">Sustainable Water Awareness & Community Engagement Initiative</span> by transforming its core concepts into an automated operational framework.
                    </div>
                    <div className="w-full sm:w-auto flex justify-end shrink-0">
                        <a
                            href="/portfolio-website/projects/sustainable-water-awareness"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-[#1e3a8a] bg-white border border-blue-200 hover:border-[#1e3a8a] rounded-lg px-4 py-2.5 transition shadow-2xs hover:bg-blue-50"
                        >
                            View Initiative 💧
                        </a>
                    </div>
                </div>

                {/* Project Narrative Block */}
                <Panel id="narrative" title="Project Narrative">
                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                        <p>
                            The project analyzed the systemic challenges faced by water utilities, including fragmented infrastructure, lack of SCADA/ERP/CRM systems, high water losses, climate-related operational risks, and limited real-time visibility. Using systems thinking methodologies, causal loop diagrams, and operational modeling, we identified key leverage points to support long-term modernization strategies.
                        </p>
                        <p>
                            Designed a TO-BE intelligent operational architecture integrating IoT concepts, AI-driven anomaly detection, and low-code automation technologies. The solution was built conceptually using n8n workflows deployed on Azure with Docker, Supabase as centralized data storage, Grafana dashboards for monitoring, and Gemini AI for anomaly detection and operational analytics.
                        </p>
                    </div>
                </Panel>

                {/* Key Contributions Block */}
                <Panel id="contributions" title="Project Scope & Deliverables">
                    <ul className="space-y-2.5 list-disc list-inside text-sm md:text-base text-slate-600">
                        {capabilities.map((capability, index) => (
                            <li key={index} className="text-justify leading-relaxed">
                                <span className="text-slate-700 font-medium">{capability}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-xs md:text-sm text-slate-500 italic text-justify">
                        This project strengthened skills in process automation, systems engineering, cloud deployment, data integration, operational analytics, and sustainable infrastructure management.
                    </div>
                </Panel>

                {/* Dynamic Context Tag Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h4 className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
                            Core Skills Archetype
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {coreSkills.map((skill) => (
                                <span key={skill} className="bg-white text-[#1e3a8a] border border-[#1e3a8a] text-xs font-medium px-2.5 py-1 rounded transition hover:bg-blue-50">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h4 className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
                            Automation Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span key={tech} className="bg-white text-[#0284c7] border border-[#0284c7] text-xs font-medium px-2.5 py-1 rounded transition hover:bg-sky-50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Media Attachments Block */}
                <Panel id="media" title="Media & Documentation Deliverables">
                    <div className="flex flex-col gap-4">
                        {/* PDD & SDD */}
                        <div className="bg-white border border-slate-200 border-l-4 border-l-[#1e3a8a] rounded-lg p-5 shadow-sm transition hover:shadow-md">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-white border border-blue-200 text-blue-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                                    Requirements & Design
                                </span>
                                <h4 className="font-bold text-[#1e3a8a] text-sm md:text-base">
                                    Product Definition (PDD) & System Design (SDD)
                                </h4>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 text-justify leading-relaxed mb-4">
                                Contains the core architectural guidelines, system interaction charts, node structures, and non-functional specifications.
                            </p>
                            <div className="flex justify-end">
                                <a
                                    href={mediaUrl("aquasense", "pdd-sdd.pdf")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1e3a8a] border border-[#1e3a8a] rounded px-3 py-1.5 transition hover:bg-blue-50"
                                >
                                    Open Design Document
                                </a>
                            </div>
                        </div>

                        {/* Presentation */}
                        <div className="bg-white border border-slate-200 border-l-4 border-l-[#0284c7] rounded-lg p-5 shadow-sm transition hover:shadow-md">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-white border border-sky-200 text-sky-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                                    Slides
                                </span>
                                <h4 className="font-bold text-[#1e3a8a] text-sm md:text-base">
                                    System Overview Presentation
                                </h4>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 text-justify leading-relaxed mb-4">
                                Final deck showcasing the flow of data across systems and the value of automation for smart water management.
                            </p>
                            <div className="flex justify-end">
                                <a
                                    href={mediaUrl("aquasense", "presentation.pdf")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0284c7] border border-[#0284c7] rounded px-3 py-1.5 transition hover:bg-sky-50"
                                >
                                    Open Presentation
                                </a>
                            </div>
                        </div>
                        
                        {/* Systemic Analysis */}
                        <div className="bg-white border border-slate-200 border-l-4 border-l-[#1e3a8a] rounded-lg p-5 shadow-sm transition hover:shadow-md">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-white border border-blue-200 text-blue-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                                    Analysis
                                </span>
                                <h4 className="font-bold text-[#1e3a8a] text-sm md:text-base">
                                    Systemic Analysis Report
                                </h4>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 text-justify leading-relaxed mb-4">
                                Evaluation of the data flow reliability, Azure configuration efficiency, and automation loop bottlenecks.
                            </p>
                            <div className="flex justify-end">
                                <a
                                    href={mediaUrl("aquasense", "systemic-analysis.pdf")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1e3a8a] border border-[#1e3a8a] rounded px-3 py-1.5 transition hover:bg-blue-50"
                                >
                                    Open Analysis
                                </a>
                            </div>
                        </div>
                    </div>
                </Panel>

                {/* Project Contributors Section */}
                <Panel id="contributors" title="Project Contributors">
                    <div className="flex flex-row flex-wrap gap-3"> 
                        {collaborators.map((c) => (
                            <a key={c.name} href={c.href} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${projectUi.card}`}>
                                {c.avatarSrc ? (
                                    <Image src={c.avatarSrc} alt={c.name} width={36} height={36} className="rounded-full flex-shrink-0" unoptimized />
                                ) : (
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-canvas text-xs font-bold flex-shrink-0">◉</span>
                                )
                                }
                                <div>
                                    <p className="text-sm font-semibold text-ink">{c.name}</p>
                                    <p className="text-xs text-ink-muted">{c.role}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </Panel>
            </div>
            
            <footer className="mt-16 pt-6 border-t border-slate-200 text-center text-xs text-slate-400 pb-4">
                <p>© 2025 Escuela Colombiana de Ingeniería Julio Garavito. Digital Transformation Initiative.</p>
            </footer>
        </div>
    );
}

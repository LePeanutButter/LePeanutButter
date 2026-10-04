import type { ReactNode } from "react";
import type { ProjectViewProps } from "@/src/types/projectViews";
import { mediaUrl } from "@/src/lib/assets";

const contributors = [
    "Diego Alejandro Avila Gomez",
    "Gabriela Prieto Rodriguez",
    "Santiago Botero Garcia",
    "Sebastian Julian Villariaga Guerrero",
    "Oscar Leonardo Guzman Villamil",
    "Leidy Valentina Aldana Garay"
];

const coreSkills = [
    "Leadership",
    "Project Management",
    "Sustainability Planning",
    "SDG 6",
    "SMART Methodology",
    "Survey Analysis",
    "Environmental Communication",
];

const focusAreas = [
    "Water Conservation & SDG 6",
    "Community Engagement & Leadership",
    "Environmental Communication",
    "Team Collaboration & Event Coordination",
    "Systems Thinking Applied to Social Challenges",
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

export default function SustainableWaterAwareness({ project }: ProjectViewProps) {
    return (
        <div className="bg-white text-slate-800 min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

            {/* Main Structural Header Block */}
            <div className="mb-10 border-b-2 border-[#1e3a8a] pb-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="bg-blue-50 text-[#0369a1] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border border-blue-200">
                        Academic Case Study
                    </span>
                    <span className="text-blue-600 font-mono text-xs">Jan 2024 – May 2024</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-[#1e3a8a] leading-tight">
                    Sustainable Water Awareness & Community Engagement Initiative
                </h1>
                <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
                    Associated Institution: <strong className="text-[#2563eb]">Escuela Colombiana de Ingeniería Julio Garavito</strong>
                </p>
            </div>

            {/* Unified Single-Column Flow Engine */}
            <div className="flex flex-col gap-8">

                {/* Project Summary Block */}
                <Panel id="overview" title="Project Summary">
                    <div className="border-l-4 border-[#0284c7] pl-4 italic text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                        An interdisciplinary sustainability and leadership initiative focused on promoting responsible water consumption, environmental awareness, and community engagement through educational activities, outreach campaigns, and impact evaluation aligned with UN Sustainable Development Goal 6 (Clean Water and Sanitation).
                    </div>
                </Panel>

                {/* Project Narrative Block */}
                <Panel id="narrative" title="Project Narrative">
                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                        <p>
                            This initiative was developed within Escuela Colombiana de Ingeniería Julio Garavito as part of a sustainability-focused academic project addressing water conservation and environmental awareness challenges within the university community.
                        </p>
                        <p>
                            The project combined community engagement, educational outreach, social media communication, survey-based research, and interactive learning experiences to encourage responsible water consumption and increase awareness of climate-related risks.
                        </p>
                        <p>
                            Through collaborative planning, event coordination, stakeholder interaction, and impact evaluation, the initiative applied systems thinking and sustainability principles to design measurable awareness strategies aligned with SMART objectives and SDG 6 targets.
                        </p>
                    </div>
                </Panel>

                {/* Key Contributions Block */}
                <Panel id="contributions" title="Key Contributions">
                    <ul className="space-y-3 text-sm md:text-base text-slate-600">
                        <li className="flex items-start gap-2 text-justify">
                            <span className="text-[#3b82f6] font-bold mt-0.5">■</span>
                            <span><strong>Co-organized</strong> an on-campus interactive stand featuring sustainability-focused educational games, challenges, and awareness activities.</span>
                        </li>
                        <li className="flex items-start gap-2 text-justify">
                            <span className="text-[#3b82f6] font-bold mt-0.5">■</span>
                            <span><strong>Helped design</strong> engagement strategies using Instagram and digital content to promote responsible water consumption and climate awareness.</span>
                        </li>
                        <li className="flex items-start gap-2 text-justify">
                            <span className="text-[#3b82f6] font-bold mt-0.5">■</span>
                            <span><strong>Participated in survey analysis</strong> to evaluate student perceptions regarding water scarcity, sustainability, and climate-related risks.</span>
                        </li>
                        <li className="flex items-start gap-2 text-justify">
                            <span className="text-[#3b82f6] font-bold mt-0.5">■</span>
                            <span><strong>Contributed to the planning</strong> of awareness KPIs, participation tracking, and outreach objectives using SMART methodology.</span>
                        </li>
                        <li className="flex items-start gap-2 text-justify">
                            <span className="text-[#3b82f6] font-bold mt-0.5">■</span>
                            <span><strong>Supported cross-functional teamwork</strong> involving communication, logistics, organization, and community interaction.</span>
                        </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-xs md:text-sm text-slate-500 italic">
                        This project strengthened skills in teamwork, communication, problem analysis, stakeholder engagement, and sustainability-oriented planning.
                    </div>
                </Panel>

                {/* Dynamic Context Tag Sections (Skills & Focus Areas) Grid Layout */}
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
                            Project Focus Dimensions
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {focusAreas.map((area) => (
                                <span key={area} className="bg-white text-[#0284c7] border border-[#0284c7] text-xs font-medium px-2.5 py-1 rounded transition hover:bg-sky-50">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Media Attachments Block */}
                <Panel id="media" title="Media & Documentation Deliverables">
                    <div className="flex flex-col gap-4">

                        {/* Document 1: Project Report */}
                        <div className="bg-white border border-slate-200 border-l-4 border-l-[#1e3a8a] rounded-lg p-5 shadow-sm transition hover:shadow-md">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-white border border-blue-200 text-blue-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                                    PDF Report
                                </span>
                                <h4 className="font-bold text-[#1e3a8a] text-sm md:text-base">
                                    Project Report: Sustainable Water Management & SDG 6 Awareness Initiative
                                </h4>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 text-justify leading-relaxed">
                                Comprehensive project report documenting the planning, execution, and impact analysis of a university sustainability initiative focused on water conservation, climate awareness, and community engagement. The document includes SDG 6 analysis, SMART-based objectives, survey evaluation, outreach strategies, social media campaigns, team collaboration structure, and the design of interactive educational activities aimed at promoting responsible water usage within the university community.
                            </p>
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={mediaUrl("lsod", "project-report.pdf")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1e3a8a] border border-[#1e3a8a] rounded px-3 py-1.5 transition hover:bg-blue-50"
                                >
                                    <span>Open Report Document</span> 💧
                                </a>
                            </div>
                        </div>

                        {/* Document 2: Slide Presentation */}
                        <div className="bg-white border border-slate-200 border-l-4 border-l-[#0284c7] rounded-lg p-5 shadow-sm transition hover:shadow-md">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-white border border-sky-200 text-sky-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                                    PDF Slides
                                </span>
                                <h4 className="font-bold text-[#1e3a8a] text-sm md:text-base">
                                    Sustainable Water Management Initiative – Awareness Campaign & Community Outreach Slides
                                </h4>
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 text-justify leading-relaxed">
                                Presentation slides covering the objectives, outreach strategy, survey insights, interactive activities, and community awareness initiatives developed to promote responsible water consumption and sustainability within the university community.
                            </p>
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={mediaUrl("lsod", "project-slides.pdf")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0284c7] border border-[#0284c7] rounded px-3 py-1.5 transition hover:bg-sky-50"
                                >
                                    <span>Open Campaign Presentation</span> 💧
                                </a>
                            </div>
                        </div>

                    </div>
                </Panel>

                {/* Project Contributors Section */}
                <Panel id="contributors" title="Project Contributors">
                    <p className="text-sm text-slate-500 mb-4">
                        The collaborative framework of this environmental awareness model was driven forward by the following research and deployment team:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {contributors.map((name) => (
                            <div key={name} className="flex items-center gap-3 bg-white border border-slate-100 rounded-lg p-3 shadow-2xs">
                                <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                                <span className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide uppercase">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </Panel>
            </div>

            {/* Master Minimalist Page Footer */}
            <footer className="mt-16 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
                <p>© 2024 Escuela Colombiana de Ingeniería Julio Garavito. Action-driven framework aligned with UN SDG 6.</p>
            </footer>
        </div>
    );
}
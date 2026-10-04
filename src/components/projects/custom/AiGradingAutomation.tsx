import type { ProjectViewProps } from "@/src/types/projectViews";
import type { ArtifactLink } from "@/src/types/projectViews";
import ContributorCard from "@/src/components/projects/shared/ContributorCard";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { getAccent } from "@/src/components/projects/shared/projectAccents";
import { mediaUrl } from "@/src/lib/assets";

const contributors = [
  { name: "Juan Camilo Rojas Ortiz", role: "Core Architecture", github: "https://github.com/Jcro15" },
  { name: "Luiggi Valencia Vélez", role: "Core Architecture", linkedin: "https://www.linkedin.com/in/lrvalencia/" },
  { name: "Santiago Botero", role: "Core Architecture", github: "https://github.com/LePeanutButter" },
];

const artifacts: ArtifactLink[] = [
  {
    title: "Business Case",
    description: "Financial ROI assessments, institution delivery latency vectors, and multi-tenant scaling market validation charts.",
    href: mediaUrl("haut", "business_case.pdf"),
    icon: "📊",
    actionLabel: "Open Document",
  },
  {
    title: "PDD + SDD",
    description: "Process Definition Document combined with System Design Document mapping strict API interaction maps and nodes.",
    href: mediaUrl("haut", "pdd-sdd.pdf"),
    icon: "⚙",
    actionLabel: "Open Blueprint",
  },
  {
    title: "Memory Design",
    description: "Low-level structural specs for transient storage layer mechanics, Supabase state management, and semantic retrieval caching.",
    href: mediaUrl("haut", "memory-design.pdf"),
    icon: "🧠",
    actionLabel: "Open Design",
  },
];

const agents = [
  { badge: "LLM Engine", title: "Rubric Agent", text: "Adapts, maps, and validates structural evaluations based on custom pedagogical parameters." },
  { badge: "LLM Engine", title: "Evaluation Agent", text: "Processes target student outputs to yield robust qualitative breakdowns and numeric approximations." },
  { badge: "I/O Core", title: "Document Agent", text: "Coordinates multi-format raw extraction layers, file parsing, and optical character recognition (OCR)." },
  { badge: "DB Layer", title: "Memory Agent", text: "Maintains hot cross-session context, persistent evaluation trends, and profile-based biases." },
  { badge: "Security", title: "Compliance Agent", text: "Inspects telemetry arrays, executing raw PII tokenization and data anonymization masks." },
  { badge: "HITL", title: "Instructor Agent", text: "Publishes intermediate secure state targets awaiting manual reviewer approval." },
];

const halSteps = [
  { n: "01", title: "Discover", text: "Isolate latency limits and evaluation bottlenecks." },
  { n: "02", title: "Analyze", text: "Map dependencies and processing criteria graphs." },
  { n: "03", title: "Design", text: "Model node logic boundaries and agent handoffs." },
  { n: "04", title: "Automate", text: "Deploy persistent multi-service n8n flow networks." },
  { n: "05", title: "Orchestrate", text: "Synchronize cross-system APIs seamlessly." },
  { n: "06", title: "Optimize", text: "Refine execution token costs and response precision." },
  { n: "07", title: "Govern", text: "Enforce encryption rules and structural audit logs." },
];

export default function AiGradingAutomation({ project }: ProjectViewProps) {
  const accent = getAccent("ai-grading-automation-workflows-backup");

  return (
    <div className="border-border-subtle">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
        <header className={`mb-10 pb-8`}>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            AI Grading{" "}
            <span className={accent.primary}>Automation Workflows</span>
          </h1>
          <p className={`mt-4 max-w-2xl ${projectUi.bodyLg}`}>{project.summary}</p>
        </header>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Project Architecture Artifacts</h3>
          <p className={`mt-4 ${projectUi.body}`}>
            Comprehensive engineering blueprints, economic analyses, and software lifecycle documentation structured during the <strong>2025-2</strong> developmental cycle:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {artifacts.map((a) => (
              <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className={`flex flex-col justify-between ${projectUi.card}`}>
                <div>
                  <span className="text-2xl">{a.icon}</span>
                  <h4 className="mt-3 font-bold text-ink">{a.title}</h4>
                  <p className={`mt-2 ${projectUi.body}`}>{a.description}</p>
                </div>
                <span className={`mt-4 text-sm font-semibold ${accent.primary}`}>{a.actionLabel} →</span>
              </a>
            ))}
          </div>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>ECI Tech Innovate Summit 2025</h3>
          <div className="mt-4 aspect-video overflow-hidden rounded-card border border-border-subtle bg-ink">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/AHijRmIFzK8?start=2750"
              title="ECI Tech Innovate Summit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className={`mt-4 ${projectUi.body}`}>
            <strong>Hyperautomation Track Live Demonstration:</strong> This playback segment <strong>(00:45:50 to 01:09:50)</strong> features the core engineering team presenting the system&apos;s conceptual framework, multi-agent mesh, and live execution triggers.
          </p>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Background</h3>
          <p className={projectUi.body}>
            Traditional grading is fundamentally broken: instructors routinely exhaust <strong>6 to 8 hours</strong> manually reviewing single assignment lots. This creates operational friction characterized by delayed feedback intervals, fatigue-induced scoring variances, and lack of systemic auditing metrics during the <strong>2025-2</strong> semester evaluations.
          </p>
          <p className={`mt-4 ${projectUi.body}`}>
            The AI Grading Automation System mitigates these systemic dependencies by wrapping structural steps in an autonomous, auditable, and human-verified workspace routing matrix.
          </p>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>System Installation & Environment Setup</h3>
          <p className={projectUi.body}>
            Workflows are bundled as standardized, version-controlled JSON instances ready to import into your <strong>n8n node graph</strong>.
          </p>
          <pre className={`mt-4 ${projectUi.code}`}>{`git clone https://github.com/LePeanutButter/ai-grading-automation-workflows-backup.git
cd ai-grading-automation-workflows-backup`}</pre>
          <p className={`mt-4 ${projectUi.body}`}>
            Ensure active target environment variable bindings for <code className="font-mono text-ink">Google Workspace</code>, <code className="font-mono text-ink">OpenAI/Gemini APIs</code>, and <code className="font-mono text-ink">Supabase</code> relational endpoints.
          </p>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Distributed Multi-Agent Architecture</h3>
          <p className={projectUi.body}>
            Instead of single linear scripts, the engine acts as an event-driven mesh where micro-workflows function as specialized cognitive entities:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div key={agent.title} className={projectUi.cardMuted}>
                <span className={projectUi.sectionEyebrow}>{agent.badge}</span>
                <h4 className="mt-2 font-bold text-ink">{agent.title}</h4>
                <p className={`mt-1 ${projectUi.body}`}>{agent.text}</p>
              </div>
            ))}
          </div>
          <h4 className="mt-8 font-bold text-ink">Human-in-the-Loop (HITL) Guardrails</h4>
          <p className={`mt-2 ${projectUi.body}`}>
            Academic accountability is non-negotiable. The platform restricts direct deployment workflows: all system-generated feedback matrices are frozen inside structural holding queues until explicitly approved or mutated by the instructor.
          </p>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Hyperautomation Lifecycle (HAL) Matrix</h3>
          <p className={projectUi.body}>
            The operational framework structures grading scaling via a complete end-to-end implementation lifecycle:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {halSteps.map((step) => (
              <div key={step.n} className={`text-center ${projectUi.cardMuted}`}>
                <span className={`text-2xl font-black ${accent.primary}`}>{step.n}</span>
                <p className="mt-1 font-semibold text-ink">{step.title}</p>
                <p className={`mt-1 ${projectUi.body}`}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Enterprise Security & Compliance</h3>
          <p className={projectUi.body}>Every data boundary is isolated to support institutional standards:</p>
          <ul className={`mt-4 ${projectUi.list}`}>
            <li><strong>Credential Management:</strong> Secrets are strictly non-exposed, utilizing encrypted native n8n Credential Storage keys.</li>
            <li><strong>Anonymization Pipelines:</strong> Ingestion nodes scrub identifying data parameters prior to external infrastructure routing.</li>
            <li><strong>Immutable Audit Traces:</strong> Operational logs register every state mutation, change, and approval loop.</li>
          </ul>
        </section>

        <ProjectRepositoriesBlock modules={project.modules} />

        <section className="mt-10 mb-10 grid gap-4 sm:grid-cols-2">
          <div className={projectUi.section}>
            <h4 className="font-bold text-ink">B2C Model</h4>
            <p className={`mt-2 ${projectUi.body}`}>
              <strong>Direct-to-Teacher Utility:</strong> Frictionless individual onboarding with low transactional overhead. Built to return immediate time-equity directly to teachers managing individual academic classrooms.
            </p>
          </div>
          <div className={`${projectUi.section} border-2 border-[#ff6d5a]/40`}>
            <h4 className={`font-bold ${accent.primary}`}>B2B Model</h4>
            <p className={`mt-2 ${projectUi.body}`}>
              <strong>Institutional Enterprise Licensing:</strong> Campus-wide network deployment integrations featuring deep Learning Management System mappings (Canvas, Blackboard, Moodle) and aggregate analytics dashboards.
            </p>
          </div>
        </section>

        <section className={projectUi.section}>
          <h3 className={projectUi.sectionTitle}>Core Architecture Contributors</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {contributors.map((c) => (
              <ContributorCard key={c.name} {...c} className="w-full max-w-sm sm:w-auto" />
            ))}
          </div>
        </section>

        <footer className={`mt-12 text-center text-sm text-ink-muted ${projectUi.divider} pt-8`}>
          Licensed under the MIT License. © 2025-2 AI Grading Automation Core Team.
        </footer>
      </div>
    </div>
  );
}

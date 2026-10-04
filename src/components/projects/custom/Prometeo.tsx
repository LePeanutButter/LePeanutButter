import Image from "next/image";
import ContributorCard from "@/src/components/projects/shared/ContributorCard";
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { getAccent } from "@/src/components/projects/shared/projectAccents";
import { mediaUrl } from "@/src/lib/assets";

const videos = [
  { poster: "admin-view.jpg", src: "admin-view.mp4", title: "Administration Panel", desc: "Full control of capacity, global room occupancy metrics, and institutional report export in PDF/Excel." },
  { poster: "student-view.jpg", src: "student-view.mp4", title: "User Module (Student)", desc: "Agile daily session scheduling, progress metrics visualization (Chart.js), and 3D mesh consultation." },
  { poster: "trainer-view.jpg", src: "trainer-view.mp4", title: "Teachers & Trainers Panel", desc: "Structured assignment and AI-assisted supervision for dynamic routines adapted to physical profile." },
];

const features = [
  { title: "Room Reservation", desc: "Session scheduling with real-time capacity control and infrastructure availability." },
  { title: "Physical Progress", desc: "Interactive analytical dashboards developed in Chart.js for anthropometric and historical control." },
  { title: "AI Routines", desc: "Personalized plan generation through dedicated OpenAI and HuggingFace integrations." },
  { title: "3D Interface", desc: "Interactive anatomical and biomechanical exercise exploration powered by Three.js." },
];

const sprints = [
  { title: "Sprint 1: Core System", text: "Dependency injection (DI/IoC) and elementary CRUD schemas." },
  { title: "Sprint 2: CI/CD & Azure", text: "Automated deployments through GitHub Actions and internal auditing." },
  { title: "Sprint 3: AI Integration", text: "Coupling of linguistic models for predictive training." },
  { title: "Sprint 4: Security Layer", text: "Transactional encryption, CORS middleware, and JWT tokens." },
  { title: "Sprint 5: Frontend Release", text: "Release of dynamic panels and interactive dashboards." },
];

const team = [
  { name: "Andersson David Sánchez Méndez", role: "Software Engineer", github: "https://github.com/AnderssonProgramming" },
  { name: "Cristian Santiago Pedraza Rodríguez", role: "Software Engineer", github: "https://github.com/cris-eci" },
  { name: "Santiago Botero García", role: "Software Engineer", github: "https://github.com/LePeanutButter" },
  { name: "Juan Andrés Rodríguez Peñuela", role: "Software Engineer", github: "https://github.com/Juan-Rpenuela" },
  { name: "Ricardo Andres Ayala Garzon", role: "Software Engineer", github: "https://github.com/lRicardol" },
];

export default function Prometeo({ project }: ProjectViewProps) {
  const accent = getAccent("prometeo");

  return (
    <div className="border-border-subtle bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
      <header className="mb-10 flex flex-col items-stretch gap-8 lg:flex-row overflow-hidden">
        <div className="flex items-center justify-center p-4 shrink-0 bg-white lg:bg-transparent rounded-[20px]">
          <Image 
            src={mediaUrl("prometeo", "gym.jpg")} 
            alt="Prometeo gym" 
            width={120} 
            height={120} 
            className="rounded-full object-cover" 
            unoptimized 
          />
        </div>

        <div className="hidden lg:block w-[1px] bg-gray-300/50 self-stretch my-2 shrink-0" />

        <div className="flex-1 rounded-[20px] bg-gradient-to-br from-[#8b0000] to-[#b71c1c] p-6 text-white flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-white/80">ECI Total Wellness System</span>
          <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl leading-tight">Prometeo: Smart Gym Management</h1>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/90">
            High-performance digital ecosystem for the Sports Department. Intelligent management of training spaces, advanced progress analytics, and dynamic conditioning plans powered by Artificial Intelligence.
          </p>
        </div>
      </header>

        <ProjectRepositoriesBlock modules={project.modules} />

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} ${accent.primary}`}>System Demonstrations</h3>
          <p className={`mt-2 ${projectUi.body}`}>
            Explore platform workflow behavior and interfaces segmented by institutional role:
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {videos.map((v) => (
              <div key={v.title} className="overflow-hidden rounded-card border border-border-subtle bg-surface shadow-premium">
                <video controls poster={mediaUrl("prometeo", v.poster)} className="aspect-video w-full bg-ink object-cover">
                  <source src={mediaUrl("prometeo", v.src)} type="video/mp4" />
                </video>
                <div className="p-4">
                  <h4 className="font-bold text-ink">{v.title}</h4>
                  <p className={`mt-1 ${projectUi.body}`}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Physical Tracking & Reservations Module</h3>
          <p className={projectUi.body}>
            Unified access for the academic community. Manage your workouts in real time:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className={`text-center rounded-card border border-[#8b0000]/25 bg-[#8b0000]/[0.06] p-5 shadow-premium transition duration-500 ease-premium hover:border-[#8b0000]/40`}
              >
                <h4 className={`font-semibold ${accent.primary}`}>{f.title}</h4>
                <p className={`mt-2 ${projectUi.body}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <main className={projectUi.section}>
            <h3 className={projectUi.sectionTitle}>General Project Description</h3>
            <p className={`mt-4 ${projectUi.body}`}>
              <strong>Prometeo-Back</strong> is an enterprise-level architectural solution conceived under the software development life cycle (SDLC). The system operates in a decentralized manner through a microservices architecture deployed on the <strong>Azure</strong> cloud, securely channeling all requests through <strong>AWS API Gateway</strong>.
            </p>
            <h4 className="mt-6 font-bold text-ink">Decoupled Software Architecture</h4>
            <p className={`mt-2 ${projectUi.body}`}>
              The internal structure follows Clean Architecture principles, organized in strictly assigned coupled layers:
            </p>
            <ul className={`mt-4 ${projectUi.list}`}>
              <li><strong>Controller Layer:</strong> Standardized endpoint exposure under a secure REST API protocol.</li>
              <li><strong>Service Layer:</strong> Hermetic encapsulation of transactional business logic.</li>
              <li><strong>Repository Layer:</strong> Relational data persistence control through Spring Data JPA abstractions.</li>
              <li><strong>Security Layer:</strong> Cryptographic context controllers with JWT, role-based profiles, and BCrypt encryption.</li>
            </ul>
            <h4 className="mt-6 font-bold text-ink">Impact Metrics & Innovation</h4>
            <ul className={`mt-4 ${projectUi.list}`}>
              <li>Reduction in physical space assignment times and administrative resource control for sports facilities.</li>
              <li>Automated generation of management reports exportable to institutional PDF and Excel formats.</li>
              <li>Transparent technical traceability with <strong>C4 Model (Levels 1 to 5)</strong> architectural modeling and structured persistence mappings in DBdiagram.io.</li>
            </ul>
          </main>
          <aside className={projectUi.section}>
            <h3 className={projectUi.sectionTitle}>Technical-Practical Sheet</h3>
            <p className={`mt-4 ${projectUi.sectionEyebrow}`}>Technology Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Java 17 / Spring 3.4", "OpenAI API", "HuggingFace", "Next.js + TS", "PostgreSQL", "Azure DevOps", "Three.js", "Docker", "AWS Gateway"].map((t) => (
                <TechBadge key={t} label={t} variant={t.includes("Java") || t.includes("OpenAI") ? "highlight" : "default"} />
              ))}
            </div>
            <p className={`mt-6 ${projectUi.sectionEyebrow}`}>Code Quality</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <TechBadge label="SonarCloud QA" />
              <TechBadge label="JaCoCo Coverage: 89%" />
            </div>
            <p className={`mt-8 ${projectUi.sectionEyebrow}`}>Sprint Development</p>
            <div className="mt-4 space-y-4">
              {sprints.map((s) => (
                <div key={s.title} className={projectUi.divider + " pt-4 first:border-0 first:pt-0"}>
                  <h4 className="text-sm font-bold text-ink">{s.title}</h4>
                  <p className={projectUi.body}>{s.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className={projectUi.section}>
          <h3 className={projectUi.sectionTitle}>Development Team (Team Members)</h3>
          <p className={projectUi.body}>
            Software engineers responsible for the design, architecture, and deployment of the Prometeo ecosystem:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {team.map((c) => (
              <ContributorCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        <footer className="mt-10 flex flex-col items-center text-center text-xs text-ink-muted gap-8 pt-8">
          © 2025-1 Escuela Colombiana de Ingeniería Julio Garavito. All rights reserved.
          <br />
          Developed within the Software Development Life Cycle (CVDS) course framework.

          <Image 
            src={mediaUrl("cvds", "logo.webp")} 
            alt="CVDS" 
            width={80}
            height={80}
            className="h-auto opacity-90"
            unoptimized 
          />
        </footer>
      </div>
    </div>
  );
}

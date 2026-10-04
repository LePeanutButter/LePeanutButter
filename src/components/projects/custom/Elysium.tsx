import Image from "next/image";
import ContributorCard from "@/src/components/projects/shared/ContributorCard";
import ImageCarousel from "@/src/components/projects/shared/ImageCarousel";
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps } from "@/src/types/projectViews";
import type { CarouselSlide, TechCard } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { getAccent } from "@/src/components/projects/shared/projectAccents";
import { mediaUrl } from "@/src/lib/assets";

const techCards: TechCard[] = [
  {
    title: "Robust API (Spring Boot 3)",
    items: [
      "Decoupled layers (Controllers, Services, Repositories, DTOs).",
      "Stateless security with JWT & BCrypt encryption.",
      "NoSQL persistence integrated with MongoDB Atlas.",
      "Interactive documentation via Swagger/OpenAPI.",
    ],
    tags: ["Java 17", "Spring Security", "AOP"],
  },
  {
    title: "Modern SPA (React.js)",
    items: [
      "Global state management with Context API.",
      "Asynchronous consumption and safe mapping via Axios.",
      "Interactive dashboards embedded with D3.js.",
      "Fluid animations with Framer Motion.",
    ],
    tags: ["React Router", "Date-fns", "Custom CSS"],
  },
  {
    title: "QA & Cloud Pipelines",
    items: [
      "Fully automated CI/CD with GitHub Actions.",
      "Certified test coverage above 80% (JaCoCo).",
      "Exhaustive static analysis with SonarQube.",
      "Multi-environment deployment on Azure App Service.",
    ],
    tags: ["Docker", "JUnit 5", "Mockito"],
  },
];

const carouselFiles = [
  ["login.webp", "Login & authentication"],
  ["gestionUsuario.webp", "User management dashboard"],
  ["busquedaUsuario.webp", "User search"],
  ["crearUsuario.webp", "Create new user"],
  ["editarUsuario.webp", "Edit user profile"],
  ["gestionarSalon.webp", "Room management dashboard"],
  ["agregarSalon.webp", "Add new room"],
  ["editarSalon.webp", "Edit room details"],
  ["calendarioReservas.webp", "Reservation calendar viewer"],
  ["gestionReservas.webp", "Reservation management dashboard"],
  ["crearReserva.webp", "Create new reservation"],
  ["detalleReserva.webp", "Reservation details view"],
  ["filtrosReservas.webp", "Reservation filters"],
  ["reservasPorSalon.webp", "Reservations filtered by room"],
  ["insights.webp", "Analytics & insights dashboard"],
] as const;

const systemSlides: CarouselSlide[] = carouselFiles.map(([file, caption]) => ({
  src: mediaUrl("elysium", "carousel-images", file),
  alt: `Elysium ${file}`,
  caption,
}));

const impactSlides: CarouselSlide[] = [
  {
    src: mediaUrl("elysium", "calendar-comparisson", "before.webp"),
    alt: "Legacy calendar",
    caption: "Phase 1 - Legacy grid calendar (Building B)",
    captionTone: "legacy",
  },
  {
    src: mediaUrl("elysium", "calendar-comparisson", "after.webp"),
    alt: "Elysium rework",
    caption: "Phase 2 - Elysium fluid interface deployed",
    captionTone: "rework",
  },
];

const contributors = [
  { name: "Andersson David Sánchez Méndez", role: "Software Engineer", github: "https://github.com/AnderssonProgramming" },
  { name: "Cristian Santiago Pedraza Rodríguez", role: "Software Engineer", github: "https://github.com/cris-eci" },
  { name: "Santiago Botero García", role: "Software Engineer", github: "https://github.com/LePeanutButter" },
  { name: "Ricardo Andres Ayala Garzon", role: "Software Engineer", github: "https://github.com/lRicardol" },
];

const nav = [
  ["#overview", "General Summary"],
  ["#architecture", "Stack & Architecture"],
  ["#flow-screenshots", "System Flow"],
  ["#real-impact", "University Impact"],
  ["#team", "Development Team"],
] as const;

const panelClass =
  "scroll-mt-28 rounded-card border border-[#b8d8d4] bg-[#f0f9f8] p-6 shadow-premium sm:p-8";

export default function Elysium({ project }: ProjectViewProps) {
  const accent = getAccent("elysium");

  return (
    <div className="border-border-subtle bg-canvas">
      <div className="flex flex-col lg:flex-row">
        <aside className="flex flex-col gap-2 p-6 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-64">
          <div className="mb-2 flex items-center gap-3">
            <Image src={mediaUrl("elysium", "logo.webp")} alt="Elysium" width={240} height={240} unoptimized />
          </div>
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-[#4da99d]/40 bg-[#f0f9f8] px-4 py-2.5 text-left text-sm font-medium text-[#3a8279] transition hover:border-[#4da99d] hover:bg-[#4da99d] hover:text-white"
            >
              {label}
            </a>
          ))}
        </aside>

        <main className="min-w-0 flex-1 p-6 lg:p-10">
          <div className={`mb-8 flex flex-wrap items-center justify-between gap-4 ${panelClass}`}>
            <div>
              <h1 className={`text-2xl font-bold ${accent.primary}`}>Elysium</h1>
              <p className="text-lg text-ink-secondary">Laboratory Reservation System</p>
              <p className="mt-1 text-sm text-ink-muted">Software Development Life Cycle (CVDS) · Feb 2025 – Apr 2025</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <section id="overview" className={panelClass}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className={`${projectUi.sectionTitle} ${accent.primary}`}>Project Description</h2>
              </div>
              <p className={projectUi.body}>
                <strong>Elysium</strong> is a full-stack, enterprise-grade web application designed to intelligently manage laboratory and academic room reservations within the <strong>Escuela Colombiana de Ingeniería Julio Garavito</strong>.
              </p>
              <p className={`mt-4 ${projectUi.body}`}>
                The platform effectively mitigates scheduling conflicts, optimizes physical inventory, and democratizes laboratory access for both professors and students through advanced analytical panels and highly intuitive flows.
              </p>
            </section>

            <ProjectRepositoriesBlock modules={project.modules} className={panelClass} />

            <section id="architecture" className={panelClass}>
              <h2 className={`${projectUi.sectionTitle} ${accent.primary}`}>Technical Architecture & Infrastructure</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {techCards.map((card) => (
                  <div key={card.title} className="rounded-card border border-[#4da99d]/30 bg-white/80 p-5">
                    <h4 className="mb-3 font-semibold text-ink">{card.title}</h4>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className={projectUi.body}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <TechBadge key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="flow-screenshots" className={panelClass}>
              <h2 className={projectUi.sectionTitle}>Platform Gallery & Flow</h2>
              <p className={`mb-6 text-sm text-ink-muted`}>
                Key reservation views, calendars, and dashboard analytics.
              </p>
              <ImageCarousel slides={systemSlides} imageHeight="h-[220px] sm:h-[320px]" />
            </section>

            <section id="real-impact" className={panelClass}>
              <h2 className={projectUi.sectionTitle}>Impact on the University Community</h2>
              <p className={projectUi.body}>
                Elysium transcended the academic environment by becoming a <strong>winning and inspiring project</strong> for institutional physical modernization. Our award-winning design and UX flow served as a direct template for redesigning the informational screen ecosystem in the university&apos;s <strong>Building B</strong>.
              </p>
              <div className="mt-6">
                <ImageCarousel slides={impactSlides} imageHeight="h-[220px] sm:h-[320px]" />
              </div>
            </section>

            <section id="team" className={panelClass}>
              <h2 className={projectUi.sectionTitle}>Development Team (Team Members)</h2>
              <p className={projectUi.body}>
                Software engineers responsible for requirements engineering, architecture, QA, and Elysium ecosystem automation:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contributors.map((c) => (
                  <ContributorCard key={c.name} {...c} />
                ))}
              </div>
            </section>
          </div>

          <footer className="mt-10 text-center text-xs text-ink-muted flex flex-col items-center text-center gap-8">
            © 2025 Escuela Colombiana de Ingeniería Julio Garavito. Software Development Life Cycle (CVDS) course.
            <br />
            Developed under Scrum methodology and deployed on Microsoft Azure.
            <Image 
              src={mediaUrl("cvds", "logo.webp")} 
              alt="CVDS" 
              width={80}
              height={80}
              className="h-auto opacity-90"
              unoptimized 
            />
          </footer>
        </main>
      </div>
    </div>
  );
}

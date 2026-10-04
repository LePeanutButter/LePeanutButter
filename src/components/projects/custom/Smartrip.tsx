import Image from "next/image";
import type { ReactNode } from "react";
import ProjectSidebarLayout from "@/src/components/projects/shared/ProjectSidebarLayout";
import TeamMemberCard from "@/src/components/projects/shared/TeamMemberCard";
import VideoSelector from "@/src/components/projects/shared/VideoSelector";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps } from "@/src/types/projectViews";
import type { SidebarNavItem, TeamMember, VideoDemo } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";

const navItems: SidebarNavItem[] = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "architecture", label: "AWS Architecture", icon: "◎", group: "Core Components" },
  { id: "team", label: "Technical Team", icon: "◎" },
  { id: "demos", label: "Product Demos", icon: "◎" },
  { id: "transformation", label: "Digital Plan", icon: "◎" },
  { id: "license", label: "Project License", icon: "◎" },
];

const team: TeamMember[] = [
  { name: "Santiago Botero Garcia", role: "Core Developer / Finance", description: "Development, Security, Digital Transformation, Finance, and Managerial Structuring.", github: "https://github.com/LePeanutButter", icon: "◉" },
  { name: "Santiago Amaya Zapata", role: "Core Developer", description: "Technical Development and Digital Transformation fronts for the project.", github: "https://github.com/SantiagoAmaya21", icon: "◉" },
  { name: "Ricardo Andres Ayala G.", role: "Core Developer", description: "Technical Development, Security Analysis, and Digital Transformation fronts.", github: "https://github.com/lRicardol", icon: "◉" },
  { name: "Andrés Felipe Calderón R.", role: "Core Developer", description: "Software Development and Engineering front for the ecosystem.", github: "https://github.com/AndresFelipeCalderonRamirez", icon: "◉" },
  { name: "Laura Natalia Perilla Q.", role: "Core Developer", description: "Technical Development front and Security Analysis specialist.", github: "https://github.com/Lanapequin", icon: "◉" },
  { name: "Daniel Esteban Rodríguez S.", role: "Security & Analysis", description: "Security Analysis, Vulnerabilities, and Systems Robustness front.", github: "https://github.com/ders14028-bit", icon: "◉" },
  { name: "Juana Lozano Chaves", role: "Managerial Structuring / Finance", description: "Financial Analysis, Feasibility Studies, and Project Management.", github: "https://github.com/juanalch", icon: "◉" },
  { name: "Laura Alejandra Venegas P.", role: "Managerial Structuring / Finance", description: "Financial Analysis, Feasibility Studies, and Project Management.", github: "https://github.com/LauraVenegas6", icon: "◉" },
  { name: "Sofia Velandia Cifuentes", role: "Managerial Structuring / Finance", description: "Financial Analysis, Corporate Project Management, and Analytical Studies.", linkedin: "https://www.linkedin.com/in/sof%C3%ADa-velandia-cifuentes-4b4aa51a4/", icon: "◉" },
  { name: "Juan Pablo Salamanca M.", role: "Managerial Structuring / Finance", description: "Financial Analysis, Cost Models, and Administrative Feasibility.", linkedin: "https://www.linkedin.com/in/juan-pablo-salamanca-mojica-017855382/", icon: "◉" },
];

const videoDemos: VideoDemo[] = [
  { id: "aws", label: "1. AWS Architecture", icon: "☁", title: "Demo: AWS Architecture", src: "smartrip/infrastructure.mp4", mimeType: "video/mp4" },
  { id: "web", label: "2. Web SPA Client", icon: "▣", title: "Demo: Web SPA Client", src: "smartrip/web-client.mp4", mimeType: "video/mp4" },
  { id: "android", label: "3. Android Application", icon: "▢", title: "Demo: Android Application", src: "smartrip/android.mp4", mimeType: "video/mp4" },
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
    <section id={id} className={projectUi.section}>
      <h3 className={projectUi.sectionTitle}>{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Smartrip({ project }: ProjectViewProps) {
  const sidebarActive = "border-l-2 border-[#007bff] bg-[#007bff]/8 text-[#007bff]";
  const btnBlue =
    "inline-flex h-11 items-center justify-center rounded-control border border-[#007bff] bg-[#007bff] px-6 text-sm font-semibold text-white transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-transparent hover:text-[#007bff]";

  return (
    <div className="border-border-subtle bg-canvas">
      <ProjectSidebarLayout
        activeAccentClass={sidebarActive}
        brand={
          <div className="text-center">
            <Image
              src={mediaUrl("smartrip", "logo.png")}
              alt="SmarTrip Logo"
              width={120}
              height={120}
              className="mx-auto"
              unoptimized
            />
          </div>
        }
        navItems={navItems}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-card border border-border-subtle bg-canvas px-6 py-4">
          <nav className="flex flex-wrap gap-4 text-sm font-bold text-ink-secondary">
            <span className="border-b-2 border-[#007bff] pb-1 text-[#007bff]">Project Dossier</span>
            <a href="#team" className="transition hover:text-ink">Team</a>
            <a href="#demos" className="transition hover:text-ink">Deliverables v1.0</a>
          </nav>
          <span className="font-mono text-xs text-ink-muted">Console Panel</span>
        </div>

        <div className="flex flex-col gap-6">
          <Panel id="overview" title="Project Summary: SmarTrip">
            <p className={projectUi.bodyLg}>
              <strong>SmarTrip</strong> is an intelligent, integrated travel management and planning platform based on adaptive artificial intelligence. The ecosystem unifies scalable cloud architectures, efficient multi-platform experiences, and agile digital transformation methodologies.
            </p>
          </Panel>

          <ProjectRepositoriesBlock modules={project.modules} />

          <div className="grid gap-6 lg:grid-cols-2">
            <Panel id="architecture" title="Cloud Infrastructure (AWS)">
              <p className={projectUi.body}>
                Our backend infrastructure implements a high-availability, fault-tolerant environment. The main services integrate:
              </p>
              <ul className={`mt-4 ${projectUi.list}`}>
                <li><strong>Compute Layer:</strong> Containerized microservices on Amazon ECS/EKS and AWS Lambda.</li>
                <li><strong>Persistence:</strong> Amazon DynamoDB for low latency and RDS for transactional data.</li>
                <li><strong>Security:</strong> Centralized authentication with Amazon Cognito and API Gateway.</li>
              </ul>
            </Panel>
            <Panel id="web-client" title="Multi-Platform Frontends">
              <p className={projectUi.body}>
                <strong>Web Client:</strong> Built on a modular SPA (Single Page Application) architecture focused on analytical dashboards and detailed management.
              </p>
              <p className={`mt-3 ${projectUi.body}`}>
                <strong>Android App:</strong> Built natively to optimize mobile performance, offline synchronization, and real-time geolocation services.
              </p>
            </Panel>
          </div>

          <Panel id="team" title="Members / Contributors by Area">
            <p className={projectUi.body}>
              The integral development of this intelligent tourism ecosystem was carried out by the following multidisciplinary team, organized by work fronts:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {team.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </Panel>

          <Panel id="demos" title="Ecosystem Demonstration Videos">
            <VideoSelector
              demos={videoDemos}
              activeAccentClass="border-[#007bff] bg-[#007bff] text-white"
            />
          </Panel>

          <Panel id="transformation" title="Digital Transformation Document">
            <p className={projectUi.body}>
              Access the master plans, governance milestones, applied agile methodologies (Scrum/DevOps), and corporate impact analyses prepared for the deployment of the SmarTrip ecosystem.
            </p>
            <div className={`mt-6 flex flex-col gap-4 sm:flex-row sm:items-center ${projectUi.cardMuted}`}>
              <div className="flex-1">
                <p className="font-semibold text-ink">Plan_Transformacion_Digital_SmarTrip_v1.0.pdf</p>
                <p className="text-sm text-ink-muted">Size: 4.8 MB | Last modified: May 2026 | Status: Corporate approved</p>
              </div>
              <a href={mediaUrl("smartrip", "digital-transformation.pdf")} target="_blank" rel="noreferrer" className={btnBlue}>
                Download Document
              </a>
            </div>
          </Panel>

          <Panel id="license" title="Project License">
            <p className={projectUi.body}>
              This integral project is under the <strong>GNU General Public License v3.0</strong>. Consult the <strong>LICENSE</strong> file to review the legal framework and details.
            </p>
            <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${projectUi.cardMuted}`}>
              <div>
                <p className="font-semibold text-ink">Allows:</p>
                <ul className={`mt-2 ${projectUi.list}`}>
                  <li>Commercial and private use</li>
                  <li>Modification of the solution</li>
                  <li>Distribution of the ecosystem</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-ink">Warranty and Liability:</p>
                <p className={`mt-2 ${projectUi.body}`}>
                  No explicit warranty is provided; the original authors assume no legal or civil liability.
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-ink-muted">
              © 2026 OverTheAir. Some rights reserved.
              <br />
              <span className="italic">Transformative academic solution with a real-impact focus on the Colombian tourism sector.</span>
            </p>
          </Panel>
        </div>
      </ProjectSidebarLayout>
    </div>
  );
}
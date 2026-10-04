import type { ProjectViewProps } from "@/src/types/projectViews";
import ContributorCard from "@/src/components/projects/shared/ContributorCard";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";

const contributors = [
  { name: "Santiago Botero García", role: "LePeanutButter", github: "https://github.com/LePeanutButter" },
  { name: "Jacobo", role: "Jacobo2025", github: "https://github.com/Jacobo2025" },
];

export default function Ezflix({ project }: ProjectViewProps) {
  return (
    <div className="border-border-subtle">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <header className="mb-10 border-b border-[#C74634]/30 pb-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C74634]">
            Database Application Architecture
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            EZFlix – Movie & Series Distribution System
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
            Technical blueprint, verification schema, and access control specification — Oracle SQL academic documentation style.
          </p>
        </header>

        <section className={`mb-8 ${projectUi.section}`}>
          <p className={projectUi.body}>
            <strong>EZFlix</strong> is an enterprise-grade digital platform engineered for the secure, scalable, and structured distribution of movies and series. Designed around strict relational integrity, the architecture empowers users to seamlessly <strong>purchase</strong> or <strong>rent</strong> audiovisual assets via transactional processing structures.
          </p>
          <p className={`mt-4 ${projectUi.body}`}>
            The solution natively handles isolated user libraries, cryptographic credential binding, granular role-based authorization matrices, licensing distribution rights, and automated ledgering workflows—replicating the mission-critical core backend infrastructure of modern commercial streaming multi-tenancies.
          </p>
        </section>

        <ProjectRepositoriesBlock modules={project.modules} />

        <section className={`mb-8 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} text-[#C74634]`}>Business Model Overview</h3>
          <p className={projectUi.body}>The structural system design facilitates complete operational oversight and supports the following target capabilities:</p>
          <ul className={`mt-4 ${projectUi.list}`}>
            <li><strong>Asset Ownership Mapping:</strong> Persistent processing of content purchases mapped continuously directly into target subscriber libraries.</li>
            <li><strong>Time-Bound Leasing:</strong> Time-restricted rental mechanics with automated state invalidation and access revocation triggers.</li>
            <li><strong>Hierarchical Content Tracking:</strong> Granular episode management contextually nested within distinct series wrappers.</li>
            <li><strong>Access Matrix Governance:</strong> Fine-grained, role-based administrative control protecting internal system functions and procedures.</li>
            <li><strong>Financial Traceability:</strong> Immutable transaction logging paired with unified payment instrument tokenization and auditing.</li>
            <li><strong>Licensing Compliance:</strong> Dedicated accounting for distribution rights management, content controllers, and external licensing nodes.</li>
            <li><strong>Comprehensive System Auditing:</strong> Low-level automated operational logs detailing continuous audit history across schema mutations.</li>
          </ul>
        </section>

        <section className={`mb-8 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} text-[#C74634]`}>System Architecture & Modeling Blueprint</h3>
          <p className={projectUi.body}>
            To preserve complete modular traceability across deployment lifecycles, all structural representations, domain maps, and flow diagrams have been centralized into an absolute technical appendix document.
          </p>
          <div className={`mt-6 border-l-2 border-[#C74634] pl-4 ${projectUi.cardMuted}`}>
            <p className="font-semibold text-ink">
              Technical Document Reference:{" "}
              <a
                href={mediaUrl("ezflix", "diagrams.pdf")}
                target="_blank"
                rel="noreferrer"
                className="text-[#C74634] underline decoration-[#C74634]/40 hover:opacity-70"
              >
                ezflix_architecture_blueprints.pdf
              </a>
            </p>
            <p className={`mt-3 ${projectUi.body}`}>
              This comprehensive artifact integrates all system blueprints developed from initialization to full implementation across different abstraction layers:
            </p>
            <ul className={`mt-4 ${projectUi.list}`}>
              <li><strong>System Scope Mapping:</strong> Context Models detailing domain boundaries and boundary interaction lines.</li>
              <li><strong>Relational & Topological Schemas:</strong> Full Logical and Physical Data Models outlining entity constraints, table sizing, and validation keys.</li>
              <li><strong>Lifecycle Evolution Blueprints:</strong> Comprehensive modeling deliverables covering both Cycle 1 and Cycle 2 development windows.</li>
              <li><strong>Operational Concerns:</strong> Full Component Architecture, Security Role Matrices, and Behavior Mapping via Use Case Diagrams.</li>
            </ul>
          </div>
        </section>

        <section className={`mb-8 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} text-[#C74634]`}>Database Structure & Relational Topology</h3>
          <p className={projectUi.body}>
            The normalized physical data model is partitioned into distinct technical subsystems to eliminate structural redundancy and ensure optimum indexing speed:
          </p>

          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#C74634]">Users & Roles Subsystem</h4>
          <table className="mt-3 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-[#C74634] text-left text-ink">
                <th className="p-2 font-semibold">Entity Logical Name</th>
                <th className="p-2 font-semibold">Functional Description & Constraints</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Users", "Maintains validated PII, master profile structures, and identity mapping."],
                ["Accounts", "Manages credentials, secure token authentication references, and metadata fields."],
                ["SystemActors", "Binds security profiles, dynamic user-group scopes, and operational roles."],
              ].map(([name, desc]) => (
                <tr key={name} className="border-b border-border-subtle">
                  <td className="p-2 font-mono text-sm text-ink">{name}</td>
                  <td className={`p-2 ${projectUi.body}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#C74634]">Content Catalog Management</h4>
          <table className="mt-3 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-[#C74634] text-left text-ink">
                <th className="p-2 font-semibold">Entity Logical Name</th>
                <th className="p-2 font-semibold">Functional Description & Constraints</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Movies", "High-fidelity metadata, localized rating classification, and storage profiles."],
                ["Series", "High-level structural entities representing complex multi-season serialized assets."],
                ["Episodes", "Sequential elements bound via relational integrity to parent Series identifiers."],
                ["Distributors", "Tracks primary business vendors, legal copyrights, and business contracts."],
                ["ContentControllers", "Enforces individual compliance tracking, content review states, and editing bounds."],
              ].map(([name, desc]) => (
                <tr key={name} className="border-b border-border-subtle">
                  <td className="p-2 font-mono text-sm text-ink">{name}</td>
                  <td className={`p-2 ${projectUi.body}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`mb-8 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} text-[#C74634]`}>System Engineering Tooling Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Oracle SQL", "PL/SQL", "Astah", "Triggers", "Views", "RBAC", "SQL Developer"].map((t) => (
              <span
                key={t}
                className="rounded border border-[#C74634]/25 bg-[#C74634]/5 px-2.5 py-1 font-mono text-[11px] text-[#C74634]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className={`mb-8 ${projectUi.section}`}>
          <h3 className={`${projectUi.sectionTitle} text-[#C74634]`}>Contributors</h3>
          <div className="mt-6 flex flex-wrap gap-4">
            {contributors.map((c) => (
              <ContributorCard key={c.github} {...c} className="min-w-[220px] flex-1" />
            ))}
          </div>
        </section>

        <footer className="border-t border-border-subtle pt-8 text-center text-xs text-ink-muted">
          Oracle SQL academic project · February 2024 – May 2024
        </footer>
      </div>
    </div>
  );
}

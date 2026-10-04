import Image from "next/image";
import ContributorCard from "@/src/components/projects/shared/ContributorCard";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps } from "@/src/types/projectViews";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";
import { githubAvatarFromUrl } from "@/src/lib/github";

const maintainers = [
  { name: "Santiago Botero García", role: "Maintainer · @LePeanutButter", github: "https://github.com/LePeanutButter" },
  { name: "Andrés Felipe Calderón Ramírez", role: "Contributor · @andrescalderonr", github: "https://github.com/AndresFelipeCalderonRamirez" },
];

export default function TalentMapAi({ project }: ProjectViewProps) {
  return (
    <div className="border-border-subtle">
      <div className="flex min-h-[50vh]">
        <aside className="hidden w-12 shrink-0 flex-col items-center gap-4 bg-canvas py-8 lg:flex">
          {["◫", "◧", "◨"].map((icon) => (
            <span key={icon} className="text-lg text-ink-muted">{icon}</span>
          ))}
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">
            <header className={`mb-8 pb-6`}>
              <p className={projectUi.sectionEyebrow}>Code / NLP / Transformers</p>
              <h1 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
                TalentMap AI: Ethical Talent Matching with DistilBERT
              </h1>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-ink-secondary">
                  <Image
                    src={githubAvatarFromUrl("https://github.com/LePeanutButter")!}
                    alt="Santiago Botero"
                    width={36}
                    height={36}
                    className="rounded-full border border-border-subtle"
                    unoptimized
                  />
                  <span>
                    By <strong className="text-ink">Santiago Botero García</strong> (@LePeanutButter) · Updated December 2025
                  </span>
                </div>
                <span className="rounded border border-border-subtle bg-canvas px-3 py-1 text-sm font-semibold text-ink-muted">
                  ▲ 42
                </span>
              </div>
            </header>

            <div className="space-y-8">
              <section className={projectUi.bodyLg}>
                <p>
                  Ethical and technical AI application for matching job candidates with vacancies through semantic analysis. TalentMap AI leverages Transformer-based embeddings (DistilBERT) to evaluate compatibility between résumés and job descriptions beyond keyword matching.
                </p>
                <p className="mt-4 text-ink-secondary">
                  The project emphasizes fairness, transparency, and interpretability, addressing algorithmic bias while improving employment outcomes.
                </p>
                <p className="mt-4 text-ink-secondary">
                  Developed for the <em>Principles of Artificial Intelligence Technologies (PTIA)</em> course at <strong>Escuela Colombiana de Ingeniería Julio Garavito</strong>.
                </p>
              </section>

              <section className={projectUi.section}>
                <h3 className={projectUi.sectionTitle}>Live Demo, Class Diagrams & Paper Overview</h3>
                <p className={`mt-4 ${projectUi.body}`}>
                  This video presents TalentMap AI, including a live frontend demo of the semantic recruitment system, along with an overview of the project paper and class diagrams.
                </p>
                <p className={projectUi.body}>
                  It showcases how candidate CVs are processed and matched with job descriptions using semantic similarity, as well as the system&apos;s architecture and design structure behind the implementation.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-card border border-border-subtle bg-ink">
                  <video controls className="h-full w-full" src={mediaUrl("talent-map-ai", "showcase.webm")} />
                </div>
              </section>

              <ProjectRepositoriesBlock modules={project.modules} />

              <section className={projectUi.section}>
                <h3 className={projectUi.sectionTitle}>Background</h3>
                <p className={projectUi.body}>
                  Modern recruitment systems often rely on keyword-based matching, which fails to capture the deeper semantic relationships between a candidate&apos;s skills and a job&apos;s requirements. <strong>TalentMap AI</strong> addresses this limitation by combining <strong>machine learning</strong>, <strong>semantic embeddings</strong>, and <strong>ethical AI design</strong> to improve job-candidate compatibility.
                </p>
                <p className={`mt-4 ${projectUi.body}`}>This project aims to:</p>
                <ol className={`mt-4 list-decimal space-y-2 pl-5 ${projectUi.body}`}>
                  <li>Develop a semantic model using <strong>DistilBERT</strong> for candidate-job matching.</li>
                  <li>Integrate <strong>fairness and bias auditing</strong> tools to ensure responsible AI behavior.</li>
                  <li>Provide a <strong>web-based MVP</strong> demonstrating real-time compatibility scoring.</li>
                </ol>
              </section>

              <section className="overflow-hidden rounded-card border border-border-subtle">
                <div className="border-b border-border-subtle bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">In [1]</div>
                <pre className="overflow-x-auto bg-surface p-4 font-mono text-sm text-ink">{`# Install baseline environment dependencies
!pip install django transformers jquery`}</pre>
                <div className="border-t border-border-subtle bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">Out [1]</div>
                <pre className="p-4 font-mono text-xs text-ink-secondary">Installing collected packages: Django, transformers, jQuery
Successfully installed Django-5.0 transformers-4.38 jQuery-3.7.1</pre>
              </section>

              <section className={projectUi.section}>
                <h3 className={projectUi.sectionTitle}>Architecture</h3>
                <p className={projectUi.body}>The TalentMap AI system follows a modular architecture:</p>
                <ul className={`mt-4 ${projectUi.list}`}>
                  <li><strong>Frontend (SPA):</strong> HTML, CSS, JS for visualization of recommendations, using jQuery for interactivity.</li>
                  <li><strong>Backend (Django REST):</strong> API for résumé and job description processing.</li>
                  <li><strong>AI Engine:</strong> DistilBERT embeddings for semantic similarity.</li>
                  <li><strong>Ethics Layer:</strong> Bias detection, anonymization, and explainability mechanisms.</li>
                </ul>
                <div className={`mt-4 border-l-2 border-ink pl-4 ${projectUi.cardMuted}`}>
                  <p className={projectUi.body}>
                    <strong>Note:</strong> The full system analysis and underlying principles are available in the comprehensive report at <code className="rounded bg-canvas px-1 font-mono text-xs">docs/talentmap-ai.pdf</code>. The artifact is written in Spanish and includes the state of the art, details on training data, architecture selection, and an environmental analysis using the <strong>PEAS</strong> model.
                  </p>
                </div>
              </section>

              <section className={projectUi.section}>
                <h3 className={projectUi.sectionTitle}>Ethical Framework</h3>
                <p className={projectUi.body}>
                  TalentMap AI follows UNESCO&apos;s <em>Recommendation on the Ethics of Artificial Intelligence (2021)</em>, applying principles of:
                </p>
                <ul className={`mt-4 ${projectUi.list}`}>
                  <li><strong>Fairness:</strong> Avoiding bias by anonymizing and auditing datasets.</li>
                  <li><strong>Transparency:</strong> Explaining how recommendations are generated.</li>
                  <li><strong>Accountability:</strong> Ensuring human oversight and responsible AI design.</li>
                </ul>
              </section>

              <section className="overflow-hidden rounded-card border border-border-subtle">
                <div className="bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">In [2]</div>
                <pre className={`${projectUi.code} !text-sm`}>{`from talentmap_ai.engine import DistilBertTrainer
trainer = DistilBertTrainer(model_id="test_model", mode="cosine")
trainer.fit(epochs=2, batch_size=4, lr=0.0002, freeze_bert=True)`}</pre>
                <div className="border-t border-border-subtle bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">Out [2]</div>
                <pre className="p-4 font-mono text-xs text-ink-secondary whitespace-pre-wrap">{`Training Configuration:
Model ID: test_model | Mode: cosine | Device: cpu
Training samples: 8 | Validation samples: 2

Epoch 1/2 -> Train Loss: 0.3157 | Val Loss: 0.3781
Epoch 2/2 -> Train Loss: 0.2045 | Val Loss: 0.3811

Model training took 173.68 seconds.
Compressed model saved to: test_model/test_model_cosine_20251125_173520.pt.xz`}</pre>
              </section>

              <section className="overflow-hidden rounded-card border border-border-subtle">
                <div className="bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">In [3]</div>
                <pre className={`${projectUi.code} !text-sm`}>{`test_results = trainer.evaluate_batch_prediction()`}</pre>
                <div className="border-t border-border-subtle bg-canvas px-4 py-2 font-mono text-xs text-ink-muted">Out [3]</div>
                <div className="overflow-x-auto p-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border-subtle text-left text-ink-muted">
                        <th className="p-2">Score</th>
                        <th className="p-2">Job Title</th>
                        <th className="p-2">Resume Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-ink-secondary">
                      {[
                        ["0.8458", "Python ML engineer...", "Expert in Python and machine learning"],
                        ["0.6147", "Marketing manager...", "Software engineer with 5 years..."],
                        ["0.6766", "Data scientist...", "PhD in statistics, ML experience..."],
                        ["0.6620", "Sales representative...", "Frontend developer..."],
                      ].map(([score, job, resume]) => (
                        <tr key={score} className="border-b border-border-subtle">
                          <td className="p-2 font-bold text-ink">{score}</td>
                          <td className="p-2">{job}</td>
                          <td className="p-2">{resume}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm font-semibold text-ink">
                    SUCCESS: Loaded model parameters match the saved model. All tests completed successfully in 190.272s.
                  </p>
                </div>
              </section>

              <section className={projectUi.section}>
                <h3 className={projectUi.sectionTitle}>Maintainers & Contributors</h3>
                <p className={projectUi.body}>
                  This repository and model execution run exist thanks to the academic research and implementation work of:
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {maintainers.map((m) => (
                    <ContributorCard key={m.name} {...m} className="min-w-[240px] flex-1" />
                  ))}
                </div>
                <h4 className="mt-8 font-semibold text-ink">License</h4>
                <p className={`mt-2 ${projectUi.body}`}>
                  Distributed under the MIT License. © 2025 TalentMap AI Team. Standard Readme compliant.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

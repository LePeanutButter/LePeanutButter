import type { ProjectCase } from "@/src/types";
import { ProjectRegistry } from "./projectRegistry";

export const projectCases: ProjectCase[] = [
  {
    slug: "smartrip",
    title: ProjectRegistry.smartrip.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "View Ecosystem Case Study",
    dateRange: "January 2026 - May 2026",
    thumbnail: ProjectRegistry.smartrip.thumbnail,
    summary:
      "A multi-platform tourism system that unifies trip planning, AI recommendations, social collaboration, Android delivery, Spring Boot APIs, FastAPI intelligence, and AWS-oriented infrastructure.",
    narrative: [
      "SmarTrip is a distributed product rather than a single repository. The local workspace shows a React/Vite client with protected routes for dashboards, AI assistant, social chat, travel planning, calendar, behavior analysis, and provider dashboards.",
      "The backend core is a Spring Boot service with controller/service layers for users, travel plans, social features, matching, compatibility, and Google OAuth, while the Python AI service exposes routers for recommendations, chat, local AI, preferences, behavior analysis, adaptive UI, seasonality, trends, and traveler matching.",
      "The Android and infrastructure repositories complete the ecosystem with Kotlin Clean Architecture/MVVM and AWS CLI deployment scripts for ALB, EC2, RDS, S3, and academy-lab compliant provisioning.",
    ],
    technologies: [
      "React 18",
      "Vite",
      "Spring Boot",
      "FastAPI",
      "Kotlin",
      "Jetpack Compose",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
    highlights: [
      "Route-rich React client with auth providers, adaptive UI context, dashboards, AI assistant, travel plans, and social collaboration.",
      "Spring Boot API with JWT, Google OAuth, JPA, Flyway, PostgreSQL, matching, travel planning, sharing, and social endpoints.",
      "FastAPI AI service with modular routers for chat, local AI, recommendations, preferences, behavior, adaptive UI, seasonality, trends, and users.",
      "Android app follows Clean Architecture, MVVM, Hilt, Retrofit, Room, Coroutines, and Jetpack Compose.",
      "AWS infrastructure scripts provision learner-lab compatible web, API, AI, database, and object storage resources.",
    ],
    modules: [
      {
        name: "Voyager Web Client",
        role: "Frontend",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-web-client",
        localPath: "projects/academic/smartrip/voyager-web-client",
        summary:
          "React 18 + Vite application with protected routes for dashboard, AI assistant, social chat, travel planning, business views, calendar, settings, and legal pages.",
        technologies: ["React", "Vite", "React Router", "Context API", "Jest"],
        evidence: [
          "App.jsx wires AuthProvider, AdaptiveUIProvider, ThemeProvider, protected routes, and private JWT routes.",
          "Source tree contains service modules, custom hooks, tests, and travel/social/business page groups.",
        ],
      },
      {
        name: "Voyager Backend Core",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-backend-core",
        localPath: "projects/academic/smartrip/voyager-backend-core",
        summary:
          "Spring Boot REST API for user management, travel plans, social features, traveler matching, compatibility, sharing, and Google OAuth.",
        technologies: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway"],
        evidence: [
          "Source tree includes controller and service layers under com.tourism.platform.",
          "README documents /api/v1, JPA persistence, PostgreSQL, Docker, JWT, and OAuth flows.",
        ],
      },
      {
        name: "Voyager AI Service",
        role: "AI Microservice",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-ai-service",
        localPath: "projects/academic/smartrip/voyager-ai-service",
        summary:
          "FastAPI service for recommendations, chat, local AI memory, traveler matching, preferences, behavior analysis, adaptive UI, seasonality, and trends.",
        technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "PostgreSQL", "Ollama"],
        evidence: [
          "app/api/v1/router.py mounts users, matching, trends, seasonality, chat, local-ai, preferences, behavior, and adaptive-ui routers.",
          "Modules include chatbot, embeddings, memory, local Ollama client, prompts, ML loading, and test coverage.",
        ],
      },
      {
        name: "Voyager Android",
        role: "Mobile",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-android",
        localPath: "projects/academic/smartrip/voyager-android",
        summary:
          "Kotlin Android client aligned with the web experience and backend contracts.",
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "Room"],
        evidence: [
          "Gradle configuration injects backend and AI service URLs as BuildConfig values.",
          "README and app tree indicate Presentation, Domain, Data layering and modern Android dependencies.",
        ],
      },
      {
        name: "Voyager Infrastructure",
        role: "Infrastructure",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-infrastructure",
        localPath: "projects/academic/smartrip/voyager-infrastructure",
        summary:
          "AWS CLI infrastructure for academy-lab compatible deployment of the web client, backend API, AI service, database, and object storage.",
        technologies: ["AWS CLI", "Bash", "ALB", "EC2", "RDS", "S3"],
        evidence: [
          "Repository includes setup scripts, config-driven deployment, validation, and reporting.",
          "Designed around Learner Lab constraints while preserving complete system functionality.",
        ],
      },
      {
        name: "Over The Air Docs",
        role: "Documentation",
        repositoryUrl: "https://github.com/LePeanutButter/overtheair-docs",
        localPath: "projects/academic/smartrip/overtheair-docs",
        summary:
          "Shared documentation, architecture, product, paper, project-management, and artifact repository for the ecosystem.",
        technologies: ["Markdown", "C4", "UML", "Architecture Docs"],
        evidence: [
          "Workspace contains artifacts, assets, documentation, papers, and project-management folders.",
          "Used as a cross-repo reference point for the SmarTrip architecture.",
        ],
      },
    ],
    sourceSignals: [
      "React Router protected/private route graph in voyager-web-client/src/App.jsx.",
      "FastAPI router aggregation in voyager-ai-service/app/api/v1/router.py.",
      "Spring Boot controller/service source layout in voyager-backend-core/src/main/java.",
      "Android Gradle and app structure in voyager-android.",
      "AWS CLI deployment scripts and config in voyager-infrastructure.",
    ],
    featured: true,
  },
  {
    slug: "ai-grading-automation-workflows-backup",
    title: ProjectRegistry.haut.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "Review Workflow Architecture",
    dateRange: "October 2025 - December 2025",
    thumbnail: ProjectRegistry.haut.thumbnail,
    summary:
      "A version-controlled n8n workflow system for multi-agent, human-in-the-loop grading automation across rubrics, submission processing, LLM evaluation, approval, feedback, and audit logging.",
    narrative: [
      "This academic automation repository is not a conventional app; it is the operational backup for an n8n-based grading platform. The local workspace contains credential scaffolding, documentation, and eight exported workflow JSON files that can be imported into n8n to recreate the automation pipeline.",
      "The system uses agent roles for rubric generation, document preprocessing, evaluation, memory, compliance, instructor approval, and feedback delivery, with Google Workspace, Supabase, and Gemini/GPT integrations coordinated through a governed hyperautomation lifecycle.",
    ],
    technologies: ["n8n", "Google Workspace", "Gemini/GPT", "Supabase", "HITL", "HAL"],
    highlights: [
      "Eight workflow exports preserve the grading automation pipeline as source-controlled infrastructure.",
      "Human-in-the-loop checkpoints keep instructor approval between AI evaluation and student feedback delivery.",
      "Security model includes credential isolation, anonymization, TLS-based integrations, and auditable grading decisions.",
    ],
    modules: [
      {
        name: "AI Grading Automation Workflows",
        role: "Automation",
        repositoryUrl:
          "https://github.com/LePeanutButter/ai-grading-automation-workflows-backup",
        localPath: "projects/academic/ai-grading-automation-workflows-backup",
        summary:
          "n8n workflow backup for rubric generation, assignment detection, document preprocessing, LLM evaluation, instructor approval, feedback delivery, and grade logging.",
        technologies: ["n8n", "Google Drive", "Google Sheets", "Email", "Supabase", "LLMs"],
        evidence: [
          "workflows contains eight exported JSON automation definitions for the grading system.",
          "README documents rubric, evaluation, document, memory, compliance, feedback, and approval agents.",
          "docs and credentials folders support workflow import, credential boundaries, and operational setup.",
        ],
      },
    ],
    sourceSignals: [
      "Eight workflow JSON exports under ai-grading-automation-workflows-backup/workflows.",
      "README describes HITL approval, Supabase memory, Google Workspace integrations, and HAL governance.",
      "Credential and docs folders indicate import-oriented operational packaging rather than a local-only demo.",
    ],
    featured: true,
  },
  {
    slug: "elysium",
    title: ProjectRegistry.elysium.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "Explore Reservation Platform",
    dateRange: "February 2025 - April 2025",
    thumbnail: ProjectRegistry.elysium.thumbnail,
    summary:
      "A full-stack university laboratory reservation platform with Spring Boot APIs, MongoDB Atlas, React dashboards, D3 analytics, JWT security, and Azure deployment.",
    narrative: [
      "Elysium is split into a Spring Boot backend and React frontend, but the product is one reservation workflow: users authenticate, land in role-specific areas, manage reservations, and administrators control users, labs, resources, and analytics.",
      "The backend source tree exposes controllers, services, repositories, DTOs, models, config, JWT utilities, and tests, while the frontend App.js shows role-based route groups for administrators and professors.",
    ],
    technologies: ["Spring Boot", "React", "MongoDB Atlas", "JWT", "D3.js", "Azure", "JUnit"],
    highlights: [
      "Backend implements layered architecture, JWT authentication, BCrypt, SSL/CORS, Swagger, JaCoCo, and SonarQube.",
      "Frontend uses React Router, decoded JWT user state, admin/professor route groups, API modules, dashboard charts, and reservation modals.",
      "CI/CD uses GitHub Actions and Azure App Service / Azure Static Web Apps deployments.",
    ],
    modules: [
      {
        name: "Elysium Back",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/elysium-back",
        localPath: "projects/academic/elysium/elysium-back",
        summary:
          "Spring Boot API for laboratories, reservations, users, authorization, audit activity, and role-aware service logic.",
        technologies: ["Java 17", "Spring Boot", "Spring Security", "MongoDB", "Maven"],
        evidence: [
          "Source contains controller, service, repository, DTO, model, config, exception, and JWT utility packages.",
          "Tests mirror controller, service, repository, DTO, and model layers.",
        ],
      },
      {
        name: "Elysium Front React",
        role: "Frontend",
        repositoryUrl: "https://github.com/AnderssonProgramming/Elysium-Front-React",
        localPath: "projects/academic/elysium/Elysium-Front-React",
        summary:
          "React interface for login, professor reservations, admin dashboards, room management, user management, D3 charts, and modal workflows.",
        technologies: ["React", "React Router", "Axios", "D3.js", "Framer Motion"],
        evidence: [
          "App.js defines admin and professor route groups, JWT decoding, and role-based navigation.",
          "Source tree includes API modules for auth, reservas, salones, usuarios, and admin chart components.",
        ],
      },
    ],
    sourceSignals: [
      "Role-based route config and JWT decoding in Elysium-Front-React/src/App.js.",
      "Layered backend packages and tests in elysium-back/src/main/java and src/test/java.",
    ],
    featured: true,
  },
  {
    slug: "ezflix-relational-db",
    title: ProjectRegistry.ezflix.name,
    category: "academic",
    kind: "repository",
    actionLabel: "Inspect Database Design",
    dateRange: "February 2024 - May 2024",
    thumbnail: ProjectRegistry.ezflix.thumbnail,
    summary:
      "An Oracle SQL database system for a streaming-style movie and series distribution platform, with normalized schemas, CRUD components, triggers, indexes, views, security roles, and validation tests.",
    narrative: [
      "EZFlix models the data backbone of a commercial digital distribution platform. It covers users, accounts, roles, libraries, movies, series, episodes, distributors, content rights, purchases, rentals, payment methods, operations, revenue, and audit behavior.",
      "The local source is organized as a database engineering project rather than an application: persistence scripts, declarative constraints, automation triggers, views, indexes, role security, and positive/negative test scripts live in separate folders to support repeatable Oracle SQL validation.",
    ],
    technologies: ["Oracle SQL", "PL/SQL", "Triggers", "Views", "Indexes", "RBAC", "Astah"],
    highlights: [
      "Modular folders separate schema structure, CRUD components, constraints, automation, indexes, views, security, and tests.",
      "Trigger and view scripts automate revenue tracking, content access, and reporting-oriented queries.",
      "Security scripts define actors, permissions, and access-control tests for administrative database behavior.",
    ],
    modules: [
      {
        name: "EZFlix Relational Database",
        role: "Database",
        repositoryUrl: "https://github.com/LePeanutButter/ezflix-relational-db",
        localPath: "projects/academic/ezflix-relational-db",
        summary:
          "Oracle SQL project for streaming-platform persistence, declarative integrity, automation triggers, reporting views, access control, and database tests.",
        technologies: ["Oracle SQL", "PL/SQL", "SQL Developer", "Astah"],
        evidence: [
          "components/Persistencia contains CRUDE, CRUDI, and XCRUD scripts for database component behavior.",
          "constraints-and-automation contains trigger and tuple validation scripts plus OK/NotOK tests.",
          "security contains actor, permission, grant/revoke, and SecurityOK scripts for role validation.",
        ],
      },
    ],
    sourceSignals: [
      "Folder structure separates components, constraints-and-automation, indexes-and-views, security, structure-and-declarative-constraints, and tests.",
      "README documents purchases, rentals, user libraries, role-based access, financial operations, and legal content management.",
      "Astah and SQL artifacts indicate a full academic database-design lifecycle.",
    ],
  },
  {
    slug: "sustainable-water-awareness",
    title: ProjectRegistry.sustainableWaterAwareness.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "View Sustainability Initiative",
    dateRange: "January 2024 - May 2024",
    thumbnail: ProjectRegistry.sustainableWaterAwareness.thumbnail,
    summary:
      "An interdisciplinary sustainability and leadership initiative focused on promoting responsible water consumption, environmental awareness, and community engagement through educational activities, outreach campaigns, and impact evaluation aligned with UN Sustainable Development Goal 6 (Clean Water and Sanitation).",
    narrative: [
      "This initiative was developed within Escuela Colombiana de Ingeniería Julio Garavito as part of a sustainability-focused academic project addressing water conservation and environmental awareness challenges within the university community.",
      "The project combined community engagement, educational outreach, social media communication, survey-based research, and interactive learning experiences to encourage responsible water consumption and increase awareness of climate-related risks.",
      "Through collaborative planning, event coordination, stakeholder interaction, and impact evaluation, the initiative applied systems thinking and sustainability principles to design measurable awareness strategies aligned with SMART objectives and SDG 6 targets.",
    ],
    technologies: [
      "Sustainability Planning",
      "SDG 6",
      "SMART Methodology",
      "Community Engagement",
      "Survey Analysis",
      "Environmental Communication",
      "Leadership",
    ],
    highlights: [
      "Designed and executed a university-wide awareness campaign focused on water conservation and environmental responsibility.",
      "Co-organized interactive educational activities, sustainability games, and engagement challenges for students.",
      "Leveraged social media outreach and digital communication strategies to expand campaign reach and participation.",
      "Analyzed survey data to assess perceptions of water scarcity, sustainability, and climate-related risks.",
      "Defined outreach objectives, participation metrics, and impact indicators using SMART methodology.",
    ],
    modules: [],
    sourceSignals: [
      "Project report documents SDG 6 analysis, SMART objectives, survey evaluation, outreach strategies, and campaign outcomes.",
      "Presentation materials showcase awareness activities, engagement strategies, participation metrics, and sustainability initiatives.",
      "Campaign activities included interactive educational stands, social media outreach, and community engagement efforts.",
      "Survey analysis provided evidence-based insights into student perceptions regarding water conservation and climate risks.",
    ],
    featured: false,
  },
  {
    slug: "aquasense",
    title: ProjectRegistry.aquasense.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "View Digital Transformation",
    dateRange: "August 2025 - December 2025",
    thumbnail: ProjectRegistry.aquasense.thumbnail,
    summary:
      "A digital transformation project designed for regional water systems, employing systemic analysis, causal loop modeling, and an n8n-driven TO-BE architecture simulating SCADA, ERP, and CRM integrations on Azure.",
    narrative: [
      "AquaSense is a digital transformation initiative developed for the PRI2IS course at Escuela Colombiana de Ingeniería Julio Garavito. It aims to boost operational efficiency and sustainability in low-digitalization regional water systems through systems thinking methodologies.",
      "The proposed TO-BE intelligent operational architecture integrates IoT concepts and AI anomaly detection using Gemini. The conceptual solution leverages n8n workflows for low-code automation, Supabase for centralized storage, and Azure for cloud deployment.",
    ],
    technologies: [
      "Process Automation",
      "Systems Engineering",
      "Cloud Deployment",
      "Data Integration",
      "Operational Analytics",
      "Sustainable Infrastructure"
    ],
    highlights: [
      "Systemic analysis and causal loop modeling.",
      "Digital transformation strategy for water utilities.",
      "Design of automated workflows and monitoring systems.",
      "Data integration architecture simulating SCADA, ERP, CRM, and GIS.",
      "KPI monitoring, telemetry, governance, and risk management.",
      "AI-assisted detection of leaks, anomalies, and operational inefficiencies."
    ],
    modules: [],
    sourceSignals: [
      "Design of TO-BE intelligent operational architecture.",
      "PDD, SDD, and Systemic Analysis artifacts."
    ],
    featured: true,
  },
  {
    slug: "poob-vs-zombies",
    title: ProjectRegistry.poob.name,
    category: "academic",
    kind: "repository",
    actionLabel: "Inspect Game Architecture",
    dateRange: "November 2024 - December 2024",
    thumbnail: ProjectRegistry.poob.thumbnail,
    summary:
      "A Java object-oriented game inspired by Plants vs. Zombies, with versus, survival, and autonomous trials modes implemented through domain/presentation separation, custom assets, persistence, and JUnit tests.",
    narrative: [
      "POOB vs. Zombies was built as an Object-Oriented Programming course project. The local source shows a classic Java desktop-game architecture: domain classes own game rules and entities, presentation classes render GUI behavior, resources hold image/audio assets, and test classes validate domain behavior.",
      "The game extends the original inspiration with three modes: PvP-style versus play, survival waves, and self-playing machine modes with strategic/original behavior for plants and zombies.",
    ],
    technologies: ["Java", "OOP", "MVC", "Swing", "JUnit", "Astah"],
    highlights: [
      "Domain layer includes plants, zombies, projectiles, hitboxes, lawns, levels, day/night environments, and machine strategies.",
      "Presentation layer includes GUI classes for modes, menus, progress bars, entity rendering, sound, and loading flows.",
      "JUnit test suite covers core entities and game modes including PvP, PvM, MvM, plants, zombies, and environments.",
    ],
    modules: [
      {
        name: "POOB vs. Zombies Java Game",
        role: "Desktop Game",
        repositoryUrl: "https://github.com/LePeanutButter/poob-vs-zombies",
        localPath: "projects/academic/poob-vs-zombies",
        summary:
          "Java/Swing game implementation with OOP domain modeling, GUI presentation classes, image/audio resources, compiled output, Astah diagrams, and JUnit tests.",
        technologies: ["Java", "Swing", "JUnit 5", "Astah"],
        evidence: [
          "src/domain contains entity and mode classes such as POOBVsZombies, PvP, PvM, MvM, MachinePlants, MachineZombies, Plant, Zombie, and Projectile.",
          "src/presentation contains GUI classes for menu, levels, modes, progress bars, entity views, and sound.",
          "src/test contains JUnit tests for entities, modes, and environment classes.",
        ],
      },
    ],
    sourceSignals: [
      "README documents Versus, Survival, and Trials modes plus domain, presentation, resources, and tests.",
      "src/domain includes game rules, entities, machine behavior, and persistence-oriented classes.",
      "src/resources includes menu, level, plant, zombie, projectile, sound effect, and soundtrack assets.",
    ],
  },
  {
    slug: "power-garden",
    title: ProjectRegistry.arsw.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "Inspect Cloud Game Architecture",
    dateRange: "August 2025 - December 2025",
    thumbnail: ProjectRegistry.arsw.thumbnail,
    summary:
      "A browser-first multiplayer game platform combining Unity WebGL gameplay, SvelteKit orchestration, ASP.NET Core APIs, MongoDB persistence, Docker, Terraform, and Azure infrastructure.",
    narrative: [
      "Power Garden is a cloud game platform split into four repos: Unity WebGL game, SvelteKit web shell, ASP.NET Core backend, and Terraform infrastructure.",
      "The local source confirms the game client is embedded through the web host, the backend is a C# API service, and the infrastructure repo defines Azure modules for container registries, compute, load balancing, networking, and registry resources.",
    ],
    technologies: ["Unity WebGL", "SvelteKit", "ASP.NET Core", "MongoDB", "Docker", "Terraform", "Azure"],
    highlights: [
      "Browser-based Unity WebGL delivery avoids local installation and targets constrained devices.",
      "SvelteKit client owns the product shell, game launch, auth/lobby flow, and analytics-oriented web UX.",
      "Terraform infrastructure separates Azure app, compute, load balancer, network, and registry modules.",
    ],
    modules: [
      {
        name: "Anquilosaurios Web Client",
        role: "Frontend",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-web-client",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-web-client",
        summary:
          "SvelteKit shell for the game platform, including the root route that renders PlayNow and hosts the game experience.",
        technologies: ["SvelteKit", "TypeScript", "Vite", "Docker"],
        evidence: [
          "+page.svelte imports and renders PlayNow as the landing/game embed entry.",
          "Repository includes src routes/components, package.json, Vite config, Dockerfile, and GitHub workflows.",
        ],
      },
      {
        name: "Anquilosaurios Backend Core",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-backend-core",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-backend-core",
        summary:
          "ASP.NET Core backend for REST APIs, player/session data, game platform orchestration, and MongoDB persistence.",
        technologies: ["C#", "ASP.NET Core", "MongoDB", "Docker", "JWT"],
        evidence: [
          "Workspace contains C# controller/program source, project files, Dockerfile, and workflow configuration.",
          "Backend repo supports the web shell and WebGL client through service boundaries.",
        ],
      },
      {
        name: "Anquilosaurios Game WebGL",
        role: "Game Client",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-game-webgl",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-game-webgl",
        summary:
          "Unity project packaged for WebGL gameplay and browser-based delivery.",
        technologies: ["Unity", "WebGL", "C#", "JavaScript", "Docker"],
        evidence: [
          "Repository includes Assets/Scripts, Packages, ProjectSettings, Dockerfile, and Unity test assets.",
          "Designed for web-host communication and no-install gameplay.",
        ],
      },
      {
        name: "Anquilosaurios Infrastructure",
        role: "Infrastructure",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosarios-infrastructure",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosarios-infrastructure",
        summary:
          "Terraform Azure infrastructure for containerized deployment and security-scanned cloud reproducibility.",
        technologies: ["Terraform", "Azure", "Terrascan", "GitHub Actions"],
        evidence: [
          "main.tf plus modules for app service, compute, load balancer, network, and registry resources.",
          "README and workflows describe CI/CD and Terrascan compliance checks.",
        ],
      },
    ],
    sourceSignals: [
      "SvelteKit root route renders PlayNow in anquilosaurios-web-client/src/routes/+page.svelte.",
      "Terraform modules in anquilosarios-infrastructure/modules.",
      "Unity Assets/Scripts and ProjectSettings in anquilosaurios-game-webgl.",
    ],
    featured: true,
  },
  {
    slug: "prometeo",
    title: ProjectRegistry.prometeo.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "View Smart Gym Case Study",
    dateRange: "April 2025 - May 2025",
    thumbnail: ProjectRegistry.prometeo.thumbnail,
    summary:
      "A smart gym platform with Next.js experiences, Spring Boot APIs, PostgreSQL, JWT security, progress dashboards, session booking, routines, reporting, and AI-assisted training flows.",
    narrative: [
      "Prometeo has a frontend and backend split. The frontend source is broad: gym-module pages for reservations, routines, measurements, reports, physical progress, plus health and user-management modules.",
      "The backend is a Spring Boot service that supports authentication, scheduling, reports, user management, and AI-enabled routine behavior through secure API boundaries.",
    ],
    technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Chart.js", "Three.js"],
    highlights: [
      "Frontend service layer includes gym reservations, sessions, schedules, physical progress, reports, routines, goals, exercises, and users.",
      "UI layer includes BMI indicators, body canvases, exercise/routine carousels, measurement forms, and admin/user modules.",
      "Backend uses Java/Spring Boot with PostgreSQL, Spring Security, JWT, Swagger, and OpenAI-oriented integrations.",
    ],
    modules: [
      {
        name: "Olympus",
        role: "Frontend",
        repositoryUrl: "https://github.com/DASarria/Olympus/tree/develop",
        localPath: "projects/academic/prometeo/Olympus",
        summary:
          "Next.js frontend with gym reservations, routines, progress, reports, health module, user management, and reusable gym UI components.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Three.js"],
        evidence: [
          "api/gym-module contains services for exercises, goals, reservations, sessions, progress, reports, routines, schedules, and users.",
          "pages/gym-module contains reservations, routines, physical-progress, measurement, and analysis routes.",
        ],
      },
      {
        name: "Prometeo Back",
        role: "Backend",
        repositoryUrl: "https://github.com/AnderssonProgramming/Prometeo-Back",
        localPath: "projects/academic/prometeo/Prometeo-Back",
        summary:
          "Spring Boot backend for smart gym management, secure auth, reports, scheduling, progress, routines, and API documentation.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Swagger", "OpenAI"],
        evidence: [
          "Maven project with Spring Boot source, assets, tests, and GitHub workflow folder.",
          "README and source tree indicate JWT/BCrypt, reporting, gym scheduling, and AI routine support.",
        ],
      },
    ],
    sourceSignals: [
      "Olympus api/gym-module service files map directly to product capabilities.",
      "Olympus pages/gym-module and components/gym-module show the user-facing gym flows.",
      "Prometeo-Back pom.xml and source tree indicate a Spring Boot API service.",
    ],
    featured: true,
  },
  {
    slug: "talent-map-ai",
    title: ProjectRegistry.talentmap.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "Explore AI Matching System",
    dateRange: "August 2025 - December 2025",
    thumbnail: ProjectRegistry.talentmap.thumbnail,
    summary:
      "Ethical recruitment MVP using Django, DistilBERT, semantic similarity, anonymization, and explainability to match resumes with vacancies beyond keyword filters.",
    narrative: [
      "TalentMap AI combines a Django web/API layer with mapper services, document processing, tests, and an ML module for DistilBERT-based job matching.",
      "The local code includes text extraction, normalizer presets, privacy-aware anonymization, job matching services, model training/loading, and frontend templates/static scripts for upload and scoring flows.",
    ],
    technologies: ["Python", "Django", "Transformers", "DistilBERT", "NLP", "jQuery"],
    highlights: [
      "Privacy-aware mapper services normalize and anonymize candidate text before matching.",
      "ML module includes DistilBERT model, matching dataset, job matching service, and tests.",
      "Web layer includes templates, static scripts, API/frontend views, and document-processing service tests.",
    ],
    modules: [
      {
        name: "TalentMap AI Monorepo",
        role: "Full-stack AI MVP",
        repositoryUrl: "https://github.com/LePeanutButter/talent-map-ai",
        localPath: "projects/academic/talent-map-ai",
        summary:
          "Django and DistilBERT application for semantic resume/job matching with ethical AI controls.",
        technologies: ["Django", "Python", "Transformers", "DistilBERT", "jQuery"],
        evidence: [
          "app/mapper includes privacy-aware anonymizer, normalizer, text extractor, and tests.",
          "ml/distilbert_model includes model, dataset, and job matching service code.",
        ],
      },
    ],
    sourceSignals: [
      "Mapper and service packages under talent-map-ai/app.",
      "DistilBERT model code under talent-map-ai/ml/distilbert_model.",
    ],
    featured: true,
  },
  {
    slug: "qify",
    title: ProjectRegistry.qify.name,
    category: "personal",
    kind: "case-study",
    actionLabel: "Inspect DSL Implementation",
    thumbnail: ProjectRegistry.qify.thumbnail,
    summary:
      "A TypeScript DSL IDE for defining, validating, visualizing, importing, and exporting ISO 25010 quality attribute scenarios.",
    narrative: [
      "Qify is a personal architecture-tooling project. Its main entry initializes a DSL visualizer, export service, and editor manager, then exposes import/export/navigation actions for the HTML UI.",
      "The parser source tokenizes a custom DSL, builds an AST, validates required quality-scenario fields, checks ISO 25010 categories, and converts the AST into structured program objects.",
    ],
    technologies: ["TypeScript", "DSL", "ISO 25010", "SVG", "Vite", "ESLint"],
    highlights: [
      "Custom parser handles system and attribute declarations with artifact, category, source, stimulus, environment, response, and measure fields.",
      "Visualization and export services support SVG/PNG/PDF-style outputs around parsed quality attributes.",
      "Architecture separates constants, domain DSL services, visualization services, hooks, shared utils, and UI helpers.",
    ],
    modules: [
      {
        name: "Qify",
        role: "Personal tool",
        repositoryUrl: "https://github.com/LePeanutButter/qify",
        localPath: "projects/personal/qify",
        summary:
          "TypeScript DSL parser and visualization IDE for ISO 25010 quality attribute requirements.",
        technologies: ["TypeScript", "Vite", "DSL Parser", "SVG", "Export APIs"],
        evidence: [
          "src/main.ts orchestrates DSLVisualizer, ExportService, EditorManager, import/export actions, and example loading.",
          "DSLParser.ts tokenizes, parses, validates, and converts the quality DSL into typed program objects.",
        ],
      },
    ],
    sourceSignals: [
      "Application orchestration in qify/src/main.ts.",
      "DSL parsing and validation in qify/src/core/domain/dsl/services/DSLParser.ts.",
    ],
    featured: true,
  },
];

export const academicProjectCases: ProjectCase[] = projectCases.filter(
  (projectCase) => projectCase.category === "academic",
);

export const personalProjectCases: ProjectCase[] = projectCases.filter(
  (projectCase) => projectCase.category === "personal",
);

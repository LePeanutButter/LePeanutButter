import type { AuxiliaryRepository } from "@/src/types";

export const auxiliaryRepositories: AuxiliaryRepository[] = [
  {
    title: "Digital Transformation And Enterprise Architectures",
    source:
      "https://github.com/LePeanutButter/digital-transformation-and-enterprise-architectures",
    summary:
      "Curated portfolio of Java microframeworks, IoC and socket web frameworks, Dockerized concurrent servers, serverless AWS APIs, secure app architecture, LangChain/RAG notebooks, ML experiments, and enterprise transformation case studies.",
    domains: ["architecture", "cloud-devops", "ai-automation"],
    technologies: [
      "Java",
      "Maven",
      "Docker",
      "AWS",
      "LangChain",
      "Pinecone",
      "Python",
    ],
  },
  {
    title: "Computer Science And Architecture",
    source: "https://github.com/LePeanutButter/computer-science-and-architecture",
    summary:
      "Collection of ARM and MARIE assembly programs, C cross-base arithmetic scripts, PowerShell and Solaris automation, VM installation logs, triangle classification in assembly, and HDL memory/arithmetic-unit design.",
    domains: ["architecture", "os-scripts", "programming"],
    technologies: [
      "ARM Assembly",
      "MARIE Assembly",
      "C",
      "HDL",
      "PowerShell",
      "Solaris shell",
    ],
  },
  {
    title: "Sysadmin Network Architecture",
    source: "https://github.com/LePeanutButter/sysadmin-network-architecture",
    summary:
      "CCNA-aligned networking, system administration, and cloud labs covering Packet Tracer topologies, OSPF, VLANs, DHCP, Wireshark analysis, DNS services, Unix scripts, Azure SQL, PostgreSQL, SQL Server, and a PHP/MariaDB grades app.",
    domains: ["os-scripts", "data", "cloud-devops"],
    technologies: [
      "Bash",
      "Packet Tracer",
      "Wireshark",
      "PostgreSQL",
      "Azure SQL",
      "PHP",
      "MariaDB",
    ],
  },
  {
    title: "InfoSec Practice Labs",
    source: "https://github.com/LePeanutButter/infosec-practice-labs",
    summary:
      "Academic cybersecurity lab repository covering Linux fundamentals, OSINT, Shostack/STRIDE threat modeling, web pentesting, DVWA, WebGoat, OWASP Top 10, Red Team/Blue Team exercises, and defensive hardening.",
    domains: ["cybersecurity", "os-scripts"],
    technologies: [
      "Kali Linux",
      "OWASP",
      "STRIDE",
      "DVWA",
      "WebGoat",
      "Burp Suite",
      "Wireshark",
    ],
  },
  {
    title: "Structured DSA Python",
    source: "https://github.com/LePeanutButter/structured-dsa-python",
    summary:
      "Python algorithms and data structures collection covering binary tree reconstruction, heap-optimized Dijkstra, double linked lists, BFS/DFS graph search, hash-table collision resolution, and recursive algorithms.",
    domains: ["dsa", "programming"],
    technologies: ["Python", "Graphs", "Trees", "Heaps", "Hash tables", "Recursion"],
  },
  {
    title: "Intro To Quantum Computing",
    source: "https://github.com/LePeanutButter/intro-to-quantum-computing",
    summary:
      "Quantum computing foundations repository with a Python complex-number library, unit tests, classical-to-quantum exercises, quantum observables/measurement notebooks, NumPy matrix work, and weekly Jupyter assignments.",
    domains: ["programming", "data"],
    technologies: ["Python", "NumPy", "Jupyter", "Matplotlib", "Complex numbers"],
  },
  {
    title: "EcoStream Predictive Analytics",
    source: "https://github.com/LePeanutButter/ecostream-predictive-analytics",
    summary:
      "EcoTrack/EcoStream MVP combining a Next.js TypeScript chat-style frontend with a FastAPI backend that interprets natural language activity descriptions and estimates carbon footprint results.",
    domains: ["full-stack", "ai-automation", "data"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Pydantic",
      "NLP",
    ],
  },
  {
    title: "Intelligent Meeting Automation Workflows Backup",
    source:
      "https://github.com/LePeanutButter/intelligent-meeting-automation-workflows-backup",
    summary:
      "n8n workflow backup for an intelligent meeting assistant that receives meeting transcriptions, summarizes discussions, extracts action items, assigns responsible parties, estimates deadlines, and emails structured summaries.",
    domains: ["ai-automation"],
    technologies: ["n8n", "Google Gemini", "Google Docs", "Google Drive", "Gmail"],
  },
];

import { notFound } from "next/navigation";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import PageShell from "@/src/components/layout/PageShell";
import ProjectDetailPage from "@/src/components/projects/ProjectDetailPage";
import ProjectSiteTheme from "@/src/components/projects/shared/ProjectSiteTheme";
import { projectCases } from "@/src/data/portfolio";

interface ProjectRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projectCases.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found | Santiago Botero Garcia",
    };
  }

  return {
    title: `${project.title} | Santiago Botero Garcia`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      {slug === "qify" ? <ProjectSiteTheme theme="qify" /> : null}
      <Header />
      <ProjectDetailPage project={project} />
      <Footer />
    </PageShell>
  );
}

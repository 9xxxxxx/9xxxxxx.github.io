import React from "react";
import { projectsData } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import ProjectPageClient from "./client";

// 生成静态路径 (SSG)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// 页面组件 (Server Component)
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectPageClient project={project} />;
}
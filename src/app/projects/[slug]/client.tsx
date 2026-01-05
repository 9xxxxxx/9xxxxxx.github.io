"use client";
import React from "react";
import { Project } from "@/lib/projects-data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home as HomeIcon, ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectPageClient({ project }: { project: Project }) {
  const navItems = [
    {
      name: "返回首页",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden pb-20">
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <div className="h-[40vh] w-full relative flex items-center justify-center bg-slate-950/[0.9] antialiased bg-grid-white/[0.02]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-10 text-center px-4">
           <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> 返回项目列表
           </Link>
           <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
             {project.title}
           </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
        
        {/* Main Content Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-2xl"
        >
            <div className="flex flex-wrap gap-4 mb-8">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
                        <Github className="w-4 h-4" /> GitHub 仓库
                    </a>
                )}
                {project.demoLink && (
                    <a href={project.demoLink} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-cyan-600 transition-colors">
                        <ExternalLink className="w-4 h-4" /> 在线演示
                    </a>
                )}
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-primary">项目概述</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {project.description}
                </p>

                <h3 className="text-xl font-bold mb-4 text-foreground">核心技术栈</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-accent text-accent-foreground text-sm font-medium border border-border">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">核心功能与亮点</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl font-bold mb-4 text-foreground">详细方案</h3>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                </div>
            </div>
        </motion.div>
      </div>
    </main>
  );
}

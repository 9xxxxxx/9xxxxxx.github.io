"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Projects } from "@/components/Projects";
import { SocialSidebar } from "@/components/SocialSidebar";
import { BackToTop } from "@/components/BackToTop";
import { ModeToggle } from "@/components/ThemeToggle";
import { Home as HomeIcon, User, Briefcase, BookOpen } from "lucide-react";

export default function Home() {
  const navItems = [
    {
      name: "首页",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "技能",
      link: "#skills",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "项目",
      link: "#projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "博客",
      link: "/blog",
      icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative bg-background flex flex-col overflow-hidden min-h-screen transition-colors duration-300">
      <div className="w-full">
        <SocialSidebar />
        
        <div className="fixed top-5 right-5 z-[5000]">
            <ModeToggle />
        </div>

        <Hero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <Projects />
        <Footer />
        <BackToTop />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 px-4" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-3xl font-bold text-foreground mb-5">
          准备好让您的数据 <span className="text-primary">创造更大价值了吗？</span>
        </h1>
        <a href="mailto:huangqiannb@gmail.com">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0891b2_0%,#22d3ee_50%,#0891b2_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 dark:bg-slate-900 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-muted-foreground text-sm">
        <p className="md:text-base text-sm md:font-normal font-light">
          版权所有 © 2026 garry-9xxxxxx
        </p>
      </div>
    </footer>
  );
}
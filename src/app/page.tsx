"use client";
import { RightNav } from "@/components/RightNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Grid } from "@/components/Grid";
import { Projects } from "@/components/Projects";
import { SocialSidebar } from "@/components/SocialSidebar";
import { BackToTop } from "@/components/BackToTop";
import { ModeToggle } from "@/components/ThemeToggle";
import { Home as HomeIcon, User, Briefcase, BookOpen, UserCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-background flex flex-col w-full transition-colors duration-300 scroll-smooth">
      <div className="w-full">
        {/* Section 1: Hero */}
        <section id="home" className="snap-section">
            <Hero />
        </section>
        
        {/* Section 2: About */}
        <section id="about" className="snap-section bg-slate-50 dark:bg-slate-900/50">
            <About />
        </section>

        {/* Section 3: Skills */}
        <section id="skills" className="snap-section">
            <Grid />
        </section>

        {/* Section 4: Projects */}
        <section id="projects" className="snap-section">
            <Projects />
        </section>

        {/* Section 5: Footer */}
        <section className="snap-section h-screen">
            <Footer />
        </section>

        <BackToTop />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="w-full h-full flex flex-col px-4 relative" id="contact">
      {/* 中间核心内容：垂直水平居中 */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-3xl font-bold text-foreground mb-10">
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

      {/* 底部版权：固定在底部 20px */}
      <div className="pb-[20px] flex justify-center items-center text-muted-foreground text-sm">
        <p className="md:text-base text-sm font-light">
          版权所有 © 2026 Garry-9xxxxxx
        </p>
      </div>
    </footer>
  );
}
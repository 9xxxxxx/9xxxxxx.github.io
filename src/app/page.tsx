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
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <SocialSidebar />
        
        {/* Theme Toggle positioned absolute on top right for easy access on mobile/desktop if floating nav is hidden, 
            but we can also integrate it into the navbar if we edit that component. 
            For now, let's keep it separate or integrated. 
            Actually, the best place is IN the Floating Navbar. 
            I will inject it via a wrapper or assume FloatingNav is customizable.
            Wait, FloatingNav is strict. I'll place it fixed top-right for now.
        */}
        <div className="fixed top-5 right-5 z-[5000]">
            <ModeToggle />
        </div>

        <Hero />
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
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-3xl font-bold text-neutral-800 dark:text-white mb-5">
          Ready to take your data <span className="text-purple-500">to the next level?</span>
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:contact@example.com">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-neutral-500 dark:text-neutral-400 text-sm">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Data Analyst
        </p>
      </div>
    </footer>
  );
}
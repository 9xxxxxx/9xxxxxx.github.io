"use client";
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6 items-center">
      <Link href="https://github.com" target="_blank" className="p-3 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Github className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Linkedin className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
      </Link>
      <Link href="mailto:example@gmail.com" className="p-3 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-red-500 dark:group-hover:text-red-400" />
      </Link>
      <div className="h-20 w-[1px] bg-gradient-to-b from-neutral-200 dark:from-neutral-700 to-transparent"></div>
    </div>
  );
};

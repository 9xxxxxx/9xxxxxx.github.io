"use client";
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6 items-center">
      <Link href="https://github.com/9xxxxxx/9xxxxxx.github.io" target="_blank" className="p-3 rounded-full bg-card border border-border shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-card border border-border shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
      </Link>
      <Link href="mailto:example@gmail.com" className="p-3 rounded-full bg-card border border-border shadow-sm hover:scale-110 transition-transform duration-200 group">
        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
      </Link>
      <div className="h-20 w-[1px] bg-gradient-to-b from-border to-transparent"></div>
    </div>
  );
};

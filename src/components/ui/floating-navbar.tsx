"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center items-center w-full py-4 z-50", className)}>
      <div className="flex items-center gap-4 px-8 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-border rounded-full shadow-lg">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-full transition-all duration-200"
          >
            <span className="w-4 h-4">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
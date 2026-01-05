"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export const RightNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const [activeSection, setActiveSection] = useState("");

  // 监听滚动以更新当前激活的 Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 当 50% 可见时激活
    );

    // 观察所有 Section
    navItems.forEach((item) => {
      if (item.link.startsWith("#")) {
        const id = item.link.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navItems.map((item, idx) => {
        const isActive = activeSection === item.link.substring(1);
        
        return (
          <Link
            key={`link=${idx}`}
            href={item.link}
            className="relative group flex items-center justify-end gap-3 p-2"
          >
            {/* 文字标签 (悬浮或激活时显示，或者一直显示？用户要求"不要折叠"，建议一直显示更直观) */}
            {/* 为了保持界面整洁，我们设计为：一直显示，但非激活状态稍微半透明 */}
            <span 
                className={cn(
                    "text-sm font-medium transition-all duration-300 pointer-events-none",
                    isActive ? "text-primary opacity-100 translate-x-0" : "text-muted-foreground opacity-70 group-hover:opacity-100 group-hover:translate-x-[-2px]"
                )}
            >
              {item.name}
            </span>

            {/* 图标/指示点容器 */}
            <div className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 backdrop-blur-sm",
                isActive 
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(34,211,238,0.3)] scale-110" 
                    : "bg-card/50 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
            )}>
                {item.icon}
                
                {/* 激活状态下的光晕背景 */}
                {isActive && (
                    <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  // 监听滚动以更新当前激活的 Section
  useEffect(() => {
    // 如果不在首页，不需要滚动观察者（除非子页面也有内部锚点）
    if (pathname !== "/") {
        setActiveSection("");
        return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      if (item.link.startsWith("#")) {
        const id = item.link.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems, pathname]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navItems.map((item, idx) => {
        // 判断逻辑：
        // 1. 如果是页面内锚点，判断 activeSection
        // 2. 如果是独立路径（如 /blog），判断 pathname 是否匹配
        const isAnchor = item.link.startsWith("#");
        const isActive = isAnchor 
            ? activeSection === item.link.substring(1)
            : pathname.startsWith(item.link) && item.link !== "/";
        
        // 特殊处理首页图标的高亮
        const isHomeActive = item.link === "/" && pathname === "/" && activeSection === "home";
        const finalActive = isActive || (item.link === "#home" && activeSection === "home") || isHomeActive;

        return (
          <Link
            key={`link=${idx}`}
            href={item.link}
            className="relative group flex items-center justify-end gap-3 p-2"
          >
            <span 
                className={cn(
                    "text-sm font-medium transition-all duration-300 pointer-events-none",
                    finalActive ? "text-primary opacity-100 translate-x-0" : "text-muted-foreground opacity-70 group-hover:opacity-100 group-hover:translate-x-[-2px]"
                )}
            >
              {item.name}
            </span>

            <div className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 backdrop-blur-sm",
                finalActive 
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(34,211,238,0.3)] scale-110" 
                    : "bg-card/50 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
            )}>
                {item.icon}
                
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

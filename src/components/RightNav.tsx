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

  useEffect(() => {
    // 只有在首页且没有 activeSection 时，默认 activeSection 为 "home"
    if (pathname === "/" && !activeSection) {
        setActiveSection("home");
    }

    if (pathname !== "/") {
        setActiveSection(""); // 在子页面清除滚动状态，依靠 pathname 匹配
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
      { threshold: 0.4 } // 降低阈值，更容易触发
    );

    navItems.forEach((item) => {
      if (item.link.startsWith("#")) {
        const id = item.link.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems, pathname, activeSection]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navItems.map((item, idx) => {
        const isAnchor = item.link.startsWith("#") || item.link.startsWith("/#");
        const pureAnchor = item.link.includes("#") ? item.link.split("#")[1] : "";
        
        // 1. 计算跳转链接：如果在子页面点击锚点，需要跳回主页
        const href = (isAnchor && pathname !== "/") ? `/${item.link.startsWith("/") ? "" : ""}${item.link}` : item.link;
        
        // 2. 核心高亮逻辑
        let finalActive = false;

        if (pathname === "/") {
            // 【主页模式】：优先依靠滚动监听 activeSection
            if (pureAnchor) {
                finalActive = activeSection === pureAnchor;
            }
            // 特殊处理：如果没有检测到 activeSection 且在页面最顶部，高亮第一个（首页）
            if (!activeSection && idx === 0) finalActive = true;
        } else {
            // 【子页模式】：依靠路径前缀匹配
            // 博客匹配：/blog/* 匹配 /blog
            if (item.link === "/blog") {
                finalActive = pathname.startsWith("/blog");
            }
            // 项目匹配：/projects/* 匹配 /#projects 或 /#projects
            else if (item.link.includes("projects")) {
                finalActive = pathname.startsWith("/projects");
            }
            // 首页匹配：子页面下，只有点击"首页"图标才可能（通常子页面不显示 active 状态给 home 除非是回到 home）
            else if (item.name === "首页") {
                finalActive = false; // 在子页面时，首页图标不保持常亮
            }
        }

        return (
          <Link
            key={`link=${idx}`}
            href={href}
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
                
                {finalActive && (
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

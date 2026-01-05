"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
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

  // 1. 解析锚点 ID (处理 #id 和 /#id)
  const anchorIds = useMemo(() => {
    return navItems
      .filter(item => item.link.includes("#"))
      .map(item => item.link.split("#")[1]);
  }, [navItems]);

  // 2. 滚动监听核心
  useEffect(() => {
    // 只有在首页且处于主路径时才启用滚动观察
    if (pathname !== "/") {
      setActiveSection(""); 
      return;
    }

    const observerOptions = {
      root: null, // 默认使用 viewport
      rootMargin: "-20% 0px -60% 0px", // 偏向上方的检测区域，适合 Snap Scroll
      threshold: [0, 0.1, 0.5, 1.0], // 多阈值触发，增加稳定性
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // 延迟执行观察，确保 DOM 已经渲染完毕
    const timeoutId = setTimeout(() => {
      anchorIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname, anchorIds]);

  return (
    <nav className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-6">
      {navItems.map((item, idx) => {
        const isAnchor = item.link.includes("#");
        const pureAnchor = isAnchor ? item.link.split("#")[1] : "";
        
        // 判定高亮状态
        let isActive = false;
        if (pathname === "/") {
          // 首页：根据滚动 ID 或首屏兜底
          isActive = (activeSection === pureAnchor) || (!activeSection && idx === 0 && pureAnchor === "home");
        } else {
          // 子页：根据路径识别
          if (item.link === "/blog") isActive = pathname.startsWith("/blog");
          if (item.link.includes("projects")) isActive = pathname.startsWith("/projects");
        }

        // 跨页链接转换
        const href = (isAnchor && pathname !== "/") ? `/${item.link.replace(/^\//, "")}` : item.link;

        return (
          <Link
            key={`nav-${idx}`}
            href={href}
            className="flex items-center justify-end gap-4 group no-underline"
          >
            <span 
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500",
                isActive 
                  ? "text-primary opacity-100 translate-x-0" 
                  : "text-muted-foreground opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              )}
            >
              {item.name}
            </span>

            <div className={cn(
              "relative flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-500",
              isActive 
                ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-110" 
                : "bg-background/40 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary backdrop-blur-md"
            )}>
              {item.icon}
              
              {isActive && (
                <motion.div
                  layoutId="navActiveIndicator"
                  className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 35 }}
                />
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
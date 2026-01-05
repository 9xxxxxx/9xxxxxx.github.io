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
        const isAnchor = item.link.startsWith("#");
        const href = isAnchor && pathname !== "/" ? `/${item.link}` : item.link;
        
        let finalActive = false;

        if (pathname === "/") {
            // 在首页：根据 activeSection 判断，或者如果没有 Section 且是第一个
            finalActive = isAnchor && activeSection === item.link.substring(1);
        } else {
            // 在子页面：根据 pathname 是否匹配 item.link 判断
            // 注意：排除首页链接，否则首页链接会始终匹配
            if (item.link !== "/" && !item.link.startsWith("#")) {
                finalActive = pathname.startsWith(item.link);
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

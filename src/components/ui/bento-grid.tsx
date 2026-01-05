"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const MouseContext = createContext<{
  mouseX: any;
  mouseY: any;
} | undefined>(undefined);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 物理惯性配置
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <MouseContext.Provider value={{ mouseX: springX, mouseY: springY }}>
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto relative group/grid",
          className
        )}
        onMouseMove={handleMouseMove}
      >
        {/* 
           1. 全局背景光照 (Gap Light)
           负责照亮卡片之间的缝隙。
           它位于 z-0，处于卡片下方。
        */}
        <motion.div
          className="pointer-events-none absolute -inset-px transition duration-500 opacity-0 dark:group-hover/grid:opacity-100 z-0 rounded-xl"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${springX}px ${springY}px,
                rgba(34, 211, 238, 0.25),
                transparent 80%
              )
            `,
          }}
        />

        {children}
      </div>
    </MouseContext.Provider>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const { mouseX, mouseY } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const parent = ref.current.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: rect.left - parentRect.left,
          y: rect.top - parentRect.top,
        });
      }
    }
  }, []);

  const localX = useMotionValue(0);
  const localY = useMotionValue(0);

  useEffect(() => {
    if (mouseX && mouseY) {
        const unsubscribeX = mouseX.on("change", (v: number) => localX.set(v - offset.x));
        const unsubscribeY = mouseY.on("change", (v: number) => localY.set(v - offset.y));
        return () => {
          unsubscribeX();
          unsubscribeY();
        };
    }
  }, [mouseX, mouseY, offset]);

  return (
    <div
      ref={ref}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-500 shadow-sm dark:shadow-none bg-card border-border border flex flex-col relative overflow-hidden z-10 h-full",
        className
      )}
    >
      {/* 
         2. 局部卡片光照 (Card Light)
         z-10: 位于背景之上，但位于内容之下。
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-500 opacity-0 dark:group-hover/grid:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${localX}px ${localY}px,
              rgba(34, 211, 238, 0.35),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Header Image - z-20 */}
      <div className="w-full relative z-20">
        {header}
      </div>

      {/* Text Content - z-30 (Highest priority for readability) */}
      <div className="p-4 flex flex-col space-y-2 group-hover/bento:translate-x-2 transition duration-300 relative z-30 flex-grow">
        {icon}
        <div className="font-sans font-bold text-card-foreground mb-1 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};

function useMousePosition() {
  const context = useContext(MouseContext);
  // Fail safely instead of crashing if context is missing
  if (!context) {
    // console.warn("useMousePosition used outside of MouseContext");
    return { mouseX: null, mouseY: null }; 
  }
  return context;
}
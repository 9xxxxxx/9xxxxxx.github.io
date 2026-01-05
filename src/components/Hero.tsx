"use client";
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

export function Hero() {
  // 使用 Motion Value 驱动动画，而非 React State 或 CSS Keyframes，确保极致丝滑
  const maskPosition = useMotionValue(0);

  useEffect(() => {
    // 创建一个从 0% 到 100% 的循环动画
    const controls = animate(maskPosition, 100, {
      duration: 5,           // 稍微放慢一点，增加优雅感
      repeat: Infinity,
      repeatType: "reverse", // 来回扫描
      ease: "easeInOut",     // 柔和的加减速
    });
    return controls.stop;
  }, []);

  // 动态生成遮罩样式
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${maskPosition}% 50%, black 40%, transparent 100%)`;

  return (
    <div className="h-full min-h-screen w-full flex md:items-center md:justify-center bg-background dark:bg-slate-950/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      {/* 1. 氛围背景光 */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-[80vh] w-[80vw]"
        fill="#0891b2"
        fillOpacity="0.1"
      />

      {/* Sparkles */}
      <div className="w-full absolute inset-0 h-full z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#0891b2"
        />
      </div>

      {/* Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        
        {/* --- 核心特效：光照变色标语 --- */}
        <div className="relative mb-8">
            {/* 底层：暗淡的文字 */}
            <h1 className="text-4xl md:text-7xl font-bold text-center text-slate-300/20 dark:text-slate-700/50 tracking-tight">
              数据驱动，洞见未来。
            </h1>

            {/* 顶层：高亮的文字 */}
            <motion.h1
              className="absolute inset-0 text-4xl md:text-7xl font-bold text-center text-cyan-500 dark:text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] tracking-tight"
              style={{ 
                maskImage,
                WebkitMaskImage: maskImage
              }}
            >
              数据驱动，洞见未来。
            </motion.h1>
        </div>

        <p className="font-normal text-lg md:text-xl text-muted-foreground max-w-2xl text-center mx-auto mb-12 leading-relaxed">
          将复杂的原始数据转化为<span className="text-foreground font-medium">可落地的商业智能</span>。<br/>
          专注于 Python、SQL 及高级数据分析领域。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20">
                查看我的作品
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent transition-colors">
                联系我
            </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      </motion.div>
    </div>
  );
}
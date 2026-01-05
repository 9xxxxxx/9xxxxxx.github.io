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
  // 300px circle: 加大光斑，覆盖更广
  // black 40%, transparent 100%: 增加羽化范围，边缘不再生硬
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${maskPosition}% 50%, black 40%, transparent 100%)`;

  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-background dark:bg-slate-950/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
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
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        
        {/* --- 核心特效：光照变色标语 --- */}
        <div className="relative">
            {/* 底层：暗淡的文字 */}
            <h1 className="text-4xl md:text-7xl font-bold text-center text-slate-300/20 dark:text-slate-700/50">
              数据驱动，洞见未来
            </h1>

            {/* 顶层：高亮的文字 */}
            <motion.h1
              className="absolute inset-0 text-4xl md:text-7xl font-bold text-center text-cyan-500 dark:text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              style={{ 
                maskImage,
                WebkitMaskImage: maskImage // 兼容性保障
              }}
            >
              数据驱动，洞见未来
            </motion.h1>
        </div>

        <p className="mt-8 font-normal text-base text-muted-foreground max-w-lg text-center mx-auto">
          将原始数据转化为可落地的商业智能。
          专注于 Python、SQL 及高级数据分析领域。
        </p>
      </div>
    </div>
  );
}
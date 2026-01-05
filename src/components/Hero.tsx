"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-background dark:bg-slate-950/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      {/* 1. 氛围背景光 (极度柔和) */}
      {/* 仅保留一个顶部中央的柔光，作为环境氛围，不抢主体 */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-[80vh] w-[80vw]"
        fill="#0891b2"
        fillOpacity="0.1" // 极低透明度，仅作氛围
      />

      {/* Sparkles (降低密度，不抢戏) */}
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
            {/* 底层：暗淡的文字 (未被照亮) */}
            <h1 className="text-4xl md:text-7xl font-bold text-center text-slate-300/20 dark:text-slate-700/50">
              数据驱动，洞见未来。
            </h1>

            {/* 顶层：高亮的文字 (被照亮) */}
            {/* 使用 clip-path 或 mask-image 实现光束扫描效果 */}
            <motion.h1
              className="absolute inset-0 text-4xl md:text-7xl font-bold text-center text-cyan-500 dark:text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              initial={{ 
                maskImage: "radial-gradient(200px circle at 0% 50%, black 0%, transparent 100%)"
              }}
              animate={{ 
                maskImage: "radial-gradient(200px circle at 100% 50%, black 0%, transparent 100%)"
              }}
              transition={{
                duration: 4,     // 扫描一次需要4秒
                repeat: Infinity, // 无限循环
                repeatType: "reverse", // 来回扫描
                ease: "easeInOut"
              }}
            >
              数据驱动，洞见未来。
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
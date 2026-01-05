"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-background dark:bg-slate-950/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0891b2"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#22d3ee"
      />
      
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#0891b2"
        />
      </div>

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <TextGenerateEffect
          words="数据驱动，洞见未来。"
          className="text-center text-4xl md:text-7xl font-bold text-slate-700 dark:text-cyan-400"
        />
        <p className="mt-4 font-normal text-base text-muted-foreground max-w-lg text-center mx-auto">
          将原始数据转化为可落地的商业智能。
          专注于 Python、SQL 及高级数据分析领域。
        </p>
      </div>
    </div>
  );
}
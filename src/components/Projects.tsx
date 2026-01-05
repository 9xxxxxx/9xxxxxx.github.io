"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

export function Projects() {
  return (
    <section id="projects" className="h-full min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        精选项目
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((item, idx) => (
          <CardContainer key={idx} className="inter-var w-full">
            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] border-border w-full h-[22rem] rounded-xl border overflow-hidden flex flex-col">
              
              {/* 顶部封面图：高度与技术栈一致 (h-40) */}
              <CardItem translateZ="50" className="w-full">
                <div className="h-40 w-full overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
              </CardItem>

              {/* 底部文字内容：Padding 与技术栈一致 */}
              <div className="p-5 flex flex-col flex-grow">
                <CardItem
                  translateZ="60"
                  className="text-lg font-bold text-card-foreground dark:text-white mb-2"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-muted-foreground text-xs line-clamp-2 mb-4"
                >
                  {item.description}
                </CardItem>
                
                <div className="mt-auto flex justify-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/projects/${item.slug}`}
                    className="relative px-10 py-2 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-primary/20 hover:border-primary text-primary text-xs font-bold transition-all duration-300 group/btn overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      探索详情
                      <span className="text-primary group-hover/btn:translate-x-1 transition-transform">→</span>
                    </span>
                    {/* 悬浮时的背景光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

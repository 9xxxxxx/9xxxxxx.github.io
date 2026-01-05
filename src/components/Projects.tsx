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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((item, idx) => (
          <CardContainer key={idx} className="inter-var w-full h-full">
            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-0 border overflow-hidden">
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-cover opacity-20 group-hover/card:opacity-40 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>

              <div className="relative z-10 p-6 flex flex-col h-full">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-card-foreground dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/projects/${item.slug}`}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-primary transition-colors"
                  >
                    了解更多 →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/projects/${item.slug}`}
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                  >
                    查看详情
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

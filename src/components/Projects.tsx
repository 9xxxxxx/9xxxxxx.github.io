"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        精选项目
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, idx) => (
          <CardContainer key={idx} className="inter-var w-full h-full">
            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
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
                  href={item.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  了解更多 →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                >
                  查看代码
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "客户流失预测",
    description:
      "基于 Python 构建的机器学习模型，预测客户流失率（准确率 92%），助力市场团队制定留存策略。",
    link: "https://github.com",
  },
  {
    title: "实时销售仪表盘",
    description:
      "连接实时 SQL 数据库的交互式 Tableau 仪表盘，可视化展示区域销售业绩与 KPI 指标。",
    link: "https://github.com",
  },
  {
    title: "情感分析引擎",
    description:
      "NLP 处理流水线，分析 5万+ 社交媒体评论以评估品牌舆情，通过 Streamlit 应用进行可视化。",
    link: "https://github.com",
  },
  {
    title: "电商推荐系统",
    description:
      "协同过滤算法分析用户购买历史，推荐相关产品，提升交叉销售收入 15%。",
    link: "https://github.com",
  },
  {
    title: "供应链优化",
    description:
      "线性规划模型优化仓库库存水平，在维持服务水平的同时降低持有成本。",
    link: "https://github.com",
  },
  {
    title: "财务预测工具",
    description:
      "使用 ARIMA 模型进行时间序列预测，基于历史趋势和市场指标预测季度营收。",
    link: "https://github.com",
  },
];

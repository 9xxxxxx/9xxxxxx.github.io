import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Code,
  Database,
  BarChart,
  BrainCircuit,
  Globe,
  PieChart,
} from "lucide-react";

export function Grid() {
  return (
    <section id="skills" className="h-full min-h-screen flex flex-col justify-center relative z-20 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        技术栈与专业技能
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const ImageHeader = ({ src }: { src: string }) => (
  <div className="flex w-full h-40 overflow-hidden relative">
    <div className="absolute inset-0 bg-black/10 z-10" />
    <img
      src={src}
      alt="header"
      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
    />
  </div>
);

const items = [
  {
    title: "Python 数据分析",
    description: "精通 Pandas、polars 和 Scikit-learn 数据处理。",
    header: <ImageHeader src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop" />,
    icon: <Code className="h-4 w-4 text-primary" />,
  },
  {
    title: "SQL 与数据库",
    description: "复杂查询、ETL 流程及数据仓库构建。",
    header: <ImageHeader src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop" />,
    icon: <Database className="h-4 w-4 text-primary" />,
  },
  {
    title: "数据可视化",
    description: "使用 Tableau、PowerBI 和 plotly 讲述数据故事。",
    header: <ImageHeader src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" />,
    icon: <BarChart className="h-4 w-4 text-primary" />,
  },
  {
    title: "机器学习模型",
    description: "预测建模、回归分析及聚类算法。",
    header: <ImageHeader src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1200&auto=format&fit=crop" />,
    icon: <BrainCircuit className="h-4 w-4 text-primary" />,
  },
  {
    title: "网络爬虫",
    description: "使用 Playwright、DrissionPage、 Selenium和 BeautifulSoup 进行自动化数据采集。",
    header: <ImageHeader src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" />,
    icon: <Globe className="h-4 w-4 text-primary" />,
  },
];
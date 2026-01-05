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
    <section id="skills" className="py-20 relative z-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-neutral-800 dark:text-white">
        Tech Stack & Expertise
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <div className="absolute inset-0 bg-black/20 z-10" />
    <img
      src={src}
      alt="header"
      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
    />
  </div>
);

const items = [
  {
    title: "Python Analysis",
    description: "Expert in Pandas, NumPy, and Scikit-learn for data processing.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop" />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SQL & Databases",
    description: "Complex queries, ETL pipelines, and data warehousing.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop" />,
    icon: <Database className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Visualization",
    description: "Creating impactful stories with Tableau, PowerBI, and D3.js.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" />,
    icon: <BarChart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Machine Learning Models",
    description: "Predictive modeling, regression analysis, and clustering algorithms.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1200&auto=format&fit=crop" />,
    icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Scraping",
    description: "Automated data collection using Selenium and BeautifulSoup.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
];
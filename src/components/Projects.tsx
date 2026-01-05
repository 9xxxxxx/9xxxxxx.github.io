"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Featured Projects
      </h2>
      <HoverEffect items={projects} />
    </section>
  );
}

export const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "A machine learning model built with Python to predict customer churn rates with 92% accuracy, helping the marketing team target retention efforts.",
    link: "https://github.com",
  },
  {
    title: "Real-time Sales Dashboard",
    description:
      "An interactive Tableau dashboard connecting to live SQL databases, visualizing regional sales performance and KPI tracking.",
    link: "https://github.com",
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "NLP pipeline processing 50k+ social media comments to gauge brand sentiment, visualized using a custom Streamlit app.",
    link: "https://github.com",
  },
  {
    title: "E-commerce Recommendation System",
    description:
      "Collaborative filtering algorithm analyzing user purchase history to suggest relevant products, increasing cross-sell revenue by 15%.",
    link: "https://github.com",
  },
  {
    title: "Supply Chain Optimization",
    description:
      "Linear programming model to optimize warehouse inventory levels, reducing carrying costs while maintaining service levels.",
    link: "https://github.com",
  },
  {
    title: "Financial Forecasting Tool",
    description:
      "Time-series forecasting using ARIMA models to predict quarterly revenue based on historical trends and market indicators.",
    link: "https://github.com",
  },
];

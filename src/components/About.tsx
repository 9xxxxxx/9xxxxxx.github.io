"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Users } from "lucide-react";

export function About() {
  return (
    <section className="h-full min-h-screen flex items-center justify-center relative bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 左侧：文字叙述 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
              关于我
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              不止于分析，<br/>更致力于<span className="text-primary">价值创造</span>。
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              作为一名充满激情的数据分析师，我不仅仅关注代码和算法，更看重数据背后的业务逻辑。我擅长将复杂的原始数据转化为清晰、可执行的商业洞察。
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              无论是构建预测模型来降低客户流失，还是通过自动化仪表盘提升决策效率，我的目标始终如一：**用数据的力量驱动业务增长**。
            </p>
          </motion.div>

          {/* 右侧：特征卡片矩阵 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground mb-2">深度洞察</h4>
              <p className="text-sm text-muted-foreground">挖掘数据深层模式，发现被忽视的增长机会。</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow sm:translate-y-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground mb-2">效率提升</h4>
              <p className="text-sm text-muted-foreground">自动化繁琐流程，让团队专注于高价值工作。</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground mb-2">商业伙伴</h4>
              <p className="text-sm text-muted-foreground">用通俗易懂的语言与业务团队沟通，弥合技术鸿沟。</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

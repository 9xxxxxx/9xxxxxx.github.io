import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SocialSidebar } from "@/components/SocialSidebar";
import { RightNav } from "@/components/RightNav";
import { ModeToggle } from "@/components/ThemeToggle";
import { Home as HomeIcon, User, Briefcase, BookOpen, UserCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Garry-9xxxxxx",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "首页",
      link: "/", // 统一使用绝对路径，RightNav 会处理锚点
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      name: "关于",
      link: "/#about",
      icon: <UserCircle2 className="h-4 w-4" />,
    },
    {
      name: "技能",
      link: "/#skills",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: "项目",
      link: "/#projects",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "博客",
      link: "/blog",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* 全局固定 UI：位于 template 之外，确保 position: fixed 真正相对于屏幕 */}
          <SocialSidebar />
          <RightNav navItems={navItems} />
          <div className="fixed top-5 right-5 z-[5000]">
            <ModeToggle />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
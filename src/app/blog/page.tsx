import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Home as HomeIcon, Search, Tag, User, Briefcase, BookOpen, UserCircle2 } from "lucide-react";
import { RightNav } from "@/components/RightNav";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ModeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "技术博客 | Garry-9xxxxxx",
  description: "分享数据科学、机器学习与可视化的实战经验。",
};

export default function BlogPage() {
  const allBlogs = getAllPosts();

  const navItems = [
    {
      name: "首页",
      link: "/",
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
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300">
      <SocialSidebar />
      <RightNav navItems={navItems} />
      
      <div className="fixed top-5 right-5 z-[5000]">
          <ModeToggle />
      </div>

      {/* Header Section */}
      <header className="relative py-24 px-6 text-center bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            技术专栏
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            深入浅出，分享数据分析、建模、爬虫与可视化的全栈实战心得。
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="搜索文章内容..." 
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
      </header>

      {/* Blog Feed Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
            >
              {/* Card Header/Image */}
              <div className="h-52 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <img 
                  src={post.image || "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800"} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/80 dark:bg-black/60 text-foreground rounded-full backdrop-blur-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs text-muted-foreground font-medium mb-3">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center text-primary font-bold text-sm">
                  阅读全文 <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Simple Footer for Blog */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm">
          © 2026 Garry-9xxxxxx. 保留所有权利。
        </div>
      </footer>
    </div>
  );
}
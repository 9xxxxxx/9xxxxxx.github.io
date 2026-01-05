import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { RightNav } from "@/components/RightNav";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Home, User, Briefcase, BookOpen, ArrowLeft, UserCircle2 } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "文章未找到" };
  }
  return {
    title: `${post.title} | Garry-9xxxxxx 博客`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const navItems = [
    {
      name: "首页",
      link: "/",
      icon: <Home className="h-4 w-4" />,
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

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 返回博客列表
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div>
              <p className="text-sm font-bold text-foreground">Garry-9xxxxxx</p>
              <p className="text-xs">{formatDate(post.date)} • 5 min read</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-3xl prose-pre:rounded-2xl prose-pre:bg-slate-900 prose-pre:border prose-pre:border-border">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Article Footer */}
        <footer className="mt-20 pt-10 border-t border-border">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">感谢阅读</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              如果你对本文有任何疑问或想深入探讨，欢迎通过邮件或社交媒体与我联系。
            </p>
            <Link 
              href="mailto:huangqiannb@gmail.com"
              className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
            >
              联系作者
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
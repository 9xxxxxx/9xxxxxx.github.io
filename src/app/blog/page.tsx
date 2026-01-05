import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Data Analyst Portfolio",
  description: "Thoughts on data science, python, and analytics.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Skills", link: "/#skills", icon: <User className="h-4 w-4" /> },
    { name: "Projects", link: "/#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Blog", link: "/blog", icon: <BookOpen className="h-4 w-4" /> },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black relative flex flex-col items-center mx-auto sm:px-10 px-5 pt-32 pb-20 transition-colors duration-300">
      <FloatingNav navItems={navItems} />
      
      <div className="max-w-4xl w-full relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-white">
          Latest <span className="text-purple-500">Insights</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/[0.1] hover:border-purple-500/50 transition-colors"
            >
              {post.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                        {post.tags[0] || "Article"}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {post.date}
                    </span>
                </div>
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        {posts.length === 0 && (
            <p className="text-center text-neutral-500 mt-20">No posts found yet. Check back soon!</p>
        )}
      </div>
    </main>
  );
}

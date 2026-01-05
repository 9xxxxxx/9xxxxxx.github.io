import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Data Analyst Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
            <h1 className="text-2xl">Post not found</h1>
        </div>
    );
  }

  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Skills", link: "/#skills", icon: <User className="h-4 w-4" /> },
    { name: "Projects", link: "/#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Blog", link: "/blog", icon: <BookOpen className="h-4 w-4" /> },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black relative flex flex-col items-center mx-auto transition-colors duration-300">
      <FloatingNav navItems={navItems} />
      
      {/* Header Image */}
      {post.image && (
          <div className="w-full h-[40vh] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 max-w-4xl mx-auto right-0">
                  <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                  </Link>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                  <div className="flex items-center text-white/80 text-sm gap-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs">{tag}</span>
                        ))}
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* Content */}
      <article className="max-w-3xl w-full px-5 py-12 prose prose-lg dark:prose-invert prose-purple prose-headings:font-bold prose-headings:text-neutral-800 dark:prose-headings:text-neutral-100 prose-p:text-neutral-600 dark:prose-p:text-neutral-300 prose-code:text-purple-500 dark:prose-code:text-purple-400 prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900 prose-pre:border dark:prose-pre:border-neutral-800">
        {!post.image && (
            // If no image, show title here
            <div className="mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                 <Link href="/blog" className="inline-flex items-center text-neutral-500 hover:text-black dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                  </Link>
                <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">{post.title}</h1>
                <div className="text-neutral-500 text-sm">{post.date}</div>
            </div>
        )}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      {/* Footer simple version for blog */}
      <footer className="w-full py-10 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
          <div className="text-center text-neutral-500 text-sm">
            Copyright © 2024 Data Analyst
          </div>
      </footer>
    </main>
  );
}

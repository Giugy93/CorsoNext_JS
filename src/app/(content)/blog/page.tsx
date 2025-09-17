import Link from "next/link"
import { blogPosts } from "./data"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: " ",
  openGraph: {
    title: "Blog",
    description: "",
  },
};
export default async function BlogPage() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un ritardo di 1 secondo

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">
                Blog
            </h1>
            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <article 
                        key={post.slug}
                        className="p-6 bg-zinc-800 rounded-lg">
                            <h2 className="text-xl font-bold mb-2">
                                <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-zinc-300 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                        <p className="text-zinc-400">
                            {post.excerpt}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    )    
}

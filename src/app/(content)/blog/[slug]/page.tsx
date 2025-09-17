import { notFound } from "next/navigation";
import { blogPosts } from "../data"
import NotFound from "../not-found";
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: {slug: string}
}): Promise<Metadata> {
    const post = blogPosts.find(post => post.slug === params.slug);

    if(!post){
        return {
            title: "Post non trovato",
            description: "Il post che stai cercando non esiste.",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date, // se hai una data di pubblicazione
            authors: ["Autore del Post"], // se hai un autore
            // Puoi aggiungere altre proprietà Open Graph come immagini, tag, ecc.
        },
    };
}

export default async function BlogPost({
    params
}: {
    params: {slug: string}
}){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const post = blogPosts.find(post => post.slug === params.slug)

    if(!post){
        notFound();
    }

    if (params.slug === "error-post") {
        
        throw new Error("Errore intenzionale per testing");
    }

    return (
        <article className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">
                {post.title}
            </h1>
            <p>{post.content}</p>
        </article>
    )
}
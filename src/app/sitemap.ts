import { MetadataRoute } from "next";
import { blogPosts } from "./(content)/blog/data"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://tuo-sito.com"; 

    const staticRoutes = ["", "/about", "/contact", "/blog"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...blogRoutes];
}
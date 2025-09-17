export interface Post {
    slug: string,
    title: string,
    excerpt: string,
    content: string,
};

export const blogPosts: Post[] =[
    {
        slug: "primo-post",
        title: "Il mio primo post",
        excerpt: "Una breve introduzione al mio primo post...", 
        content: "Questo è il contenuto del mio primo post...", 
    },

    {
        slug: "secondo-post",
        title: "Il mio secondo post",
        excerpt: "Qualcosa di interessante sul mio secondo post...",
        content: "Questo è il contenuto del mio secondo post...",
    },

    {
        slug: "terzo-post",
        title: "Il mio terzo post",
        excerpt: "Un altro post interessante da leggere...",
        content: "Questo è il contenuto del mio secondo post...",
    },
];
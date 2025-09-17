import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Il nome del tuo sito",
        short_name: "Site",
        description: "Descrizione della tua sito",
        start_url: "/",
        display: "standalone",
        background_color: "#18181b",
        theme_color: "#18181b",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x.ico",
            },
        ],
    };
}
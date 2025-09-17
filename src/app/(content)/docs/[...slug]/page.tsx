import React from "react";
interface DocPage {
    path: string[],
    title: string,
    content: string,
};

const docs: DocPage[] =[
    {
        path: ["intro"],
        title: "introduzione",
        content: "Benvenuto alla documentazione...",
    },

    {
        path: ["intro", "getting-started"],
        title: "Configurazione Avanzata",
        content: "Questa sezione copre argomenti avanzati...", 
    },

    {
        path: ["Advaced", "configuration"],
        title: "Configurazione Avanzata",
        content: "Configurazione dettagliate...", 
    },

];


export default function DocsPage({params}: {params: {slug: string[]}}){
    const currentPath = params.slug;
    console.log(currentPath);

    const doc = docs.find((doc) => doc.path.join("/") === currentPath.join("/"));

    if(!doc){
        return <div className="text-center text-2xl text-white">Post non trovato</div>
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">
                {doc.title}                
            </h1>
            <p>{doc.content}</p>
            <div className="mt-4 text-sm text-gray-500">
                Path: /{currentPath.join("/")}
            </div>
        </div>
    )
}
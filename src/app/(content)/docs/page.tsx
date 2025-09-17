import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description: " ",
  openGraph: {
    title: "Docs",
    description: "",
  },
};

interface DocsSection {
    path: string;
    title: string;
    subsections?:{path: string, title: string}[];
};

const docsSections: DocsSection[] =[
    {
        path: "intro",
        title: "Introduzione",
        subsections: [
            {path:"getting-started", title:"Getting Started"},
            {path:"installation", title:"Installation"},
        ], 
    },

    {
        path: "advanced",
        title: "Guida Avanzata",
        subsections: [
            {path: "configuration", title:"Configuration"},
            {path: "deployment", title:"Deployment"},
        ], 
    },

];
       
export default function DocPage(){
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Docs</h1>

            <div className="space-y-6">
                {docsSections.map((section) => (
                    <div key={section.path}
                        className="p-6 bg-zinc-800 rounded-lg">
                            <h2 className="text-xl font-bold mb-2">
                                <Link
                                href={`/docs/${section.path}`}
                                className="hover:text-zinc-300 transition-colors">
                                    {section.title}
                                </Link>
                            </h2>
                            
                            {section.subsections && (
                                <ul className="space-y-2 ml-4">
                                    {section.subsections.map((sub) => (
                                        <li key={sub.path}>
                                            <Link
                                                href={`/docs/${section.path}/${sub.path}`}
                                                className=" hover:text-zinc-300 transition-colors">
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>    
                            )}
                    </div>
                ))}
            </div>
        </div>
    );    
}

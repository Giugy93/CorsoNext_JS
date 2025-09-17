import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { aboutSchema } from "@/lib/schema/about";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Scopri di più su di noi e sulla nostra missione.",
  openGraph: {
    title: "Chi Siamo",
    description: "Scopri di più su di noi e sulla nostra missione.",
  },
};

export default function About(){
    return (
        <div className="mt-5">
        <h1 className="text-4xl font-bold mb-6">Chi Siamo</h1>

        <div className="text-lg text-gray-600 space-y-4 mb-8">
          <p>
            Siamo un team di sviluppatori appasionati di tecnologie web moderne.
          </p>
          <p>
            La nostra missione e creare applicazioni web veloci, scalabili e user-friendly.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded">
            <h2 className="text-xl font-bold mb-2">
              I nostri valori
            </h2>
            <ul className="space-y-2">
                <li>Qualità del codice</li>
                <li>Performance first</li>
                <li>User experience</li>
            </ul>
          </div>
          <JsonLd data= {aboutSchema}/>
      </div>
    );
}
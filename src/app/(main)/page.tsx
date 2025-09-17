import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: " ",
  openGraph: {
    title: "Home",
    description: "",
  },
};
export default function Home() {
  return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Next.js Development</h1>

        <div className="text-lg text-gray-600 space-y-4 mb-8">
          <p>
            Costruiamo applicazioni web moderne e performanti usando Next.js 14
          </p>
          <p>
            Specializzati in Server Components e ottimizzazione delle performance
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="p-6 bg-zinc-900 rounded">
            <h2 className="text-xl font-bold mb-2">
              Sviluppo Web
            </h2>
            <p>
              Applicazioni web moderne e responsive
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded">
            <h2 className="text-xl font-bold mb-2">
              Consulenza
            </h2>
            <p>
              Supporto tecnico e consulenza strategica
            </p>
          </div>
        </div>
      </main>
  );
}

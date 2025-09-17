import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-4xl mx-auto p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Post non trovato</h1>
            <p className="text-zinc-400 mb-4">
                Mi dispiace, ma il post che stai cercando non esiste.
            </p>
            <Link 
                href="/blog"
                className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600">
                    Torna al Blog
            </Link>
        </div>
    );
}
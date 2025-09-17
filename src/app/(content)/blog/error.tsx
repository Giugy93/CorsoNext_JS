"use client";
export default function Error({ 
    error, 
    reset 
}: { 
    error: Error & { digest?: string },
    reset: () => void 
}) {
    return ( 
        <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
                Qualcosa è andato storto!
            </h2>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600">
                    Riprova
            </button>
        </div>
    );
}
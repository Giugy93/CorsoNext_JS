export default function Loading() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="h-8 bg-zinc-800 rounded w-48 mb-8 animate-pulse"/>

            <div className="space-y-6">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="p-6 bg-zinc-800 rounded-lg mb-4 animate-pulse">
                        <div className="h-6 bg-zinc-700 rounded w-3/4 mb-4 "/>
                        <div className="h-4 bg-zinc-700 rounded w-full"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
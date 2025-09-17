export default function LoadingPost() {
    return (
        <article className="max-w-4xl mx-auto p-8">
            <div className="h-8 bg-zinc-800 rounded w-3/4 mb-8 animate-pulse"/>
            <div className="space-y-4">
                <div className="h-4 bg-zinc-800 rounded w-full animate-pulse">
                <div className="h-4 bg-zinc-800 rounded w-full animate-pulse"/>
                <div className="h-4 bg-zinc-800 rounded w-2/3 animate-pulse"/>
            </div>
            </div>
        </article>
    );
}
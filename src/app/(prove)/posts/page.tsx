"use client"
import {  useState } from "react";

export default function PostsPage() {
    const [result, setResult] = useState(null);

    async function handleSearch() {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setResult(data);
    
    }
    return (
        <div>
            <button onClick={handleSearch}>Cerca Posts</button>
            {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );

}
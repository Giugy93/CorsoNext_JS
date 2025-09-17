"use client";

import { useEffect, useState } from "react";

export default function ClientUsersPage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) 
        return <div className="max-w-4xl mx-auto p-8">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Utenti (Client Fetch)</h1>
            <div className="grid gap-2">
                {users.map((user) => (
                    <div key={user.id} className="p-4 bg-zinc-800 rounded">
                        <h2 className="font-bold">{user.name}</h2>
                        <p className="text-zinc-400">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
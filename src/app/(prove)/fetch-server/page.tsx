//export const dynamic = "force-dynamic"; //FORZA SSR
//export const revalidate = 60; //FORZA ISR (INCREMENTAL STATIC REGENERATION) per tutta la pagina

export default async function UsersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //ESEMPIO FETCH SERVER SIDE RENDERING (SSR) E ISR (INCREMENTAL STATIC REGENERATION)
    //https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#force-server-side-rendering
    //https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#force-incremental-static-regeneration 

    /*const order = await fetch("https://api.restaurant.typicode.com/orders", { 

        cache: "no-cache", //FORZA SSR

        // next: { revalidate: 60 } //FORZA ISR     singola richiesta

        // next: { tags: ['orders'] } //FORZA ISR     per gruppi di richieste 
        // cache: "no-store" 

    }).then((res) => res.json());*/


    const users = await response.json();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Utenti</h1>
            <div className="grid gap-4">
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
async function getDate () {
    
    const res = await fetch ("https://worldtimeapi.org/api/timezone/Europe/Rome")

    if (!res.ok) {
        throw new Error ("Failed to fetch data");
    }

    return res.json();
}

export default async function ProvaErrorePage() {

    const data = await getDate();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Prova errore</h1>
            <div>
                {data.datetime}
            </div>
        </div>
    );
}
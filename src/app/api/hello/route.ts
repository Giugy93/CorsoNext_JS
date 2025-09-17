export async function GET( request: Request) {
    console.log("Hello from the API route!");
    return Response.json({massage: "Hello, Next.js!"});
}

export async function POST( request: Request) {
    console.log("Hello from the API route!");
    return Response.json({massage: "POST Hello, Next.js!"});
}
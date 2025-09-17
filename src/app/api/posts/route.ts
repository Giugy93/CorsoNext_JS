export async function GET( request: Request) {
    return Response.json([
        {id: "1", title: "First Post", content: "This is the content of the first post."},
        {id: "2", title: "Second Post", content: "This is the content of the second post."},
    ]);
}
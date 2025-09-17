import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { blogMiddleware } from "@/lib/middleware/blog";
import { aboutMiddleware } from "@/lib/middleware/about";


export function middleware(request: NextRequest) {
    console.log(`👋 Richiesta a: ${request.nextUrl.pathname}`);

    const blogResponse = blogMiddleware(request);
    if (blogResponse) return blogResponse;

    const aboutResponse = aboutMiddleware(request);
    if (aboutResponse) return aboutResponse;

    return NextResponse.next();
}

export const config = {
  //matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ["/about/:path*", "/blog/:path*", "/dashboard/:path*"],
};
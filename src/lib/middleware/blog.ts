import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function blogMiddleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/blog")) {
        console.log("🎉 stai vitando il Blog!");

        const response = NextResponse.next();
        response.headers.set("X-Blog-Middleware", "true");
        return response;
    }
    return null;
}
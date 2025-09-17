import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export function aboutMiddleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/about")) {
        console.log("😎 stai vitando About!");
        
        const response = NextResponse.next();
        response.headers.set("X-About-Middleware", "true");
        return response;
    }
    return null;
}
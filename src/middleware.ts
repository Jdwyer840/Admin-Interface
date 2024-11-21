import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only apply middleware for paths that start with /admin
    if (pathname.startsWith('/admin') && (pathname !== '/admin/login' && pathname !== '/admin/login/')) {
        // Retrieve the token from the request
        console.log("MIDDLEWARE")
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

        // If no token or role is not admin, redirect to login
        if (!token || token.role !== 'admin') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

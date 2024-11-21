import NextAuth, {AdminSession, DefaultSession, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios, {isAxiosError} from "axios";
import {authorize} from '@/lib/djangoAuth';
import {getNewBearerToken} from "@/lib/api/Requests";

// type User = Session['user'];

declare module "next-auth" {
    interface Session {
        user: {
            accessToken?: string;
        } & DefaultSession['user'];
    }

    interface AdminSession extends Session {
        user: {
            id: string; // Add id only for admin sessions
            accessToken: string;
        } & DefaultSession['user'];
    }

    interface User {
        accessToken?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
}

const handler  = NextAuth({
    debug: process.env.NODE_ENV !== "production",
    providers: [
        CredentialsProvider({
            id: "adminAuth",
            name: "Admin Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {

                if (!credentials) {
                    console.error("No credentials provided.");
                    return null;
                }

                const apiUrl = process.env.DJANGO_API_URL || "";
                console.log('apiUrl');
                console.log(apiUrl);

                try {
                    // Define the type for the response object
                    console.log("YO1")
                    const response = await getNewBearerToken(apiUrl, credentials.username, credentials.password);
                    console.log("YO2")

                    const { access } = response;
                    console.log("YO3")
                    console.log(access)
                    if (access) {
                        return {
                            name: "Admin",
                            id: access,
                            accessToken: access,
                        } as AdminSession["user"];
                    }

                    return null;
                } catch (error) {
                    console.error("Error authenticating with Django:", error);
                    return null;
                }

                // Replace inline logic with the reusable authorize function
                // const user = await authorize(credentials);
                // console.log('WHAT 2')
                // if (!user) {
                //     console.error("Admin login failed.");
                //     return null;
                // }
                //
                // // Ensure the returned object matches the AdminSession type
                // return {
                //     id: user.name || "admin",
                //     ...user, // Spread fields from the User type
                // } as AdminSession["user"];
            },
        }),
    ],
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Prevent looping by checking if the URL is already processed
            console.log("redirect method")
            console.log("baseUrl " + baseUrl)

            if (url.startsWith(baseUrl) || url.startsWith("/")) {
                return url;
            }
            return baseUrl;
        },
        async jwt({ token, user }) {
            console.log('jwt method')
            if (user && 'id' in user) {
                token.sub = user.id;
                token.accessToken = user.accessToken;
                token.role = 'admin'
            }
            return token;
        },
        async session({ session, token }) {
            // Populate session for admin sessions
            console.log("YOOOOOOOOOOO")
            if (token.sub && token.accessToken) {
                session.user = {
                    ...session.user,
                    id: token.sub as string,
                    accessToken: token.accessToken as string,
                } as AdminSession['user'];
            }
            return session;
        },
    },
});


// function generateUpdatedApiToken(currentToken?: string) {
//     let catalogSecret = getCatalogApiSecret();
//
//     let catalogToken = currentToken ?? "";
//     let catalogPayload = jsonwebtoken.verify(catalogToken, catalogSecret) as jsonwebtoken.JwtPayload;
//
//     let now = new Date().getTime();
//     let oneHourLater = now + 3600 * 1000;
//
//     catalogPayload.iat = now;
//     catalogPayload.exp = oneHourLater;
//
//     return jsonwebtoken.sign(catalogPayload, catalogSecret, {});
// }
//
// export async function requireAuth() {
//     const session = await auth();
//     if(!session) {
//         redirect("/admin/login");
//     }
//
//     return session;
// }
export { handler as GET, handler as POST };

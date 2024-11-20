import axios from "axios";
import {RequestInternal} from "next-auth";

interface Credentials {
    username: string;
    password: string;
}

interface DjangoTokenResponse {
    access: string;
    refresh?: string; // Optional: Only if Django includes a refresh token
}

interface User {
    name: string; // Optional: Modify as needed to match your user structure
    accessToken: string;
}
// TODO IDK if i like this in here.
export async function authorize(
    credentials: Credentials | undefined
): Promise<User | null> {
    if (!credentials) {
        console.error("No credentials provided.");
        return null;
    }

    const apiUrl = process.env.DJANGO_API_URL || "";

    try {
        // Define the type for the response object
        const response = await axios.post<DjangoTokenResponse>(`${apiUrl}/api/token/`, {
            username: credentials.username,
            password: credentials.password,
        });

        const { access } = response.data;

        if (access) {
            return {
                name: "Admin",
                accessToken: access,
            };
        }

        return null;
    } catch (error) {
        console.error("Error authenticating with Django:", error);
        return null;
    }
}

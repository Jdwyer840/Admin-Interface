"use server"

import {signIn} from "next-auth/react";

export async function adminLogin(formData: FormData) {
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });
    console.log('WHAT')
    // Pass the object as the third argument to signIn
    await signIn("adminLogin", {}, data);
    // await signIn("credentials", {},  formData);
}

// TODO maybe just get rid of this class.

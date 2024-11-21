// import {adminLogin} from "../../../app/actions/adminLogin";
"use client"

import {signIn} from "next-auth/react";

export default function AdminLoginPage() {

    const adminLoginAction = async (formData: FormData) => {
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        console.log('WHAT')
        console.log(data)
        console.log('data ' + data)
        console.log('formData ' + formData)
        // Pass the object as the third argument to signIn
        await signIn("adminAuth", {callbackUrl: "/admin", redirect: true, ...data});
        // await signIn("adminLogin", {}, formData);
    }
    console.log('hi')

    return (
        <div className="flex items-center justify-center min-h-screen from-gray-900 to-gray-800 text-gray-300">
            <div className="w-full max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 space-y-6 mb-10">
                <h1 className="text-2xl font-bold text-center text-white">Log in Buddy!</h1>
                <form action={adminLoginAction} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

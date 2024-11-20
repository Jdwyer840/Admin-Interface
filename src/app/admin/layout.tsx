// app/layout.tsx
"use client"
import './globals.css';
import Sidebar from '../../components/Sidebar';
import {ReactNode} from "react";
import {usePathname} from "next/navigation";

export default function RootLayout({children}: { children: ReactNode; }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login";

    return (
        <html lang="en">
            <body className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
                <div className={`flex min-h-screen ${isLoginPage ? "justify-center items-center" : ""}`}>
                    {!isLoginPage && <Sidebar />}
                    <main className={`${isLoginPage ? "w-full max-w-md mx-auto" : "flex-1 p-6"}`}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

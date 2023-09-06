"use client";
import React from "react";
import {useUser} from "@auth0/nextjs-auth0/client";

export default function UserLoggedBoundary({ children }) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user) {
        return children;
    }

    return (
        <div className="h-full flex items-center justify-center">
            <a
                href="/api/auth/login"
                className="button connexion h-10 w-40 rounded-lg px-4 py-2 text-center"
            >
                Login
            </a>
        </div>
    );
}
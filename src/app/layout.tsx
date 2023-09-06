import {UserProvider} from "@auth0/nextjs-auth0/client";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/svg+xml" href="/zenika.svg"/>
            <title>TheZaurus</title>
        </head>
        <body>
        <UserProvider>
            {children}
        </UserProvider>
        </body>
        </html>
    )
}
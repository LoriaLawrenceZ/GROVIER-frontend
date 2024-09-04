import Link from "next/link";
import React from "react"

export default function AuthenticationLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <React.Fragment>
            
            <header>
                <nav>
                <Link href="/">HOME</Link>
                <Link href="/authentication">LOGIN</Link>
                </nav>
            </header>
            <section>
                <h1>Authentication Page</h1>

                <hr/>

                {/* Include shared UI here e.g. a header or sidebar */}
                <p>conteudo do authentication</p>

                <hr/>

                <h2>Esse é o layout.tsx</h2>
                {children}
            </section>
        </React.Fragment>
    );
}
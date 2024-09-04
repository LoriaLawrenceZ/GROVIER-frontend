export default function AccountLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1>Account Page</h1>

            <hr/>

            {/* Include shared UI here e.g. a header or sidebar */}
            <p>conteudo do account</p>

            <hr/>

            <h2>Esse é o layout.tsx</h2>
            {children}
        </section>
    );
}
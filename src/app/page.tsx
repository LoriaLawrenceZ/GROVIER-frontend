import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/authentication">LOGIN</Link>
        </nav>
      </header>

      <main className={``}>
        <article>
          <section>Seção 1</section>
          <section>Seção 2</section>
        </article>
      </main>
    </React.Fragment>
  );
}

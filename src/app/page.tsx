import React from "react";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav>
          <Link href="/">GROVIER</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles["section-criar-entrar"]}>
            <div className={styles["criar-entrar-tab-container"]}>
              <div className={`${styles["criar-tab"]} ${styles["active"]}`}>Criar</div>
              <div className={styles["entrar-tab"]}>Entrar</div>
            </div>
            Section Criar / Entrar
          </section>

          <section className={styles["section-como-jogar"]}>Section Carousel Como Jogar</section>
        </article>
      </main>
    </React.Fragment>
  );
}

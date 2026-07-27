import Link from 'next/link';
import type { ReactNode } from 'react';

import styles from './LegalPage.module.css';

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  lastUpdated,
  children
}: LegalPageProps) {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.backLink}>
            ← Voltar para a página inicial
          </Link>

          <header className={styles.header}>
            <h1>{title}</h1>

            <p>
              Última atualização: <strong>{lastUpdated}</strong>
            </p>
          </header>

          <article className={styles.content}>
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
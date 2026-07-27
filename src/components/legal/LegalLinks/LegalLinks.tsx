import Link from 'next/link';

import styles from './LegalLinks.module.css';

export default function LegalLinks() {
  return (
    <nav
      className={styles.legalLinks}
      aria-label="Links legais"
    >
      <Link href="/politica-de-privacidade">
        Política de Privacidade
      </Link>

      <Link href="/termos-de-uso">
        Termos de Uso
      </Link>

      <Link href="/politica-de-cookies">
        Política de Cookies
      </Link>

      <Link href="/aviso-legal">
        Aviso Legal
      </Link>
    </nav>
  );
}
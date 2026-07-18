import type { ReactNode } from 'react';

import type { Translation } from '@/types/translations';

import styles from './Process.module.css';

type ProcessProps = {
  translation: Translation['process'];
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const WHATSAPP_URL =
  'https://wa.me/5522997913238?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20site%20para%20meu%20negócio.';

export default function Process({
  translation
}: ProcessProps) {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: translation.stepOneTitle,
      description: translation.stepOneDescription,
      icon: <ChatIcon />
    },
    {
      number: '02',
      title: translation.stepTwoTitle,
      description: translation.stepTwoDescription,
      icon: <DesignIcon />
    },
    {
      number: '03',
      title: translation.stepThreeTitle,
      description: translation.stepThreeDescription,
      icon: <CodeIcon />
    },
    {
      number: '04',
      title: translation.stepFourTitle,
      description: translation.stepFourDescription,
      icon: <LaunchIcon />
    }
  ];

  return (
    <section id="processo" className={styles.process}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className="container">
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span />
            {translation.eyebrow}
          </div>

          <h2 className={styles.title}>
            {translation.title}{' '}
            <span>{translation.titleHighlight}</span>
          </h2>

          <p className={styles.description}>
            {translation.description}
          </p>
        </header>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={styles.step}
            >
              <div className={styles.stepTop}>
                <div className={styles.icon}>
                  {step.icon}
                </div>

                <span className={styles.number}>
                  {step.number}
                </span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <span />
                </div>
              )}
            </article>
          ))}
        </div>

        <div className={styles.finalCard}>
          <div className={styles.finalVisual}>
            <div className={styles.finalIcon}>
              <UsersIcon />
            </div>

            <div className={styles.status}>
              <span />
              BLZ Site
            </div>
          </div>

          <div className={styles.finalContent}>
            <h3>{translation.finalTitle}</h3>
            <p>{translation.finalDescription}</p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.finalButton}
          >
            <WhatsAppIcon />
            {translation.finalButton}
          </a>
        </div>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 18.5 3.5 21l3.8-1.2A9 9 0 1 0 5 18.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 10h8M8 14h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m4 20 4.5-1L19 8.5 15.5 5 5 15.5 4 20Zm9.5-13 3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 4 15 1l4 4-3 3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5 9 15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 6H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 3.2a4 4 0 0 1 0 7.6M21 20v-2a4 4 0 0 0-3-3.87"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
import Image from 'next/image';

import type { Translation } from '@/types/translations';

import styles from './About.module.css';

type AboutProps = {
  translation: Translation['about'];
};

type ValueItem = {
  title: string;
  description: string;
  icon: 'chat' | 'design' | 'results';
};

type StatItem = {
  value: string;
  label: string;
};

export default function About({
  translation
}: AboutProps) {
  const values: ValueItem[] = [
    {
      title: translation.valueOneTitle,
      description: translation.valueOneDescription,
      icon: 'chat'
    },
    {
      title: translation.valueTwoTitle,
      description: translation.valueTwoDescription,
      icon: 'design'
    },
    {
      title: translation.valueThreeTitle,
      description: translation.valueThreeDescription,
      icon: 'results'
    }
  ];

  const stats: StatItem[] = [
    {
      value: translation.statOneValue,
      label: translation.statOneLabel
    },
    {
      value: translation.statTwoValue,
      label: translation.statTwoLabel
    },
    {
      value: translation.statThreeValue,
      label: translation.statThreeLabel
    }
  ];

  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.mainImage}>
              <Image
                src="/images/programacion1.jpg"
                alt="Desenvolvimento de sites na BLZ Site"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.secondaryImage}>
              <Image
                src="/images/programacion2.jpg"
                alt="Equipe trabalhando em desenvolvimento web"
                fill
                sizes="(max-width: 650px) 42vw, 240px"
                className={styles.image}
              />
            </div>

            <div className={styles.badge}>
              <span className={styles.badgeIcon}>
                <LocationIcon />
              </span>

              <div>
                <strong>BLZ Site</strong>
                <span>{translation.badge}</span>
              </div>
            </div>

            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.codeLines}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span />
              {translation.eyebrow}
            </div>

            <h2 className={styles.title}>
              {translation.title}{' '}
              <span>{translation.titleHighlight}</span>
            </h2>

            <div className={styles.text}>
              <p>{translation.descriptionOne}</p>
              <p>{translation.descriptionTwo}</p>
            </div>

            <div className={styles.values}>
              {values.map((value) => (
                <article
                  key={value.title}
                  className={styles.value}
                >
                  <div className={styles.valueIcon}>
                    {value.icon === 'chat' && <ChatIcon />}
                    {value.icon === 'design' && <DesignIcon />}
                    {value.icon === 'results' && (
                      <ResultsIcon />
                    )}
                  </div>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="#portfolio"
              className={styles.button}
            >
              {translation.button}
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={styles.stat}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
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
        d="M4 20h4l11-11-4-4L4 16v4Zm9-13 4 4M12 4l2-2 4 4-2 2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ResultsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 19V9M10 19V5M16 19v-7M22 19V3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M3 19h19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
'use client';

import { trackEvent } from '@/lib/analytics';
import type { Translation } from '@/types/translations';

import styles from './Portfolio.module.css';

type PortfolioProps = {
  translation: Translation['portfolio'];
};

type ProjectSlug =
  | 'hamburgueria'
  | 'passeios'
  | 'pousada';

type Project = {
  slug: ProjectSlug;
  category: string;
  title: string;
  description: string;
  features: string[];
  video: string;
  liveUrl: string;
  githubUrl: string;
  accent: 'orange' | 'turquoise' | 'blue';
};

const WHATSAPP_BASE =
  'https://wa.me/5522997913238?text=';

export default function Portfolio({
  translation
}: PortfolioProps) {
  const projects: Project[] = [
    {
      slug: 'hamburgueria',
      category: translation.restaurantCategory,
      title: translation.restaurantTitle,
      description: translation.restaurantDescription,
      features: translation.restaurantFeatures,
      video: '/videos/hamburgueria.webm',
      liveUrl: 'https://hamburguers-buzios.vercel.app/',
      githubUrl:
        'https://github.com/MckMc/hamburguers-buzios',
      accent: 'orange'
    },
    {
      slug: 'passeios',
      category: translation.toursCategory,
      title: translation.toursTitle,
      description: translation.toursDescription,
      features: translation.toursFeatures,
      video: '/videos/passeios.webm',
      liveUrl:
        'https://buzios-viva-passeios.vercel.app/',
      githubUrl:
        'https://github.com/MckMc/buzios-viva-passeios',
      accent: 'turquoise'
    },
    {
      slug: 'pousada',
      category: translation.lodgingCategory,
      title: translation.lodgingTitle,
      description: translation.lodgingDescription,
      features: translation.lodgingFeatures,
      video: '/videos/pousada.webm',
      liveUrl:
        'https://pousada-brisa-buzios.vercel.app/',
      githubUrl:
        'https://github.com/MckMc/pousada-brisa-buzios',
      accent: 'blue'
    }
  ];

  function trackDemoClick(project: Project) {
    trackEvent({
      eventName: 'portfolio_demo_click',
      category: 'portfolio',
      label: project.slug,
      value: project.title
    });
  }

  function trackGithubClick(project: Project) {
    trackEvent({
      eventName: 'github_click',
      category: 'portfolio',
      label: project.slug,
      value: project.title
    });
  }

  function trackSimilarProjectClick(project: Project) {
    trackEvent({
      eventName: 'whatsapp_click',
      category: 'portfolio',
      label: `similar_${project.slug}`,
      value: project.title
    });
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.glow} />

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

        <div className={styles.projects}>
          {projects.map((project, index) => {
            const whatsappUrl = `${WHATSAPP_BASE}${encodeURIComponent(
              `Olá! Vi o projeto ${project.title} no site da BLZ Site e gostaria de criar algo parecido para meu negócio.`
            )}`;

            return (
              <article
                key={project.slug}
                className={`${styles.project} ${
                  index % 2 !== 0 ? styles.reverse : ''
                }`}
              >
                <div
                  className={`${styles.visual} ${
                    styles[project.accent]
                  }`}
                >
                  <div className={styles.browser}>
                    <div className={styles.browserTop}>
                      <div className={styles.browserDots}>
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className={styles.address}>
                        {project.liveUrl.replace(
                          'https://',
                          ''
                        )}
                      </div>

                      <div className={styles.browserMenu}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className={styles.videoWrapper}>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={project.title}
                      >
                        <source
                          src={project.video}
                          type="video/webm"
                        />
                      </video>

                      <div
                        className={styles.videoGradient}
                      />
                    </div>
                  </div>

                  <span className={styles.projectNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.content}>
                  <span className={styles.category}>
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryAction}
                      onClick={() =>
                        trackDemoClick(project)
                      }
                    >
                      <ExternalIcon />
                      {translation.liveButton}
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappAction}
                      onClick={() =>
                        trackSimilarProjectClick(project)
                      }
                    >
                      <WhatsAppIcon />
                      {translation.similarButton}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m5 12 4 4L19 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 7.1a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
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
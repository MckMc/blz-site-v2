import type { ReactNode } from 'react';

import type { Translation } from '@/types/translations';

import styles from './Services.module.css';

type ServicesProps = {
  translation: Translation['services'];
};

type ServiceVariant =
  | 'restaurant'
  | 'lodging'
  | 'tours'
  | 'whatsapp'
  | 'languages'
  | 'responsive';

type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: ServiceVariant;
  featured?: boolean;
};

export default function Services({
  translation
}: ServicesProps) {
  const services: ServiceItem[] = [
    {
      title: translation.restaurantTitle,
      description: translation.restaurantDescription,
      icon: <RestaurantIcon />,
      variant: 'restaurant'
    },
    {
      title: translation.lodgingTitle,
      description: translation.lodgingDescription,
      icon: <LodgingIcon />,
      variant: 'lodging'
    },
    {
      title: translation.toursTitle,
      description: translation.toursDescription,
      icon: <ToursIcon />,
      variant: 'tours'
    },
    {
      title: translation.whatsappTitle,
      description: translation.whatsappDescription,
      icon: <WhatsAppIcon />,
      variant: 'whatsapp',
      featured: true
    },
    {
      title: translation.languagesTitle,
      description: translation.languagesDescription,
      icon: <LanguagesIcon />,
      variant: 'languages'
    },
    {
      title: translation.responsiveTitle,
      description: translation.responsiveDescription,
      icon: <ResponsiveIcon />,
      variant: 'responsive'
    }
  ];

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.decorationOne} />
      <div className={styles.decorationTwo} />

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

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`${styles.card} ${
                styles[service.variant]
              }`}
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              {service.featured && (
                <span className={styles.featured}>
                  {translation.featuredLabel}
                </span>
              )}

              <div className={styles.icon}>
                {service.icon}
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M15 3v18M15 3c3 0 5 2.7 5 6v3h-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LodgingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 20V5h18v15M3 16h18M7 16v-5h4v5M15 16v-5h3v5M7 8h2M15 8h2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ToursIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 16h18l-2 4H6l-3-4Zm3-5 2-5h7l3 5M12 6V3M9 3h6M5 16l2-5h10l2 5"
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

      <path
        d="M9 8.5c.4 2.5 2 4.1 4.5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LanguagesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h10M9 3v2M6 9c1 3 3 5 6 7M12 9c-1 3-3 5-6 7M14 21l4-10 4 10M15.5 17h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ResponsiveIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="14"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <rect
        x="15"
        y="9"
        width="6"
        height="11"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M7 20h6M10 15v5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
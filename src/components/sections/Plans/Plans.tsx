import type { Translation } from '@/types/translations';

import styles from './Plans.module.css';

type PlansProps = {
  translation: Translation['plans'];
};

type Plan = {
  name: string;
  description: string;
  features: string[];
  variant: 'essential' | 'professional' | 'premium';
  popular?: boolean;
};

const WHATSAPP_NUMBER = '5522997913238';

export default function Plans({
  translation
}: PlansProps) {
  const plans: Plan[] = [
    {
      name: translation.essentialName,
      description: translation.essentialDescription,
      features: translation.essentialFeatures,
      variant: 'essential'
    },
    {
      name: translation.professionalName,
      description: translation.professionalDescription,
      features: translation.professionalFeatures,
      variant: 'professional',
      popular: true
    },
    {
      name: translation.premiumName,
      description: translation.premiumDescription,
      features: translation.premiumFeatures,
      variant: 'premium'
    }
  ];

  return (
    <section id="planos" className={styles.plans}>
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

        <div className={styles.grid}>
          {plans.map((plan) => {
            const message = encodeURIComponent(
              `Olá! Vi o plano ${plan.name} no site da BLZ Site e gostaria de receber uma proposta para meu negócio.`
            );

            const whatsappUrl =
              `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <article
                key={plan.name}
                className={`${styles.card} ${
                  styles[plan.variant]
                } ${
                  plan.popular ? styles.popular : ''
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularLabel}>
                    <StarIcon />
                    {translation.popularLabel}
                  </div>
                )}

                <div className={styles.cardHeader}>
                  <div className={styles.icon}>
                    {plan.variant === 'essential' && (
                      <EssentialIcon />
                    )}

                    {plan.variant === 'professional' && (
                      <ProfessionalIcon />
                    )}

                    {plan.variant === 'premium' && (
                      <PremiumIcon />
                    )}
                  </div>

                  <span className={styles.planType}>
                    {translation.startingFrom}
                  </span>

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>
                </div>

                <div className={styles.price}>
                  {translation.customPrice}
                </div>

                <div className={styles.divider} />

                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {translation.button}
                  <ArrowIcon />
                </a>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>
          {translation.note}
        </p>
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

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function EssentialIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h16v14H4V5Zm0 4h16M8 7h.01M11 7h.01"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProfessionalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3 9h18M8 9v11M6 6.5h.01M9 6.5h.01"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m3 8 4 4 5-7 5 7 4-4-2 11H5L3 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M6 19h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
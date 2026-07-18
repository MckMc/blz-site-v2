export type Language = 'pt' | 'es' | 'en';

export type Translation = {
  navbar: {
    subtitle: string;
    services: string;
    portfolio: string;
    process: string;
    plans: string;
    about: string;
    contact: string;
    whatsapp: string;
    openMenu: string;
    closeMenu: string;
  };

  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    availability: string;
    browserLabel: string;
    projectsLabel: string;
    languagesLabel: string;
    responsiveLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    restaurantTitle: string;
    restaurantDescription: string;
    lodgingTitle: string;
    lodgingDescription: string;
    toursTitle: string;
    toursDescription: string;
    whatsappTitle: string;
    whatsappDescription: string;
    languagesTitle: string;
    languagesDescription: string;
    responsiveTitle: string;
    responsiveDescription: string;
    featuredLabel: string;
  };
  portfolio: {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  liveButton: string;
  codeButton: string;
  similarButton: string;
  restaurantCategory: string;
  restaurantTitle: string;
  restaurantDescription: string;
  restaurantFeatures: string[];
  toursCategory: string;
  toursTitle: string;
  toursDescription: string;
  toursFeatures: string[];
  lodgingCategory: string;
  lodgingTitle: string;
  lodgingDescription: string;
  lodgingFeatures: string[];
};
process: {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  stepOneTitle: string;
  stepOneDescription: string;
  stepTwoTitle: string;
  stepTwoDescription: string;
  stepThreeTitle: string;
  stepThreeDescription: string;
  stepFourTitle: string;
  stepFourDescription: string;
  finalTitle: string;
  finalDescription: string;
  finalButton: string;
};
plans: {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  popularLabel: string;
  startingFrom: string;
  customPrice: string;
  button: string;

  essentialName: string;
  essentialDescription: string;
  essentialFeatures: string[];

  professionalName: string;
  professionalDescription: string;
  professionalFeatures: string[];

  premiumName: string;
  premiumDescription: string;
  premiumFeatures: string[];

  note: string;
};
about: {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  descriptionOne: string;
  descriptionTwo: string;
  badge: string;
  valueOneTitle: string;
  valueOneDescription: string;
  valueTwoTitle: string;
  valueTwoDescription: string;
  valueThreeTitle: string;
  valueThreeDescription: string;
  statOneValue: string;
  statOneLabel: string;
  statTwoValue: string;
  statTwoLabel: string;
  statThreeValue: string;
  statThreeLabel: string;
  button: string;
};
cta: {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  whatsappButton: string;
  instagramButton: string;
  emailLabel: string;
  whatsappLabel: string;
  instagramLabel: string;
  availability: string;
};

footer: {
  description: string;
  navigationTitle: string;
  contactTitle: string;
  homeLink: string;
  servicesLink: string;
  portfolioLink: string;
  processLink: string;
  plansLink: string;
  aboutLink: string;
  rights: string;
  madeIn: string;
};
};
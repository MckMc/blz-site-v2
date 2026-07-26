const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://blzsite.com.br/#business',

  name: 'BLZ Site',
  url: 'https://blzsite.com.br',
  logo: 'https://blzsite.com.br/images/logo-con-texto.png',
  image: 'https://blzsite.com.br/og-image.png',

  description:
    'Criação de sites modernos, rápidos e profissionais para restaurantes, pousadas, passeios e negócios locais de Búzios.',

  email: 'mailto:blzsite.buzios@gmail.com',
  telephone: '+55 22 99791-3238',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Armação dos Búzios',
    addressRegion: 'RJ',
    addressCountry: 'BR'
  },

  areaServed: {
    '@type': 'City',
    name: 'Armação dos Búzios'
  },

  sameAs: [
    'https://www.instagram.com/blz.site'
  ],

  serviceType: [
    'Criação de sites',
    'Desenvolvimento web',
    'Web design',
    'Manutenção de sites',
    'Hospedagem de sites'
  ],

  founder: {
    '@type': 'Person',
    name: 'Manuel Cecchin Kuhn'
  }
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
      }}
    />
  );
}
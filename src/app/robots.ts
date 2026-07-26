import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://blzsite.com.br/sitemap.xml',
    host: 'https://blzsite.com.br',
  };
}
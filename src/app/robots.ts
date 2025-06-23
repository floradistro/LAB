import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/client-portal/', '/api/']
      }
    ],
    sitemap: 'https://quantixanalytics.com/sitemap.xml',
    host: 'https://quantixanalytics.com'
  };
} 
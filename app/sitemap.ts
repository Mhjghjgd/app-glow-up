import type { MetadataRoute } from 'next';

const SITE = 'https://replyforge.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/exemple`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/cgv`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

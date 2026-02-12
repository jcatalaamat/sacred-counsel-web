import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sacred-counsel.com';

  // Static pages
  const staticPages = [
    '',
    '/ayahuasca',
    '/homestay',
    '/integration',
    '/detox',
    '/about',
    '/testimonials',
    '/blog',
    '/apply',
    '/privacy',
    '/terms',
  ];

  // Blog posts (placeholder - will be dynamic with Sanity)
  const blogPosts = [
    '/blog/preparing-for-ayahuasca',
    '/blog/importance-of-integration',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/ayahuasca' ? 0.9 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

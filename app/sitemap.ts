import { MetadataRoute } from 'next';
import { services, areas } from '@/lib/seo-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hindcool.com';
  
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/locations/bandra`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/juhu`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/andheri`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: `${baseUrl}/locations/${a.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}

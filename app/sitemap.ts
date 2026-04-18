import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.premiummovers.co.ke'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products/cabro`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/products/culverts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/products/fencing-posts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/patterns`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}

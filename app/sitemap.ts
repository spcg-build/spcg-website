import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
const BASE = 'https://www.spconstructiongroup.com';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/careers/', '/request-a-budget/', '/subcontractors/', '/privacy/', '/accessibility/', '/site-map/'].map((p) => ({ url: BASE + p, changeFrequency: 'monthly', priority: p === '/' ? 1 : 0.6 }));
}

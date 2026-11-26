import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1';
export default function robots(): MetadataRoute.Robots {
  if (noindex) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://www.spconstructiongroup.com/sitemap.xml', host: 'https://www.spconstructiongroup.com' };
}

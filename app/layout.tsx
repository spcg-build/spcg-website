import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

// Set NEXT_PUBLIC_NOINDEX=1 on the temporary preview site so Google doesn't index it.
const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spconstructiongroup.com'),
  title: {
    default: 'SP Construction Group | Commercial General Contractor',
    template: '%s | SP Construction Group',
  },
  description:
    'Commercial general contractor for healthcare, office, retail and hospitality buildouts and renovations across Maryland, DC, Virginia, North Carolina, Boston and Florida.',
  alternates: { canonical: '/' },
  robots: noindex ? { index: false, follow: false } : undefined,
  openGraph: {
    title: 'SP Construction Group',
    description: 'Building What Matters.',
    images: ['/images/hero-lobby.jpg'],
    type: 'website',
    siteName: 'SP Construction Group',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({   "@context": "https://schema.org",   "@type": "GeneralContractor",   "name": "SP Construction Group",   "alternateName": "SPCG",   "url": "https://www.spconstructiongroup.com/",   "logo": "https://www.spconstructiongroup.com/icon.png",   "image": "https://www.spconstructiongroup.com/images/hero-lobby.jpg",   "description": "Commercial general contractor for healthcare, office, retail, restaurant and multifamily buildouts and renovations.",   "telephone": "+1-443-300-0338",   "email": "bids@spconstructiongroup.com",   "slogan": "Building What Matters",   "areaServed": ["Maryland", "Washington, DC", "Virginia", "North Carolina", "Massachusetts", "Florida"],   "knowsAbout": ["Tenant improvements", "Interior buildouts", "Renovations", "Healthcare construction", "Exterior improvements"],   "sameAs": ["https://www.linkedin.com/company/sp-construction-group/"] }) }} />
      </head>
      <body>
        <div id="top"></div>
        <Header />
        {children}
        <Footer />
        <Script src="/js/consent.js" strategy="afterInteractive" />
        <Script src="/js/audiences.js" strategy="afterInteractive" />
        <Script src="/js/site.js" strategy="lazyOnload" />
        <Script src="/js/hero-types.js" strategy="afterInteractive" />
        <Script src="/js/build-seq.js" strategy="afterInteractive" />
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

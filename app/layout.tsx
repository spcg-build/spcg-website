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
    'Commercial general contractor for healthcare, office, retail and hospitality buildouts and renovations across Maryland, DC, Virginia, Boston and Central Florida.',
  robots: noindex ? { index: false, follow: false } : undefined,
  openGraph: {
    title: 'SP Construction Group',
    description: 'Building What Matters.',
    images: ['/images/hero-lobby.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="top"></div>
        <Header />
        {children}
        <Footer />
        <Script src="/js/audiences.js" strategy="afterInteractive" />
        <Script src="/js/site.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Header, Footer, WhatsAppButton } from '@/components/layout';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/StructuredData';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sacred-counsel.com'),
  title: {
    default: 'Sacred Counsel | Integrative Psychedelic Support',
    template: '%s | Sacred Counsel',
  },
  description:
    'Sacred Counsel offers transformative ayahuasca retreats, private homestays, psychedelic integration therapy, and holistic wellness programs in Valle de Bravo, Mexico.',
  keywords: [
    'ayahuasca retreat',
    'psychedelic integration',
    'plant medicine',
    'Valle de Bravo',
    'Mexico retreat',
    'psychedelic therapy',
    'integration therapy',
    'wellness retreat',
  ],
  authors: [{ name: 'Sacred Counsel' }],
  creator: 'Sacred Counsel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sacred-counsel.com',
    siteName: 'Sacred Counsel',
    title: 'Sacred Counsel | Integrative Psychedelic Support',
    description:
      'Transformative ayahuasca retreats, private homestays, psychedelic integration therapy, and holistic wellness in Valle de Bravo, Mexico.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sacred Counsel - Ayahuasca Retreats in Mexico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacred Counsel | Integrative Psychedelic Support',
    description:
      'Transformative ayahuasca retreats, private homestays, and psychedelic integration therapy in Valle de Bravo, Mexico.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

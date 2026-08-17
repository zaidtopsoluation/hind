import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Hind Cool Service | Premium AC Repair & Installation in Mumbai',
    template: '%s | Hind Cool Service'
  },
  description: 'Hind Cool Service offers expert AC repair, gas charging, deep cleaning, and Annual Maintenance Contracts (AMC) across Mumbai, including Andheri West, Bandra, and Juhu. Certified technicians and 24/7 emergency support.',
  keywords: [
    'AC Repair Mumbai',
    'AC Installation Andheri West',
    'AC Servicing Mumbai',
    'Split AC installation',
    'Window AC repair',
    'AC AMC plans Mumbai',
    'Emergency AC repair Mumbai',
    'Gas charging Mumbai',
    'Foam jet cleaning AC'
  ],
  authors: [{ name: 'Hind Cool Service' }],
  creator: 'Hind Cool Service',
  metadataBase: new URL('https://hindcoolservice.com'), // Replace with actual production domain when available
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hind Cool Service | Premium AC Repair & Installation in Mumbai',
    description: 'Expert AC servicing, repair, and installation in Mumbai. Quick diagnostic repairs, professional setup, and affordable Annual Maintenance Contracts with certified technicians.',
    url: 'https://hindcoolservice.com',
    siteName: 'Hind Cool Service',
    images: [
      {
        url: '/hero_ac.jpg',
        width: 1200,
        height: 900,
        alt: 'Hind Cool Service AC Cooling Unit',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hind Cool Service | AC Repair & Installation in Mumbai',
    description: 'Reliable AC repair, installation, and AMC contracts across Mumbai. 24/7 availability with certified technicians.',
    images: ['/hero_ac.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

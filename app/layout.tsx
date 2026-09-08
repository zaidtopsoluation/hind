import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Hind Cool Service | Best AC Repair & Service in Mumbai',
    template: '%s | Hind Cool Service'
  },
  description: 'Hind Cool Service offers premium AC repair, AC servicing, AC AMC plans, VRF/VRV installation, and ductable AC maintenance across Mumbai.',
  keywords: [
    'AC Repair Mumbai',
    'AC Service Mumbai',
    'AC Mechanic Mumbai',
    'AC wala Mumbai',
    'AC AMC Mumbai',
    'AC Installation Mumbai',
    'AC gas filling Mumbai',
    'AC gas leak repair',
    'AC water leakage repair',
    'AC PCB repair Mumbai',
    'AC jet service Mumbai',
    'Inverter AC service Mumbai',
    'AC service near me',
    'AC repair near me',
    'AC mechanic near me',
    'VRF Systems Mumbai',
    'Ductable AC Mumbai',
    'Split AC installation',
    'AC servicing Saki Naka',
    'AC maintenance contract',
    'Ductable AC repair Mumbai',
    'VRF AC service Mumbai',
    'Commercial AC service Mumbai',
    'Emergency AC repair Mumbai'
  ],
  authors: [{ name: 'Hind Cool Service' }],
  creator: 'Hind Cool Service',
  metadataBase: new URL('https://hindcool.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hind Cool Service | Premium AC Repair & Installation in Mumbai',
    description: 'Expert HVAC engineering, VRF/VRV installation, ductable splits, and professional AMC contracts with certified technicians in Mumbai.',
    url: 'https://hindcool.com',
    siteName: 'Hind Cool Service',
    images: [
      {
        url: '/hvac_commercial.jpg',
        width: 1200,
        height: 675,
        alt: 'Hind Cool Service HVAC Systems',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hind Cool Service | AC Repair & Installation in Mumbai',
    description: 'Reliable commercial and residential HVAC servicing across Mumbai. 24/7 priority emergency support.',
    images: ['/hvac_commercial.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '_zDz7eQVVXPapy2CmxylIMtQV3FQdXxoJymLUqqDNC4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-surface text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

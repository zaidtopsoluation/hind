import type { Metadata } from 'next';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'AC Repair, Installation & VRF Services in Andheri & Saki Naka',
  description: 'Hind Cool Service offers rapid AC repair, VRF/VRV system installations, and ductable AC servicing in Andheri East, Andheri West, Saki Naka, and Lokhandwala. Call +91 74083 81814.',
  alternates: {
    canonical: '/locations/andheri',
  },
};

export default function AndheriLocationPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    'name': 'Hind Cool Service - Head Office (Andheri)',
    'image': 'https://hindcool.com/hvac_commercial.jpg',
    'telephone': '+917408381814',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Saki Naka, Andheri East',
      'addressLocality': 'Mumbai',
      'addressRegion': 'Maharashtra',
      'postalCode': '400072',
      'addressCountry': 'IN'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Andheri East'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Andheri West'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Saki Naka'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Lokhandwala'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '88'
    }
  };

  return (
    <div className="w-full">
      {/* Schema Injection */}
      <SchemaMarkup data={localSchema} />

      {/* Local Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-12 md:py-20 overflow-hidden bg-deep-navy text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hvac_commercial.jpg"
            alt="Commercial HVAC ducting installation in Andheri"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-arctic-cyan font-label-sm text-label-sm px-4 py-2 rounded-full w-fit">
            <span className="material-symbols-outlined text-arctic-cyan" style={{ fontSize: '16px' }}>
              location_on
            </span>
            Head Office Area: Serving Andheri &amp; Saki Naka
          </div>
          
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-extrabold tracking-tight leading-tight">
            HVAC &amp; AC Specialists in <br />
            <span className="text-arctic-cyan">Andheri &amp; Saki Naka</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
            Headquartered in Saki Naka, Andheri East. We provide the fastest turnaround times for residential split AC repairs and heavy commercial VRF, package, and ductable AC installations across Andheri.
          </p>
          
          <a
            href="tel:+917408381814"
            className="bg-arctic-cyan text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-300 shadow-cool flex items-center justify-center gap-2 active:scale-95 font-bold mt-4"
          >
            <span className="material-symbols-outlined">call</span>
            Call Head Office Desk
          </a>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold leading-tight">
              Rapid Response AC Services in Andheri East &amp; West
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              As Andheri is Mumbai's largest commercial and industrial hub, sudden AC breakdowns can halt office productivity or impact retail sales. Since our main dispatch team is located in Saki Naka, we can guarantee priority arrival times of under 2 hours for emergencies in Andheri East, MIDC, and Lokhandwala.
            </p>
            <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Fastest response under 2 hours for Andheri and Saki Naka.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Full commercial setups for offices, factories, IT hubs, and restaurants.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Highly competitive local AMC rates for business operations.</span>
              </li>
            </ul>
          </div>
          
          {/* Featured Andheri Testimonial */}
          <div className="glass-panel rounded-xl p-8 cool-shadow bg-white flex flex-col justify-between border border-surface-container-highest">
            <span className="material-symbols-outlined text-surface-dim mb-6" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-body-md text-body-md text-on-surface mb-6 italic leading-relaxed">
              "We had a sudden compressor failure at our restaurant in Andheri East on a Friday evening. Hind Cool's Saki Naka desk sent a technician within 45 minutes, diagnosed the issue, and replaced the condenser fan/capacitor. Outstanding emergency service!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ice-wash flex items-center justify-center font-bold text-deep-navy">
                AS
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-deep-navy font-bold">Amit S.</h4>
                <p className="font-label-sm text-xs text-on-surface-variant">Restaurant Owner, MIDC Andheri</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

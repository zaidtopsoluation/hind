import type { Metadata } from 'next';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'AC Installation, Repair & Servicing in Juhu & Vile Parle',
  description: 'Hind Cool Service provides professional AC repair, rust-prevention deep cleaning, and new AC installations in Juhu, Vile Parle, and coastal Mumbai. Call +91 74083 81814.',
  alternates: {
    canonical: '/locations/juhu',
  },
};

export default function JuhuLocationPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    'name': 'Hind Cool Service - Juhu',
    'image': 'https://hindcool.com/hvac_commercial.jpg',
    'telephone': '+917408381814',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Juhu Beach',
      'addressLocality': 'Mumbai',
      'addressRegion': 'Maharashtra',
      'postalCode': '400049',
      'addressCountry': 'IN'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Juhu'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Vile Parle'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '52'
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
            alt="Advanced residential HVAC servicing in Juhu"
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
            Serving Juhu &amp; Vile Parle
          </div>
          
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-extrabold tracking-tight leading-tight">
            AC Installation &amp; Service <br />
            <span className="text-arctic-cyan">in Juhu &amp; Vile Parle</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
            Specialized air conditioning diagnostics, rust protection coatings, and premium split AC installations tailored for Juhu's humid, coastal climate. 24/7 priority support.
          </p>
          
          <a
            href="tel:+917408381814"
            className="bg-arctic-cyan text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-300 shadow-cool flex items-center justify-center gap-2 active:scale-95 font-bold mt-4"
          >
            <span className="material-symbols-outlined">call</span>
            Call Juhu Service Desk
          </a>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold leading-tight">
              Anti-Corrosive AC Care for Coastal Juhu Homes
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Residences in Juhu face high sea salt humidity, which causes rapid corrosion and rust on AC outdoor condensers and coils. Our team provides specialized anti-corrosive copper coatings and deep foam-jet pressure washing to protect your cooling units.
            </p>
            <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Anti-rust chemical coatings for outdoor AC units.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Deep foam-jet washes to clear salty build-ups and mold.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Whisper-quiet split installations for premium coastal flats.</span>
              </li>
            </ul>
          </div>
          
          {/* Featured Juhu Testimonial */}
          <div className="glass-panel rounded-xl p-8 cool-shadow bg-white flex flex-col justify-between border border-surface-container-highest">
            <span className="material-symbols-outlined text-surface-dim mb-6" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-body-md text-body-md text-on-surface mb-6 italic leading-relaxed">
              "We had constant cooling loss due to gas leaks in Juhu. Hind Cool diagnosed the leak in our piping, welded it, coated the condenser to prevent sea-salt rust, and topped up the gas. The AC is working like new!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ice-wash flex items-center justify-center font-bold text-deep-navy">
                RK
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-deep-navy font-bold">Rohan K.</h4>
                <p className="font-label-sm text-xs text-on-surface-variant">Juhu Scheme Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

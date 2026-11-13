import type { Metadata } from 'next';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'AC Repair, Installation & Services in Bandra & BKC',
  description: 'Hind Cool Service offers premium AC repair, VRF/VRV installations, and AMC servicing in Bandra West, Bandra East, and Bandra Kurla Complex (BKC). Call +91 74083 81814.',
  alternates: {
    canonical: '/locations/bandra',
  },
};

export default function BandraLocationPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': 'https://hindcool.com/#organization',
    'name': 'Hind Cool Service',
    'url': 'https://hindcool.com/locations/bandra',
    'image': 'https://hindcool.com/hvac_commercial.jpg',
    'telephone': '+917408381814',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Bandra West',
      'addressLocality': 'Mumbai',
      'addressRegion': 'Maharashtra',
      'postalCode': '400050',
      'addressCountry': 'IN'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Bandra West'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Bandra East'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Bandra Kurla Complex (BKC)'
      }
    ]
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
            alt="Premium HVAC installations in Bandra BKC"
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
            Serving Bandra, Bandra West, &amp; BKC
          </div>
          
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-extrabold tracking-tight leading-tight">
            Premium AC Services in <br />
            <span className="text-arctic-cyan">Bandra &amp; BKC</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
            From high-rise luxury apartments in Bandra West to corporate offices in BKC, Hind Cool Service delivers precise, engineering-grade cooling solutions. 24/7 emergency response.
          </p>
          
          <a
            href="tel:+917408381814"
            className="bg-arctic-cyan text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-300 shadow-cool flex items-center justify-center gap-2 active:scale-95 font-bold mt-4"
          >
            <span className="material-symbols-outlined">call</span>
            Call Bandra Service Desk
          </a>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold leading-tight">
              Why Homes &amp; Offices in Bandra Choose Hind Cool
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Bandra is Mumbai's hub of premium residential high-rises and busy commercial zones like Bandra Kurla Complex (BKC). These buildings require silent, efficient, and neatly integrated cooling setups.
            </p>
            <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Expertise in concealed ductable and VRV/VRF commercial setups.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Pristine and clean installations preserving interior design.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-arctic-cyan mt-0.5">check_circle</span>
                <span>Rapid response emergency repairs for luxury residences and retail stores.</span>
              </li>
            </ul>
          </div>
          
          {/* Featured Bandra Testimonial */}
          <div className="glass-panel rounded-xl p-8 cool-shadow bg-white flex flex-col justify-between border border-surface-container-highest">
            <span className="material-symbols-outlined text-surface-dim mb-6" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-body-md text-body-md text-on-surface mb-6 italic leading-relaxed">
              "We signed up for Hind Cool's AMC plan for our apartment off Carter Road. The periodic cleaning is thorough, and the technicians are incredibly polite and keep the space clean. Excellent service."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ice-wash flex items-center justify-center font-bold text-deep-navy">
                PM
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-deep-navy font-bold">Priya M.</h4>
                <p className="font-label-sm text-xs text-on-surface-variant">Bandra West Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

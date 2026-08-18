import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import ContactForm from './ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hind Cool Service Mumbai. Visit our head office in Saki Naka, Andheri East, or contact our support line for emergency AC breakdown repairs.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Hind Cool Service Mumbai',
    'description': 'Contact details and service request form for Hind Cool Service in Saki Naka, Mumbai.',
    'url': 'https://hindcoolservice.com/contact',
    'mainEntity': {
      '@type': 'HVACBusiness',
      'name': 'Hind Cool Service',
      'telephone': '+917408381814',
      'email': 'service@hindcool.in',
      'areaServed': [
        'Mumbai',
        'Thane',
        'Navi Mumbai',
        'Andheri',
        'Bandra',
        'Juhu',
        'Powai',
        'Borivali',
        'Chembur',
        'Worli',
        'Dadar',
        'Colaba'
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Saki Naka, Andheri East',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400072',
        'addressCountry': 'IN'
      }
    }
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      {/* Schema Injection */}
      <SchemaMarkup data={contactPageSchema} />

      <div className="w-full flex flex-col gap-12">
        {/* Page Header */}
        <header className="max-w-3xl flex flex-col gap-4">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy font-extrabold tracking-tight">
            Get in Touch.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Experience premium cooling solutions. Reach out for consultations, service requests, or immediate emergency support in Mumbai.
          </p>
        </header>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Spans 7 columns on desktop */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="bg-white rounded-xl p-8 cool-shadow h-96 flex items-center justify-center font-semibold">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Sidebar: Spans 5 columns on desktop */}
          <aside className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Direct Contact Card */}
            <section className="bg-white rounded-xl p-8 cool-shadow border border-surface-container-highest flex flex-col gap-6" aria-labelledby="direct-contact-heading">
              <h2 id="direct-contact-heading" className="font-headline-md text-headline-md text-deep-navy flex items-center gap-2 border-b border-surface-container-highest pb-4 font-bold">
                <span className="material-symbols-outlined text-arctic-cyan" style={{ fontSize: '28px' }}>
                  support_agent
                </span>
                Direct Contact
              </h2>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ice-wash flex items-center justify-center text-deep-navy flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                      Primary Phone
                    </span>
                    <a href="tel:+917408381814" className="text-lg font-bold text-deep-navy hover:text-arctic-cyan transition-colors">
                      +91 74083 81814
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ice-wash flex items-center justify-center text-deep-navy flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                      Email Support
                    </span>
                    <a href="mailto:service@hindcool.in" className="text-lg font-bold text-deep-navy hover:text-arctic-cyan transition-colors">
                      service@hindcool.in
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Breakdown Card */}
            <section className="bg-accent-light border border-accent/30 rounded-xl p-8 flex flex-col gap-4 text-center items-center cool-shadow" aria-labelledby="emergency-heading">
              <div className="w-12 h-12 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center text-warning-amber mb-2">
                <span className="material-symbols-outlined text-3xl">warning</span>
              </div>
              <h2 id="emergency-heading" className="font-headline-md text-headline-md text-accent font-extrabold">
                Emergency Breakdown?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                24/7 rapid response for commercial cooling failures.
              </p>
              <a
                href="tel:+917408381814"
                className="w-full bg-warning-amber hover:bg-orange-700 text-white font-label-lg text-label-lg py-3.5 rounded-full shadow-cool text-center transition-all font-bold active:scale-95 mt-2 block"
              >
                Call Emergency SOS
              </a>
            </section>

            {/* Location / Head Office Map Card */}
            <section className="bg-white rounded-xl p-4 cool-shadow border border-surface-container-highest flex flex-col gap-4" aria-labelledby="location-heading">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-surface-container-highest">
                <Image
                  src="/map_sakinaka.jpg"
                  alt="Head Office location map in Saki Naka, Andheri East, Mumbai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                
                {/* Floating location label over map */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg cool-shadow border border-white/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ice-wash flex items-center justify-center text-arctic-cyan flex-shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      location_on
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">
                      Head Office
                    </span>
                    <span className="text-xs font-extrabold text-deep-navy">
                      Saki Naka, Andheri East, Mumbai
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

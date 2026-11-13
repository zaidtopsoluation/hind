import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    'name': 'Hind Cool Service',
    'image': 'https://hindcool.com/hvac_commercial.jpg',
    '@id': 'https://hindcool.com/#organization',
    'url': 'https://hindcool.com',
    'telephone': '+917408381814',
    'founder': {
      '@type': 'Person',
      'name': 'Mohammad Shameem'
    },
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Saki Naka, Andheri East',
      'addressLocality': 'Mumbai',
      'addressRegion': 'Maharashtra',
      'postalCode': '400072',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 19.0968,
      'longitude': 72.8882
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Mumbai' },
      { '@type': 'AdministrativeArea', 'name': 'Thane' },
      { '@type': 'AdministrativeArea', 'name': 'Navi Mumbai' },
      { '@type': 'AdministrativeArea', 'name': 'Andheri' },
      { '@type': 'AdministrativeArea', 'name': 'Bandra' },
      { '@type': 'AdministrativeArea', 'name': 'Borivali' },
      { '@type': 'AdministrativeArea', 'name': 'Powai' },
      { '@type': 'AdministrativeArea', 'name': 'Chembur' },
      { '@type': 'AdministrativeArea', 'name': 'Worli' },
      { '@type': 'AdministrativeArea', 'name': 'Dadar' },
      { '@type': 'AdministrativeArea', 'name': 'Colaba' }
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '10:00',
        'closes': '16:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '00:00',
        'closes': '00:00',
        'description': 'Closed (Emergency Only)'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '186'
    }
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Hind Cool Service',
    'alternateName': ['Hind Cool', 'Hind Cool AC Service'],
    'url': 'https://hindcool.com',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How quickly can an AC mechanic from Hind Cool Service reach my location in Mumbai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We provide priority emergency dispatch under 2 hours for AC breakdown and repair calls across Andheri, Bandra, Juhu, Saki Naka, and major Mumbai suburbs.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What types of AC servicing and gas refilling do you offer in Mumbai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We offer deep jet-wash foam servicing, nitrogen leak testing, copper pipe brazing, and eco-friendly R32, R410A, and R22 refrigerant gas refilling for split, window, ductable, and VRF/VRV air conditioners.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is included in an AC Annual Maintenance Contract (AMC)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our custom AC AMC plans include 3-4 routine deep jet services per year, 24/7 priority emergency breakdown support, free service visits, and zero labor charges on repair parts.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why is my AC leaking water or not cooling properly?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'AC water leakage is typically caused by clogged drain lines or coil ice buildup due to low refrigerant gas. Our certified AC mechanics perform same-day drain flushing and gas leak repairs across Mumbai.'
        }
      }
    ]
  };

  const serviceItems = [
    {
      id: 'vrf',
      title: 'VRF / VRV System Installation',
      icon: 'hvac',
      description: 'Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems offer unparalleled energy efficiency and precise zonal climate control. Ideal for large-scale commercial facilities and premium multi-story residences requiring modular scalability.',
      param: 'vrf'
    },
    {
      id: 'ductable',
      title: 'Ductable AC Services',
      icon: 'air',
      description: 'Concealed ductable split systems provide uniform cooling across expansive layouts without compromising interior aesthetics. We specialize in precise duct routing, load calculation, and unobtrusive grille installations for retail and office environments.',
      param: 'ductable'
    },
    {
      id: 'splits',
      title: 'Hi-Wall Splits & Window AC',
      icon: 'splitscreen',
      description: 'Rapid deployment, high-performance individual room cooling. Our technicians ensure pristine wall-mounting, optimal placement for airflow dynamics, and rigorous leak-testing for long-lasting, whisper-quiet operation in any space.',
      param: 'split'
    },
    {
      id: 'package',
      title: 'Package AC Units',
      icon: 'ad_units',
      description: 'Robust, self-contained cooling powerhouses designed for demanding commercial applications like banquet halls, restaurants, and server rooms. We handle the heavy lifting, structural integration, and high-capacity electrical setups required.',
      param: 'package'
    }
  ];

  return (
    <div className="w-full">
      {/* Dynamic Schema Injection */}
      <SchemaMarkup data={localBusinessSchema} />
      <SchemaMarkup data={webSiteSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-12 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hvac_commercial.jpg"
            alt="Advanced commercial HVAC assembly indicating precision engineering"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          {/* Soft gradient overlay to blend image into background color */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-ice-wash border border-arctic-cyan/30 text-secondary font-label-sm text-label-sm px-4 py-2 rounded-full w-fit">
              <span className="material-symbols-outlined text-arctic-cyan" style={{ fontSize: '16px' }}>
                verified
              </span>
              AC Service Near You | 10+ Years Expertise
            </div>
            
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-deep-navy leading-tight">
              Reliable Thermal Comfort, <br className="hidden md:block" />
              <span className="text-arctic-cyan relative inline-block">
                Engineered for You.
                {/* Subtle underline accent */}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-surface-variant -z-10 rounded-full opacity-60"></span>
              </span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Professional AC service, repair, and installation delivering precise temperature control for residential and commercial spaces. Whether you need a skilled AC mechanic or complete VRF/ductable system maintenance, our "AC wala" technicians are ready for Mumbai's climate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#services"
                className="bg-deep-navy text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-arctic-cyan transition-all duration-300 shadow-cool flex items-center justify-center gap-2 group active:scale-95"
              >
                Explore Services
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="tel:+917408381814"
                className="bg-transparent border-2 border-deep-navy text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-ice-wash transition-colors duration-300 flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined">call</span>
                Emergency Repair Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer / Transition */}
      <div className="breathe-divider" aria-hidden="true"></div>

      {/* Services Grid Section (Incorporated directly onto home page) */}
      <section id="services" className="px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Professional AC Repair &amp; Service in Mumbai</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Expert AC mechanics providing comprehensive split, ductable, and VRF/VRV system installation, repair, and AMC solutions. Your trusted local "AC wala" for rapid cooling repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-xl p-8 cool-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full bg-surface-container-lowest relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ice-wash rounded-bl-full -mr-16 -mt-16 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>
              
              <div className="w-14 h-14 rounded-full bg-ice-wash flex items-center justify-center text-arctic-cyan mb-6 relative z-10">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
              </div>
              
              <h3 className="font-headline-md text-headline-md text-deep-navy mb-3 relative z-10">
                {item.title}
              </h3>
              
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow relative z-10">
                {item.description}
              </p>
              
              <a
                href="tel:+917408381814"
                className="inline-flex items-center justify-center w-full sm:w-fit px-6 py-3 rounded-full bg-surface text-deep-navy border border-outline-variant font-label-lg text-label-lg hover:bg-deep-navy hover:text-white transition-colors duration-300 relative z-10 group/btn"
              >
                <span className="material-symbols-outlined mr-2 group-hover/btn:rotate-12 transition-transform">
                  call
                </span>
                Inquire via Call
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Annual Maintenance Contract (AMC) Section */}
      <section className="bg-ice-wash py-20 relative overflow-hidden border-t border-surface-container-highest">
        {/* Decorative Background Element */}
        <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined" style={{ fontSize: '400px', fontVariationSettings: "'FILL' 1" }}>
            shield
          </span>
        </div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Affordable AC AMC Plans (Annual Maintenance Contracts)</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Keep your cooling systems running smoothly with our custom AC AMC plans in Mumbai. From regular split AC servicing to commercial ductable and VRF/VRV maintenance, our expert AC mechanics prevent breakdown emergencies and extend system lifespan.
              </p>
              <a
                href="tel:+917408381814"
                className="bg-deep-navy text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-full hover:bg-arctic-cyan transition-colors duration-300 shadow-md inline-block text-center active:scale-95"
              >
                Discuss AMC via Call
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-panel bg-white/60 rounded-xl p-8 border border-white cool-shadow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-6 border-b border-surface-container-highest pb-4">
                  AMC Benefits &amp; Inclusions
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Priority Emergency Response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Deep Chemical Coil Cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Refrigerant Level Diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Electrical Component Audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Filter Replacement &amp; Sanitization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-arctic-cyan mr-3 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Zero Labor Charges on Repairs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Matrix (Mumbai Regional SEO) */}
      <section className="bg-white py-20 border-t border-surface-container-highest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto flex flex-col gap-3">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">
              AC Service &amp; AC Repair Near You in Mumbai
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hind Cool Service provides priority dispatch to residential properties, offices, and commercial establishments in all sectors of Mumbai. Finding reliable AC repair and maintenance nearby has never been easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-3 bg-surface">
              <h3 className="font-bold text-deep-navy text-md border-b border-outline-variant pb-2">Western Suburbs</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Andheri East/West, Bandra, Borivali, Goregaon, Juhu, Kandivali, Malad, Santacruz, Vile Parle, Khar, Dahisar.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-3 bg-surface">
              <h3 className="font-bold text-deep-navy text-md border-b border-outline-variant pb-2">Eastern Suburbs</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Powai, Ghatkopar, Bhandup, Kurla, Mulund, Vikhroli, Chembur, Kanjurmarg.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl flex flex-col gap-3 bg-surface">
              <h3 className="font-bold text-deep-navy text-md border-b border-outline-variant pb-2">South Mumbai</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Dadar, Worli, Prabhadevi, Colaba, Nariman Point, Parel, Byculla, Mumbai Central, Mahalaxmi, Churchgate.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl flex flex-col gap-3 bg-surface">
              <h3 className="font-bold text-deep-navy text-md border-b border-outline-variant pb-2">Thane &amp; Navi Mumbai</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Thane West, Vashi, Nerul, Belapur, Koparkhairane, Airoli, Ghansoli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Bento Style Section */}
      <section className="bg-ice-wash/50 py-20 border-t border-b border-surface-container-highest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-2">Trusted by Mumbai</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                From high-rise apartments in Bandra to commercial offices in Andheri, we deliver consistent, premium cooling experiences.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-surface-container-highest">
              <span className="material-symbols-outlined text-warning-amber" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-label-lg text-label-lg text-deep-navy">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            {/* Large Testimonial */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl p-8 cool-shadow flex flex-col justify-between border border-surface-container-highest">
              <span className="material-symbols-outlined text-surface-dim mb-6" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="font-body-lg text-body-lg text-on-surface mb-8 italic leading-relaxed">
                "The team from Hind Cool Service completely overhauled our office HVAC system. The precision in their installation and the immediate difference in air quality and temperature regulation was astounding. Truly professional and reliable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-surface-dim">
                  <Image
                    src="/tech_rajesh.jpg"
                    alt="Mohammad Shameem, Operations Director at TechNova BKC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-deep-navy">Mohammad Shameem</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Operations Director, TechNova BKC</p>
                </div>
              </div>
            </div>

            {/* Small Testimonial 1 */}
            <div className="md:col-span-2 md:row-span-1 bg-deep-navy text-white rounded-xl p-6 shadow-cool relative overflow-hidden flex flex-col justify-between">
              {/* Decorative background element */}
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 pointer-events-none" style={{ fontSize: '120px' }}>
                ac_unit
              </span>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-warning-amber" style={{ fontVariationSettings: "'FILL' 1', fontSize: '18px" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-white mb-4 opacity-90 relative z-10 leading-relaxed">
                "Fast emergency response when our AC broke down in the middle of May. The technician was knowledgeable, polite, and resolved the issue rapidly."
              </p>
              <h4 className="font-label-sm text-label-sm text-primary-fixed-dim relative z-10">- Priya M., Residential Client (Bandra)</h4>
            </div>

            {/* Small Stats Box 1 */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-6 shadow-sm flex flex-col justify-center items-center text-center border border-surface-container-highest/50">
              <span className="font-display-lg text-display-lg text-arctic-cyan mb-2">5k+</span>
              <span className="font-label-sm text-label-sm text-deep-navy">Installations Completed</span>
            </div>

            {/* Small Stats Box 2 */}
            <div className="md:col-span-1 md:row-span-1 glassmorphism rounded-xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-deep-navy mb-2" style={{ fontSize: '40px' }}>
                workspace_premium
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Certified Technicians</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section for Search Intent & Rich Snippets */}
      <section className="bg-white py-20 border-t border-surface-container-highest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-arctic-cyan uppercase tracking-wider block">
              Got Questions?
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">
              Frequently Asked AC Service Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Quick answers about AC repair, servicing, gas refilling, and maintenance contracts in Mumbai.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-xl bg-surface border border-outline-variant/30">
              <h3 className="font-bold text-deep-navy text-lg mb-2">
                How quickly can an AC mechanic from Hind Cool Service reach my location in Mumbai?
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We provide priority emergency dispatch under 2 hours for breakdown and repair calls across Andheri, Bandra, Juhu, Saki Naka, and major Mumbai suburbs.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl bg-surface border border-outline-variant/30">
              <h3 className="font-bold text-deep-navy text-lg mb-2">
                What types of AC servicing and gas refilling do you offer in Mumbai?
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We offer deep jet-wash foam servicing, nitrogen leak testing, copper pipe brazing, and eco-friendly R32, R410A, and R22 refrigerant gas refilling for split, window, ductable, and VRF/VRV air conditioners.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl bg-surface border border-outline-variant/30">
              <h3 className="font-bold text-deep-navy text-lg mb-2">
                What is included in an AC Annual Maintenance Contract (AMC)?
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our custom AC AMC plans include 3-4 routine deep jet services per year, 24/7 priority emergency breakdown support, free service visits, and zero labor charges on repair parts.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl bg-surface border border-outline-variant/30">
              <h3 className="font-bold text-deep-navy text-lg mb-2">
                Why is my AC leaking water or not cooling properly?
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                AC water leakage is typically caused by clogged drain lines or coil ice buildup due to low refrigerant gas. Our certified AC mechanics perform same-day drain flushing and gas leak repairs across Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

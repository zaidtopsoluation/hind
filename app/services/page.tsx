import type { Metadata } from 'next';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';
import { LinkGrid } from '@/components/seo/PageBlocks';
import { services as serviceGuides } from '@/lib/seo-content';

export const metadata: Metadata = {
  title: 'AC Repair, Service & VRF Installation in Mumbai',
  description: 'Discover Hind Cool Service’s professional HVAC systems and AC services in Mumbai. VRF/VRV installations, ductable splits, window AC, package units, and AMC plans.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
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
      param: 'splits'
    },
    {
      id: 'package',
      title: 'Package AC Units',
      icon: 'ad_units',
      description: 'Robust, self-contained cooling powerhouses designed for demanding commercial applications like banquet halls, restaurants, and server rooms. We handle the heavy lifting, structural integration, and high-capacity electrical setups required.',
      param: 'package'
    },
    {
      id: 'gas_filling',
      title: 'AC Gas Refilling & Leak Repair',
      icon: 'propane',
      description: 'Eco-friendly R32, R410A, and R22 refrigerant gas top-ups, nitrogen pressure testing, copper pipe brazing, and leak detection to restore instant cooling.',
      param: 'gas_filling'
    },
    {
      id: 'installation',
      title: 'AC Installation & Uninstallation',
      icon: 'handyman',
      description: 'Pristine split and window AC wall mounting, core drilling, outdoor bracket installation, and professional shifting/relocation services across Mumbai.',
      param: 'installation'
    },
    {
      id: 'jet_wash',
      title: 'Jet Pump Wash & Chemical Servicing',
      icon: 'water_drop',
      description: 'High-pressure foam jet wash, evaporator coil sanitization, drain line flushing, and anti-bacterial cleaning to restore air quality and eliminate foul odors.',
      param: 'jet_wash'
    },
    {
      id: 'pcb_repair',
      title: 'AC PCB & Compressor Troubleshooting',
      icon: 'build',
      description: 'Rapid diagnostic repair for inverter AC PCBs, capacitor replacements, fan motor repairs, and same-day emergency water leakage fixes by certified mechanics.',
      param: 'pcb_repair'
    }
  ];

  // Service schema markup for SEO
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': serviceItems.map((item) => ({
      '@type': 'Service',
      'name': item.title,
      'provider': {
        '@type': 'HVACBusiness',
        'name': 'Hind Cool Service'
      },
      'description': item.description,
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock'
      }
    }))
  };

  return (
    <div className="w-full">
      {/* Schema Injection */}
      <SchemaMarkup data={servicesSchema} />

      {/* Hero Section */}
      <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 lg:py-20">
        <div className="absolute inset-0 rounded-xl overflow-hidden hidden md:block mx-margin-desktop opacity-20">
          <div className="bg-cover bg-center w-full h-full relative">
            <Image
              src="/hvac_commercial.jpg"
              alt="Industrial HVAC illustration"
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ice-wash border border-arctic-cyan/30 text-deep-navy font-label-sm text-label-sm mb-6">
            <span className="material-symbols-outlined text-sm mr-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              ac_unit
            </span>
            Professional Cooling Expertise
          </div>
          
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-6">
            AC Repair, Servicing &amp; Installation in Mumbai
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
            Discover our comprehensive range of high-end HVAC solutions. Designed for optimal efficiency and seamless integration into premium residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <h2 className="sr-only">Our AC &amp; HVAC Services in Mumbai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
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

      <LinkGrid
        title="Choose your AC service"
        links={serviceGuides.map((s) => ({ href: `/services/${s.slug}`, label: `${s.name} in Mumbai`, icon: s.icon }))}
      />

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
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Comprehensive Care Plans</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Protect your investment with our Annual Maintenance Contracts (AMC). Scheduled servicing prevents unexpected breakdowns, maintains peak air quality, and significantly extends the lifespan of your cooling infrastructure.
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
    </div>
  );
}

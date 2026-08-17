import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Expert AC Services',
  description: 'Explore our full range of AC services in Mumbai. From Split & Window AC installations to gas charging, foam jet deep cleaning, and Annual Maintenance Contracts (AMC).',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  // Service Schema Markup for Hind Cool Service
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'AC Installation (Split & Window)',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Hind Cool Service'
        },
        'description': 'Professional installation of Split and Window air conditioning units in Mumbai, optimized for maximum cooling and efficiency.',
        'offers': {
          '@type': 'Offer',
          'price': '1499.00',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'Service',
        'name': 'Gas Charging & Leak Repair',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Hind Cool Service'
        },
        'description': 'Refrigerant gas top-up and detection of leaks in AC piping. Restore cooling efficiency using premium-grade eco-friendly gases.',
        'offers': {
          '@type': 'Offer',
          'price': '2100.00',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'Service',
        'name': 'Foam Jet Deep Cleaning',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Hind Cool Service'
        },
        'description': 'Advanced chemical foam pressure-jet wash for indoor and outdoor AC coils to remove dust, allergens, and bacteria.',
        'offers': {
          '@type': 'Offer',
          'price': '599.00',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'Service',
        'name': 'Emergency AC Repair',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Hind Cool Service'
        },
        'description': 'Fast turnaround breakdown repair service for compressor issues, PCB failures, or water leakage. 24/7 priority dispatch.',
        'offers': {
          '@type': 'Offer',
          'price': '299.00',
          'priceCurrency': 'INR',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '299.00',
            'priceCurrency': 'INR',
            'name': 'Inspection Fee'
          }
        }
      },
      {
        '@type': 'Service',
        'name': 'AC Annual Maintenance Contract (AMC)',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Hind Cool Service'
        },
        'description': 'Yearly contract plan providing 3 free deep services, priority assistance, and zero inspection charges on breakdowns.',
        'offers': {
          '@type': 'Offer',
          'price': '2499.00',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      }
    ]
  };

  return (
    <div className={`section-padding ${styles.container}`}>
      {/* Schema Injection */}
      <SchemaMarkup data={servicesSchema} />

      <div className="container">
        {/* Page Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Expert AC Services</h1>
            <p className={styles.subtitle}>
              Professional cooling solutions tailored for Mumbai's climate. From emergency repairs to comprehensive maintenance.
            </p>
          </div>
          <div className={styles.certifiedBadge}>
            <span className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </span>
            Certified Technicians
          </div>
        </header>

        {/* Services Grid */}
        <div className={styles.grid}>
          {/* Card 1: Split & Window Installation */}
          <article id="installation" className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="8" y1="16" x2="14" y2="16"></line>
                <circle cx="17" cy="16" r="1"></circle>
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Split & Window Installation</h2>
            <p className={styles.cardText}>
              Professional installation of split and window AC units ensuring optimal cooling performance, correct gas levels, vibration-free mounting, and energy-efficient operation.
            </p>
            <div className={styles.priceSection}>
              <div>
                <span className={styles.priceLabel}>Starts from</span>
                <div className={styles.priceAmount}>&#8377;1,499</div>
              </div>
              <Link href="/contact?service=installation" className="btn btn-primary">
                Book Service
              </Link>
            </div>
          </article>

          {/* Card 2: Gas Charging & Leak Repair */}
          <article id="repair" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperGas}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Gas Charging & Leak Repair</h2>
            <p className={styles.cardText}>
              Comprehensive refrigerant top-up and pressure leak detection. We use genuine eco-friendly cooling gases to restore your AC's performance and prevent future cooling drops.
            </p>
            <div className={styles.priceSection}>
              <div>
                <span className={styles.priceLabel}>Starts from</span>
                <div className={styles.priceAmount}>&#8377;2,100</div>
              </div>
              <Link href="/contact?service=gas-charging" className="btn btn-primary">
                Book Service
              </Link>
            </div>
          </article>

          {/* Card 3: Foam Jet Deep Cleaning */}
          <article id="cleaning" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperClean}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-9-7-9s-7 4.7-7 9a7 7 0 0 0 7 7z"></path>
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Foam Jet Deep Cleaning</h2>
            <p className={styles.cardText}>
              Advanced chemical foam-based pressure-jet wash for indoor coils, filters, and outdoor units. Removes deep-seated mold, bacteria, dirt, and improves indoor air quality.
            </p>
            <div className={styles.priceSection}>
              <div>
                <span className={styles.priceLabel}>Starts from</span>
                <div className={styles.priceAmount}>&#8377;599</div>
              </div>
              <Link href="/contact?service=deep-cleaning" className="btn btn-primary">
                Book Service
              </Link>
            </div>
          </article>

          {/* Card 4: Emergency AC Repair */}
          <article id="emergency" className={`${styles.card} ${styles.emergencyCard}`}>
            <span className={styles.fastResponseBadge}>Fast Response</span>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperEmergency}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Emergency AC Repair</h2>
            <p className={styles.cardText}>
              Priority breakdown assistance for sudden AC shutoffs, water leakage, strange noises, or compressor issues. Our expert technicians diagnose and resolve faults within hours.
            </p>
            <div className={styles.priceSection}>
              <div>
                <span className={styles.priceLabel}>Inspection fee</span>
                <div className={`${styles.priceAmount} ${styles.emergencyPrice}`}>&#8377;299</div>
              </div>
              <Link href="/contact?service=emergency" className="btn btn-accent" style={{ background: '#8b4f00' }}>
                Request Urgent Repair
              </Link>
            </div>
          </article>

          {/* Card 5: Annual Maintenance Contract (AMC) */}
          <article id="amc" className={`${styles.card} ${styles.amcCard}`}>
            <div className={styles.amcLeft}>
              <div className={`${styles.iconWrapper} ${styles.iconWrapperAmc}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h2 className={styles.amcTitle}>Annual Maintenance Contract</h2>
              <p className={styles.amcText}>
                Enjoy year-round hassle-free cooling. Includes 3 free preventive servicing visits, priority breakdown repair support, and exclusive pricing on replacement spare parts. Keep your cooling system running smoothly all year.
              </p>
              <ul className={styles.amcFeatures}>
                <li className={styles.amcFeatureItem}>
                  <span className={styles.checkIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  3 Free Deep Cleans
                </li>
                <li className={styles.amcFeatureItem}>
                  <span className={styles.checkIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Zero Inspection Fees
                </li>
              </ul>
            </div>
            
            <div className={styles.amcRight}>
              <div>
                <div className={styles.amcPriceLabel}>Starting from</div>
                <div className={styles.amcPriceAmount}>&#8377;2,499</div>
                <div className={styles.amcPeriod}>/ year</div>
              </div>
              <Link href="/contact?service=amc" className="btn btn-secondary ${styles.amcBtn}">
                View AMC Plans
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

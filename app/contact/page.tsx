import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import styles from './page.module.css';
import ContactForm from './ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hind Cool Service, Mumbai’s leading AC repair and servicing experts. Book an emergency repair or request a maintenance quote in Andheri West and surrounding areas.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Hind Cool Service Mumbai',
    'description': 'Contact page for Hind Cool Service, providing emergency AC repairs, installations, and maintenance servicing in Mumbai.',
    'url': 'https://hindcoolservice.com/contact',
    'mainEntity': {
      '@type': 'HVACBusiness',
      'name': 'Hind Cool Service',
      'telephone': '+919876543210',
      'email': 'service@hindcool.in',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Andheri West',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400053',
        'addressCountry': 'IN'
      }
    }
  };

  return (
    <div className={`section-padding ${styles.container}`}>
      {/* Schema Injection */}
      <SchemaMarkup data={contactPageSchema} />

      <div className="container">
        {/* Page Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              We're here to ensure your thermal comfort. Reach out for routine maintenance or emergency repairs.
            </p>
          </div>
          <a href="tel:+919876543210" className={styles.sosBtn}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 2 22 22 22 12 2"></polygon>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Emergency SOS
            </span>
          </a>
        </header>

        {/* Content Layout Grid */}
        <div className={styles.grid}>
          {/* Left: Message Form wrapper in Suspense */}
          <Suspense fallback={<div className={styles.formCard}>Loading request form...</div>}>
            <ContactForm />
          </Suspense>

          {/* Right: Contact Details Column */}
          <aside className={styles.detailsCol}>
            {/* Location Detail */}
            <section className={styles.detailCard} aria-labelledby="location-heading">
              <h2 id="location-heading" className={styles.detailCardTitle}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                Location
              </h2>
              <p className={styles.addressText}>
                Andheri West, Mumbai, Maharashtra 400053
              </p>
              <div className={styles.mapWrapper}>
                <Image
                  src="/map_mumbai.jpg"
                  alt="Map of Andheri West, Mumbai highlighting Hind Cool Service location"
                  fill
                  className={styles.mapImage}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </section>

            {/* Hours Detail */}
            <section className={styles.detailCard} aria-labelledby="hours-heading">
              <h2 id="hours-heading" className={styles.detailCardTitle}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                Hours of Operation
              </h2>
              <div className={styles.hoursList}>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Monday - Friday</span>
                  <span className={styles.hoursTime}>8:00 AM - 8:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Saturday</span>
                  <span className={styles.hoursTime}>9:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Sunday</span>
                  <span className={`${styles.hoursTime} ${styles.sundayAlert}`}>Emergency Only</span>
                </div>
              </div>
            </section>

            {/* Direct Contact Detail */}
            <section className={styles.detailCard} aria-labelledby="direct-contact-heading">
              <h2 id="direct-contact-heading" className={styles.detailCardTitle}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Direct Contact
              </h2>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span>Phone:</span>
                  <a href="tel:+919876543210" className={styles.contactLink}>
                    +91 98765 43210
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span>Email:</span>
                  <a href="mailto:service@hindcool.in" className={styles.contactLink}>
                    service@hindcool.in
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  // LocalBusiness Schema Markup for Hind Cool Service
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    'name': 'Hind Cool Service',
    'image': 'https://hindcoolservice.com/hero_ac.jpg',
    '@id': 'https://hindcoolservice.com/#organization',
    'url': 'https://hindcoolservice.com',
    'telephone': '+919876543210',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Andheri West',
      'addressLocality': 'Mumbai',
      'addressRegion': 'Maharashtra',
      'postalCode': '400053',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 19.1363,
      'longitude': 72.8276
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '00:00',
        'closes': '23:59',
        'description': 'Emergency Services Only'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '124'
    }
  };

  return (
    <div className={styles.page}>
      {/* Schema Injection */}
      <SchemaMarkup data={businessSchema} />

      {/* Hero Section */}
      <section className={styles.hero} aria-label="Introduction">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </span>
              Mumbai's Premier Cooling Experts
            </div>
            
            <h1 className={styles.title}>
              Reliable Thermal Comfort, Engineered for You.
            </h1>
            
            <p className={styles.description}>
              Precision AC repair, seamless installation, and comprehensive maintenance across Mumbai. Experience professional cooling solutions with unmatched dependability.
            </p>
            
            <div className={styles.heroActions}>
              <Link href="/contact?service=emergency" className="btn btn-accent" style={{ background: '#8b4f00' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  Book Emergency Repair
                </span>
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>

            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Certified Techs
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIconBlue}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                24/7 Availability
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIconOrange}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
                4.9/5 Rating
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <Image
              src="/hero_ac.jpg"
              alt="Advanced Air Conditioning and Cooling System Internal Assembly"
              fill
              className={styles.heroImage}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className={`section-padding ${styles.servicesSection}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="services-heading" className={styles.sectionTitle}>Comprehensive Cooling Solutions</h2>
            <p className={styles.sectionSubtitle}>
              From rapid repairs to systematic maintenance, we ensure your environment remains perfectly calibrated.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Diagnostic Repair */}
            <article className={styles.serviceCard}>
              <div className={`${styles.iconWrapper} ${styles.iconWrapperBlue}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Diagnostic Repair</h3>
              <p className={styles.cardDescription}>
                Rapid-response troubleshooting for all AC brands. We diagnose accurately and fix efficiently to restore your comfort immediately.
              </p>
              <Link href="/services#repair" className={styles.cardLink}>
                View Repair Options <span>&rarr;</span>
              </Link>
            </article>

            {/* Precision Installation */}
            <article className={styles.serviceCard}>
              <div className={`${styles.iconWrapper} ${styles.iconWrapperIndigo}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Precision Installation</h3>
              <p className={styles.cardDescription}>
                Flawless setup of Split, Window, and Central AC systems, optimized for maximum airflow and energy efficiency.
              </p>
              <Link href="/services#installation" className={styles.cardLink}>
                Explore Installations <span>&rarr;</span>
              </Link>
            </article>

            {/* Annual Maintenance */}
            <article className={styles.serviceCard}>
              <div className={`${styles.iconWrapper} ${styles.iconWrapperOrange}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Annual Maintenance</h3>
              <p className={styles.cardDescription}>
                Preventative care contracts (AMC) designed to extend equipment lifespan and maintain peak cooling performance year-round.
              </p>
              <Link href="/services#amc" className={styles.cardLink}>
                See AMC Plans <span>&rarr;</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section-padding ${styles.testimonialsSection}`} aria-labelledby="testimonials-heading">
        <div className="container">
          <div className={styles.testimonialsContainer}>
            
            <div className={styles.testimonialsLeft}>
              <h2 id="testimonials-heading" className={styles.testimonialsLeftTitle}>Trusted by Mumbai</h2>
              <p className={styles.testimonialsLeftText}>
                Don't just take our word for it. See why homes and businesses across the city rely on our thermal expertise.
              </p>
              <div className={styles.ratingContainer}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className={styles.ratingText}>4.9 Average Rating</div>
              </div>
            </div>

            <div className={styles.testimonialsList}>
              {/* Amit K */}
              <blockquote className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>AK</div>
                    <div className={styles.authorDetails}>
                      <cite className={styles.authorName}>Amit K.</cite>
                      <span className={styles.authorLocation}>Andheri West, Mumbai</span>
                    </div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  "Extremely professional service. The technician arrived on time, diagnosed the compressor issue quickly, and had our AC running perfectly within an hour. Highly recommend."
                </p>
              </blockquote>

              {/* Priya S */}
              <blockquote className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>PS</div>
                    <div className={styles.authorDetails}>
                      <cite className={styles.authorName}>Priya S.</cite>
                      <span className={styles.authorLocation}>Bandra, Mumbai</span>
                    </div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  "Signed up for their AMC plan last year. The periodic maintenance is thorough, and the staff is very polite. The cooling efficiency has noticeably improved."
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

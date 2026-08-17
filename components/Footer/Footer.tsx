import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M12 2L15 5M12 2L9 5M12 22L15 19M12 22L9 19M2 12H22M2 12L5 9M2 12L5 15M22 12L19 9M22 12L19 15M17 7L7 17M17 7L18 10M17 7L14 8M7 17L6 14M7 17L10 16M7 7L17 17M7 7L6 10M7 7L10 8M17 17L18 14M17 17L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Hind Cool Service
            </Link>
            <p className={styles.description}>
              Reliable Thermal Comfort. Your premier choice for AC repair, seamless installation, and comprehensive maintenance in Mumbai.
            </p>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/services" className={styles.link}>
                  AC Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Legal Info */}
          <div>
            <h3 className={styles.colTitle}>Information</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>Andheri West, Mumbai, Maharashtra 400053</span>
              </div>
              <div className={styles.legalLinks}>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Hind Cool Service Mumbai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

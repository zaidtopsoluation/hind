'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} aria-label="Hind Cool Service Home">
          <span className={styles.logoIcon} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M12 2L15 5M12 2L9 5M12 22L15 19M12 22L9 19M2 12H22M2 12L5 9M2 12L5 15M22 12L19 9M22 12L19 15M17 7L7 17M17 7L18 10M17 7L14 8M7 17L6 14M7 17L10 16M7 7L17 17M7 7L6 10M7 7L10 8M17 17L18 14M17 17L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Hind Cool Service
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Desktop Navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navLink} ${
                pathname === item.path ? styles.activeLink : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">
            Book Now
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav className={styles.mobileNav} aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navLink} ${
                  pathname === item.path ? styles.activeLink : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

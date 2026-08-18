'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_20px_rgba(0,180,216,0.1)]">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto w-full">
        {/* Brand */}
        <a href="/" className="font-display-lg text-display-lg tracking-tighter text-deep-navy active:scale-95 transition-transform flex items-center gap-2 text-2xl md:text-3xl">
          <span className="material-symbols-outlined text-arctic-cyan" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1.2em' }}>
            ac_unit
          </span>
          Hind Cool
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`font-label-lg text-label-lg transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'text-deep-navy border-b-2 border-arctic-cyan pb-1'
                    : 'text-on-surface-variant hover:text-arctic-cyan'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-deep-navy text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-arctic-cyan transition-colors duration-300 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-deep-navy active:scale-95 transition-transform"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-outline-variant/20 px-margin-mobile py-6 flex flex-col gap-4 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`font-label-lg text-label-lg py-2 transition-all duration-300 ${
                  isActive
                    ? 'text-deep-navy border-l-4 border-arctic-cyan pl-2'
                    : 'text-on-surface-variant hover:text-arctic-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/contact"
            className="w-full text-center bg-deep-navy text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-arctic-cyan transition-colors duration-300 mt-2 block"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}

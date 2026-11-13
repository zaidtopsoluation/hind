import Link from 'next/link';
import { services, allAreaLinks } from '@/lib/seo-content';

export default function Footer() {
  return (
    <footer className="bg-deep-navy w-full pt-16 pb-8 shadow-inner text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
        {/* Brand Column */}
        <div className="col-span-1 flex flex-col gap-4">
          <a href="/" className="font-headline-md text-on-primary flex items-center gap-2 text-2xl font-bold">
            <span className="material-symbols-outlined text-arctic-cyan" style={{ fontVariationSettings: "'FILL' 1" }}>
              ac_unit
            </span>
            Hind Cool
          </a>
          <p className="font-body-md text-surface-variant mt-2 text-sm opacity-80 pr-4">
            Elevating indoor comfort through precision engineering and dedicated professional service across Mumbai.
          </p>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <p className="font-label-lg text-label-lg text-arctic-cyan font-bold mb-6 tracking-wider uppercase">AC Services</p>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-body-md text-surface-variant hover:text-white transition-colors text-sm opacity-80">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-span-1">
          <p className="font-label-lg text-label-lg text-arctic-cyan font-bold mb-6 tracking-wider uppercase">Company</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="/about" className="font-body-md text-surface-variant hover:text-white transition-colors text-sm opacity-80">
                Saki Naka Office
              </a>
            </li>
            <li>
              <a href="/contact" className="font-body-md text-surface-variant hover:text-white transition-colors text-sm opacity-80">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="font-body-md text-surface-variant hover:text-white transition-colors text-sm opacity-80">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Service Areas Column */}
        <div className="col-span-1">
          <p className="font-label-lg text-label-lg text-arctic-cyan font-bold mb-6 tracking-wider uppercase">Areas We Serve</p>
          <ul className="flex flex-col gap-3">
            {allAreaLinks.map((a) => (
              <li key={a.slug}>
                <Link href={`/locations/${a.slug}`} className="font-body-md text-surface-variant hover:text-white transition-colors text-sm opacity-80">
                  AC Repair in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <p className="font-label-lg text-label-lg text-arctic-cyan font-bold mb-6 tracking-wider uppercase">Get in Touch</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-surface-variant">
              <span className="material-symbols-outlined text-sm">call</span>
              <a href="tel:+917408381814" className="font-body-md text-sm hover:text-white transition-colors">+91 74083 81814</a>
            </div>
            <div className="flex items-start gap-3 text-surface-variant">
              <span className="material-symbols-outlined text-sm mt-0.5">location_on</span>
              <span className="font-body-md text-sm leading-relaxed">
                Saki Naka, Andheri East,<br />
                Mumbai 400072
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Link Matrix for Mumbai Regional SEO */}
      <div className="border-t border-white/10 pt-8 mt-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-xs text-surface-variant/80">
        <p className="leading-relaxed">
          <strong className="text-arctic-cyan">Mumbai Service Network:</strong> We provide 24/7 HVAC servicing, repair, and installations across the entire Mumbai Metropolitan Region (MMR), including:{' '}
          <span className="text-white">Western Suburbs</span> (Andheri East/West, Bandra, Borivali, Goregaon, Juhu, Kandivali, Malad, Santacruz, Vile Parle, Khar, Dahisar),{' '}
          <span className="text-white">Eastern Suburbs</span> (Powai, Ghatkopar, Bhandup, Kurla, Mulund, Vikhroli, Chembur, Kanjurmarg),{' '}
          <span className="text-white">South Mumbai</span> (Dadar, Worli, Prabhadevi, Colaba, Nariman Point, Parel, Byculla, Mumbai Central, Mahalaxmi, Churchgate), and{' '}
          <span className="text-white">Thane &amp; Navi Mumbai</span> (Thane West, Vashi, Nerul, Belapur, Koparkhairane, Airoli, Ghansoli).
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-white/10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-body-md text-surface-variant text-sm opacity-60">
          &copy; {new Date().getFullYear()} Hind Cool Service. Professional Cooling Solutions.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-surface-variant hover:text-white transition-colors" aria-label="Language selection">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a href="#" className="text-surface-variant hover:text-white transition-colors" aria-label="Share location">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

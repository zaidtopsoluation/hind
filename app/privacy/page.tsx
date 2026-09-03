import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Hind Cool Service. Learn how we handle customer data, service inquiries, and privacy protections in Mumbai.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-on-surface">
        <header className="flex flex-col gap-4 border-b border-surface-container-highest pb-8">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Last updated: September 2026
          </p>
        </header>

        <section className="flex flex-col gap-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          <h2 className="text-xl font-bold text-deep-navy">1. Information We Collect</h2>
          <p>
            Hind Cool Service collects information you provide directly to us when requesting AC repair, maintenance, or AMC inquiries. This includes your name, phone number, email address, and service location in Mumbai.
          </p>
        </section>

        <section className="flex flex-col gap-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          <h2 className="text-xl font-bold text-deep-navy">2. How We Use Your Information</h2>
          <p>
            We use the information collected solely to provide, schedule, and execute air conditioning repair, installation, and maintenance services, as well as to respond to emergency service calls.
          </p>
        </section>

        <section className="flex flex-col gap-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          <h2 className="text-xl font-bold text-deep-navy">3. Data Security &amp; Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We implement reasonable security measures to protect customer service records and contact details.
          </p>
        </section>

        <section className="flex flex-col gap-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          <h2 className="text-xl font-bold text-deep-navy">4. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact our support desk at +91 74083 81814 or email service@hindcool.in.
          </p>
        </section>
      </div>
    </div>
  );
}

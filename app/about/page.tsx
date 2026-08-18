import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Hind Cool Service, Mumbai’s leading cooling specialists. Over 10 years of experience providing reliable, expert AC repair, maintenance, and installation services.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Mohammad Shameem',
      role: 'Founder & Managing Director',
      exp: '15+ Yrs Exp',
      image: '/founder_shameem.jpg',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Lead Technician',
      exp: '12 Yrs Exp',
      image: '/tech_rajesh.jpg',
    },
    {
      name: 'Priya Sharma',
      role: 'Service Manager',
      exp: '8 Yrs Exp',
      image: '/tech_priya.jpg',
    },
    {
      name: 'Amit Patel',
      role: 'Installation Specialist',
      exp: '5 Yrs Exp',
      image: '/tech_amit.jpg',
    },
    {
      name: 'Sanjay Desai',
      role: 'Diagnostic Engineer',
      exp: '15 Yrs Exp',
      image: '/tech_sanjay.jpg',
    },
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-20">
      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" aria-label="Our Story">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-bold text-arctic-cyan uppercase tracking-wider block">
            Our Story
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy font-extrabold tracking-tight leading-tight">
            Reliable Thermal Comfort, <br />
            <span className="text-arctic-cyan">Engineered for Mumbai.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Starting as a small local team, Hind Cool Service has grown into Mumbai's premier cooling specialist. We believe in precision, transparency, and delivering dependable relief from the heat.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="glass-panel bg-white/70 rounded-xl p-5 cool-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-ice-wash text-deep-navy flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  schedule
                </span>
              </div>
              <div>
                <div className="text-lg font-bold text-deep-navy">10+ Years</div>
                <div className="text-xs font-semibold text-on-surface-variant">Experience</div>
              </div>
            </div>

            <div className="glass-panel bg-white/70 rounded-xl p-5 cool-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-ice-wash text-deep-navy flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  verified_user
                </span>
              </div>
              <div>
                <div className="text-lg font-bold text-deep-navy">Verified</div>
                <div className="text-xs font-semibold text-on-surface-variant">Professionals</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden relative cool-shadow border border-surface-container-highest">
          <Image
            src="/about_team.jpg"
            alt="Hind Cool Service technicians team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-ice-wash/50 rounded-2xl p-8 md:p-12 border border-surface-container-highest text-center" aria-labelledby="mission-heading">
        <div className="max-w-2xl mx-auto mb-12 flex flex-col gap-3">
          <h2 id="mission-heading" className="font-headline-lg text-headline-lg text-deep-navy font-bold">
            Our Mission
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            To provide engineered cooling solutions that ensure uninterrupted comfort and reliability for homes and businesses across Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1: Technical Precision */}
          <div className="glass-panel bg-white rounded-xl p-8 cool-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-ice-wash text-deep-navy flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                build
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-deep-navy font-bold">
              Technical Precision
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We approach every repair and installation with engineering rigor, ensuring optimal performance and efficiency.
            </p>
          </div>

          {/* Card 2: Dependable Trust */}
          <div className="glass-panel bg-white rounded-xl p-8 cool-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-ice-wash text-deep-navy flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-deep-navy font-bold">
              Dependable Trust
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Transparency in pricing and honest assessments form the core of our customer relationships.
            </p>
          </div>

          {/* Card 3: Efficient Service */}
          <div className="glass-panel bg-white rounded-xl p-8 cool-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-ice-wash text-deep-navy flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                speed
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-deep-navy font-bold">
              Efficient Service
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We understand the urgency of cooling in Mumbai. Our teams are optimized for rapid, effective response.
            </p>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="flex flex-col gap-12" aria-labelledby="experts-heading">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <h2 id="experts-heading" className="font-headline-lg text-headline-lg text-deep-navy font-bold">
              Meet Our Experts
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Highly trained, verified professionals dedicated to your comfort.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-deep-navy text-deep-navy font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-ice-wash transition-colors duration-300 active:scale-95 flex-shrink-0 font-semibold"
          >
            Join Our Team
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <article key={idx} className="glass-panel bg-white rounded-xl overflow-hidden cool-shadow flex flex-col items-center text-center pb-6 border border-surface-container-highest hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-full aspect-square mb-4 bg-surface-dim">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Hind Cool Service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-deep-navy mb-1 px-4">
                {member.name}
              </h3>
              <p className="font-label-sm text-xs font-semibold text-on-surface-variant mb-4 px-4">
                {member.role}
              </p>
              <span className="bg-ice-wash text-deep-navy text-xs font-bold px-3 py-1.5 rounded-full border border-arctic-cyan/20">
                {member.exp}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Hind Cool Service, Mumbai’s premier cooling specialists. Over 10 years of experience providing reliable, expert AC repair, maintenance, and installation services.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const teamMembers = [
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
    <div className={`section-padding ${styles.container}`}>
      <div className="container">
        {/* Story Section */}
        <section className={styles.heroGrid} aria-label="Our Story">
          <div className={styles.heroContent}>
            <span className={styles.storyLabel}>Our Story</span>
            <h1 className={styles.title}>Reliable Thermal Comfort, Engineered for Mumbai.</h1>
            <p className={styles.text}>
              Starting as a small local team, Hind Cool Service has grown into Mumbai's premier cooling specialist. We believe in precision, transparency, and delivering dependable relief from the heat.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <div className={styles.statNumber}>10+ Years</div>
                  <div className={styles.statLabel}>Experience</div>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className={styles.statNumber}>Verified</div>
                  <div className={styles.statLabel}>Professionals</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroImageContainer}>
            <Image
              src="/about_team.jpg"
              alt="Hind Cool Service Technician Team standing in front of a white service van in Mumbai"
              fill
              className={styles.heroImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className={styles.missionSection} aria-labelledby="mission-heading">
          <div className={styles.missionHeader}>
            <h2 id="mission-heading" className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionSubtitle}>
              To provide engineered cooling solutions that ensure uninterrupted comfort and reliability for homes and businesses across Mumbai.
            </p>
          </div>

          <div className={styles.missionGrid}>
            {/* Card 1: Technical Precision */}
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className={styles.missionCardTitle}>Technical Precision</h3>
              <p className={styles.missionCardText}>
                We approach every repair and installation with engineering rigor, ensuring optimal performance and efficiency.
              </p>
            </div>

            {/* Card 2: Dependable Trust */}
            <div className={`${styles.missionCard}`}>
              <div className={`${styles.missionIcon} ${styles.missionIconTrust}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.missionCardTitle}>Dependable Trust</h3>
              <p className={styles.missionCardText}>
                Transparency in pricing and honest assessments form the core of our customer relationships.
              </p>
            </div>

            {/* Card 3: Efficient Service */}
            <div className={styles.missionCard}>
              <div className={`${styles.missionIcon} ${styles.missionIconService}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className={styles.missionCardTitle}>Efficient Service</h3>
              <p className={styles.missionCardText}>
                We understand the urgency of cooling in Mumbai. Our teams are optimized for rapid, effective response.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section aria-labelledby="team-heading">
          <div className={styles.expertsHeader}>
            <div className={styles.expertsHeaderLeft}>
              <h2 id="team-heading" className={styles.expertsTitle}>Meet Our Experts</h2>
              <p className={styles.expertsSubtitle}>
                Highly trained, verified professionals dedicated to your comfort.
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline">
              Join Our Team
            </Link>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <article key={idx} className={styles.teamCard}>
                <div className={styles.avatarContainer}>
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Hind Cool Service`}
                    fill
                    className={styles.avatarImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <span className={styles.expBadge}>{member.exp}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

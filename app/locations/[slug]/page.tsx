import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  Hero,
  CheckList,
  PricingNote,
  FaqList,
  LinkGrid,
  CallBanner,
  breadcrumbSchema,
} from '@/components/seo/PageBlocks';
import { areas, getArea, getService, services, allAreaLinks } from '@/lib/seo-content';

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/locations/${a.slug}` },
    openGraph: {
      title: `${a.metaTitle} | Hind Cool Service`,
      description: a.metaDescription,
      url: `https://hindcool.com/locations/${a.slug}`,
      type: 'website',
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) notFound();

  const url = `https://hindcool.com/locations/${a.slug}`;
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': 'https://hindcool.com/#organization',
    name: 'Hind Cool Service',
    url,
    image: 'https://hindcool.com/hvac_commercial.jpg',
    telephone: '+917408381814',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saki Naka, Andheri East',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400072',
      addressCountry: 'IN',
    },
    areaServed: [a.name, ...a.neighbourhoods].map((n) => ({ '@type': 'Place', name: n })),
  };
  const crumbs = [
    { name: 'Home', url: 'https://hindcool.com/' },
    { name: 'Areas', url: 'https://hindcool.com/#areas' },
    { name: a.name, url },
  ];
  const popular = a.popular.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherAreas = allAreaLinks.filter((x) => x.slug !== a.slug);

  return (
    <div className="w-full">
      <SchemaMarkup data={localSchema} />
      <SchemaMarkup data={breadcrumbSchema(crumbs)} />

      <Hero
        badge={a.badge}
        h1={a.h1}
        lead={a.intro[0]}
        crumbs={[{ name: 'Home', href: '/' }, { name: a.name }]}
      />

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">{a.localTitle}</h2>
          {a.local.map((p) => (
            <p key={p.slice(0, 32)} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-5">
          <h2 className="font-headline-md text-headline-md text-deep-navy font-bold">Areas we cover near {a.name}</h2>
          <CheckList items={a.neighbourhoods} />
        </div>
      </section>

      <section className="bg-ice-wash/50 border-y border-surface-container-highest py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold mb-6">
            Popular AC services in {a.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popular.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl bg-white border border-surface-container-highest p-6 cool-shadow hover:border-secondary transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-deep-navy font-bold">
                    {s.name} in {a.name}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{s.metaDescription.split('. ')[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16" />
      <PricingNote />
      <FaqList title={`AC service in ${a.name}: common questions`} faqs={a.faqs} />
      <LinkGrid
        title="All our AC services"
        links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name, icon: s.icon }))}
      />
      <LinkGrid
        title="Other areas we serve"
        links={otherAreas.map((x) => ({ href: `/locations/${x.slug}`, label: `AC repair in ${x.name}` }))}
      />
      <CallBanner text={`AC problem in ${a.name}? Call Hind Cool Service to book a technician.`} />
    </div>
  );
}

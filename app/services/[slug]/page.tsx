import type { Metadata } from 'next';
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
import { services, getService, allAreaLinks } from '@/lib/seo-content';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} | Hind Cool Service`,
      description: s.metaDescription,
      url: `https://hindcool.com/services/${s.slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `https://hindcool.com/services/${s.slug}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.h1,
    serviceType: s.name,
    description: s.metaDescription,
    url,
    provider: { '@type': 'HVACBusiness', '@id': 'https://hindcool.com/#organization', name: 'Hind Cool Service' },
    areaServed: ['Mumbai', 'Thane', 'Navi Mumbai'].map((n) => ({ '@type': 'City', name: n })),
  };
  const crumbs = [
    { name: 'Home', url: 'https://hindcool.com/' },
    { name: 'Services', url: 'https://hindcool.com/services' },
    { name: s.name, url },
  ];
  const related = s.related.map(getService).filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <div className="w-full">
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={breadcrumbSchema(crumbs)} />

      <Hero
        badge="Mumbai, Thane & Navi Mumbai"
        h1={s.h1}
        lead={s.intro[0]}
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: s.name }]}
      />

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">{s.signsTitle}</h2>
          <CheckList items={s.signs} />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          {s.intro.slice(1).map((p) => (
            <p key={p.slice(0, 32)} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 mt-2" aria-label="AC types covered">
            {s.acTypes.map((t) => (
              <span key={t} className="rounded-full bg-ice-wash border border-arctic-cyan/30 px-3 py-1 text-sm text-deep-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-wash/50 border-y border-surface-container-highest py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">What&apos;s included</h2>
            <CheckList items={s.included} />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold">How it works</h2>
            <ol className="flex flex-col gap-4">
              {s.process.map((step, i) => (
                <li key={step.title} className="flex gap-4 items-start">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-deep-navy text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-deep-navy font-bold">{step.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="pt-16" />
      <PricingNote />
      <FaqList title={`${s.name}: common questions`} faqs={s.faqs} />
      <LinkGrid
        title="Related services"
        links={related.map((r) => ({ href: `/services/${r.slug}`, label: r.name, icon: r.icon }))}
      />
      <LinkGrid
        title={`${s.name} across Mumbai`}
        links={allAreaLinks.map((a) => ({ href: `/locations/${a.slug}`, label: `${s.name} in ${a.name}` }))}
      />
      <CallBanner text={`Need ${s.name.toLowerCase()} today? Call Hind Cool Service for a free quote.`} />
    </div>
  );
}
